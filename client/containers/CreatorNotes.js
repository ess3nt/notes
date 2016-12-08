/**
 * Created by Igor on 16.11.2016.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'

import { addNote } from '../actions'

import './CreatorNotes.css'

class CreatorNotes extends Component {
    constructor(){
        super();
        this.state = {
            titleInput: '',
            noteInput: '',
            errorTextTitle: '',
            errorTextNote: ''
        }

    }

    handleButton(e){
            // todo диспатч возвращает промис, сделать локальный стейт для кнопки
        // метод получения value для компонента material-UI
    //    let title = this.refs.title.getValue(),
    //        note = this.refs.note.getValue();
        let title = this.state.titleInput,
            note = this.state.noteInput;
        if (title && note) {
            this.props.addNote(title, note);
            this.setState({
                titleInput: '',
                noteInput: ''
            })
        }

            this.setState({
                errorTextTitle: title ? '' : 'This field is required',
                errorTextNote: note ? '' : 'This field is required'
            })

        e.preventDefault();
    }

    onChange(field, e){
        this.setState({
            [field]: e.target.value
        });
        e.preventDefault();
    }

    render(){
        return(
            <div className="wrapper_form_create_note">
                <form onSubmit={::this.handleButton} ref="form" className="form_create_note">
                    <TextField
                        hintText='Title'
                        errorText={this.state.errorTextTitle}
                        ref="title"
                        onChange={this.onChange.bind(this, 'titleInput')}
                        value={this.state.titleInput}
                    />
                    <TextField
                        floatingLabelText="Message Field"
                        errorText={this.state.errorTextNote}
                        multiLine={true}
                        rows={2}
                        ref="note"
                        onChange={this.onChange.bind(this, 'noteInput')}
                        value={this.state.noteInput}
                    />
                    <FlatButton style={{
                                    marginLeft: '75%'
                                }}
                                label='Add'
                                type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default connect(null, {addNote})(CreatorNotes)