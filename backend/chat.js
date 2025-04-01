// chat.js
const fs = require('fs');
const path = require('path');
const { tokenize, bagOfWords, stem } = require('./nlUtils');

// Load intents from JSON file for chatbot interactions
const intentsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'intents.json'), 'utf8'));
const intents = intentsData.intents;

// Pre-process all patterns
let allWords = [];
const tags = [];
const xy = [];

// Extract all words from patterns and create training data
intents.forEach(intent => {
  const tag = intent.tag;
  
  intent.patterns.forEach(pattern => {
    // Tokenize pattern
    const wrds = tokenize(pattern);
    
    // Add words to our word list
    allWords.push(...wrds);
    
    // Add to xy pairs (inputs and labels)
    xy.push([wrds, tag]);
  });
  
  // Add tag to tags array if not already there
  if (!tags.includes(tag)) {
    tags.push(tag);
  }
});

// Stem and lower each word and remove duplicates
allWords = [...new Set(allWords.map(w => stem(w)))];

/**
 * Get response for user input
 * @param {string} message - User input message
 * @returns {string} Chatbot response
 */
function getResponse(message) {
  // Tokenize the message
  const tokenizedMessage = tokenize(message);
  
  // Create bag of words from the message
  const bow = bagOfWords(tokenizedMessage, allWords);
  
  // Find the most similar intent
  let highestSimilarity = 0;
  let matchedIntent = null;
  
  intents.forEach(intent => {
    // Calculate average similarity across all patterns in this intent
    let totalSimilarity = 0;
    let patternCount = 0;
    
    intent.patterns.forEach(pattern => {
      const patternTokens = tokenize(pattern);
      const patternBow = bagOfWords(patternTokens, allWords);
      
      // Calculate dot product as a simple similarity measure
      let similarity = 0;
      for (let i = 0; i < bow.length; i++) {
        similarity += bow[i] * patternBow[i];
      }
      
      totalSimilarity += similarity;
      patternCount++;
    });
    
    const avgSimilarity = patternCount > 0 ? totalSimilarity / patternCount : 0;
    
    if (avgSimilarity > highestSimilarity) {
      highestSimilarity = avgSimilarity;
      matchedIntent = intent;
    }
  });
  
  // Return a random response from the matched intent
  if (matchedIntent && highestSimilarity > 0) {
    const responses = matchedIntent.responses;
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
  // Default response if no intent matched
  return "I don't understand. Could you please rephrase?";
}

module.exports = {
  getResponse
};