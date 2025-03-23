# imports
import json
import logging
from huggingface_hub import InferenceClient

# hf_client
MODEL_NAME = "MODEL_NAME"
TOKEN = "TOKEN"

client = InferenceClient(MODEL_NAME, token=TOKEN)

# system_prompt
core_system = (
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

# inference function
def llm_inference(user_msg: str):
    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": core_system},
            {"role": "user", "content": user_msg},
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

    try:
        json_output = json.loads(response.choices[0].message.content)
        return json_output
    except json.JSONDecodeError:
        logging.error("Error parsing JSON: " + response.choices[0].message.content)
        return None

# testing
user_msg = """
user query
"""

response = llm_inference(user_msg)
if response:
    print(json.dumps(response, indent=2))