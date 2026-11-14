# 📚 AI Research Paper Analyzer

An AI-powered Research Paper Analyzer built using **LangChain, FastAPI, and React.js** to simplify the process of understanding and analyzing academic research papers.

The application helps users interact with research papers, extract important information, understand complex concepts, and get meaningful insights through an AI-powered interface.

## 🚀 Features

- **AI-Powered Analysis:** Analyze research papers using Large Language Models (LLMs).
- **Paper Summarization:** Generate concise summaries of lengthy research papers.
- **Interactive Question Answering:** Ask questions about uploaded research papers and get context-aware answers.
- **Context-Aware Responses:** Uses LangChain to process and manage document context.
- **FastAPI Backend:** Provides efficient API endpoints for communication between the frontend and AI processing layer.
- **React.js Frontend:** Offers a responsive and user-friendly interface for interacting with research papers.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Python | Backend development |
| LangChain | LLM orchestration and document processing |
| FastAPI | Backend API development |
| React.js | Frontend development |
| Large Language Models (LLMs) | Research paper analysis and responses |

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Backend Setup

Navigate to your backend directory:

```bash
cd Langchain
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment:

**Windows:**
```bash
venv\Scripts\activate
```

**Linux / macOS:**
```bash
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Configure your environment variables in a `.env` file as required by your LLM provider.

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend API will be available at:

```text
http://127.0.0.1:8000
```

FastAPI Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend Setup

Navigate to your React frontend directory:

```bash
cd client
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

## 🔄 Application Workflow

1. The user uploads or provides a research paper.
2. The backend processes the document and extracts its content.
3. LangChain manages document processing and interaction with the LLM.
4. The LLM analyzes the research paper and generates relevant responses.
5. FastAPI exposes the analysis functionality through API endpoints.
6. React.js displays the results through an interactive user interface.

## 🎯 Project Objective

The primary goal of this project is to make academic research more accessible and efficient by using Generative AI. Instead of manually reading lengthy research papers to find relevant information, users can leverage AI to understand research content, identify important insights, and get answers to their questions.

## 🔮 Future Improvements

- Support for multiple research paper uploads.
- Comparison of multiple research papers.
- Extraction of research gaps and key findings.
- Generation of structured research reports.
- Chat history and saved conversations.
- Improved document retrieval and semantic search.

## 👨‍💻 Author

**Your Name**

Abdullah Qidwai

## ⭐ Support

If you find this project useful, consider giving it a star ⭐ on GitHub!

---

*Built with Python, LangChain, FastAPI, React.js, and Generative AI.*
