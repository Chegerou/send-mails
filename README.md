# API Send Mails
```
- Esta é uma api que realiza uma integração com a biblioteca sendgrid-nodejs que pode ser encontrada no link abaixo:
   sendgrid-nodejs: https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail;

- O objetivo principal deste projeto é apenas demonstrar um pouco dos meus conhecimentos em typescript utilizando o NodeJs, Express e o TypeScript.

- A funcionalidade principal deste projeto é apenas enviar um e-mail com base nas informações inseridas no json e com a chave sendgrid do usuário.
```

## Como usar
```
É bem simples de se utilizar esta api, vamos ao passo a passo.
```
### 1 - Instalando as dependencias:
```
Bom ao baixar este projeto na sua maquina você precisará ter instalado o node JS na sua maquina.

Vá na pasta do projeto e abra o seu terminal de preferencia e rode o comando: 

$ npm install

Após rodar este comando todas as depêndencias do projeto serão instaladas.
```

### 2 - Executando o projeto na maquina:
```
Para executar o projeto na maquina, basta você executar os comandos nesta sequência:

$ npm run build  

$ npm run start 

No terminal que você utilizou para instalar as depêndencias.
```

### 3 - Realizando a chamada
```
Ao visualizar no seu terminal que o serviço está sendo executado basta apenas você acessar ao postman e realizar o envio de um obj similar a este:

{
  "to": "email_do_destinario@email.com.br",
  "from": "email_do_remetente@email.com",
  "subject": "Titulo do email",
  "text": "Olá Mundo",
  "html": "<p> Olá Mundo. </p>"
}

E por fim você deve colocar na url do seu localhost a sua chave api do sendgrid para que ele possa validar esta chave no sendgrid.
Um exemplo de url seria localhost:3000/SU4_CH4V3_53ND_9R1D
```
