import React from 'react';
import Pixel from './Pixel';

export default class Canvas extends React.Component{
  render() {
    const width = 10;
    const height = 10;
    const rowArr = [];
    const canvasGrid = [];
    for(var i = 0; i < height; i++) {
      rowArr[i] = [];
      for(var j = 0; j < width; j++) {
        rowArr[i].push(
          <Pixel
            key={ j }
          />
        );
      }
      canvasGrid.push(
        <div
          key={ i }
          className='row'
        >
          { rowArr[i] }
        </div>
      );
    }
    console.log(rowArr);
    console.log(canvasGrid);
    return (
      <div id='canvas'>
        { canvasGrid }
      </div>
    );
  }
}