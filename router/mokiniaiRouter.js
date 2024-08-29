import express from 'express';
import { mokiniai } from '../data/mokiniai.js';

export const mokiniaiRouter = express.Router();

mokiniaiRouter.get('/', (req, res) => {
    // const names = [];
    // for (const key in mokiniai) {
    //     names.push(mokiniai[key].name);
    // }
    // ---------------
    const names = Object.values(mokiniai).map((ziopliai) => ziopliai.name);
    // ----------------
    // const names = Object.keys(mokiniai).map(
    //     (belekas) => mokiniai[belekas].name
    // );

    if (names.length === 0) {
        return res.send(`Mokosi ${names.length} mokiniai: 'niekas'`);
    }
    if (names.length === 1) {
        return res.send(`Mokosi ${names.length} mokiniai: ${names[0]}.`);
    }

    const trumpinys = names.slice(0, -1).join(', ') + ' ir ' + names.at(-1);

    return res.send(`Mokosi ${names.length} mokiniai: ${trumpinys}`);
});

mokiniaiRouter.get('/:name', (req, res) => {
    // const mokiniuObject = mokiniai[req.params.name.toLocaleLowerCase()];
    const name = req.params.name.toLocaleLowerCase();
    let mokiniuObject = null;

    for (const key in mokiniai) {
        if (key.toLocaleLowerCase() === name) {
            mokiniuObject = mokiniai[key];
            break;
        }
    }

    if (mokiniuObject) {
        return res.send(
            `mokinys, vardu ${mokiniuObject.name} yra 
                    ${mokiniuObject.age}
                 amziaus ir ${mokiniuObject.isMarried ? 'yra' : 'nera'} vedes.`
        );
    } else {
        return res.send(`Mokinio vardu ${req.params.name} nera.`);
    }
    // -------
});
