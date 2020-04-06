const { Router } = require('express')
const DevController = require('./controllers/DevController')
const searchController = require('./controllers/SearchController')


const routes = Router();

routes.get('/devs', DevController.index)  //Listar devs
routes.post('/devs', DevController.store); //Cadastrar devs

routes.get('/search',searchController.index) //Buscar devs
module.exports = routes; 