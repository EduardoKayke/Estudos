-- aula 1

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- Para textos em geral, usamos o tipo VARCHAR
-- Existe também o tipo CHAR de charactere
-- Dentro do VARCHAR Colocamos o Número de characteres aceitos
-- Há como colocar outras configurações em cada campo.


-- aula 2
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Fernando Itamar", 
    "carrinhosfedono@gmail.com", 
    25
);

-- como o NOME é do tipo TEXTO, digitamos entre " ".
-- Em IDADE digitamos número inteiro. 

--CONSULTA NO BANCO DE DADOS.

SELECT * FROM usuarios WHERE idade <= 8;




-- aula 3
-- deletar registros dentro da tabela.

-- Deleta toda a tabela.
DELETE FROM usuarios;

-- Deleta algo específico.
DELETE FROM usuarios WHERE nome = "Eduardo Kayke";




--aula 4
UPDATE usuarios SET nome = "Lucas Pereira Silva" WHERE nome = "Lucas Pererira Silva";
