from fastapi import APIRouter

router = APIRouter()

@router.get('')
def hello_world() -> dict:
    data = {
        "name": "Yurii",
        "second_name": "Grygorash",
        "age": 19,
        "alive": "almost dead",
        "shizofrenia": "Maybe have shizofrenia",
        "hobby": ["Be late", "Strategy games", "swimming"]
    }
    
    return data
