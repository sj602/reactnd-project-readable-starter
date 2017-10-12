import React, { Component } from 'react';

class Header extends Component {
  render() {
    const headerStyle = {
      color: 'blue',
      textAlign: 'center',
    };

    return (
      <div>
        <div className='page-title'>
          <h4 style={headerStyle}>Readable</h4>
        </div>
      </div>
    )
  }
}

export default Header;
