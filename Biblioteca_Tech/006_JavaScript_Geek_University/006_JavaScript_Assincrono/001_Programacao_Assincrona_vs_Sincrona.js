/**
 * Programação Assíncrona vs Síncrona.
 * 
 * Async vs Sync.
 * 
 * Processos e Threads
 * 
 * Processos.
 * Thread 0 = CPU CORE 2
 * Thread 1 = CPU CORE 0
 * Thread 2 = CPU CORE 1
 * 
 * PROCESSOS
 * 
 * De forma geral, um proecsso nada mais é do que um programa em execução.
 * Os processos são gerenciados pelo sistema operacional.
 * 
 * Isso significa que um processo pode ser gerenciado de uma forma pelo 
 * Windows, de outra pelo Linux e de outra pelo SunOS por exemplo.
 * 
 * Este gerenciamento é baseado em algoritmos.
 * 
 * THREADS
 * 
 * É uma forma de um processo ser dividido em uma ou mais partes(threads)
 * que podem ser executadas em paralelo (ao mesmo tempo).
 * 
 * OBS: A linguagem JavaScript é single thread.
 * 
 * Isso significa que os programas JavaScript são executados em uma 
 * única thread.
 * 
 * PROGRAMAÇÃO ASSÍNCRONA VS SÍNCRONA
 * 
 * Na programação síncrona, os comandos são executados em sequência, um
 * após o outro.
 * -----------------
 * Exemplo:
 * console.log('Geek');
 * console.log('University');
 * console.log('JavaScript');
 * -----------------------------------------
 * Nesse tipo de programação o programa fica 'bloqueado' até que todo o 
 * processamento seja realizado.
 * 
 * Isso significa que se você fizer algo como:
 * -----------------
 * console.log('Geek');
 * for(let i = 0. i < 100000; i++){
 *      console.log(i);
 * }
 * console.log('University');
 * -----------------------------------------
 * O programa irá executar a linha 1, ficará bloqueado executando o loop
 * for, e só seguirá adiante quando este loop for finalizado. O usuário não 
 * consegue fazer nenhuma interação com a página web enquanto houver este 
 * bloqueio. Isso ocorre porque o for e várias outras funções em JavaScript 
 * são síncronas.
 * 
 * A programação assíncrona faz com que não ocorra este bloqueio.
 * Ou seja, se existe um evento para ocorrer que pode demorar, por exemplo:
 * Algum processamento;
 * Acesso à APIs externas;
 * Acesso à bancos de dados;
 * Leitura e/ou escrita em disco;
 * Etc.
 * 
 * O programa fica 'esperando' a resposta deste evento mas libera a thread
 * para executar outras tarefas, sem que a aplicação fique 'engasgada' 
 * esperando a tarefa terminar.
*/