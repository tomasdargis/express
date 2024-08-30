import express from 'express';

export const apiRouter = express.Router();

const marks = [];

apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => {
    console.log(req.body.marks);
    marks.push(req.body.marks);

    return res.json({
        state: 'Pavyko',
        message: 'Pazymys pridetas',
    });
});

apiRouter.put('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);
    const newMarkValue = req.body.newMarks;

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymys turi buti ne neigiamas sveikasis skaicius',
        });
    }
    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu nebera, nera ko redaguoti',
        });
    }
    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Norimo pzymio indexas negali buti didesnis uz ${
                marks.length - 1
            }`,
        });
    }
    marks[position] = newMarkValue;

    return res.json({
        state: 'Pavyko',
        message: 'Pazymys pakoreguotas',
    });
});

apiRouter.delete('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymys turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu nebera',
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `indexas negali buti didesnis uz ${marks.length - 1}`,
        });
    }

    marks.splice(position, 1);

    console.log(req.params.index);
    return res.json({
        state: 'Pavyko',
        message: 'Pazymys pasalintas',
    });
});
