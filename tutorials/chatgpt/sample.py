import os
import openai
from dotenv import load_dotenv

load_dotenv()

# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {
            "role": "user",
            "content": "If I sent you the text from an escrow agreement could you identify the names of the parties and the amount in escrow, based on the text?",
        },
    ],
)

print(response)
