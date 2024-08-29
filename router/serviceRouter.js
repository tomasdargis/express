import express from 'express';
import { servicesData } from '../data/servicesData.js';
import { members } from '../data/members.js';
export const serviceRouter = express.Router();

serviceRouter.get('/', (req, res) => {
    return res.send('service page');
});
// serviceRouter.get('/service/:name', (req, res) => {
//     if (
//         req.params.name === 'disine' ||
//         req.params.name === 'coding' ||
//         req.params.name === 'haking'
//     ) {
//         return res.send(`Service page:"${req.params.name}" ...`);
//     }
//     return res.send(`Service page:"${req.params.name}"page not found ...😤`);
// });
serviceRouter.get('/:serviceName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Service page:"${req.params.serviceName}" ...🥹`);
    }
    return res.send(
        `Service page:"${req.params.serviceName}"page not found ...😤`
    );
});
serviceRouter.get('/:serviceName/:memberName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        if (members.includes(req.params.memberName))
            return res.send(
                `Paslaugos:"${req.params.serviceName}" nario "${req.params.memberName}" info...🥹`
            );
    }
    return res.send(
        `Paslaugos :"${req.params.serviceName}"nario "${req.params.memberName}" nepavyko rasti ...😤`
    );
});
