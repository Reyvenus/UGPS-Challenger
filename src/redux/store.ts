import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import gameSlice from "./slices/gameSlice";


export const store = configureStore({
  reducer: {
    game: gameSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<any>
>;
