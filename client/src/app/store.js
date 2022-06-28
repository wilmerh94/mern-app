import { authSlice } from '../features/auth/authSlices';
// import ticketReducer from '../features/tickets/ticketSlice';
// import noteReducer from '../features/notes/noteSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
 reducer: {
  auth: authSlice.reducer,
  //   tickets: ticketReducer,
  //   notes: noteReducer,
 },
});
