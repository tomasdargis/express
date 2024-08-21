import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Labas vakaras, Lietuva!');
});
app.get('/abaut', (req, res) => {
    return res.send('Ką nori sužinoti, apie šitą projektą😜');
});
app.get('*', (req, res) => {
    return res.send('norimas puslapis nerastas...😭');
});

app.listen(port, () => {
    console.log(`App running on: http//localhost: ${port}`);
});
