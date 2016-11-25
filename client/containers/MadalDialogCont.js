/**
 * Created by Igor on 25.11.2016.
 */
/**
 * Created by Igor on 25.11.2016.
 */
import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import ModalDialog from '../components/ModalDialog'
import * as actions from '../actions'

class MadalDialogCont extends React.Component {

    render() {
        const { note, toggleNote, deleteNote } = this.props;
        return (
            <ModalDialog note={note} toggleNote={toggleNote} deleteNote={deleteNote}/>
        );
    }
}

const mapStateToProps = (state, { params }) => {
    return {
        note: state.notes.filter(note => note.id === params.id)[0]
    }
}

export default withRouter(connect(mapStateToProps, actions)(MadalDialogCont))

