import axios from "axios"
import { filteredByPlatforms, setGames, startLoadingGames } from "../gameSlice"


const api_key = "748f77de68ce63dbcbc60e6ddd09ff90d34a8dea"

export const axiosGames = () => {
  return async (dispatch: any) => {
    dispatch(startLoadingGames())
    const { data } = await axios.get(`/api/games/?api_key=${api_key}&format=json&limit=20`)
    dispatch(setGames(data.results))
  }
}

// export const axiosGames = async (): Promise<Game[]> => {
//   const { data } = await axios.get(`/api/games/?api_key=${api_key}&format=json&limit=20`)
//   console.log(data)
//   return data as Game[]
// } 