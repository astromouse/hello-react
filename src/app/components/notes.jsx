import Note from './note.jsx';
import React from 'react';

class Notes extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map(note => {
          return (
            <li key={note.id}>
              <Note
                id={note.id}
                task={note.task}
                editNote={this.props.editNote}
                deleteNote={this.props.deleteNote} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Notes;
