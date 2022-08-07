import Xiang from '../../src/pieces/xiang'
import Zu from '../../src/pieces/zu'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('Xiang', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let xiang = new Xiang({id: 24, player_number: 1, type: 'xiang' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: xiang});
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

      let result = xiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must return occupied by opponent squares', () => {
      let xiang = new Xiang({id: 24, player_number: 1, type: 'xiang' }); 
      let zu = new Zu({id: 25, player_number: 2, type: 'zu' }); 

      let origin = new Square({id: 'e2', x: 4, y: 8, piece: xiang});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: zu});
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

      let result = xiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must not return occupied by player squares', () => {
      let xiang = new Xiang({id: 24, player_number: 1, type: 'xiang' }); 
      let zu = new Zu({id: 25, player_number: 1, type: 'zu' }); 

      let origin = new Square({id: 'e2', x: 4, y: 8, piece: xiang});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: zu});
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

      let result = xiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });

    it('must not return squares blocked by adjacent', () => {
      let xiang = new Xiang({id: 24, player_number: 1, type: 'xiang' }); 
      let zu = new Zu({id: 25, player_number: 2, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: xiang});
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: zu});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          diagonalForward,
          diagonalFar
        ]
      });

      let result = xiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
    });

    it('must not returns squares on other side of river', () => {
      let xiang = new Xiang({id: 24, player_number: 1, type: 'xiang' }); 
      let origin = new Square({id: 'c5', x: 2, y: 5, piece: xiang});
      let diagonalOtherSide = new Square({id: 'a7', x: 0, y: 3, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          diagonalOtherSide
        ]
      });

      let result = xiang.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(diagonalOtherSide);
    });
  });
});

