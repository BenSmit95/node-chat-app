const generateMessage = (author, text) => ({
    from: author,
    text,
    createdAt: new Date().getTime()
});

module.exports = {generateMessage};