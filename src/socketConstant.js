import socketio from './components/random/socket/node_modules/socket.io-client';

export const socket = socketio.connect('http://localhost:8080');