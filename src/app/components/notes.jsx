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
                task={note.task}
                deleteNote={() => this.props.deleteNote(note.id)} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Notes;
