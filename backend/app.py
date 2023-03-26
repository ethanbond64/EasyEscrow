from xrp import createEscrow
from flask import Flask, request, jsonify
import openai
import fitz
from dotenv import load_dotenv
import os

load_dotenv()

from flask_cors import CORS

### Keyed by the id of the xrp escrow, references the mappings from the pdf
MAPPINGS = {}

# print(search.execute())
app = Flask(__name__)
app.config["SERVER_NAME"] = "localhost:8000"
CORS(app, origins=["http://localhost:3000", "http://localhost:3000/*", "*"])

openai.api_key = os.getenv("OPENAI_API_KEY")


def getComponents(text):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are escrowGPT. Users give you the text from their escrow agreements"
                + "and you identify the names of the parties and the amount in escrow, based on the text."
                + "Your answers match this format: {'party1': '...', 'party2': '...', 'amount': '...'}",
            },
            {
                "role": "user",
                "content": text,
            },
        ],
    )
    print(response)
    return response["choices"][0]["message"]["content"]


def extract_text_from_pdf(pdf):
    # Open the PDF
    pdf_document = fitz.open("pdf", pdf.read())
    text = ""

    # Iterate through the pages and extract text
    for page_num in range(pdf_document.page_count):
        page = pdf_document.load_page(page_num)
        text += page.get_text("text")

    return text


@app.route("/", methods=["GET", "POST"])
def hello_world():
    print(request.files)
    file = request.files.get("files")
    print(file)
    extracted_text = extract_text_from_pdf(file)
    print(extracted_text)
    components = getComponents(extracted_text)
    print(components)
    return jsonify({"components": components})


@app.route("/escrow", methods=["POST"])
def escrow():

    # json format
    # { seed, sequence, xaddress, condition }
    data = request.get_json()
    seed = data.get("seed")
    sequence = data.get("sequence")
    rec_addr = data.get("rec_addr")
    condition = data.get("condition")

    return createEscrow(seed, sequence, rec_addr)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8000")
