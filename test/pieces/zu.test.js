import Zu from '../../src/pieces/zu'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('Zu', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let zu = new Zu({id: 24, player_number: 1, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: zu});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
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
          side,
          diagonalBack,
          back
        ]
      });

      let result = zu.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must return occupied by opponent squares', () => {
      let zu = new Zu({id: 24, player_number: 1, type: 'zu' }); 
      let zuB = new Zu({id: 25, player_number: 2, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: zu});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zuB});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
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
          side,
          diagonalBack,
          back
        ]
      });

      let result = zu.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must not return occupied by player squares', () => {
      let zu = new Zu({id: 24, player_number: 1, type: 'zu' }); 
      let zuB = new Zu({id: 25, player_number: 1, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: zu});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zuB});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
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
          side,
          diagonalBack,
          back
        ]
      });

      let result = zu.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });

    it('must return side squares when on other side of river', () => {
      let zu = new Zu({id: 24, player_number: 1, type: 'zu' }); 
      let origin = new Square({id: 'e6', x: 4, y: 4, piece: zu});
      let forward = new Square({id: 'e7', x: 4, y: 3, piece: null});
      let far = new Square({id: 'e8', x: 4, y: 2, piece: null});
      let diagonalForward = new Square({id: 'f7', x: 5, y: 3, piece: null});
      let side = new Square({id: 'f6', x: 5, y: 4, piece: null});
      let diagonalBack = new Square({id: 'f5', x: 5, y: 5, piece: null});
      let back = new Square({id: 'e5', x: 4, y: 5, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          side,
          diagonalBack,
          back
        ]
      });

      let result = zu.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });
  });
});

