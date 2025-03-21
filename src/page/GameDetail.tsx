import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useNavigate, useParams } from "react-router-dom";
import { axiosGamesDetail } from "../redux/slices/thunk/gamesThunks";
import { Loading } from "../Components/Loading";
import { useEffect } from "react";
import { setGames } from "../redux/slices/gameSlice";


const API_KEY = import.meta.env.VITE_API_KEY

export const GameDetail = () => {
  const { isLoading, gameDetail, } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const getGameDetail = () => {
    if (typeof slug === "string") {
      dispatch(axiosGamesDetail(slug));
    }
  };

  useEffect(() => {
    getGameDetail()
  }, [])

  const handleBack = () => {
    navigate(-1);
    dispatch(setGames());
  };

  return (
    <div>
      <div>
        <Loading isLoading={isLoading} />
      </div>
      <h1>{gameDetail?.name}</h1>
      <div className="row mt-5">
        <div className="col-6">
          <img
            src={gameDetail?.background_image}
            alt={gameDetail?.name_original}
            className="img-thumbnail"
            height="300px"
          /> 
        </div>
        <div className="col-6">
          <p><b>Titulo Original: </b>{gameDetail?.name_original}/</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Genero: </b>{gameDetail?.genres[0].name}</li>
            <li className="list-group-item"><b>Rating: </b>{gameDetail?.rating} de {gameDetail?.rating_top}</li>
            <li className="list-group-item"><b>Año de lanzamiento: </b>{gameDetail?.released.toString()}</li>
            <li className="list-group-item"><b>Plataformas disponibles: </b>{
              gameDetail?.platforms.map((platform) => (
                <li className="list-group-item" key={platform.platform.id}>{platform.platform.name}</li>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className=" col-12" style={{ alignItems: "center" }}>
          <h3>Trailer del Juego</h3>
          {
            gameDetail?.clip === null
              ? <h6>Clip no disponible</h6>
              : <video width="640" height="480" controls>
                <source src={`https://api.rawg.io/api/games/${gameDetail?.id}/movies?key=${API_KEY}`} type="video/mp4" />
              </video>
          }
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary mt-3"
          onClick={handleBack}
        >
          Volver
        </button>
      </div>
    </div>
  );
};
