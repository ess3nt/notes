/**
 * Created by Igor on 16.11.2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { grey500 } from 'material-ui/styles/colors';

import '../../node_modules/@blueprintjs/core/src/components/card/_card.scss'

import './Note.css'

var date = {
    options: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
}


export default class Note extends Component {
    constructor(){
        super()
        this.state = {
        }
   /*     this.handleButtonClick = this.handleButtonClick.bind(this)
        this.deleteNote = this.deleteNote.bind(this)*/
    }

    handleButtonClick(id, e){
        this.props.toggleNote(id);
        e.preventDefault();
        e.stopPropagation()
    }

    deleteNote(id, e){
        this.props.deleteNote(id);
        e.preventDefault();
    }

    render() {
        let { notes } = this.props;
        let listOfNotes = notes.map((note) => {
            let date = new Date(note.date);
            return <div key={note.id} className="docs-card-example card_note">
                <Link to={`/note/${note.id}`}>
                    <div className="pt-card pt-elevation-0 pt-interactive">
                        <img className={(note.done ? "": "img_display ") + "close_img "}
                             src="../../public/icons/ic_close_black_24dp_2x.png"
                             onClick={this.deleteNote.bind(this, note.id)}
                        />
                        <CardHeader
                            titleColor={grey500}
                            title={note.title}
                            style={{ textDecoration: (note.done ? 'line-through' : 'none') }}

                        />
                        <p  style={{ textDecoration: (note.done ? 'line-through' : 'none') }}>
                            {note.note}
                        </p>
                        <span style={{
                            color: 'gray',
                            fontSize: '12px',
                            display: 'inline-block',
                            marginBottom: '10px'
                        }}
                        >
                            {date.toLocaleString("ru", date.options)}
                        </span>
                        <FlatButton style={{float: 'right'}}
                                    label={note.done ? 'Undone' : 'Done'}
                                    onClick={this.handleButtonClick.bind(this, note.id)}
                        />
                    </div>
                </Link>
            </div>

            }
        )
        return <div>{listOfNotes}</div>
    }
};


