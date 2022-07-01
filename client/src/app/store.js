import { authSlice } from '../features/auth/authSlices';
// import noteReducer from '../features/notes/noteSlice';
import { configureStore } from '@reduxjs/toolkit';
import { ticketSlice } from '../features/tickets/ticketSlice';

export const store = configureStore({
 reducer: {
  auth: authSlice.reducer,
  tickets: ticketSlice.reducer,
  //   notes: noteReducer,
 },
});
