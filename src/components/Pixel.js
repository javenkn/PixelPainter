import React from 'react';

export default class Pixel extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div
        onClick={ this.props.handleClick }
        className='pixel'
        style={
          {
           backgroundColor: this.props.color,
           border: '1px solid black',
           width: '35px',
           height: '35px',
           display: 'inline-block'
          }
        }
      />
    );
  }
}