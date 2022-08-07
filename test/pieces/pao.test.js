import Pao from '../../src/pieces/pao'
import Square from '../../src/square'
import GameState from '../../src/game_state'
import Zu from '../../src/pieces/zu'

describe('Pao', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let pao = new Pao({id: 24, player_number: 1, type: 'pao' }); 
      let opponentA = new Zu({id: 23, player_number: 2, type: 'zu'});
      let opponentB = new Zu({id: 22, player_number: 2, type: 'zu'});
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: pao});
      let forwardAdjacent = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let forwardOccupied = new Square({id: 'e4', x: 4, y: 6, piece: opponentA});
      let forwardBeyond = new Square({id: 'e5', x: 4, y: 5, piece: null});
      let diagonalAdjacent = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalOccupied = new Square({id: 'g4', x: 6, y: 6, piece: opponentB});
      let diagonalBeyond = new Square({id: 'h5', x: 7, y: 5, piece: null});

      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forwardAdjacent,
          forwardOccupied,
          forwardBeyond,
          diagonalAdjacent,
          diagonalOccupied,
          diagonalBeyond
        ]
      });

      let result = pao.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forwardAdjacent);
      expect(result.squares).not.toContainEqual(forwardOccupied);
      expect(result.squares).toContainEqual(forwardBeyond);
      expect(result.squares).not.toContainEqual(diagonalAdjacent);
      expect(result.squares).not.toContainEqual(diagonalOccupied);
      expect(result.squares).not.toContainEqual(diagonalBeyond);
    });

    it('must not return occupied by player squares', () => {
      let pao = new Pao({id: 24, player_number: 1, type: 'pao' }); 
      let opponentA = new Zu({id: 23, player_number: 2, type: 'zu'});
      let opponentB = new Zu({id: 22, player_number: 2, type: 'zu'});
      let opponentC = new Zu({id: 21, player_number: 2, type: 'zu'});
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: pao});
      let forwardAdjacent = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let forwardOccupied = new Square({id: 'e4', x: 4, y: 6, piece: opponentA});
      let forwardBeyond = new Square({id: 'e5', x: 4, y: 5, piece: opponentC});
      let diagonalAdjacent = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalOccupied = new Square({id: 'g4', x: 6, y: 6, piece: opponentB});
      let diagonalBeyond = new Square({id: 'h5', x: 7, y: 5, piece: null});

      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forwardAdjacent,
          forwardOccupied,
          forwardBeyond,
          diagonalAdjacent,
          diagonalOccupied,
          diagonalBeyond
        ]
      });

      let result = pao.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forwardAdjacent);
      expect(result.squares).not.toContainEqual(forwardOccupied);
      expect(result.squares).not.toContainEqual(forwardBeyond);
      expect(result.squares).not.toContainEqual(diagonalAdjacent);
      expect(result.squares).not.toContainEqual(diagonalOccupied);
      expect(result.squares).not.toContainEqual(diagonalBeyond);
    });
  });
});

