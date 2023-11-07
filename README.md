# Lista_de_tarefas_MVC
## CRUD Completo (Create, Read, Update e Delete)
Esta aplicação é uma lista de tarefas feita em Node.js, no Padrão MCV (Model, View, Controller).
Desenvolvida no Curso: "Node.js do Zero a Maestria com diversos Projetos" juntamente com o Prof° Matheus Battisti pela Udemy Academy.

## Tecnologias usadas
* Linguagem: TypeScript
* Banco de Dados: Mysql
* FrontEnd: handlebars
* BackEnd: Node.js

## Como iniciar esta aplicação:

### Antes de Tudo: Você precisa ter instalado em sua máquina: 
* XAMP; 
* Mysql Client e Mysql Workbench;
* Node.js

### O banco de dados está configurado da seguinte maneira: 
* DataBase: nodemvc;
* User: root;
* Senha: ''; (não tem senha) 

### Iniciar a aplicação
1. Fazer download ou cópia do repositório
2. Abra a pasta raiz no Terminal CMD ou Power Shell
3. Digite o comando npm install: será criada a pasta node_modules na pasta raiz do projeto
4. Renomeie o arquivo ".env.example"  para ".env"
5. Iniciar XAMP e Mysql Workbench em usuário root 
6. No CMD ou Power Shell digite o comando npm start para iniciar a aplicação: Se estiver tudo ok aparecerá a seguinte mensagem, server Funcionando: http://localhost:3000
7. Para derrubar o server: *crtl + c* no terminal cmd e *y* logo após

### Rotas
As rotas desta aplicação estão no arquivo tasksRoutes.js
Sendo a rota principal: http://localhost:3000/tasks/

## Atualizações
* Aplicação reescrita em TypeScript
* Aplicação do .env para variáveis de ambiente
* Mudança do código para paradigma POO