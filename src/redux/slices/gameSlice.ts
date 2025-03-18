import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, GameState } from "../../../types";


const initialState: GameState = {
  games: [],
  filteredGames: [],
  isLoading: false,
  error: null
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startLoadingGames: (state) => {
      state.isLoading = true
    },
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.isLoading = false,
        state.games = action.payload
    },
    filteredByPlatforms: (state, action: PayloadAction<string>) => {
      state.filteredGames = state.games.filter(({ platforms }) => (
        platforms[0].name === action.payload
      )),
        state.isLoading = false
    }
  }
});

export default gameSlice.reducer;
export const { setGames, filteredByPlatforms, startLoadingGames } = gameSlice.actions;


