import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import uiReducer from './ui/uiSlices';
import calendarReducer from './calendar/calendarSlice';

export const store = configureStore({
  reducer: {
        calendar: calendarReducer,
        ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck : false
  })
})