import axios, { AxiosError, AxiosResponse } from "axios"
import { setGames, startLoadingGames } from "../gameSlice"
import { AppDispatch, Thunk } from "../../store"


const api_key = "748f77de68ce63dbcbc60e6ddd09ff90d34a8dea"

export const axiosGames = async (dispatch: AppDispatch): Promise<AxiosResponse | AxiosError> => {
  dispatch(startLoadingGames())
  try {
    const { data }: AxiosResponse = await axios.get(`/api/games/?api_key=${api_key}&format=json&limit=20`)
    dispatch(setGames(data.results))
    return data.results
  } catch (error) {
    return error as AxiosError
  }
}

export const axiosGamesThunk = (): Thunk => {
  return async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(startLoadingGames())
    try {
      const { data }: AxiosResponse = await axios.get(`/api/games/?api_key=${api_key}&format=json&limit=20`)
      console.log("data", data)
      dispatch(setGames(data.results))
      return data.results
    } catch (error) {
      return error as AxiosError
    }
  }
}
