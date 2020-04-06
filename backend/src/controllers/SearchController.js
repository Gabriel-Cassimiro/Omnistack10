const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')
//Buscar todos devs num raio de 10km
//Filtrar por tecnologia

module.exports = {
  async index(req, res){
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: { //filtros
        $in: techsArray, //$in é um operador lógico do propio mongoDB assim como aqueles que começam com cifrão($)
      },
      location:{
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({devs });
  }
} 