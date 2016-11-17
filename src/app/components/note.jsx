import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.task}</span>
        <button onClick={this.deleteNote.bind(this)}>x</button>
      </div>
    );
  }

  deleteNote(e) {
    e.stopPropagation();
    this.props.deleteNote();
  }
}

export default Note;
