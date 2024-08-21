import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Labas vakaras, Lietuva!');
});

app.get('/service', (req, res) => {
    return res.send('service page');
});

app.get('/service/disine', (req, res) => {
    return res.send('service page:disine');
});

app.get('/service/coding', (req, res) => {
    return res.send('service page:coding');
});

app.get('/service/haking', (req, res) => {
    return res.send('service page:haking');
});

app.get('/service/*', (req, res) => {
    return res.send('Service page: such service page not recogniset...😭');
});

app.get('*', (req, res) => {
    return res.send('norimas puslapis nerastas...😭');
});

app.listen(port, () => {
    console.log(`App running on: http//localhost: ${port}`);
});
