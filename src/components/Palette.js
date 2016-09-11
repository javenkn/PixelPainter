import React from 'react';
import Pixel from './Pixel';

export default class Palette extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const width = this.props.width;
    const height = this.props.height;
    const rowArr = [];
    const paletteGrid = [];
    for(var i = 0; i < height; i++) {
      rowArr[i] = [];
      for(var j = 0; j < width; j++) {
        rowArr[i].push(
          <Pixel
            key={ j }
          />
        );
      }
      paletteGrid.push(
        <div
          key={ i }
          className='row'
        >
          { rowArr[i] }
        </div>
      );
    }
    return (
      <div
        id='palette'
        style={
          {
            display: 'inline-block'
          }
        }
      >
        { paletteGrid }
      </div>
    );
  }
}