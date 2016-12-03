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
    constructor(){
        super();
        this.state = {
            titleInput: '',
            noteInput: ''
        }
    }

    handleButton(e){
            // todo диспатч возвращает промис, сделать локальный стейт для кнопки
        let title = this.refs.title.getValue(),
            note = this.refs.note.getValue();
        if (title && note) {
            this.props.addNote(title, note);
            this.setState({
                titleInput: '',
                noteInput: ''
            })
        }
        e.preventDefault();
    }

    handleTitleInput(e){
        this.setState({
            titleInput: e.target.value
        });
        e.preventDefault();
    }

    handleNoteInput(e){
        this.setState({
            noteInput: e.target.value
        });
        e.preventDefault();
    }

    render(){
        return(
            <div className="wrapper_form_create_note">
                <form onSubmit={::this.handleButton} ref="form">
                    <TextField
                        hintText='Title'
                        ref="title"
                        errorText="This field is required"
                        onChange={::this.handleTitleInput}
                        value={this.state.titleInput}
                    />
                    <TextField
                        floatingLabelText="Message Field"
                        multiLine={true}
                        rows={2}
                        ref="note"
                        onChange={::this.handleNoteInput}
                        value={this.state.noteInput}
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