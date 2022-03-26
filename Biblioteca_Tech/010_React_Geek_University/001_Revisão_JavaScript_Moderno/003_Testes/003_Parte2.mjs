import pessoa from '../003_Modulos_Importacao_Exportacao.mjs'
// A variável pode ser qualquer nome que quiser.
import p from '../003_Modulos_Importacao_Exportacao.mjs'

console.log(pessoa);
console.log(p);

// Apresenta no console log
// { nome: 'João', idade: 20 }
// { nome: 'João', idade: 20 }


// Importando a exportação nomeada do arquivo parte3

import { ola, soma } from '../003_Testes/003_Parte3.mjs'

console.log(ola("Eduardo"));
console.log(ola(p.nome));

console.log(soma(3, 4));