const socket = io();

socket.on('connect', () => {
    console.log('connected!');

    socket.emit('createMessage', {
        from: 'Benjamin',
        text: 'kek'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected');
});

socket.on('newMessage', (message) => {
    console.log(message.text);
});