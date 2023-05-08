`
Este código configura um servidor web simples usando o ambiente de tempo de execução Node.js e a biblioteca "json-server". 

`
const jsonServer = require("json-server"); // importando biblioteca json-server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  escolheu a porta como 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);