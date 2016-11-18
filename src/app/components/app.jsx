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
        <button className="add-note" onClick={this.addNote.bind(this)}>
          +
        </button>
        <Notes
          notes={this.state.notes}
          editNote={this.editNote.bind(this)}
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

  editNote(id, task) {
    let notes = this.state.notes;
    notes.forEach(note => {
      if (note.id === id) {
        note.task = task;
      }
    });
    this.setState({
      notes: notes,
    });
  }

  deleteNote(id) {
    let notes = this.state.notes;
    this.setState({
      notes: notes.filter(note => {
        return note.id !== id;
      }),
    });
  }
}

export default App;
