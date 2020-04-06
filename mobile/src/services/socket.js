import socketio from 'socket.io-client';

const socket = socketio('http://192.168.100.102:3333', {
  autoConnect: false,
});

function subcribeToNewDevs(subscribeFunction){
  socket.on('new-dev', subscribeFunction);
}

function connect(laitude,longitude,techs){
  socket.io.opts.query = {
    laitude,
    longitude,
    techs,
  }
  socket.connect();

  socket.on('message', text => {
    console.log(text)
  })
}

function disconnect(){
  if(socket.connected){
    socket.disconnect();
  }
}

export {
  connect, 
  disconnect,
  subcribeToNewDevs,
}