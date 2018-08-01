const express = require('express');
const path = require('path');
const app = express();

const SocketIO = require('socket.io')

//Setting
app.set('port', process.env.PORT || 4000);

//static file
app.use(express.static(path.join(__dirname, 'public')));

//Configuracion del server
const server = app.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'));
})

const io = SocketIO.listen(server)

// WebSocket
io.on('connection', (socket)=>{
    console.log("New connection ", socket.id)
})