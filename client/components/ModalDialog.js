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

    handlToggleNote = (id, done, e) => {
        if(done) {
            this.props.deleteNote(id);
            this.setState({open: false});
        } else {
            this.props.toggleNote(id)
        }
    }

    render() {
        let { note } = this.props;

        let buttonToggle = () => {
            if ( note.done){
                return (
                    <Link to="/">
                        <FlatButton
                            label='Delete'
                            onClick={this.handlToggleNote.bind(this, note.id, note.done)}
                        />
                    </Link>
                )
            } else  {
                return (<FlatButton
                        label='Done'
                        onClick={this.handlToggleNote.bind(this, note.id, note.done)}
                    />
                )
            }
        }

        const actions = [
            <Link to="/">
                <FlatButton
                    label="Cancel"
                    onClick={this.handleClose}
                />
            </Link>,
            buttonToggle()
        ];

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



