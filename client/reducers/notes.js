/**
 * Created by Igor on 14.11.2016.
 */
import { ADD_NOTE, FETCHED_NOTES, TOGGLE_NOTE, DELETE_NOTE } from '../constants'



const notes = (state = [], action) => {
    switch (action.type){
        case ADD_NOTE:
            return [...state, {
                title: action.title,
                note: action.note,
                date: action.date,
                id: action.id,
                done: false
            }];
        case FETCHED_NOTES:
            return [...state, ...action.data];
        case TOGGLE_NOTE:
            return state.map((note)=>{
                if (note.id === action.id){
                    return {...note, done: !note.done};
                } else {
                    return note;
                }
            });
        case DELETE_NOTE:
            return state.filter(note => note.id !== action.id)
        default:
            return state
    }
};

export { notes }
