import Square from '../src/square'
import Zu from '../src/pieces/zu'

describe('Square', () => {
  it('must initialise a piece', () => {
    let square = new Square({ id: 'a1', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'zu'}}); 

    expect(square.piece.constructor).toEqual(Zu);
  });
});

