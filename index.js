import express from 'express';
import { serviceRouter } from './router/serviceRouter.js';
import { mokiniaiRouter } from './router/mokiniaiRouter.js';
import { bookRouter } from './router/bookRouter.js';
import { carsRouter } from './router/carsRouter.js';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Labas vakaras, Lietuva!');
});

app.use('/api', apiRauter);
app.use('/service', serviceRouter);
app.use('/mokiniai', mokiniaiRouter);
app.use('/book', bookRouter);
app.use('/cars', carsRouter);

// app.get('/service', (req, res) => {
//     return res.send('service page');
// });

// -----

app.get('*', (req, res) => {
    return res.send('norimas puslapis nerastas...😭');
});

app.listen(port, () => {
    console.log(`App running on: http//localhost: ${port}`);
});
