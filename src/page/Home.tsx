import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { axiosGames } from "../redux/slices/thunk/gamesThunks";
import { ButtonNextPage } from "../Components/ButtonNextPage";
import { ListCardGame } from "../Components/ListCardGame";
import { InputsGame } from "../Components/InputsGame";


export const Home = () => {

  const { games, isLoading, page } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(axiosGames({ page: 1 }));
  }, []);

  const nextPage = (page: number) => {
    dispatch(axiosGames({ page }));
  };

  const prevPage = (page: number) => {
    dispatch(axiosGames({ page }));
  };

  return (
    <div>
      <h1>Rancking de Juegos segun Metacritic</h1>
      <hr />
      <div className="col-12">
        <InputsGame
        />
      </div>
      <hr />
      <div>
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
  );
};
