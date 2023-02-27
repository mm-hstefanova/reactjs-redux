import { createSlice } from '@reduxjs/toolkit';

// Counter
const initialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state, action) {
      // we are allowed to mutate the state, because redux toolkit will clone the state behind the scenes
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
