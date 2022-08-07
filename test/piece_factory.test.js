import PieceFactory from '../src/piece_factory'
import Jiang from '../src/pieces/jiang'
import Ju from '../src/pieces/ju'
import Ma from '../src/pieces/ma'
import Pao from '../src/pieces/pao'
import Shi from '../src/pieces/shi'
import Xiang from '../src/pieces/xiang'
import Zu from '../src/pieces/zu'

describe('PieceFactory', () => {
  describe('build', () => {
    describe('with null', () => {
      it('returns null', () => {
        let pieceFactory = new PieceFactory(null);        
        let result = pieceFactory.build;
        expect(result).toBe(null);
      });
    });

    describe('with built piece', () => {
      it('returns the piece', () => {
        let piece = new Zu({id: 1, player_number: 2, type: 'zu' }); 
        let pieceFactory = new PieceFactory(piece);
        let result = pieceFactory.build;
        expect(result).toBe(piece);
      });
    });
    
    describe('with jiang', () => {
      it('builds a jiang', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'jiang'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Jiang);
        expect(result.id).toEqual(1);
      });
    });
        
    describe('with ju', () => {
      it('builds a ju', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'ju'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Ju);
        expect(result.id).toEqual(1);
      });
    });

    describe('with ma', () => {
      it('builds a ma', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'ma'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Ma);
        expect(result.id).toEqual(1);
      });
    });

    describe('with pao', () => {
      it('builds a paa', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'pao'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Pao);
        expect(result.id).toEqual(1);
      });
    });

    describe('with shi', () => {
      it('builds a shi', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'shi'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Shi);
        expect(result.id).toEqual(1);
      });
    });

    describe('with xiang', () => {
      it('builds a xiang', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'xiang'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Xiang);
        expect(result.id).toEqual(1);
      });
    });

    describe('with zu', () => {
      it('builds a zu', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'zu'}); 
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Zu);
        expect(result.id).toEqual(1);
      });
    });
  });
});

