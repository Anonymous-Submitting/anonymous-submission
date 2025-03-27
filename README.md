# Accessbile Educational Assitant 

Automated Learning Assistant for Neurodivergent Students: Applying Large Language Models for Accessible User Interface Development

## Accessible Interface Generator

A tool that generates accessible educational interfaces and answers specifically designed for neurodivergent people. The output includes tooltips, highlighted sections, and hyperlinks to make content more accessible. Python script may be found in [scripts](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/scripts) folder.

### Quick Start

1. Install dependencies:
   ```bash
   uv venv
   uv sync
   ```

2. Create a `.env` file with your model credentials:
   ```
   MODEL_NAME=your_huggingface_model_name
   TOKEN=your_huggingface_token
   ```

3. Run the script:
   ```bash
   uv run python scripts/generate_accessible_interface.py "Your query here"
   ```

### Example
```bash
uv run python scripts/generate_accessible_interface.py "Explain Transformers architecture simply."
```

The script will generate structured content with accessibility features that help neurodivergent users process information more effectively.

## Repository Structure 

- [Examples](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples): 15 examples of generated pages
    - [Example 1](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_1): small paragraph with "Learn More" hyperlink to Wikipedia;
    - [Example 2](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_2): an educational paragraph with tooltips;
    - [Example 3](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_3): another design of highlights and tooltips;
    - [Example 4](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_4): standard features with formulas, bulleted list, hyperlinks to Wikipedia;
    - [Example 5](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_5): standard features with another predefined font (Comic Sans MS);
    - [Example 6](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_6): standard features with more colorful and reader-friendly page design, drop-down clickable text, external link to Britannica;
    - [Example 7](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_7): a short tutorial on the main NLP concepts in 4 steps. Keyword highlights, bold text, bulleted lists and hyperlinks are available;
    - [Example 8](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_8): tooltips, font and its size (small/medium/large) choice, dark page mode;
    - [Example 9](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_9): all features from the previous example, text-to-speech is added;
    - [Example 10](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_10): standard features with tts, hyperlinks to Wiki and empty hyperlinks for specific terms;
    - [Example 11](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_11): interactive glossary with drop-downs and magnifying glass emoji;
    - [Example 12](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_12): keyword search: user is supposed to enter the word for search and it will be highlighted in the text. Reset option is available;
    - [Example 13](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_13): glossary in accordion format;
    - [Example 14](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_14): image with alternative description;
    - [Example 15](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/examples/example_15): high-contrast page mode.
- [Templates](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/templates): JSON templates for accessible features
- [Scripts](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/scripts): this folder contains Python script for GUI generation
- [Data](https://github.com/Anonymous-Submitting/anonymous-submission/tree/main/data): dataset and vectorised database for our project