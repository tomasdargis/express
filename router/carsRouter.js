import express from 'express';

export const carsRouter = express.Router();

carsRouter
    .route('/')
    .get((req, res) => {
        return res.send('GET:cars');
    })
    .post((req, res) => {
        return res.send('POST:cars');
    })
    .put((req, res) => {
        return res.send('PUT:cars');
    })
    .delete((req, res) => {
        return res.send('DELETE:cars');
    });
