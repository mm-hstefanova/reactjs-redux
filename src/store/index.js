import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter-slice';
import { authSlice } from './auth-slice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + action.step,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - action.step,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

export default store;
