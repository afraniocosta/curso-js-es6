//import { soma, sub } from './funcoes';
import { soma as somaFunction, sub } from '../-funcoes';
// renomeando a função

import * as funcoes from '../-funcoes';

import soma from '../soma';
// qdo exporto como default não preciso usar chave na importação
// aqui posso usar qualquer nome, não apenas soma

console.log(somaFunction(1, 7));
console.log(sub(4, 2));

console.log(funcoes)
console.log(funcoes.soma(1, 7));
console.log(funcoes.sub(4, 2));
// exibindo todas as funcções após fazer a importação usando *



