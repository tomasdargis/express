import express from 'express';

export const bookRouter = express.Router();

bookRouter.get('/', (req, res) => {
    return res.send('GET:book');
});
bookRouter.post('/', (req, res) => {
    return res.send('POST:book');
});
bookRouter.put('/', (req, res) => {
    return res.send('PUT:book');
});
bookRouter.delete('/', (req, res) => {
    return res.send('DELETE:book');
});
