import express from 'express';
import { serviceRouter } from './router/serviceRouter.js';
import { mokiniaiRouter } from './router/mokiniaiRouter.js';
import { bookRouter } from './router/bookRouter.js';
import { carsRouter } from './router/carsRouter.js';
import { apiRouter } from './router/apiRauter.js';

const app = express();
const port = 3000;

// for parsing application/json
app.use(
    express.json({
        type: 'application/json',
    })
);
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('Labas vakaras, Lietuva!');
});

app.use('/api', apiRouter);
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
