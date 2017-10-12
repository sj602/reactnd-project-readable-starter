import React, { Component } from 'react';

class EditButtons extends Component {
  render() {
    const { onEdit, onDelete } = this.props;
    return (
      <div>
        <button onClick={() => {onEdit()}}>Edit</button>
        <button onClick={() => {onDelete()}}>Delete</button>
      </div>
    );
  }
}

export default EditButtons;
