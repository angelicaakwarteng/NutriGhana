// nlUtils.js
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

/**
 * Split sentence into array of words/tokens
 * A token can be a word or punctuation character, or number
 * @param {string} sentence - The input sentence
 * @returns {string[]} Array of tokens
 */
function tokenize(sentence) {
  return tokenizer.tokenize(sentence);
}

/**
 * Stemming = find the root form of the word
 * examples:
 * words = ["organize", "organizes", "organizing"]
 * words = [stem(w) for w in words]
 * -> ["organ", "organ", "organ"]
 * @param {string} word - The word to stem
 * @returns {string} The stemmed word
 */
function stem(word) {
  return stemmer.stem(word.toLowerCase());
}

/**
 * Return bag of words array:
 * 1 for each known word that exists in the sentence, 0 otherwise
 * example:
 * sentence = ["hello", "how", "are", "you"]
 * words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
 * bog   = [  0 ,    1 ,    0 ,   1 ,    0 ,    0 ,      0]
 * @param {string[]} tokenizedSentence - Array of tokens
 * @param {string[]} words - Array of all known words
 * @returns {Float32Array} Bag of words representation
 */
function bagOfWords(tokenizedSentence, words) {
  // stem each word
  const sentenceWords = tokenizedSentence.map(word => stem(word));
  
  // initialize bag with 0 for each word
  const bag = new Float32Array(words.length).fill(0);
  
  // Set bag values to 1 for matching words
  words.forEach((word, idx) => {
    if (sentenceWords.includes(word)) {
      bag[idx] = 1;
    }
  });

  return bag;
}

module.exports = {
  tokenize,
  stem,
  bagOfWords
};