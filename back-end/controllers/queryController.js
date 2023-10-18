const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

const responses = {
  'What are your hours of operation?': 'Our online store is available 24/7.',
  'Do you have engagement rings?': 'Yes, we have a beautiful engagement ring for sale. You can view it on our rings page.',
};

function processQuery(query) {
  const tokens = tokenizer.tokenize(query);
  for (const token of tokens) {
    for (const key in responses) {
      if (key.toLowerCase().includes(token.toLowerCase())) {
        return responses[key];
      }
    }
  }
  return "I'm sorry, I couldn't understand your question. Please try again.";
}

module.exports = { processQuery };
