import GameState from '../src/game_state'
import Square from '../src/square'
import Zu from '../src/pieces/zu'

describe('GameState', () => {
  describe('asJson', () => {
    it('must return the game state serialized as a simple object', () => {
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'ma' } }
        ]
      });

      let expected = {
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
        ]
      };

      let result = gameState.asJson;

      expect(result).toEqual(expected);
    });
  });

  describe('selectedSquare', () => {
    describe('with a square selected', () => {
      it('must return the selected square', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: true, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let result = gameState.selectedSquare;

        expect(result.id).toEqual("a10");
      });
    });

    describe('with a square not selected', () => {
      it('must return undefined', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let result = gameState.selectedSquare;

        expect(result).toBe(undefined);
      });
    });
  });

  describe('findSquare', () => {
    describe('with the square existing', () => {
      it('returns the square matching the id', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let result = gameState.findSquare('b10');

        expect(result.id).toEqual('b10');
      });
    });

    describe('with the square not existing', () => {
      it('returns undefined', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let result = gameState.findSquare('101');

        expect(result).toBe(undefined);
      });
    });
  });

  describe('playersTurn', () => {
    describe('when current player matches', () => {
      it('returns true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let result = gameState.playersTurn(1);

        expect(result).toBe(true);
      });
    });

    describe('when current player does not match', () => {
      it('returns false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let result = gameState.playersTurn(2);

        expect(result).toBe(false);
      });
    });
  });

  describe('capturedSquare', () => {
    describe('when to is occupied', () => {
      it('must return to', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let from = new Square({ id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'zu' } });
        let to = new Square({ id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'zu' } });

        let result = gameState.capturedSquare(from, to);

        expect(result.id).toEqual('a10');
      });
    });

    describe('when to is not occupied', () => {
      it('must return null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: null },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'zu' } }
          ]
        });

        let from = new Square({ id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'zu' } });
        let to = new Square({ id: 'a10', x: 0, y: 0, piece: null });

        let result = gameState.capturedSquare(from, to);

        expect(result).toBe(null);
      });
    });
  });

  describe('capturedSquareId', () => {
    describe('when to occupied', () => {
      it('must return the id', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'ju' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'ma' } }
          ]
        });

        let from = new Square({ id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'zu' } });
        let to = new Square({ id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'zu' } });

        let result = gameState.capturedSquareId(from, to);

        expect(result).toEqual('a10');
      });
    });

    describe('when to is not occupied', () => {
      it('must return null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: null },
            { id: 'b10', x: 1, y: 0, piece: { id: 1, player_number: 1, selected: false, type: 'zu' } }
          ]
        });

        let from = new Square({ id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'zu' } });
        let to = new Square({ id: 'a10', x: 0, y: 0, piece: null });

        let result = gameState.capturedSquare(from, to);

        expect(result).toBe(null);
      });
    });
  });

  describe('inCheckmate', () => {
    describe('in check and jiang cannot move', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'jiang' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, type: 'zu' } },
            { id: 'a9', x: 0, y: 1, piece: null },
            { id: 'a8', x: 0, y: 2, piece: { id: 3, player_number: 2, type: 'ju' } }
          ]
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(true);
      });
    });

    describe('in check and jiang can move', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'e1', x: 4, y: 9, piece: { id: 1, player_number: 1, type: 'jiang' } },
            { id: 'd1', x: 3, y: 9, piece: null },
            { id: 'e2', x: 4, y: 8, piece: { id: 3, player_number: 2, type: 'ju' } }
          ]
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(false);
      });
    });

    describe('not in check and non ou pieces cannot move and ou cannot move', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'jiang' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, type: 'zu' } },

            { id: 'a9', x: 0, y: 1, piece: { id: 3, player_number: 1, type: 'zu' } },
            { id: 'b9', x: 1, y: 1, piece: { id: 4, player_number: 1, type: 'zu' } },
          ]
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(true);
      });
    });

    describe('not in check and non ou pieces cannot move and ou can move', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'jiang' } },
            { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 1, type: 'zu' } },

            { id: 'a9', x: 0, y: 1, piece: { id: 3, player_number: 1, type: 'zu' } },
            { id: 'b9', x: 1, y: 1, piece: { id: 4, player_number: 1, type: 'zu' } },

            { id: 'a8', x: 0, y: 2, piece: null },

            { id: 'a7', x: 0, y: 3, piece: { id: 5, player_number: 1, type: 'zu' } },
          ]
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(false);
      });
    });
  });

  describe('inCheck', () => {
    describe('when ou is threatened', () => {
      it('returns true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
            { id: 'a9', x: 0, y: 1, piece: null },
            { id: 'a8', x: 0, y: 2, piece: { id: 32, player_number: 1, type: 'ju' } },
          ]
        });

        let result = gameState.inCheck(2);

        expect(result).toBe(true);
      });
    });

    describe('when ou is not threatened', () => {
      it('returns false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
            { id: 'a9', x: 0, y: 1, piece: null },
            { id: 'a8', x: 0, y: 2, piece: { id: 32, player_number: 1, type: 'zu' } },
          ]
        });

        let result = gameState.inCheck(2);

        expect(result).toBe(false);
      });
    });
  });

  describe('nonJiangPiecesCannotMove', () => {
    describe('non jiang pieces have no destinations', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 5, player_number: 1, type: 'zu' } },
            { id: 'a9', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.nonJiangPiecesCannotMove(1);

        expect(result).toBe(true);
      });
    });

    describe('non jiang pieces have destinations', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: null },
            { id: 'a9', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.nonJiangPiecesCannotMove(1);

        expect(result).toBe(false);
      });
    });
  });

  describe('jiangCannotMove', () => {
    describe('jiang has no destinations', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'jiang' } },
            { id: 'a9', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.jiangCannotMove(1);

        expect(result).toBe(true);
      });
    });

    describe('jiang has destinations', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'e1', x: 4, y: 9, piece: { id: 4, player_number: 1, type: 'jiang' } },
            { id: 'e2', x: 4, y: 8, piece: { id: 6, player_number: 2, type: 'zu' } }
          ]
        });

        let result = gameState.jiangCannotMove(1);

        expect(result).toBe(false);
      });
    });
  });

  describe('winner', () => {
    describe('when player 1 is in checkmate', () => {
      it('must return 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'jiang' } },
            { id: 'a9', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'zu' } },

            { id: 'b10', x: 1, y: 0, piece: null },
            { id: 'b9', x: 1, y: 1, piece: { id: 8, player_number: 1, type: 'zu' } },

            { id: 'c10', x: 2, y: 0, piece: { id: 10, player_number: 2, type: 'ju' } },
            { id: 'c9', x: 2, y: 1, piece: { id: 12, player_number: 2, type: 'jiang' } }
          ]
        });

        let result = gameState.winner;

        expect(result).toEqual(2);
      });
    });

    describe('when player 2 is in checkmate', () => {
      it('must return 1', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a10', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'jiang' } },
            { id: 'a9', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'ju' } },

            { id: 'b10', x: 1, y: 0, piece: { id: 14, player_number: 2, type: 'zu' } },
            { id: 'b9', x: 1, y: 1, piece: null },

            { id: 'c10', x: 2, y: 0, piece: { id: 10, player_number: 2, type: 'zu' } },
            { id: 'c9', x: 2, y: 1, piece: { id: 12, player_number: 2, type: 'jiang' } }
          ]
        });

        let result = gameState.winner;

        expect(result).toEqual(1);
      });
    });

    describe('when no player is in checkmate', () => {
      it('must return null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'e1', x: 4, y: 9, piece: { id: 4, player_number: 1, type: 'jiang' } },
            { id: 'e2', x: 4, y: 8, piece: null },

            { id: 'e3', x: 4, y: 7, piece: { id: 4, player_number: 1, type: 'zu' } },
            { id: 'e8', x: 4, y: 2, piece: { id: 4, player_number: 2, type: 'zu' } },

            { id: 'e9', x: 4, y: 1, piece: null },
            { id: 'e10', x: 4, y: 0, piece: { id: 12, player_number: 2, type: 'jiang' } }
          ]
        });

        let result = gameState.winner;

        expect(result).toBe(null);
      });
    });
  });

  describe('dup', () => {
    it('returns a duplicate game state object', () => {
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          { id: 'a8', x: 0, y: 2, piece: null },
          { id: 'a7', x: 0, y: 3, piece: null }
        ]
      });

      let result = gameState.dup;

      expect(result.constructor).toEqual(GameState);
      expect(result.currentPlayerNumber).toEqual(1);
      expect(result.squares.length()).toEqual(2);
    });
  });

  describe('opponentOf', () => {
    describe('when player 1', () => {
      it('must return 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: null },
            { id: 'a7', x: 0, y: 3, piece: null }
          ]
        });

        let result = gameState.opponentOf(1);

        expect(result).toEqual(2);
      });
    });

    describe('when player 2', () => {
      it('must return 1', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: null },
            { id: 'a7', x: 0, y: 3, piece: null }
          ]
        });

        let result = gameState.opponentOf(2);

        expect(result).toEqual(1);
      });
    });
  });

  describe('opponent', () => {
    describe('when current player is 1', () => {
      it('must return 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: null },
            { id: 'a7', x: 0, y: 3, piece: null }
          ]
        });

        let result = gameState.opponent;

        expect(result).toEqual(2);
      });
    });

    describe('when current player is 2', () => {
      it('must return 1', () => {
        let gameState = new GameState({
          current_player_number: 2,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: null },
            { id: 'a7', x: 0, y: 3, piece: null }
          ]
        });

        let result = gameState.opponent;

        expect(result).toEqual(1);
      });
    });
  });

  describe('performMove', () => {
    describe('piece is actually moving', () => {
      describe('and there is no capture', () => {
        it('moves the piece', () => {
          let gameState = new GameState({
            current_player_number: 1,
            squares: [
              { id: 'a8', x: 0, y: 2, piece: null },
              { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
            ]
          });

          let from = gameState.squares.findById('a7');
          let to = gameState.squares.findById('a8');
          let captured = null;

          let result = gameState.performMove(from, to, captured);
          let newFrom = gameState.squares.findById('a7');
          let newTo = gameState.squares.findById('a8');

          expect(result).toBe(true);
          expect(newFrom.piece).toBe(null);
          expect(newTo.piece.id).toEqual(1);
        });
      });

      describe('and there is capture', () => {
        it('moves the piece and adds the captured piece to hand', () => {
          let gameState = new GameState({
            current_player_number: 1,
            squares: [
              { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
              { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
            ]
          });

          let from = gameState.squares.findById('a7');
          let to = gameState.squares.findById('a8');
          let captured = gameState.squares.findById('a8');

          let result = gameState.performMove(from, to, captured);
          let newFrom = gameState.squares.findById('a7');
          let newTo = gameState.squares.findById('a8');

          expect(result).toBe(true);
          expect(newFrom.piece).toBe(null);
          expect(newTo.piece.id).toEqual(1);
        });
      });
    });

    describe('piece is not actually moving', () => {
      it('does not move the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let from = gameState.squares.findById('a7');
        let to = gameState.squares.findById('a7');
        let captured = null;

        let result = gameState.performMove(from, to, captured);
        let newFrom = gameState.squares.findById('a7');
        let newTo = gameState.squares.findById('a7');

        expect(result).toBe(false);
        expect(newFrom.piece.id).toEqual(1);
      });
    });
  });

  describe('move', () => {
    describe('from and to exist', () => {
      it('moves the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.move('a7','a8');

        let from = gameState.squares.findById('a7');
        let to = gameState.squares.findById('a8');

        expect(result).toBe(true);
        expect(from.piece).toBe(null);
        expect(to.piece.id).toEqual(1);
      });
    });

    describe('from does not exist', () => {
      it('does not move the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.move('a70','a8');

        let a = gameState.squares.findById('a7');
        let b = gameState.squares.findById('a8');

        expect(result).toBe(false);
        expect(a.piece.id).toEqual(1);
        expect(b.piece.id).toEqual(2);
      });
    });

    describe('to does not exist', () => {
      it('does not move the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.move('a7','a80');

        let a = gameState.squares.findById('a7');
        let b = gameState.squares.findById('a8');

        expect(result).toBe(false);
        expect(a.piece.id).toEqual(1);
        expect(b.piece.id).toEqual(2);
      });
    });
  });

  describe('selectPiece', () => {
    describe('square exists', () => {
      it('must select the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.selectPiece('a7');
        let square = gameState.findSquare('a7');

        expect(result).toBe(true);
        expect(square.piece.selected).toBe(true);
      });
    });

    describe('square does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.selectPiece('104');
        let square_a = gameState.findSquare('a8');
        let square_b = gameState.findSquare('a7');

        expect(result).toBe(false);
        expect(square_a.piece.selected).toBe(false);
        expect(square_b.piece.selected).toBe(false);
      });
    });
  });

  describe('deselectPiece', () => {
    describe('square exists', () => {
      it('must deselect the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu', selected: true } }
          ]
        });

        let result = gameState.deselectPiece('a7');
        let square = gameState.findSquare('a7');

        expect(result).toBe(true);
        expect(square.piece.selected).toBe(false);
      });
    });

    describe('square does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu', selected: true } }
          ]
        });

        let result = gameState.deselectPiece('104');
        let square_a = gameState.findSquare('a7');
        let square_b = gameState.findSquare('a8');

        expect(result).toBe(false);
        expect(square_a.piece.selected).toBe(true);
        expect(square_b.piece.selected).toBe(false);
      });
    });
  });

  describe('passTurn', () => {
    describe('when current player is 1', () => {
      it('must set the current player to 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.passTurn();

        expect(result).toBe(true);
        expect(gameState.currentPlayerNumber).toEqual(2);
      });
    });

    describe('when current player is 2', () => {
      it('must set the current player to 1', () => {
        let gameState = new GameState({
          current_player_number: 2,
          squares: [
            { id: 'a8', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'zu' } },
            { id: 'a7', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'zu' } }
          ]
        });

        let result = gameState.passTurn();

        expect(result).toBe(true);
        expect(gameState.currentPlayerNumber).toEqual(1);
      });
    });
  });
});

