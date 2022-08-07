import Ju from '../../src/pieces/ju'
import Zu from '../../src/pieces/zu'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('Ju', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let ju = new Ju({id: 24, player_number: 1, type: 'ju' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ju});
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

      let result = ju.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).toContainEqual(back);
    });

    it('must return occupied by opponent squares', () => {
      let ju = new Ju({id: 24, player_number: 1, type: 'ju' }); 
      let zu = new Zu({id: 25, player_number: 2, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ju});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zu});
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

      let result = ju.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).toContainEqual(back);
    });
    
    it('must not return occupied by player squares', () => {
      let ju = new Ju({id: 24, player_number: 1, type: 'ju' }); 
      let zu = new Zu({id: 25, player_number: 1, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ju});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zu});
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

      let result = ju.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).toContainEqual(back);
    });
  });
});

