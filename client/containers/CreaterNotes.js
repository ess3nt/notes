/**
 * Created by Igor on 16.11.2016.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'

import { addNote } from '../actions'

import './CreaterNotes.css'

class CreaterNotes extends Component {

    handleButton(e){
            // todo диспатч возвращает промис, сделать локальный стейт для кнопки
        let title = this.refs.title.getValue(),
            note = this.refs.note.getValue();
        if (title && note) {
            this.props.addNote(title, note);
            this.refs.title.getInputNode().value = '';
            this.refs.note.getInputNode().value = '';
        }

        e.preventDefault();
    }

    render(){
        return(
            <div className="wrapper_form_create_note">
                <form onSubmit={::this.handleButton} ref="form">
                    <TextField
                        hintText='Title'
                        ref="title"
                    /><br />
                    <TextField
                        hintText="Message Field"
                        floatingLabelText="MultiLine and FloatingLabel"
                        multiLine={true}
                        rows={2}
                        ref="note"
                    />
                    <FlatButton style={{marginLeft: '75%'}}
                                label='Add'
                                type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default connect(null, {addNote})(CreaterNotes)