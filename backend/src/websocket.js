const socektio = require('socket.io');

const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
 io = socektio(server);

  io.on('connection', socket => {
    const {latitude, longitute, techs} = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitute: Number(longitute),
      },
      techs: parseStringAsArray(techs),
    });
  });
};

exports.findConnections = (coordinates, techs) =>{
  return connections.filter(connections => {
    return calculateDistance(coordinates, connection.coordinates) < 10 //km
    && connection.techs.some(item => techs.includes(item))
  })
}

exports.sendMessage = (to, message, data) => {
  to.forEach(connections => {
    io.to(connection.id).emit(messgae, data)
  })
}