import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameList, GameState } from "../../types/types";
import { GameDetail } from "../../types/gameDetail";


const initialState: GameState = {
  games: [],
  filteredGames: [],
  gameDetail: null,
  page: 0,
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
    getGames: (state, action: PayloadAction<{ games: GameList[], page: number }>) => {
      state.isLoading = false,
        state.games = action.payload.games,
        state.page = action.payload.page
    },
    filteredByPlatforms: (state, action: PayloadAction<string>) => {
      state.isLoading = false,
        state.filteredGames = state.games.filter(({ platforms }) => (
          platforms[0].platform.name === action.payload
        ))
    },
    getGameDetail: (state, action: PayloadAction<GameDetail>) => {
      state.isLoading = false
      state.gameDetail = action.payload
    },
    setGames: (state) => {
      state.gameDetail = null,
      state.games = []
    }
  }
});

export default gameSlice.reducer;
export const { 
  getGames,
  filteredByPlatforms,
  startLoadingGames,
  getGameDetail,
  setGames
} = gameSlice.actions;
