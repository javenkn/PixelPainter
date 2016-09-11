import { combineReducers, compose } from 'redux';
import canvasReducer from './canvas';
import paletteReducer from './palette';

const rootReducer = combineReducers({
  canvas: canvasReducer,
  palette: paletteReducer
});

const finalCreateStore = compose(
  (window.devToolsExtension)
    ? window.devToolsExtension
    : function (x) { return x; }
);

const store = finalCreateStore(rootReducer, {});

export default store;