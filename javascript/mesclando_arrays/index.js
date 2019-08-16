const informatica = ["Mouse", "Fone", "Teclado"];
const celulares = ["iphone X", "samsung S9"];

const promocao = [].concat(informatica, celulares);
console.log(promocao);

const promocao2 = [...informatica, ...celulares]; //spread operators
console.log(promocao2);

// obs utilizar spread operators é usual utilizá-lo somento com arrays
