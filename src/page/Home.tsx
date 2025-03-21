import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { axiosGames } from "../redux/slices/thunk/gamesThunks";
import { ButtonNextPage } from "../Components/ButtonNextPage";
import { ListCardGame } from "../Components/ListCardGame";

export const Home = () => {

  const { games, isLoading, page } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  console.log("gameStateRedux", games)
  useEffect(() => {
    dispatch(axiosGames())
  }, []);

  const nextPage = (page: number) => {
    dispatch(axiosGames(page))
  };

  const prevPage = (page: number) => {
    dispatch(axiosGames(page))
  };

  return (
    <div>
      <div>
        <div>
          <div className="col-12">
          </div>
        </div>
        <hr />
      </div>
      <div>
        <h1>Rancking de Juegos segun Metacritic</h1>
        <ListCardGame
          games={games}
          isLoading={isLoading}
          dispatch={dispatch}
        />
        <ButtonNextPage
          page={page}
          isLoading={isLoading}
          nextPage={nextPage}
          prevPage={prevPage}
        >
        </ButtonNextPage>
      </div>
    </div>
  )
};
