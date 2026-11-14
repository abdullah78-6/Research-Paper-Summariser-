from fastapi import FastAPI
from app.routes import test_routes
from app.routes import paper_routes
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()
origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]
app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get("/")
def Main():
    return {"result":"Fast API server is started"}

app.include_router(
    test_routes.testrouter,
    prefix="/api/test",
    tags=["Test"]
)
app.include_router(
    paper_routes.paperrouter,
    prefix="/api/ai",
)
