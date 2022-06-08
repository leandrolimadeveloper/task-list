<h1 align="center">Task List</h1>
<p align="center">
    <a href="#sobre">Sobre |</a>
    <a href="#tecnologias">Tecnologias |</a>
    <a href="#instalação">Instalação de dependências e uso |</a>
    <a href="#endpoints">Endpoints</a>
</p>

## Sobre
Projeto desenvolvido no curso 'Curso completo de APIs com Nodejs, Express + MongoDB, SQL', do instrutor Matheus Fraga, na Udemy.

O projeto consiste em uma API para aplicação de cadastro de tarefas, onde o usuário cadastrado com nome, e-mail e senha pode cadastrar e conluir tarefas, e excluir tarefas não-concluídas. 

![image](https://user-images.githubusercontent.com/76854209/167940316-3838467a-03fb-4f37-98e9-10c6d062d833.png)
![image](https://user-images.githubusercontent.com/76854209/167939514-cf507743-58c3-46f1-90ce-1b716ed6251d.png)
![image](https://user-images.githubusercontent.com/76854209/167939889-eb874bb7-7c51-4d19-b8c0-4238ba50826e.png)
![image](https://user-images.githubusercontent.com/76854209/167940214-377aa863-4905-4c84-97f6-efff98b2758d.png)
![image](https://user-images.githubusercontent.com/76854209/167940268-7813806e-4933-4dbd-bcc7-bb82675e8cc6.png)


## Experiência adquirida
- API
- PostgreSQL
- Sequelize
- Javascript
- NodeJS
- Express
- Migrations
- Bcrypt — 'Hasheamento' de senha
- Autenticação JWT
- Cors
- Padrões REST
- Verbos HTTPS
- Status Code
- Endpoints amigáveis
- Params, Querys e afins
- ESlint
- Editorconfig
- Yup — Validação de formato/requisitos de dados (email, senha etc.)
- Insominia

## Tecnologias
<ul>
    <li><a href="https://nodejs.org/" alt="Node.js">Node.js</a></li>
    <li><a href="https://www.postgresql.org/" alt="PostgreSQL">PostgreSQL</a></li>
    <li><a href="https://sequelize.org/" alt="MySQL">Sequelize</a></li>
</ul>

## Instalação

> Este guia assume que você já tenha o Node.js e o servidor de banco de dados PostgreSQL instalado. 

```bash
$ git clone https://github.com/leandrolimadeveloper/task-list.git
$ cd task-list
```

Para executar o servidor, execute:
```
$ yarn dev
```

### Banco de dados
Para manipular dados na aplicação deve-se primeiro criar um banco de dados com o nome que você preferir (como 'tasklist', que é o nome do banco de dados da aplicação), e inserir as informações referentes ao PostgreSQL de sua máquina (username e password) no arquivo database.js, localizado em 'src/config/'.  

Para criar as tabelas deve-se executar as migrations com o comando:

```
$ yarn sequelize db:migrate
```

Caso tenha interesse em visualizar os dados cadastrados, utilize um programa como o Postbird.
![Postbird](https://user-images.githubusercontent.com/76854209/172650237-462e24b7-1f81-4bb8-aaaf-06594b8a2f3f.png)
![image](https://user-images.githubusercontent.com/76854209/172651243-faba6bf9-4b1b-4a80-9a0e-c8ade4c1bed1.png)

## Endpoints 
(Demonstração de alguns endpoints)
> Para testar a API é necessário ter um cliente de API REST como as ferramentas Insomnia e Postman. 

### User: POST /users 
Endpoint para cadastrar usuário.

```
{
    "name": "Usuário Teste",
    "email": "uteste@uteste.com",
    "password": "123456"
}
```

### Sessions: POST /sessions
Endpoint para logar usuário e receber um token/sessão.

```
{
	"email": "uteste@uteste.com",
	"password": "123456"
}
```

#### Parâmetros
Nenhum

#### Respostas 
OK! 200 (Sucesso na requisição) — Loga o usuário<br>
UNAUTHORIZED! 401 (Requisição não autorizada) — 'Error: Usuário e/ou senha incorreta.'

### Tasks: POST /tasks
Endpoint para cadastrar um tarefa. 
(Deve-se estar logado, com o token da sessão registrado)

#### Parâmetros
Nenhum

#### Respostas 
OK! 200 (Sucesso na requisição) — Cadastra a tarefa<br>
BAD REQUEST! 400 (Servidor não entendeu a requisição) — 'Error: Falha ao cadastrar'

Exemplo:
``` 
{
	"task": "Lavar o carro"
}
```

### Tasks: GET /tasks
Retorna a lista de tarefas do usuário que está logado.

#### Parâmetros
Nenhum

#### Respostas 
OK! 200 (Sucesso na requisição) — Os dados são retornados.

Exemplo:
``` 
GET /tasks
```
