import axios, { AxiosError, AxiosResponse } from "axios"
import { getGameDetail, getGames, startLoadingGames } from "../gameSlice"
import { Thunk } from "../../store"


interface AxiosGames {
  page?: number
  searchGame?: string
  genre?: string
  platform?: string
  tag?: string
}

const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = import.meta.env.VITE_API_KEY;

export const axiosGames = ({
  page = 1,
  searchGame = "",
}: AxiosGames): Thunk => {
  return async (dispatch) => {
    if (page === 0) return;
    dispatch(startLoadingGames());
    try {
      const { data }: AxiosResponse = await axios.get(`${BASE_URL}?key=${API_KEY}&ordering=-metacritic&page=${page}&search=${searchGame}`);
      dispatch(getGames({ games: data.results, page: page }));
    } catch (error) {
      return error as AxiosError;
    };
  };
};

export const axiosGamesDetail = (slug: string): Thunk => {
  return async (dispatch) => {
    dispatch(startLoadingGames());
    try {
      const { data }: AxiosResponse = await axios.get(`${BASE_URL}/${slug}?key=${API_KEY}`);
      dispatch(getGameDetail(data));
    } catch (error) {
      return error as AxiosError;
    };
  };
};

export const axiosGamesFilter = (dataFilter: AxiosGames): Thunk => {
  return async (dispatch) => {
    const { genre, page, platform, tag } = dataFilter;
    if (page === 0) return
    dispatch(startLoadingGames());
    try {
      const params = new URLSearchParams();

      params.append("ordering", "-metacritic");
      params.append("page", page?.toString() || "1");

      if (platform) params.append("platforms", platform);
      if (genre) params.append("genres", genre);
      if (tag) params.append("search", tag);

      const url = `${BASE_URL}?key=${API_KEY}&${params.toString()}`;

      const { data }: AxiosResponse = await axios.get(url);
      dispatch(getGames({ games: data.results, page: page || 1 }));
    } catch (error) {
      return error as AxiosError;
    };
  };
};
