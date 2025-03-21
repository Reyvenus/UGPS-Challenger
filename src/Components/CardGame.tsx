import { Card } from "react-bootstrap"
import { GameList } from "../types/types"
import { Link } from "react-router-dom"
import { Dispatch } from "@reduxjs/toolkit"
import { setGames } from "../redux/slices/gameSlice"


interface Props {
  game: GameList
  dispatch: Dispatch
}

export const CardGame: React.FC<Props> = ({ game, dispatch }) => {
  return (
    <Card className='h-100 shadow-sm d-flex flex-column align-items-center text-center p-3'>
      <Card.Body className='d-flex flex-column justify-content-center'>
        <Card.Title className='text-center'>
          {game.name}
        </Card.Title>
        <div className='image-container'>
          <Card.Img
            variant='top'
            src={game.background_image}
            alt={game.name}
            className="game-image"
          />
        </div>
        <Card.Footer>
          Puntucacion Metacritic: {game.metacritic}
        </Card.Footer>
        <Link
          to={`/game/${game.slug}`}
          onClick={() => dispatch(setGames())}
        >
          ...Ver mas
        </Link>
      </Card.Body>
    </Card>
  )
}

