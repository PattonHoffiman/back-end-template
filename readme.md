# Template para Back-End

Este é um template para iniciar seu back-end de forma rápida. Ele contém o básico para criação, atualização, remoção e autenticação de usuários, utilizando Node.js, Express, TypeORM, Postgres, Redis e Docker.

## Começando

<br/>

OBS: Este exemplo está utilizando o SO Linux Ubuntu então alguns comandos de terminal só funcionarão utilizando Linux, caso esteja utilizando outro SO procure pesquisar comandos semelhantes.

<br/>

Tenha o [git](https://git-scm.com/) em sua máquina, assim poderá clonar o template.

Use o comando:

```
git clone https://github.com/PattonHoffiman/back-end-template
```

Ou baixe o [ZIP](https://github.com/PattonHoffiman/back-end-template/archive/master.zip).

## Pré-Requisitos
### Node.js

<br/>

<p>
  O Node.js será utilizado para construir o back-end utilizando do javascript para tal.
</p>

<br/>

- Baixe e instale o [Node.js](https://nodejs.org/en/) em sua máquina.
- Após isso digite em seu terminal:
```
node -v
```
- Caso tenha aparecido a versão do mesmo você o instalou com sucesso.

<br/>

### Yarn

<br/>

<p>
  O Yarn é o gerenciador de pacotes que utilizaremos para baixar e atualizar as bibliotecas nescessárias para a execução do back-end.
</p>

<br/>

  - Digite o seguinte no Terminal:
  ```
  npm install -g yarn
  ```
  - Espere a conclusão da instalação e depois digite:
  ```
  yarn -v
  ```
  - Caso tenha aparecido a versão do mesmo você o instalou com sucesso.
  - Se tiver dúvidas ou precisar de mais informações: [Yarn](https://yarnpkg.com/getting-started/install)

<br/>

### Docker

<br/>

  <p>
    O Docker servirá para componentizar os serviços nescessários para que o back-end possa funcionar devidamente. Neste caso utilizaremos ele para que possa manter o Postgres e assim garantir a permanência dos dados.
  </p>

<br/>

  - Baixe e instale o [Docker](https://docs.docker.com/engine/install) em sua máquina.
  - Após isso digite em seu terminal:
  ```
  docker -v
  ```
  - Caso tenha aparecido a versão do mesmo você o instalou com sucesso.

<br/>

### Postgres

<br/>

<p>
  O Postgres é o banco de dados escolhido para manter a persitência do back-end, mas você pode escolher outro se assim desejar, apenas pesquise o nome da imagem e siga as mesmas etapas.
</p>

  - Abra o terminal e digite:
  ```
  sudo docker run --name nome_da_imagem -e POSTGRES_PASSWORD=senha_do_banco -p 5432:5432 -d postgres
  ```
  - Onde:
    - --name nome_da_imagem: digite o nome que dará para acessar o postgres pelo docker.
    - -e POSTGRES_PASSWORD: digite a senha que utilizará para acessa o banco de dados.
    - -p 5432:5432 : Esta é a porta que dá acesso ao postgres o padrão é a porta 5432, mas você pode alterá-la caso necessite.
    - -d postgres: o nome da imagem do postgres.
    - Digite em seu terminal:
    ```
      sudo docker ps -a
    ```
    - Algo parecido com isso deverá aparecer:
    ```
    CONTAINER ID        IMAGE               COMMAND                  CREATED         STATUS                     PORTS                      NAMES
    0054fcb7fac2        postgres            "docker-entrypoint.s…"   3 months ago        Up 4 hours                 0.0.0.0:5432->5432/tcp     postgresdb
    ```
    - Para que o postgres seja executado pelo docker digite:
    ```
      sudo docker start nome_da_imagem
    ```
    - Caso o nome da imagem apareça, então a mesma já estará rodando no docker.

<br/>

### Redis

<br/>

<p>
  O Redis lida com o cache do back-end, ele servirá para reduzir a interação com o banco de dados melhorando a escalabilidade do mesmo retornando informações que são constantemente acessadas de forma mais rápida reduzindo o tempo de execução.
</p>

- A instalação do Redis é muito semelhante ao do postgres. Apenas digite:
```
sudo docker run --name nome_da_imagem -p 6379:6379 -d redis:alpine
```

- Siga as mesmas instruções do postgres que tudo deverá ocorrer bem.

<br/>

## Importante!

Verifique os arquivos que possuem "sample" no nome, neles você precisará inserir dados próprios, como senha para o banco de dados, secret do JWT e afins. Remova o sample ou renomeie o arquivo assim que adicionar suas mudanças.

Não esqueça de criar o banco de dados, você pode utilizar um SGBD ou o próprio terminal.

Execute o comando:
```
yarn typeorm:run
```

Para que todas as Migrations sejam executadas, dessa forma o banco de dados será construído e atualizado.

## Instalação

<br/>

Depois de tudo feito acesse a pasta do projeto e digite no terminal:
```
yarn install
```

<br/>

Espere a instalação ser concluída e para verificar que está rodando digite:
```
yarn dev:server
```

<br/>

Caso apareça:
```
Server Started on Port: 3333
```

Então tudo está corretamente configurado e instalado. A partir daqui você pode desenvolver o que precisar para dar forma ao seu projeto.


<br/>

Você pode executar o seguinte comando no terminal:
```
yarn test
```
Dessa forma executará os testes já desenvolvidos para o usuário.

vá em: src/modules/users/services/__ tests __ caso queira mais informações do que está sendo testado. Você também pode criar os seus próprios a medida que vai desenvolvendo seu projeto.
