/**
 * Created by Igor on 14.11.2016.
 */
import { combineReducers } from 'redux'
import { notes } from './notes'

const rootReducer = combineReducers({
    notes
});

export { rootReducer };