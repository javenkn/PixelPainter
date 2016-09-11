const initialState =
[
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
 ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
];

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_COLOR':
      const stateChange = state;
      stateChange[action.data.x][action.data.y] = action.data.color;
      return stateChange.slice();
    case 'CLEAR_CANVAS':
      return state;
    default:
      return state;
  }
};

export default reducer;