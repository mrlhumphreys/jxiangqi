import Jiang from '../../src/pieces/jiang'
import Zu from '../../src/pieces/zu'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('Jiang', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let jiang = new Jiang({id: 24, player_number: 1, type: 'jiang' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: jiang});
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

      let result = jiang.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).toContainEqual(back);
    });

    it('must return occupied by opponent squares', () => {
      let jiang = new Jiang({id: 24, player_number: 1, type: 'jiang' }); 
      let zu = new Zu({id: 1, player_number: 2, type: 'zu'});
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: jiang});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zu});
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

      let result = jiang.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).toContainEqual(back);
    });

    it('must not return occupied by player squares', () => {
      let jiang = new Jiang({id: 24, player_number: 1, type: 'jiang' }); 
      let zu = new Zu({id: 1, player_number: 1, type: 'zu'});
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: jiang});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zu});
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

      let result = jiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).toContainEqual(back);
    });

    it('must not return squares outside the palace', () => {
      let jiang = new Jiang({id: 24, player_number: 1, type: 'jiang' }); 
      let origin = new Square({id: 'f3', x: 5, y: 7, piece: jiang});
      let forward = new Square({id: 'f4', x: 5, y: 6, piece: null});
      let side = new Square({id: 'g3', x: 6, y: 7, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          side
        ]
      });

      let result = jiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(side);
    });
  });
});

