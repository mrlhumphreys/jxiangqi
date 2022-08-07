import Shi from '../../src/pieces/shi'
import Zu from '../../src/pieces/zu'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('Shi', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let shi = new Shi({id: 24, player_number: 1, type: 'shi' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: shi});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let side = new Square({id: 'f2', x: 5, y: 8, piece: null});
      let diagonalBack = new Square({id: 'f1', x: 5, y: 9, piece: null});
      let back = new Square({id: 'e1', x: 4, y: 9, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          diagonalFar,
          side,
          diagonalBack,
          back
        ]
      });

      let result = shi.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must return occupied by opponent squares', () => {
      let shi = new Shi({id: 24, player_number: 1, type: 'shi' }); 
      let zu = new Zu({id: 23, player_number: 2, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: shi});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: zu});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let side = new Square({id: 'f2', x: 5, y: 8, piece: null});
      let diagonalBack = new Square({id: 'f1', x: 5, y: 9, piece: null});
      let back = new Square({id: 'e1', x: 4, y: 9, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          diagonalFar,
          side,
          diagonalBack,
          back
        ]
      });

      let result = shi.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must not return occupied by player squares', () => {
      let shi = new Shi({id: 24, player_number: 1, type: 'shi' }); 
      let zu = new Zu({id: 23, player_number: 1, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: shi});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: zu});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let side = new Square({id: 'f2', x: 5, y: 8, piece: null});
      let diagonalBack = new Square({id: 'f1', x: 5, y: 9, piece: null});
      let back = new Square({id: 'e1', x: 4, y: 9, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          diagonalFar,
          side,
          diagonalBack,
          back
        ]
      });

      let result = shi.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must not return squares outside palace', () => {
      let shi = new Shi({id: 24, player_number: 1, type: 'shi' }); 
      let origin = new Square({id: 'f3', x: 5, y: 7, piece: shi});
      let diagonal = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          diagonal 
        ]
      });

      let result = shi.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(diagonal);
    });
  });
});

