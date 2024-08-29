import express from 'express';

export const apiRouter = express.Router();

const marks = [];

apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});
apiRouter.post('/my-marks', (req, res, next) => {
    console.log(req.body.marks);
    marks.push(req.body.marks);

    return res.json({
        state: 'Pavyko',
        message: 'Pazymys pridetas',
    });
});
