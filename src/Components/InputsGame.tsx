import { SubmitHandler, useForm } from "react-hook-form"
import { setGames } from "../redux/slices/gameSlice";
import { axiosGamesFilter } from "../redux/slices/thunk/gamesThunks";
import { useAppDispatch } from "../redux/hook";


interface FilterValues {
  platform: string
  genre: string
  tag: string
};

export const InputsGame = () => {

  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FilterValues>();

  const onFilter: SubmitHandler<FilterValues> = (data) => {
    dispatch(setGames());
    dispatch(axiosGamesFilter(data));
    console.log(data);
  };

  return (
    <div>
      <div>
        <h4 className="text-start">Category Filter:</h4>
      </div>
      <form onSubmit={handleSubmit(onFilter)} className="container mt-3">
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <select {...register("genre")} className="form-select">
              <option value="">Select Genres</option>
              <option value="adventure">Adventure</option>
              <option value="fighting">Fighting</option>
              <option value="action">Action</option>
              <option value="strategy">Strategy</option>
              <option value="shooter">Shooter</option>
              <option value="role-playing-games-rpg">RPG</option>
            </select>
          </div>

          <div className="col-md-4">
            <select {...register("platform")} className="form-select">
              <option value="">Select Platforms</option>
              <option value="21">Android</option>
              <option value="1">Xbox One</option>
              <option value="10">Wii U</option>
              <option value="16">Play Station 3</option>
              <option value="4">Play Station 5</option>
              <option value="4">PC</option>
            </select>
          </div>
          <div className="col-md-4">
            <select {...register("tag")} className="form-select">
              <option value="">Select Tag</option>
              <option value="singleplayer">Singleplayer</option>
              <option value="multiplayer">Multiplayer</option>
              <option value="exclusive">Exclusive</option>
              <option value="kids">Kids</option>
              <option value="console">Console</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div >
      </form >
    </div>
  );
};
