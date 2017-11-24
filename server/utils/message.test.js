const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const author = 'Ben';
        const text = 'Yooooo man!';
        const message = generateMessage(author, text);
        
        expect(typeof message.createdAt).toEqual('number');
        expect(message).toMatchObject({
            from: author,
            text
        });
    });
});