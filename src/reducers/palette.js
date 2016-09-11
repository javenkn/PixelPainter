const initialState =
{
  colors:
  [
   ['red', 'orange', 'yellow'],
   ['green', 'blue', 'violet'],
   ['black', 'white', 'pink']
  ],
  selectedColor: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_COLOR':
      const newState = state;
      newState.selectedColor = action.data.color;
      return newState;
    default:
      return state;
  }
};

export default reducer;