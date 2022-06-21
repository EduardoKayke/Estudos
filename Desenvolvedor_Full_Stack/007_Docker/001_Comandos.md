# Comandos do Docker

#### Aula - Meu querido amigo RUN!
- O comando run baixa a imagem, cria, inicia e executa.
    ```docker
    docker container run exemplo
    ```
#### Aula - Ferramentas diferentes 
- Esse comando mostra os containers.
    ```docker
    docker container ps
    ```

- Esse comando mostra os containers que foram executados.
    ```docker
    docker container ps -a
    ```

- Esse comando após executar o container ele retira da lista dos containers executados.
    ```docker
    docker container run --rm exemplo
    ```

#### Aula - Run sempre cria novos containers 
- Esse comando nos permite acessar o container. O i é o modo interativo e o t é o acesso ao terminal.
    ```docker
    docker container run -it exemplo
    ```
- Esse comando cria os arquivos em nosso container. Mas devemos estar dentro do container para isso.
    ```docker
    touch exemplo-curso-docker.txt
    ```
- Use o comando para sair do container.
    ```docker
    Exit
    ```