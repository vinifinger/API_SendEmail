## :rocket: Tecnologias 

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  [Node.js](https://nodejs.org)
-  [TypeScript](https://www.typescriptlang.org)
-  [Express](https://expressjs.com/pt-br/)
-  [Cors](https://www.npmjs.com/package/cors)
-  [Multer](https://www.npmjs.com/package/multer)
-  [Nodemailer](https://nodemailer.com/about/)
 
## :information_source: Como usar

Para clonar e rodar a aplicação, vai ser necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org) instalados no seu computador. 

Esse projetinho basicamente é para realizar envios de e-mail. 

Para isso é necessário utilizar algum programa para realizar as requisições como: [Insomnia]() ou [Postman]().

A requisição é feita pela url: `localhost:3333/send`
Possuindo as seguintes variáveis no corpo de requisição: 

- `host`: SMTP que será utilizado para o envio
- `port`: Porta do SMTP que será utilizado
- `user`: email que será utilizado para o envio
- `pass`: senha do email que será utilizado
- `to`: Email para receber
- `replyTo`: Email para receber a resposta
- `subject`: Assunto do email
- `text`: Texto do assunto
- `html`: Template de email (Arquivo .html)

Observação: só é possível enviar um dos dois seguintes itens: `text`, `html`. Caso seja inserido um `text` e não um `html`, será enviado o `text`, caso seja inserido um `html`, irá ser enviado no lugar o `text`.

Usar as seguintes linhas de comando:

```bash
# Clonar o repositório
$ git clone https://github.com/vinifinger/API_SendEmail.git

# Entre no repositório
$ cd API_SendEmail

# Instale as dependencias
$ npm install

# Rodar a API
$ npm start
```

## :memo: Licença
Este projeto está sob a licença do MIT.
---

Desenvolvido com ♥ por Vinicius M. Finger :wave: [Linkedin](https://www.linkedin.com/in/vinicius-finger/)