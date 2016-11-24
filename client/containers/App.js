/**
 * Created by Igor on 14.11.2016.
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CreaterNotes from './CreaterNotes';
import Notes from './Notes';

import './App.scss';




export default class App extends Component {
    render(){
        return(
            <MuiThemeProvider >
                <div className="App">
                    < CreaterNotes />
                    < Notes />
                </div>
            </MuiThemeProvider>

        )
    }
}

