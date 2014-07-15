var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very very bad, sad and mad text"));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day"));
