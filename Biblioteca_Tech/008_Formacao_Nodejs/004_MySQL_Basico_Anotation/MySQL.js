/**
 * AULA 1 - Tabelas - Curso Node.js
 * 
 * Alguns TIPOS DE DADOS que o MySQL tem:
 * Texto, charactere, inteiro, float, date, 
 * blob (arquivos), e etc...
 * 
 * MySQL pelo terminal.
 * 
 * Na linha de comando iremos passar dois param
 * -h = qual servidor iremos nos conectar. 
 * No caso será o localhost.
 * 
 * O segundo param é o user o -u.
 * iremos colocar o root que é o próprio pc
 * 
 * No terminal digite:
 * mysql -h localhost -u root (enter)
 * após isso ele pede a senha...
 * 
 * IMPORTANTE - todo comando MySQL tem ; no final.
 * Não precisa estar em maiúscula as linhas de comando, só 
 * estou fazendo isso pra ficar mais vísivel.
 * 
 * Nosso primeiro comando: SHOW DATABASES;
 * Ele mostra o banco de dados.
 * 
 * CREATE DATABASE sistemaDeCadastro;
 * Esse comando cria um banco de dados. Após o 
 * CREATE DATABASE deve-se colocar um nome para o banco.
 * No nosso exemplo foi sistemaDeCadastro.
 * 
 * PARA ACESSAR UM BANCO DIGITE NO TERMINAL:
 * USE (Mais o nome do banco);
 * USE sistemaDeCadastro;
 * 
 * PARA ACESSAR AS TABELAS DO BANCO DIGITE NO TERMINAL:
 * SHOW TABLES;
 * 
 * PARA CRIAR UMA TABELA NO BANCO DIGITE NO TERMINAL:
 * CREATE TABLE (Nome da Tabela)(Informações);
 * Para facilitar a vida criei no Visual Studio Code
 * um arquivo chamado teste.sql (Usei nessa aula).
 * Veja o arquivo.
 * 
 * Copiei as informações e colei no CMD para criar a Tabela
 * do meu banco de dados.
 * 
 * Após colar no CMD ficou assim. Basta dar enter.
 * 
 * mysql> CREATE TABLE usuarios(
 * ->     nome VARCHAR(50),
 * ->     email VARCHAR(100),
 * ->     idade INT
 * -> );
 * 
 * Use o comando SHOW TABLE para ver o que tem no banco.
 * Você consegue ver a tabela que criamos, usuarios.
 * 
 * Use o comando DESCRIBE para ver dentro da tabela.
 * DESCRIBE usuarios;
*/





/**
 * AULA 2 - INSERT, SELECT E WHERE - Curso Node.js
 * 
 * COMANDO INSERT - Para inserir dados. 
 * Veja no teste.sql aula 2
 * 
 * Depois copie e jogue no terminal para inserir os dados.
 * 
 * Agora vamos ver por dentro:
 * Usamos o comando SELECT -> esse comando lista os dados.
 * Se você quiser listar TODOS os dados use * 
 * 
 * Comando:
 * SELECT * FROM usuarios; 
 * 
 * Vamos pegar um usuario especifico. Usando WHERE
 * CONSULTA NO BANCO DE DADOS.
 * 
 * Comando no terminal:
 * SELECT * FROM usuarios WHERE idade = 12;
 * SELECT * FROM usuarios WHERE idade >= 30;
 * SELECT * FROM usuarios WHERE nome = "Lucas Pererira Silva";
*/




/**
 * AULA 3 - DELETE - Curso Node.js
 * 
 * COMANDO DELETE - Para DELETAR dados. 
 *
 * -- Deleta toda a tabela.
 * DELETE FROM usuarios;
 * 
 * -- Deleta algo específico.
 * DELETE FROM usuarios WHERE nome = "Eduardo Kayke";
 * 
 * Para deletar um banco de dados use:
 * DROP DATABASE + nome do banco de dados.
*/




/**
 * AULA 4 - UPDATE - Curso Node.js
 * 
 * COMANDO UPDATE - Para mudar os dados. 
 *
 * Nunca SET um UPDATE sem o WHERE, NUNCA.
 * 
 * COMANDO:
 * UPDATE usuarios SET nome = "Lucas Pereira Silva" WHERE nome = "Lucas Pererira Silva";
*/