const socket = io();

socket.on('connect', () => {
    console.log('connected!');
});

socket.on('disconnect', () => {
    console.log('Disconnected');
});

socket.on('newMessage', (message) => {
    console.log(message.text);
});