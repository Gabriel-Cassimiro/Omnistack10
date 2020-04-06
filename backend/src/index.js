require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app); // servidor http fora do express


setupWebsocket(server);
let connectionString = `mongodb+srv://${process.env.HOST}:${process.env.PASS}@cluster0-pnn1m.mongodb.net/week10?retryWrites=true&w=majority`; // use .env to save your name and password
//console.log(connectionString); See if you name and password is right

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//app.use(cors({origin: 'http://localhost:3000/'})) Libera acesso externo apenas para o LH 3000
app.use(cors())//Libera acesso externo para todas aplicações
app.use(express.json()); // PRECISSA VIR ANTES DAS ROTAS/ROUTES
app.use(routes);

server.listen(3333); 

//métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: req.query(Filtros, ordenação, paginação, ...)
//Route Params: req.param(indentificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB(Não-relaciona)Não é bom para sites como e-commerce
