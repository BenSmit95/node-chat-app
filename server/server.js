const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}.`);
})