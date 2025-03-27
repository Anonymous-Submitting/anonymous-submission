import json
import logging
import typing as t
import os

import typer
from dotenv import load_dotenv
from huggingface_hub import InferenceClient
from rich.console import Console
from rich.syntax import Syntax

app = typer.Typer()
console = Console()

load_dotenv()

MODEL_NAME = os.environ.get("MODEL_NAME")
TOKEN = os.environ.get("HF_API_TOKEN")
CLIENT = InferenceClient(model=MODEL_NAME, token=TOKEN)

SYSTEM_PROMPT = (
    "Generate an answer on user message using provided criteria, including tooltips, highlighted experimental setups, and hyperlinks to key topic concepts. "
    "Requirements:\n"
    "1. The `title` field should contain a short, descriptive title for the topic.\n"
    "2. The `text` field should contain an educational paragraph about the topic, with:\n"
    "   - <tooltip> tags for key terms that show explanations on hover.\n"
    "   - <highlight> tags for concepts that expand on click.\n"
    "   - <hyperlink> tags for references to external resources.\n"
    "3. The `tooltips` field should contain definitions for key terms.\n"
    "4. The `highlights` field should provide explanations for concepts when clicked.\n"
    "5. The `hyperlinks` field should include external URLs for further reading.\n"
    "6. Return **only** the JSON object. **No markdown**, no code fences, no extra text.\n"
    "7. Ensure the output is **valid JSON** with correct brackets, commas, and quotes.\n\n"
)


def run_llm_inference(query: str) -> t.Union[t.Mapping[str, str], None]:
    response = CLIENT.chat.completions.create(
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": query},
        ],
        response_format={
            "type": "json",
            "value": {
                "properties": {
                    "title": {"type": "string"},
                    "text": {"type": "string"},
                    "tooltips": {"type": "string"},
                    "highlights": {"type": "string"},
                    "hyperlinks": {"type": "string"},
                }
            }
        },
        stream=False,
        max_tokens=2000,
        temperature=0.5,
        top_p=0.1,
    )

    output = response.choices[0].message.content
    try:
        structured_output = json.loads(output)
        return structured_output
    except json.JSONDecodeError:
        logging.error(f"Error parsing JSON: '{output}' with user query: '{query}'")
        return None



@app.command()
def generate_acessible_interface(query: str = typer.Argument(..., help="The query to send to the LLM.")) -> None:
    result = run_llm_inference(query)
    if result:
        parsed_output = json.dumps(result, indent=2)
        syntax = Syntax(parsed_output, "json", theme="monokai", line_numbers=True)
        console.print(syntax)
    else:
        console.print("[red]Failed to get a valid response from the LLM.[/red]")


if __name__ == "__main__":
    app()
