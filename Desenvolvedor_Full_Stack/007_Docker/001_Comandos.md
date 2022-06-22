# Comandos do Docker

Containers Docker empacotam componentes de software em um sistema de arquivos completo, que contêm tudo necessário para a execução: código, runtime, ferramentas de sistema - qualquer coisa que possa ser instalada em um servidor. Isto garante que o software sempre irá executar da mesma forma, independente do seu ambiente.

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

#### Aula - Containers devem ter nomes únicos
- Nos permite acessar uma lista de comandos para os containers.
    ```docker
    docker container run --help
    ```
- Nos permite nomear os containers.
    ```docker
    docker container run --name exemplo
    ```
- Na aula o código acima foi realizado da seguinte forma:
    ```docker
    docker container run --name mydeb -it debian bash 
    ```

#### Aula - Reutilizar containers
- Nos permite listar os containers.
    ```docker
    docker container ls -a
    ```
- Nos permite acessar um container que já foi criado. O -ai seria equivalente a -it. 
    ```docker
    docker container start -ai exemplo
    ```

#### Aula - Mapear portas dos containers
- Vamos criar um servidor local com o comando a seguir. Nginx é a imagem que queremos baixar.
    ```docker
    docker container run -p 8080:80 nginx
    ```
- Para rodarmos o servidor podemos abrir em outro terminal e abrir o local host. Ao acessar você verá que ele retorna a página no nginx padrão. Pode ver tanto no terminal como no browser.
    ```docker
    curl http://localhost:8080
    ```
- Se usarmos o comando, poderemos observar o container rodando no servidor.
    ```docker
    docker container ps
    ```
- Para encerrar o servidor usamos no terminal: Ctrl + c se for no windows temos que usar o seguinte comando.
    ```docker
    docker container stop NomeDoContainer
    ```

#### Aula - Mapear diretórios para o container

- O professor vai utilizar um trecho de comando chamado "pwd". Esse comando retorna o caminho atual da pasta onde o terminal está localizado. Porém, esse "pwd" não irá funcionar em todos os terminais ou sistemas operacionais. Caso não funcione será necessário utilizar o comando absoluto da pasta em questão. Ou seja, algo como "c/users/SeuNome/docker", variando com a localização da pasta em questão.