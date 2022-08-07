import Move from '../src/move'
import fixtures from './fixtures'

describe('Move', () => {
  describe('result', () => {
    describe('when there is a winner', () => {
      it('must return a GameOver result', () => {
        let match = fixtures('winnerMatch');
        let move = new Move({ touchedId: 'b10', playerNumber: 1, match: match });

        let result = move.result;
        let expected = { name: 'GameOver', message: 'Game is over.' };

        expect(result).toEqual(expected);
      });
    });

    describe('when it is not the players turn', () => {
      it('must return a NotPlayersTurn result', () => {
        let match = fixtures('match');
        let move = new Move({ touchedId: 'b10', playerNumber: 2, match: match });

        let result = move.result;
        let expected = { name: 'NotPlayersTurn', message: 'It is not your turn.' };

        expect(result).toEqual(expected);
      });
    });

    describe('piece is not selected', () => {
      describe('square does not exist', () => {
        it('must return a SquareNotFound result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: 'b11', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'SquareNotFound', message: 'Square does not exist.' };

          expect(result).toEqual(expected);
        });
      });

      describe('square is empty', () => {
        it('must return an EmptySquare result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: 'b9', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'EmptySquare', message: 'Square is empty.' };

          expect(result).toEqual(expected);
        });
      });

      describe('piece is not owned by player', () => {
        it('must return a PieceOwnershipMismatch result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: 'a10', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'PieceOwnershipMismatch', message: 'Piece is owned by opponent.' };

          expect(result).toEqual(expected);
        });
      });

      describe('piece cannot move in that way', () => {
        it('must return a MoveImpossible result', () => {
          let match = fixtures('cantMoveMatch');
          let move = new Move({ touchedId: 'i1', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MoveImpossible', message: 'Piece cannot move.' };

          expect(result).toEqual(expected);
        });
      });

      describe('piece can move that way', () => {
        it('must return a MovePossible result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: 'i1', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MovePossible', message: '' };

          expect(result).toEqual(expected);
        });
      });
    });

    describe('piece on square is selected', () => {
      describe('move puts jiang in check', () => {
        it('must return an JiangInCheck result', () => {
          let match = fixtures('moveToSelfCheckZoneMatch');
          let move = new Move({ touchedId: 'f2', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'JiangInCheck', message: 'Move puts jiang in check.' };

          expect(result).toEqual(expected);
        });
      });

      describe('piece cannot move that way', () => {
        it('must return a MoveInvalid result', () => {
          let match = fixtures('selectedMatch');
          let move = new Move({ touchedId: 'h2', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MoveInvalid', message: 'Piece cannot move.' };

          expect(result).toEqual(expected);
        });
      });

      describe('piece can move that way', () => {
        it('must return a MoveValid result', () => {
          let match = fixtures('selectedMatch');
          let move = new Move({ touchedId: 'i2', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MoveValid', message: '' };

          expect(result).toEqual(expected);
        });
      });
    });
  });
});

