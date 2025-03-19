import { useEffect } from 'react'
import './App.css'
import { axiosGamesThunk } from "./redux/slices/thunk/gamesThunks"
import { useAppDispatch, useAppSelector } from './redux/hook'


const App = () => {
  const { games, isLoading } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch()

  useEffect(() => {
    // const game = async () => {
    //   await axiosGames()
    // }
    // game()
    dispatch(axiosGamesThunk())
  }, [])

  return (
    <div>
      {
        isLoading
          ? (<span>cargando</span>)
          : (<></>)
      }
      <ul>
        {
          games.map((game: any) => (
            <li key={game.id}>
              {game.name}
              <img src={game.image.small_url} alt="" />
            </li>
          ))
        }
      </ul>
    </div>
  )

}
export default App

// https://www.giantbomb.com/api/games/?api_key=748f77de68ce63dbcbc60e6ddd09ff90d34a8dea