import InlineEditable from './inline-editable.jsx';
import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <InlineEditable
          value={this.props.task}
          onFinishEditing={this.editNote.bind(this)} />
        <button className="delete-note" onClick={this.deleteNote.bind(this)}>
          x
        </button>
      </div>
    );
  }

  editNote(task) {
    this.props.editNote(this.props.id, task);
  }

  deleteNote(e) {
    this.props.deleteNote(this.props.id);
  }
}

export default Note;
