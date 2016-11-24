import express from 'express';
import bodyParser from 'body-parser';


import * as db from './DataBase/mongodb';

const requestsSettings = () => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/gettest', (req, res) => {
            res.json({'test': true});
    });

    app.post('/posttest', (req, res) => {
        console.log(req.body.id);
        res.send('all OK')
    });

    // RESTful api handlers
    app.get('/notes', (req, res) => {
        db.listNotes().then(data => res.send(data));
    });

    app.post('/notes', (req, res) => {
        db.createNote(req.body).then(data => res.send(data));
    });

    app.post('/toggle', (req, res) => {
        db.toggleNote(req.body).then(data => res.send(data));
    });

    app.post('/delete', (req, res) => {
        db.deleteNote(req.body).then(data => res.send(data));
    });

    app.delete('/notes/:id', (req, res) => {
        db.deleteNote(req.params.id).then(data => res.send(data));
    });

    return app
};

export default requestsSettings;
