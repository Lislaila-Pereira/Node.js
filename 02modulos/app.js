//importar arquivo de calculos
var calculos = require('./calculo');

var mult = calculos.multiplicar(2, 5);
console.log('multiplicacao de 2 e 5: ', mult);
var soma = calculos.somar(2, 5);
console.log('soma de 2 e 5: ', soma);