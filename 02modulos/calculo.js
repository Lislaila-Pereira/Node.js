function somar(n1, n2) {    
    return n1 + n2;
}

function multiplicar(n1, n2) {  
    return n1 * n2;
}

//como exportar um modulo(pequenas bibliotecas que servem para algoddd)
module.exports = {
    somar, multiplicar
}

/*
outra forma de exportar
o código onde você importa o módulo
import * as minhasFuncoes from './calculo';
const resultadoSoma = minhasFuncoes.somar(5, 3);
const resultadoMultiplicacao = minhasFuncoes.multiplicar(4, 2);

mas desse jeito deve-se usar o export nas funcoes
export function somar(a, b) {
  return a + b;
}

export function multiplicar(a, b) {
  return a * b;
}
 */