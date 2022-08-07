import Ma from '../../src/pieces/ma'
import Zu from '../../src/pieces/zu'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('Ma', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let ma = new Ma({id: 24, player_number: 1, type: 'ma' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ma});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let farLeft = new Square({id: 'd4', x: 3, y: 6, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let farRight = new Square({id: 'f4', x: 5, y: 6, piece: null}); 
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let side = new Square({id: 'f2', x: 5, y: 8, piece: null});
      let farSideTop = new Square({id: 'g3', x: 6, y: 7, piece: null});
      let farSide = new Square({id: 'g2', x: 6, y: 8, piece: null});
      let farSideBottom = new Square({id: 'g1', x: 6, y: 9, piece: null});

      let diagonalBack = new Square({id: 'f1', x: 5, y: 9, piece: null});
      let back = new Square({id: 'e1', x: 4, y: 9, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farLeft,
          far,
          farRight,
          diagonalForward,
          diagonalFar,
          farSideTop,
          farSide,
          farSideBottom,
          side,
          diagonalBack,
          back
        ]
      });

      let result = ma.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).toContainEqual(farLeft);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(farRight);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(farSideTop);
      expect(result.squares).not.toContainEqual(farSide);
      expect(result.squares).toContainEqual(farSideBottom);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });

    it('must return occupied by opponent squares', () => {
      let ma = new Ma({id: 24, player_number: 1, type: 'ma' }); 
      let zu = new Zu({id: 32, player_number: 2, type: 'zu' }); 
      
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ma});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let farLeft = new Square({id: 'd4', x: 3, y: 6, piece: zu});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let farRight = new Square({id: 'f4', x: 5, y: 6, piece: null}); 
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let side = new Square({id: 'f2', x: 5, y: 8, piece: null});
      let farSideTop = new Square({id: 'g3', x: 6, y: 7, piece: null});
      let farSide = new Square({id: 'g2', x: 6, y: 8, piece: null});
      let farSideBottom = new Square({id: 'g1', x: 6, y: 9, piece: null});

      let diagonalBack = new Square({id: 'f1', x: 5, y: 9, piece: null});
      let back = new Square({id: 'e1', x: 4, y: 9, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farLeft,
          far,
          farRight,
          diagonalForward,
          diagonalFar,
          farSideTop,
          farSide,
          farSideBottom,
          side,
          diagonalBack,
          back
        ]
      });

      let result = ma.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).toContainEqual(farLeft);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(farRight);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(farSideTop);
      expect(result.squares).not.toContainEqual(farSide);
      expect(result.squares).toContainEqual(farSideBottom);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });

    it('must not return occupied by player squares', () => {
      let ma = new Ma({id: 24, player_number: 1, type: 'ma' }); 
      let zu = new Zu({id: 32, player_number: 1, type: 'zu' }); 
      
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ma});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: null});
      let farLeft = new Square({id: 'd4', x: 3, y: 6, piece: zu});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let farRight = new Square({id: 'f4', x: 5, y: 6, piece: null}); 
      let diagonalForward = new Square({id: 'f3', x: 5, y: 7, piece: null});
      let diagonalFar = new Square({id: 'g4', x: 6, y: 6, piece: null});
      let side = new Square({id: 'f2', x: 5, y: 8, piece: null});
      let farSideTop = new Square({id: 'g3', x: 6, y: 7, piece: null});
      let farSide = new Square({id: 'g2', x: 6, y: 8, piece: null});
      let farSideBottom = new Square({id: 'g1', x: 6, y: 9, piece: null});

      let diagonalBack = new Square({id: 'f1', x: 5, y: 9, piece: null});
      let back = new Square({id: 'e1', x: 4, y: 9, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farLeft,
          far,
          farRight,
          diagonalForward,
          diagonalFar,
          farSideTop,
          farSide,
          farSideBottom,
          side,
          diagonalBack,
          back
        ]
      });

      let result = ma.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(farLeft);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(farRight);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(diagonalFar);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).toContainEqual(farSideTop);
      expect(result.squares).not.toContainEqual(farSide);
      expect(result.squares).toContainEqual(farSideBottom);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });

    it('must not return squares blocked by adjacent', () => {
      let ma = new Ma({id: 24, player_number: 1, type: 'ma' }); 
      let zu = new Zu({id: 25, player_number: 2, type: 'zu' }); 
      let origin = new Square({id: 'e2', x: 4, y: 8, piece: ma});
      let forward = new Square({id: 'e3', x: 4, y: 7, piece: zu});
      let farLeft = new Square({id: 'd4', x: 3, y: 6, piece: null});
      let far = new Square({id: 'e4', x: 4, y: 6, piece: null});
      let farRight = new Square({id: 'f4', x: 5, y: 6, piece: null}); 
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farLeft,
          far,
          farRight
        ]
      });

      let result = ma.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(farLeft);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(farRight);
    });
  });
});

