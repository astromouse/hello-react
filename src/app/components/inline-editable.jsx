import React from 'react';

class InlineEditable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  render() {
    if (!this.state.isEditing) {
      return (
        <span
          className="inline-editable displaying"
          onClick={this.startEditing.bind(this)}>
          {this.props.value}
        </span>
      );
    }

    return (
      <input
        className="inline-editable editing"
        type="text"
        defaultValue={this.props.value}
        autoFocus="true"
        onKeyPress={this.maybeFinishEditingByEnterKey.bind(this)}
        onBlur={this.finishEditing.bind(this)} />
    );
  }

  startEditing(e) {
    this.setState({
      isEditing: true,
    });
    if (this.props.onStartEditing) {
      this.props.onStartEditing();
    }
  }

  maybeFinishEditingByEnterKey(e) {
    if (e.key !== 'Enter') {
      return;
    }
    this.finishEditing(e);
  }

  finishEditing(e) {
    if (this.props.onFinishEditing) {
      this.props.onFinishEditing(e.target.value);
    }
    this.setState({
      isEditing: false,
    });
  }
}

export default InlineEditable;
