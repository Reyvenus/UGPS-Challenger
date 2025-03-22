import { GameList } from '../types/types';
import { Container, Row, Col } from "react-bootstrap";
import { CardGame } from './CardGame';
import { Loading } from './Loading';
import { Dispatch } from '@reduxjs/toolkit';
import { Search } from './Search';

interface Props {
  games: GameList[]
  isLoading: boolean
  dispatch: Dispatch
};

export const ListCardGame: React.FC<Props> = ({ games, isLoading, dispatch }) => {

  return (
    <Container className='mt-5'>
      <Loading
        isLoading={isLoading}
      />
      <Search
        isLoading={isLoading}
        dispatch={dispatch}
      />
      <Row>
        {
          games.map((game: GameList) => (
            <Col key={game.id} md={3} sm={6} xs={12} className='mb-4' >
              <CardGame
                game={game}
                dispatch={dispatch}
              />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
};
