import { SubmitHandler, useForm } from "react-hook-form"
import { axiosGames } from "../redux/slices/thunk/gamesThunks"


interface Props {
  isLoading: false
  dispatch: () => void
}

interface FormValue {
  name: string
}

export const Search: React.FC<Props> = ({ dispatch, isLoading }) => {

  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<FormValue>()

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    // dispatch(axiosGames(1, data, ""))
    console.log(data)
  }

  return (
    <div className="row">

      <div className="col-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          hidden={isLoading}
          action="">
          <input
            id="name"
            type="text"
            placeholder="Search a game"
            autoComplete="off"
            {...register("name")}

          />
          <button type="submit" className=" btn btn-outline-primary mt-1">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

