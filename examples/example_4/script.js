// Correctly embedded JSON as a JavaScript object
const data = {
    "title": "Natural Language Processing (NLP) and Tokenization",
    "content": [
      {
        "text": "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language.",
        "keywords": [
          {
            "term": "Natural Language Processing",
            "hint": "A subfield of AI that enables machines to understand and process human language."
          },
          {
            "term": "artificial intelligence",
            "hint": "The simulation of human intelligence in machines."
          }
        ],
        "summary": "NLP is a field of AI focused on human-computer interaction through language."
      },
      {
        "text": "Tokenization is a fundamental step in NLP where text is split into smaller units called tokens, such as words or sentences.",
        "keywords": [
          {
            "term": "Tokenization",
            "hint": "The process of breaking down text into smaller units like words, phrases, or symbols."
          },
          {
            "term": "tokens",
            "hint": "Individual units of text, such as words or sentences, produced by tokenization."
          }
        ],
        "summary": "Tokenization breaks text into smaller units like words or sentences."
      },
      {
        "text": "Another important concept in NLP is stemming, which reduces words to their root form. For example, the words 'running', 'runs', and 'ran' can all be stemmed to the root word 'run'. This helps in simplifying text analysis.",
        "keywords": [
          {
            "term": "stemming",
            "hint": "The process of reducing words to their base or root form."
          },
          {
            "term": "text analysis",
            "hint": "The process of extracting meaningful information from text."
          }
        ],
        "summary": "Stemming reduces words to their root form to simplify text analysis."
      }
    ],
    "settings": {
      "fontOptions": ["Arial", "Times New Roman", "Courier New", "Verdana"],
      "defaultFont": "Arial",
      "textSizeOptions": ["Small", "Medium", "Large"],
      "defaultTextSize": "Medium",
      "themeOptions": ["Light", "Dark"],
      "defaultTheme": "Light",
      "focusMode": true,
      "textToSpeech": true,
      "progressIndicator": true,
      "breakReminders": true,
      "breakInterval": 300000 // 5 minutes in milliseconds
    }
  };
  
  // Verify the JSON is correctly parsed
  console.log(data);
  
  // Font selection
  const fontSelect = document.getElementById('font-select');
  fontSelect.addEventListener('change', (e) => {
    document.body.style.fontFamily = e.target.value;
  });
  
  // Text size selection
  const textSizeSelect = document.getElementById('text-size-select');
  textSizeSelect.addEventListener('change', (e) => {
    document.body.className = e.target.value;
  });
  
  // Dark/Light mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Focus mode toggle
  const focusModeToggle = document.getElementById('focus-mode-toggle');
  const content = document.getElementById('content');
  focusModeToggle.addEventListener('click', () => {
    content.classList.toggle('focus-mode');
  });
  
  // Text-to-Speech
  const textToSpeechButton = document.getElementById('text-to-speech');
  textToSpeechButton.addEventListener('click', () => {
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  });
  
  // Progress indicator
  const progressBar = document.querySelector('.progress-bar .progress');
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
  });
  
  // Break reminder
  const breakReminder = document.getElementById('break-reminder');
  let breakTimer;
  function startBreakTimer() {
    breakTimer = setTimeout(() => {
      breakReminder.style.display = 'block';
    }, data.settings.breakInterval); // Use breakInterval from JSON
  }
  startBreakTimer();
  
  // Reset break reminder on user interaction
  document.addEventListener('click', () => {
    clearTimeout(breakTimer);
    breakReminder.style.display = 'none';
    startBreakTimer();
  });