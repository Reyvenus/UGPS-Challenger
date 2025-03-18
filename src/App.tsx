import { useEffect, useState } from 'react'
import './App.css'
import { axiosGames } from "./redux/slices/thunk/gamesThunks"
// import { useSelector } from 'react-redux'
// import { RootState } from '@reduxj'
import { useAppDispatch, useAppSelector } from './redux/hook'


// const [games, setGames] = useState<any>([])
// console.log(games)
// const getGames = async () => {
//   setTimeout(async () => {
//     const data = await axiosGames()
//     setGames(data)
//   }, 1000);
// }

// useEffect(() => {
//   getGames()
// }, [])

function App() {

  const { games, isLoading } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(axiosGames())
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