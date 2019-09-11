// ${interpolation}

const logArgs = (...args) => console.log(...args);
const pet = 'dogs';

logArgs(`I like ${pet}.`); // "I like dogs."

logArgs`I like ${pet}.`; // ["I like ", "."] "dogs"
