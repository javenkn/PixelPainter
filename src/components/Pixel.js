import React from 'react';

export default class Pixel extends React.Component {
  render () {
    return (
      <div className='pixel'
        style={
          {border: '1px solid black',
           width: '35px',
           height: '35px',
           display: 'inline-block'
         }
        }
      />
    );
  }
}