import axios, { AxiosError, AxiosResponse } from "axios"
import { getGameDetail, getGames, startLoadingGames } from "../gameSlice"
import { Thunk } from "../../store"


const api_key = "key=a6e8563385b34bdf9f23882aee8aba2f"
const BASE_URL = "https://api.rawg.io/api/games"
//https://api.rawg.io/api/games/28?key=a6e8563385b34bdf9f23882aee8aba2f

export const axiosGames = (page = 1): Thunk => {
  return async (dispatch) => {
    if (page === 0) return
    dispatch(startLoadingGames())
    try {
      const { data }: AxiosResponse = await axios.get(`${BASE_URL}?${api_key}&ordering=-metacritic&page=${page}`)
      dispatch(getGames({ games: data.results, page: page }))
    } catch (error) {
      return error as AxiosError
    };
  };
};
export const axiosGamesDetail = (slug: string): Thunk => {
  return async (dispatch) => {
    dispatch(startLoadingGames())
    try {
      const { data }: AxiosResponse = await axios.get(`${BASE_URL}/${slug}?${api_key}`)
      console.log("gameDetail", data)
      dispatch(getGameDetail(data))
    } catch (error) {
      return error as AxiosError
    };
  };
};

// https://api.rawg.io/api/games?key=a6e8563385b34bdf9f23882aee8aba2f&ordering=-metacritic
