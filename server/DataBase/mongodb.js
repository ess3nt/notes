/**
 * Created by Igor on 14.11.2016.
 */
import mongoose from "mongoose";

import config from '../config.json'

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: { type: String },
    note: { type: String, required: true },
    id: { type: String },
    done: { type: Boolean },
    date: { type: Date }
});

const Note = mongoose.model('Note', NoteSchema); //todo probably mistake



export function setUpConnection() {
    // mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    mongoose.connect(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        note: data.note,
        id: data.id,
        done: false,
        date: data.date
    });

    return note.save();
}

export function toggleNote(id) {
    let callback = (err, req) => {
        console.log(err, req, 'body callback');
        if( req[0] && req[0].done){
            let update = { done: false };

            Note.findOneAndUpdate(id, update, (err, req) => {
                console.log(err, req, 'body update');
                return 'ok';
            })
        } else {
            let update = { done: true };

            Note.findOneAndUpdate(id, update, (err, req) => {
                console.log(err, req, 'body update');
                return 'ok';
            })
        }
    };

    return Note.find(id).find(callback);

}

export function deleteNote(id) {
    return Note.remove(id).remove((err, req) => {
                 console.log(err, req, 'body remove');
                 return 'ok';
             })
}


