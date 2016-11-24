/**
 * Created by Igor on 18.11.2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component'

import Note from '../components/Note'
import * as actions from '../actions'

import './Notes.css'

class Notes extends Component {
    componentDidMount(){
        this.props.fetchNotes();
    }

    render(){
        const masonryOptions = {
            itemSelector: '.card_note',
            columnWidth: 10,
            gutter: 5,
            isFitWidth: true
        };
        const { notes, toggleNote, deleteNote } = this.props;
        return (
            <Masonry
                className='notes_grid'
                options={masonryOptions}
            >
                <Note notes={notes} toggleNote={toggleNote} deleteNote={deleteNote} />
            </Masonry>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, actions)(Notes)