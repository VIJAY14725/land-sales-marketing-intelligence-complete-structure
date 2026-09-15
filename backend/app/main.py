from fastapi import FastAPI
from app.api.v1.router import api_router

app = FastAPI(title="Land Sales & Marketing Intelligence API", version="1.0.0")
app.include_router(api_router, prefix="/api/v1")

@app.get("/")
def root():
    return {"name": "Land Sales & Marketing Intelligence", "status": "running"}

@app.get("/health")
def health():
    return {"status": "healthy"}
