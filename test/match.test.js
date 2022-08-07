import Match from '../src/match'
import fixtures from './fixtures'

describe('Match', () => {
  describe('asJson', () => {
    it('returns the match serialised as a simple object', () => {
      let match = fixtures('match');
      let result = match.asJson;
      let expected = {
        id: 1,
        current_move: {},
        game_state: {
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'ju', selected: false } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'ma', selected: false } },
            { id: 'c10', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'xiang', selected: false } },
            { id: 'd10', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'shi', selected: false } },
            { id: 'e10', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'jiang', selected: false } },
            { id: 'f10', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'shi', selected: false } },
            { id: 'g10', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'xiang', selected: false } },
            { id: 'h10', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'ma', selected: false } },
            { id: 'i10', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'ju', selected: false } },

            { id: 'a9', x: 0, y: 1, piece: null },
            { id: 'b9', x: 1, y: 1, piece: null },
            { id: 'c9', x: 2, y: 1, piece: null },
            { id: 'd9', x: 3, y: 1, piece: null },
            { id: 'e9', x: 4, y: 1, piece: null },
            { id: 'f9', x: 5, y: 1, piece: null },
            { id: 'g9', x: 6, y: 1, piece: null },
            { id: 'h9', x: 7, y: 1, piece: null },
            { id: 'i9', x: 8, y: 1, piece: null },

            { id: 'a8', x: 0, y: 2, piece: null },
            { id: 'b8', x: 1, y: 2, piece: { id: 10, player_number: 2, type: 'pao', selected: false } },
            { id: 'c8', x: 2, y: 2, piece: null },
            { id: 'd8', x: 3, y: 2, piece: null },
            { id: 'e8', x: 4, y: 2, piece: null },
            { id: 'f8', x: 5, y: 2, piece: null },
            { id: 'g8', x: 6, y: 2, piece: null },
            { id: 'h8', x: 7, y: 2, piece: { id: 11, player_number: 2, type: 'pao', selected: false } },
            { id: 'i8', x: 8, y: 2, piece: null },

            { id: 'a7', x: 0, y: 3, piece: { id: 12, player_number: 2, type: 'zu', selected: false } },
            { id: 'b7', x: 1, y: 3, piece: null },
            { id: 'c7', x: 2, y: 3, piece: { id: 13, player_number: 2, type: 'zu', selected: false } },
            { id: 'd7', x: 3, y: 3, piece: null },
            { id: 'e7', x: 4, y: 3, piece: { id: 14, player_number: 2, type: 'zu', selected: false } },
            { id: 'f7', x: 5, y: 3, piece: null },
            { id: 'g7', x: 6, y: 3, piece: { id: 15, player_number: 2, type: 'zu', selected: false } },
            { id: 'h7', x: 7, y: 3, piece: null },
            { id: 'i7', x: 8, y: 3, piece: { id: 16, player_number: 2, type: 'zu', selected: false } },

            { id: 'a6', x: 0, y: 4, piece: null },
            { id: 'b6', x: 1, y: 4, piece: null },
            { id: 'c6', x: 2, y: 4, piece: null },
            { id: 'd6', x: 3, y: 4, piece: null },
            { id: 'e6', x: 4, y: 4, piece: null },
            { id: 'f6', x: 5, y: 4, piece: null },
            { id: 'g6', x: 6, y: 4, piece: null },
            { id: 'h6', x: 7, y: 4, piece: null },
            { id: 'i6', x: 8, y: 4, piece: null },

            { id: 'a5', x: 0, y: 5, piece: null },
            { id: 'b5', x: 1, y: 5, piece: null },
            { id: 'c5', x: 2, y: 5, piece: null },
            { id: 'd5', x: 3, y: 5, piece: null },
            { id: 'e5', x: 4, y: 5, piece: null },
            { id: 'f5', x: 5, y: 5, piece: null },
            { id: 'g5', x: 6, y: 5, piece: null },
            { id: 'h5', x: 7, y: 5, piece: null },
            { id: 'i5', x: 8, y: 5, piece: null },

            { id: 'a4', x: 0, y: 6, piece: { id: 17, player_number: 1, type: 'zu', selected: false } },
            { id: 'b4', x: 1, y: 6, piece: null },
            { id: 'c4', x: 2, y: 6, piece: { id: 17, player_number: 1, type: 'zu', selected: false } },
            { id: 'd4', x: 3, y: 6, piece: null },
            { id: 'e4', x: 4, y: 6, piece: { id: 17, player_number: 1, type: 'zu', selected: false } },
            { id: 'f4', x: 5, y: 6, piece: null },
            { id: 'g4', x: 6, y: 6, piece: { id: 17, player_number: 1, type: 'zu', selected: false } },
            { id: 'h4', x: 7, y: 6, piece: null },
            { id: 'i4', x: 8, y: 6, piece: { id: 17, player_number: 1, type: 'zu', selected: false } },

            { id: 'a3', x: 0, y: 7, piece: null },
            { id: 'b3', x: 1, y: 7, piece: { id: 18, player_number: 1, type: 'pao', selected: false } },
            { id: 'c3', x: 2, y: 7, piece: null },
            { id: 'd3', x: 3, y: 7, piece: null },
            { id: 'e3', x: 4, y: 7, piece: null },
            { id: 'f3', x: 5, y: 7, piece: null },
            { id: 'g3', x: 6, y: 7, piece: null },
            { id: 'h3', x: 7, y: 7, piece: { id: 19, player_number: 1, type: 'pao', selected: false } },
            { id: 'i3', x: 8, y: 7, piece: null },

            { id: 'a2', x: 0, y: 8, piece: null },
            { id: 'b2', x: 1, y: 8, piece: null },
            { id: 'c2', x: 2, y: 8, piece: null },
            { id: 'd2', x: 3, y: 8, piece: null },
            { id: 'e2', x: 4, y: 8, piece: null },
            { id: 'f2', x: 5, y: 8, piece: null },
            { id: 'g2', x: 6, y: 8, piece: null },
            { id: 'h2', x: 7, y: 8, piece: null },
            { id: 'i2', x: 8, y: 8, piece: null },

            { id: 'a1', x: 0, y: 9, piece: { id: 20, player_number: 1, type: 'ju', selected: false } },
            { id: 'b1', x: 1, y: 9, piece: { id: 21, player_number: 1, type: 'ma', selected: false } },
            { id: 'c1', x: 2, y: 9, piece: { id: 22, player_number: 1, type: 'xiang', selected: false } },
            { id: 'd1', x: 3, y: 9, piece: { id: 23, player_number: 1, type: 'shi', selected: false } },
            { id: 'e1', x: 4, y: 9, piece: { id: 24, player_number: 1, type: 'jiang', selected: false } },
            { id: 'f1', x: 5, y: 9, piece: { id: 25, player_number: 1, type: 'shi', selected: false } },
            { id: 'g1', x: 6, y: 9, piece: { id: 26, player_number: 1, type: 'xiang', selected: false } },
            { id: 'h1', x: 7, y: 9, piece: { id: 27, player_number: 1, type: 'ma', selected: false } },
            { id: 'i1', x: 8, y: 9, piece: { id: 28, player_number: 1, type: 'ju', selected: false } }
          ]
        },
        players: [
          { player_number: 1, name: 'aaa', resigned: false },
          { player_number: 2, name: 'bbb', resigned: false }
        ],
        last_action: null,
        notification: 'aaa to move',
      };

      expect(result).toEqual(expected);
    });
  });

  describe('winner', () => {
    it('returns the winner of the match', () => {
      let match = fixtures('winnerMatch');
      expect(match.winner).toEqual(1);
    });
  });

  describe('touchSquare', () => {
    describe('when move is valid', () => {
      it('moves the piece and passes the turn', () => {
        let match = fixtures('selectedMatch');

        let result = match.touchSquare('i2',1);
        let from = match.gameState.findSquare('i1');
        let to = match.gameState.findSquare('i2');
        let expectedAction = { kind: 'move', data: { fromId: 'i1', toId: 'i2' } };

        expect(result).toBe(true);
        expect(from.piece).toBe(null);
        expect(to.piece.selected).toBe(false);
        expect(to.piece.id).toEqual(28);
        expect(match.gameState.currentPlayerNumber).toEqual(2);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when move is possible', () => {
      it('selects the piece', () => {
        let match = fixtures('match');

        let result = match.touchSquare('i1', 1);
        let square = match.gameState.findSquare('i1');
        let expectedAction = null;

        expect(result).toBe(true);
        expect(square.piece.selected).toBe(true);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when move is invalid', () => {
      it('deselects the piece', () => {
        let match = fixtures('selectedMatch');

        let result = match.touchSquare('h2',1);
        let from = match.gameState.findSquare('i1');
        let to = match.gameState.findSquare('h2');
        let expectedAction = null;

        expect(result).toBe(false);
        expect(from.piece.id).toEqual(28);
        expect(from.piece.selected).toBe(false);
        expect(to.piece).toBe(null);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when jiang is in check', () => {
      it('deselects the piece', () => {
        let match = fixtures('moveToSelfCheckZoneMatch');

        let result = match.touchSquare('d2',1);
        let from = match.gameState.findSquare('e2');
        let to = match.gameState.findSquare('d2');
        let expectedAction = null;

        expect(result).toBe(false);
        expect(from.piece.id).toEqual(28);
        expect(from.piece.selected).toBe(false);
        expect(to.piece).toBe(null);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });
  });
});

