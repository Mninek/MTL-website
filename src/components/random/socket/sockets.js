const { emit } = require('process');

const app = require('express')();
const http = require('http').createServer(app);
const PORT = 8080;
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

const state = {};
const clientRooms = {};

http.listen(PORT, () => {
    console.log('listening on *:${PORT}');
});

io.on('connection', client => { 
    console.log('new client connected');   
    console.log(client.id);

    client.on('joinRoom', handleJoinRoom);
    client.on('createRoom', handleCreateRoom);
    client.on('rollForTeams', handleRollForTeams);
    
    function handleJoinRoom(roomName) {
        //true if the room exists
        const room = io.sockets.adapter.rooms.has(roomName);
        console.log('handle join room is called');
        console.log(roomName);
        console.log(room);
        //if the room exists, we can emit a good signal
        if (room) {
            client.join(roomName);
            client.emit('joinRoomSignal', true);
            console.log('joined');
        } else {
            console.log('room does not exist');
            client.emit('joinRoomSignal', false);
        }
    }

    function handleCreateRoom(roomName) {
        client.join(roomName);
        console.log('room created');
        console.log(roomName);
    }

    function handleRollForTeams(args) {
        console.log('emitted rollForTeams');
        io.to(args['roomCode']).emit('setTeams', {'apiCall': args['apiCall'], 'teamOne': args['teamOne'], 'teamTwo' : args['teamTwo'], 'names' : args['names'], 'roomCode' : args['roomCode']});
    }
});