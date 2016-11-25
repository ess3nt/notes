/**
 * Created by Igor on 14.11.2016.
 */
import React, { Component } from 'react';

import CreaterNotes from './CreaterNotes';
import Notes from './Notes';

import './App.scss';

export default class App extends Component {
    render() {
        return (<div className="App">
                    < CreaterNotes />
                    < Notes />
                    {this.props.children}
                </div>
        )
    }
}





