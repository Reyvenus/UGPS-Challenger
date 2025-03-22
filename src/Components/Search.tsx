import { SubmitHandler, useForm } from "react-hook-form";
import { axiosGames } from "../redux/slices/thunk/gamesThunks";
import { useAppDispatch } from "../redux/hook";
import { setGames } from "../redux/slices/gameSlice";


interface Props {
  isLoading: boolean
};

interface FormValue {
  name: string
};

export const Search: React.FC<Props> = ({ isLoading }) => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    if (!data.name) return;
    dispatch(setGames());
    dispatch(axiosGames({ searchGame: data.name }));
  }

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end">
        <form
          onSubmit={handleSubmit(onSubmit)}
          hidden={isLoading}
          action="">
          <input
            id="name"
            type="text"
            placeholder="Search a game"
            autoComplete="off"
            className="form-control"
            {...register("name")}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          <button type="submit" className=" btn btn-outline-primary mb-3 mt-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
