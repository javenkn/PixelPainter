import React from 'react';
import { Canvas, Palette } from '../components';


export default class PixelPainterApp extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div id='PixelPainterApp'>
        Welcome to Pixel Painter Redux!
        <Canvas />
        <Palette />
      </div>
    );
  }
}