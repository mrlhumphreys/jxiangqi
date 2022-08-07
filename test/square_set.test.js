import SquareSet from '../src/square_set'
import GameState from '../src/game_state'

describe('SquareSet', () => {
  describe('findJiangForPlayer', () => {
    describe('when player is 1', () => {
      it('must return the jiang for the specified player', () => {
        let squareSet = new SquareSet({
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'jiang' } },
            { id: 'b10', x: 1, y: 0, piece: null },
            { id: 'c10', x: 2, y: 0, piece: { id: 2, player_number: 1, type: 'jiang' } },
            { id: 'd10', x: 3, y: 0, piece: { id: 3, player_number: 2, type: 'zu' } },
            { id: 'e10', x: 4, y: 0, piece: { id: 4, player_number: 1, type: 'zu' } }
          ]
        });

        let result = squareSet.findJiangForPlayer(1);
        expect(result.piece.type).toEqual('jiang');
      });
    });

    describe('when player is 2', () => {
      it('must return the jiang for the specified player', () => {
        let squareSet = new SquareSet({
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'jiang' } },
            { id: 'b10', x: 1, y: 0, piece: null },
            { id: 'c10', x: 2, y: 0, piece: { id: 2, player_number: 1, type: 'jiang' } },
            { id: 'd10', x: 3, y: 0, piece: { id: 3, player_number: 2, type: 'zu' } },
            { id: 'e10', x: 4, y: 0, piece: { id: 4, player_number: 1, type: 'zu' } }
          ]
        });

        let result = squareSet.findJiangForPlayer(2);
        expect(result.piece.type).toEqual('jiang');
      });
    });
  });

  describe('threatenedBy', () => {
    it('must return squares threatened by player', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: null },
            { id: 'a9', x: 0, y: 1, piece: null },
            { id: 'a8', x: 0, y: 2, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });
        let squareSet = gameState.squares;

        let result = squareSet.threatenedBy(1, gameState);

        expect(result.squares.length).toEqual(1);
        expect(result.squares[0].id).toEqual('a9');
    });
  });
});

