/**
 * Created by Igor on 14.11.2016.
 */
import React, {Component} from "react";
import CreatorNotes from "./CreatorNotes";
import Notes from "./Notes";
import "./App.scss";

export default class App extends Component {
    render() {
        return (<div className="App">
                    < CreatorNotes />
                    < Notes />
                    {this.props.children}
                </div>
        )
    }
}





