import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

const customContentStyle = {
    width: '80%',
    maxWidth: 'none',
};

export default class ModalDialog extends React.Component {
    state = {
        open: true,
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleToggleNote = (id) => {
            this.props.toggleNote(id)
    }

    handleDeleteNote = (id) => {
            this.props.deleteNote(id);
            this.setState({open: false});
    }

    render() {
        let { note } = this.props;

        let actions = [
            <FlatButton
                label={note.done ? 'Undone' : 'Done'}
                onClick={this.handleToggleNote.bind(this, note.id)}
            />
        ];

        if (note.done) {
            actions.push(<Link to="/">
                    <FlatButton
                    label='Delete'
                    onClick={this.handleDeleteNote.bind(this, note.id)}
                    />
                </Link>,
                <Link to="/">
                    <FlatButton
                        label="Close"
                        onClick={this.handleClose}
                    />
                </Link>);
        } else {
            actions.push(<Link to="/">
                    <FlatButton
                        label="Close"
                        onClick={this.handleClose}
                    />
                </Link>)
        }

        return (<Dialog
                bodyStyle={{textDecoration: (note.done ? 'line-through' : 'none')}}
                title={note.title}
                actions={actions}
                modal={true}
                contentStyle={customContentStyle}
                open={this.state.open}
            >
                {note.note}
            </Dialog>
        );
    }
}



