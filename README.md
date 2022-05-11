<h1 align="center">Task List</h1>
<p align="center">
    <a href="#sobre">Sobre |</a>
    <a href="#tecnologias">Tecnologias |</a>
    <a href="#instalação">Instalação de dependências e uso |</a>
    <a href="#endpoints">Endpoints</a>
</p>

## Sobre
Projeto desenvolvido no curso 'Curso completo de APIs com Nodejs, Express + MongoDB, SQL', do instrutor Matheus Fraga, na Udemy.

O projeto consiste em uma API de uma aplicação para cadastro de tarefas, onde o usuário cadastrado com nome, e-mail e senha pode cadastrar e conluir tarefas, e excluir tarefas não-concluídas. 

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
- Bcrypt — criptografia de tipo hash para senhas
- Autenticação JWT
- Cors
- Padrões REST
- Verbos HTTPS
- Status Code
- Endpoints amigáveis
- Params, Querys e afins
- ESlint
- Editorconfig
- Yup
- Insominia

## Tecnologias
<ul>
    <li><a href="https://nodejs.org/" alt="Node.js">Node.js</a></li>
    <li><a href="https://www.postgresql.org/" alt="PostgreSQL">PostgreSQL</a></li>
    <li><a href="https://sequelize.org/" alt="MySQL">Sequelize</a></li>
</ul>

## Instalação

> Este guia assume que você já tem o Node.js instalado. 

```bash
$ git clone https://github.com/leandrolimadeveloper/task-list.git
$ cd task-list
```

Para executar o servidor, execute:
```
$ yarn dev
```

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

## Acessar o banco de dados
Para acessar os dados cadastrados é necessário utilizar um programa como o Postbird.

### Informações:
**username**: postgres<br>
**password**: passdb01<br>
**database**: tasklist 
 
