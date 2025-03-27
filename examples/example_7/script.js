function showExplanation(step) {
  const explanationDiv = document.getElementById('explanation');
  
  switch (step) {
    case 'tokenization':
      explanationDiv.innerHTML = `
        <h3>What is Text Tokenization?</h3>
        <p><span class="highlight">Text tokenization</span> is the process of breaking down a string of text into smaller units, called tokens. These tokens can be words, phrases, or other meaningful units of language.</p>
        <p>Example: "Hello, world!" becomes two tokens: "Hello" and "world!".</p>
      `;
      break;
    
    case 'types':
      explanationDiv.innerHTML = `
        <h3>Types of Tokenization</h3>
        <p>There are two common types of text tokenization:</p>
        <ul>
          <li><strong>Word Tokenization</strong>: Splitting text into individual words (e.g., "Hello world!" becomes ["Hello", "world!"]).</li>
          <li><strong>Sentence Tokenization</strong>: Splitting text into sentences (e.g., "Hello! How are you?" becomes ["Hello!", "How are you?"]).</li>
        </ul>
      `;
      break;

    case 'process':
      explanationDiv.innerHTML = `
        <h3>Tokenization Process Example</h3>
        <p>Let's consider the sentence: <span class="highlight">"I love natural language processing!"</span></p>
        <p>The tokenization process would break it into the following tokens:</p>
        <ul>
          <li>"I"</li>
          <li>"love"</li>
          <li>"natural"</li>
          <li>"language"</li>
          <li>"processing"</li>
          <li>"!"</li>
        </ul>
        <p>This process helps machines understand and analyze text more effectively.</p>
      `;
      break;

    case 'importance':
      explanationDiv.innerHTML = `
        <h3>Why is Tokenization Important?</h3>
        <p>Tokenization is essential in <a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank">Natural Language Processing (NLP)</a>, as it helps computers understand human language by breaking it into manageable chunks.</p>
        <p>Without tokenization, tasks like sentiment analysis, text classification, and machine translation would be extremely difficult.</p>
      `;
      break;

    default:
      explanationDiv.innerHTML = '';
  }
}
