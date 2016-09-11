import React from 'react';
import Pixel from './Pixel';
import { connect } from 'react-redux';
import {
  changeColor,
  clearCanvas
} from '../actions/canvas';

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

class Canvas extends React.Component{
  constructor(props) {
    super(props);
    this.colorPixel = this.props.changeColor.bind(this, 1, 1, 'red');
  }
  render() {
    console.log(this.props.canvas[0][0]);
    const width = this.props.canvas.length;
    const height = this.props.canvas[0].length;
    const rowArr = [];
    const canvasGrid = [];
    for(var i = 0; i < height; i++) {
      rowArr[i] = [];
      for(var j = 0; j < width; j++) {
        console.log(this.props.canvas[i][j]);
        rowArr[i].push(
          <Pixel
            key={ j }
            handleClick={ this.colorPixel }
            color={ this.props.canvas[i][j] }
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
    return (
      <div
        id='canvas'
      >
        { canvasGrid }
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  changeColor,
  clearCanvas
})(Canvas);