const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Benjamin Smit',
        text: 'Hahahahahahhahaha',
        createdAt: 123
    })

    socket.on('disconnect', () => {
        console.log('disconnected');
    });

    socket.on('createMessage', (newMessage) => {
        console.log(newMessage.text);
    });
});




server.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}.`);
})