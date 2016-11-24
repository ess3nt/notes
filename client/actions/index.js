/**
 * Created by Igor on 16.11.2016.
 */
import shortid from 'shortid'

import apiFunc from '../api'
import { ADD_NOTE, FETCHING_NOTES, FETCHED_NOTES, TOGGLE_NOTE, DELETE_NOTE } from '../constants'

const addNote = (title, note) => {
    let id = shortid(),
        date = new Date();

    return (dispatch) => {
        dispatch({
            type: ADD_NOTE,
            title,
            note,
            date,
            id
        });

        return apiFunc('/notes', 'post', { title, note, date, id })
    }
};

const fetchNotes = (title, note) => (dispatch) => {
    dispatch({
        type: FETCHING_NOTES
    });

    return apiFunc('/notes', 'get').then(data => dispatch({
        type: FETCHED_NOTES,
        data
    }
    ))
};

const toggleNote = (id) => (dispatch) => {
    dispatch({
        type: TOGGLE_NOTE,
        id
    });

    return apiFunc('/toggle', 'post', { id })
};

const deleteNote = (id) => (dispatch) => {
    dispatch({
        type: DELETE_NOTE,
        id
    });

    return apiFunc('/delete', 'post', { id })
};



export {addNote, fetchNotes, toggleNote, deleteNote};