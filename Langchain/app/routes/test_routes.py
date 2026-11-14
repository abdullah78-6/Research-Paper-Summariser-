from fastapi import APIRouter
from app.controllers.test_controller import Displayname
from app.schemas.test_schema import Name
testrouter=APIRouter()
@testrouter.post("/add")
def Add(user2:Name):
    return Displayname(user2)