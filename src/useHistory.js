import { useReducer, useCallback } from 'react';

const initialState = {
  // Previous state (undo)
  past: [],
  // Current state
  present: null,
  // Future state (redo)
  future: []
};

// Reducer (reduxy) function
const reducer = (state, action) => {
  const { past, present, future } = state;

  switch (action.type) {
    case 'UNDO':
      const previous = past[past.length - 1];
      // grabs previous state and pops off the latest past
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      };
    case 'REDO':
      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };
    case 'SET':
      const { newPresent } = action;
      // if nothing changed
      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      };
    case 'CLEAR':
      const { initialPresent } = action;

      return {
        ...initialState,
        present: initialPresent
      };
  }
};

// Hook function
const useHistory = initialPresent => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  // Callback functions
  // Using useCallback to prevent unecessary re-renders by memoization

  const undo = useCallback(
    () => {
      if (canUndo) {
        dispatch({ type: 'UNDO' });
      }
    },
    [canUndo, dispatch]
  );

  const redo = useCallback(
    () => {
      if (canRedo) {
        dispatch({ type: 'REDO' });
      }
    },
    [canRedo, dispatch]
  );

  const set = useCallback(newPresent => dispatch({ type: 'SET', newPresent }), [
    dispatch
  ]);

  const clear = useCallback(() => dispatch({ type: 'CLEAR', initialPresent }), [
    dispatch
  ]);

  // If needed we could also return past and future state
  return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
};

export default useHistory;
