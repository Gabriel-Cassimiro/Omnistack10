const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')
const {findConnections, sendMessage} = require('../websocket');

//index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs)
  },

  async store(req, res) { // async que dizer que pode demorar para receber resposta
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //github api
      //crases são usadas para botar variáveis dentro da string

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs) // split separa a string, trim tira os espaço

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }

      dev = await Dev.create({
        github_username, // Como o nome da propiedade é o mesmo da variável não precissa de :
        name,             // Isso se chama short syntax no javascript
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })

      //filtrar conexões que estão há no min 10 km 
      //Pelo menos uma das techs

      const sendSocketMessageTo = findConnections(
        { latitude, longitude},
        techsArray,
      )
      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }

    return res.json(dev);
  }

 /* async update(){
  },
  async destroy(){
  }, */
};