import Notes from './notes.jsx';
import React from 'react';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React',
        },
        {
          id: uuid.v4(),
          task: 'Do laundry',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.addNote.bind(this)}>+</button>
        <Notes
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)} />
      </div>
    );
  }

  addNote() {
    let notes = this.state.notes;
    notes.push({
      id: uuid.v4(),
      task: 'New task',
    });
    this.setState({
      notes: notes,
    });
  }

  deleteNote(noteId) {
    let notes = this.state.notes;
    this.setState({
      notes: notes.filter(note => {
        return note.id !== noteId;
      }),
    });
  }
}

export default App;
