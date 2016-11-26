import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

const customContentStyle = {
    width: '80%',
    maxWidth: 'none'
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
        let btnDoneUndone = (<FlatButton
                                label={note.done ? 'Undone' : 'Done'}
                                onClick={this.handleToggleNote.bind(this, note.id)}
                            />),

            btnDelete = (<Link to="/">
                            <FlatButton
                                label='Delete'
                                onClick={this.handleDeleteNote.bind(this, note.id)}
                            />
                        </Link>),

            btnClose = (<Link to="/">
                            <FlatButton
                                label="Close"
                                onClick={this.handleClose}
                            />
                        </Link>);

        let actions;
        if (note.errorPage){
            actions = [btnClose]
        } else if (note.done) {
            actions = [btnDoneUndone, btnDelete ,btnClose];
        } else {
            actions = [btnDoneUndone, btnClose];
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



