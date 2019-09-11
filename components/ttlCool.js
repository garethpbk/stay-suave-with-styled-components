// ${interpolation}

const logArgs = (...args) => console.log(...args);
const pet = () => console.log('dogs');

logArgs(`I like ${pet}.`); // "I like () => console.log('dogs')."

logArgs`I like ${pet}.`; // ["I like ", "."] () => console.log('dogs)
