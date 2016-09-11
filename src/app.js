import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PixelPainterApp } from './containers';

ReactDOM.render(
  <PixelPainterApp />,
  document.getElementById('app')
);