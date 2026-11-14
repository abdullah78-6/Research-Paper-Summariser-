from fastapi import APIRouter ,File,UploadFile
from app.controllers.paper_controller import Summarize
paperrouter=APIRouter()
@paperrouter.post("/paper")
async def Set(file:UploadFile=File(...)):
  return await Summarize(file)
