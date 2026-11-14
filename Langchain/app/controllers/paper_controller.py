from pathlib import Path
from fastapi import File, UploadFile, HTTPException
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.document_loaders import PyPDFLoader
import os
upload_dir = Path("uploads")
upload_dir.mkdir(exist_ok=True)
async def Summarize(file: UploadFile = File(...)):
    
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed"
        )

    filepath = upload_dir / file.filename

    content = await file.read()

    with filepath.open("wb") as buffer:
        buffer.write(content)
    # AI PART
    parser=StrOutputParser()
    model=ChatGoogleGenerativeAI(model="gemini-3.5-flash")
    loader=PyPDFLoader(filepath)
    fs=loader.load()
    prompt=PromptTemplate(
    template="""
Act as an expert academic researcher and research paper analyst.

Carefully analyze the complete research paper provided below.
Understand its research objective, methodology, key findings,
and conclusions before generating the summary.

TASK:
Generate a concise, academically written summary of the
research paper in exactly 4–5 meaningful sentences.

INSTRUCTIONS:

1. Research Objective:
   Identify the main research problem, research question,
   and primary objective of the paper.

2. Methodology:
   Briefly explain the methodology, models, algorithms,
   techniques, experiments, or datasets used by the authors.
   Include only details explicitly mentioned in the paper.

3. Key Findings:
   Highlight the most significant findings, experimental
   results, contributions, or proposed ideas.
   Include important numerical results, statistics,
   or performance metrics wherever available.

4. Conclusion:
   Explain the authors' main conclusion and the significance
   of their research or proposed approach.

5. Academic Writing:
   Use simple, clear, formal, and grammatically correct
   academic language. Maintain logical flow between sentences.

STRICT RULES:

- Write exactly 4–5 sentences, not paragraphs with headings.
- Keep the summary concise while preserving important information.
- Do not use bullet points, numbered lists, or headings.
- Do not repeat the same information in different sentences.
- Do not add external knowledge, opinions, or assumptions.
- Do not fabricate datasets, methodologies, experiments,
  findings, statistics, or numerical results.
- Clearly distinguish proposed concepts from experimentally
  validated results.
- If a methodology, dataset, or experimental result is not
  mentioned, simply omit it.
- Preserve the original meaning and terminology of the paper.
- Focus on what the authors actually researched, achieved,
  and concluded rather than providing a general introduction
  to the research domain.

RESEARCH PAPER:
{ans}

OUTPUT:
Return only the final 4–5 sentence research paper summary.
Do not include any introductory text or additional explanation.

    """,
    input_variables=["ans"]
)
    chain=prompt|model|parser   
    result=chain.invoke({"ans":fs[0].page_content})
    print(result)
    os.remove(filepath)
    return {"status":True,"result":result}
    
        