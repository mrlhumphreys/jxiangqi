import { exists } from '../src/utils'
import Match from '../src/match'

const fixtureDefinitions = {
  match: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'ma' } },
          { id: 'c10', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'xiang' } },
          { id: 'd10', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'shi' } },
          { id: 'e10', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
          { id: 'f10', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'shi' } },
          { id: 'g10', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'xiang' } },
          { id: 'h10', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'ma' } },
          { id: 'i10', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'ju' } },

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
          { id: 'b8', x: 1, y: 2, piece: { id: 10, player_number: 2, type: 'pao' } },
          { id: 'c8', x: 2, y: 2, piece: null },
          { id: 'd8', x: 3, y: 2, piece: null },
          { id: 'e8', x: 4, y: 2, piece: null },
          { id: 'f8', x: 5, y: 2, piece: null },
          { id: 'g8', x: 6, y: 2, piece: null },
          { id: 'h8', x: 7, y: 2, piece: { id: 11, player_number: 2, type: 'pao' } },
          { id: 'i8', x: 8, y: 2, piece: null },

          { id: 'a7', x: 0, y: 3, piece: { id: 12, player_number: 2, type: 'zu' } },
          { id: 'b7', x: 1, y: 3, piece: null },
          { id: 'c7', x: 2, y: 3, piece: { id: 13, player_number: 2, type: 'zu' } },
          { id: 'd7', x: 3, y: 3, piece: null },
          { id: 'e7', x: 4, y: 3, piece: { id: 14, player_number: 2, type: 'zu' } },
          { id: 'f7', x: 5, y: 3, piece: null },
          { id: 'g7', x: 6, y: 3, piece: { id: 15, player_number: 2, type: 'zu' } },
          { id: 'h7', x: 7, y: 3, piece: null },
          { id: 'i7', x: 8, y: 3, piece: { id: 16, player_number: 2, type: 'zu' } },

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

          { id: 'a4', x: 0, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'b4', x: 1, y: 6, piece: null },
          { id: 'c4', x: 2, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'd4', x: 3, y: 6, piece: null },
          { id: 'e4', x: 4, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'f4', x: 5, y: 6, piece: null },
          { id: 'g4', x: 6, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'h4', x: 7, y: 6, piece: null },
          { id: 'i4', x: 8, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },

          { id: 'a3', x: 0, y: 7, piece: null },
          { id: 'b3', x: 1, y: 7, piece: { id: 18, player_number: 1, type: 'pao' } },
          { id: 'c3', x: 2, y: 7, piece: null },
          { id: 'd3', x: 3, y: 7, piece: null },
          { id: 'e3', x: 4, y: 7, piece: null },
          { id: 'f3', x: 5, y: 7, piece: null },
          { id: 'g3', x: 6, y: 7, piece: null },
          { id: 'h3', x: 7, y: 7, piece: { id: 19, player_number: 1, type: 'pao' } },
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

          { id: 'a1', x: 0, y: 9, piece: { id: 20, player_number: 1, type: 'ju' } },
          { id: 'b1', x: 1, y: 9, piece: { id: 21, player_number: 1, type: 'ma' } },
          { id: 'c1', x: 2, y: 9, piece: { id: 22, player_number: 1, type: 'xiang' } },
          { id: 'd1', x: 3, y: 9, piece: { id: 23, player_number: 1, type: 'shi' } },
          { id: 'e1', x: 4, y: 9, piece: { id: 24, player_number: 1, type: 'jiang' } },
          { id: 'f1', x: 5, y: 9, piece: { id: 25, player_number: 1, type: 'shi' } },
          { id: 'g1', x: 6, y: 9, piece: { id: 26, player_number: 1, type: 'xiang' } },
          { id: 'h1', x: 7, y: 9, piece: { id: 27, player_number: 1, type: 'ma' } },
          { id: 'i1', x: 8, y: 9, piece: { id: 28, player_number: 1, type: 'ju' } }
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  selectedMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'ma' } },
          { id: 'c10', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'xiang' } },
          { id: 'd10', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'shi' } },
          { id: 'e10', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
          { id: 'f10', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'shi' } },
          { id: 'g10', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'xiang' } },
          { id: 'h10', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'ma' } },
          { id: 'i10', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'ju' } },

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
          { id: 'b8', x: 1, y: 2, piece: { id: 10, player_number: 2, type: 'pao' } },
          { id: 'c8', x: 2, y: 2, piece: null },
          { id: 'd8', x: 3, y: 2, piece: null },
          { id: 'e8', x: 4, y: 2, piece: null },
          { id: 'f8', x: 5, y: 2, piece: null },
          { id: 'g8', x: 6, y: 2, piece: null },
          { id: 'h8', x: 7, y: 2, piece: { id: 11, player_number: 2, type: 'pao' } },
          { id: 'i8', x: 8, y: 2, piece: null },

          { id: 'a7', x: 0, y: 3, piece: { id: 12, player_number: 2, type: 'zu' } },
          { id: 'b7', x: 1, y: 3, piece: null },
          { id: 'c7', x: 2, y: 3, piece: { id: 13, player_number: 2, type: 'zu' } },
          { id: 'd7', x: 3, y: 3, piece: null },
          { id: 'e7', x: 4, y: 3, piece: { id: 14, player_number: 2, type: 'zu' } },
          { id: 'f7', x: 5, y: 3, piece: null },
          { id: 'g7', x: 6, y: 3, piece: { id: 15, player_number: 2, type: 'zu' } },
          { id: 'h7', x: 7, y: 3, piece: null },
          { id: 'i7', x: 8, y: 3, piece: { id: 16, player_number: 2, type: 'zu' } },

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

          { id: 'a4', x: 0, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'b4', x: 1, y: 6, piece: null },
          { id: 'c4', x: 2, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'd4', x: 3, y: 6, piece: null },
          { id: 'e4', x: 4, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'f4', x: 5, y: 6, piece: null },
          { id: 'g4', x: 6, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'h4', x: 7, y: 6, piece: null },
          { id: 'i4', x: 8, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },

          { id: 'a3', x: 0, y: 7, piece: null },
          { id: 'b3', x: 1, y: 7, piece: { id: 18, player_number: 1, type: 'pao' } },
          { id: 'c3', x: 2, y: 7, piece: null },
          { id: 'd3', x: 3, y: 7, piece: null },
          { id: 'e3', x: 4, y: 7, piece: null },
          { id: 'f3', x: 5, y: 7, piece: null },
          { id: 'g3', x: 6, y: 7, piece: null },
          { id: 'h3', x: 7, y: 7, piece: { id: 19, player_number: 1, type: 'pao' } },
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

          { id: 'a1', x: 0, y: 9, piece: { id: 20, player_number: 1, type: 'ju' } },
          { id: 'b1', x: 1, y: 9, piece: { id: 21, player_number: 1, type: 'ma' } },
          { id: 'c1', x: 2, y: 9, piece: { id: 22, player_number: 1, type: 'xiang' } },
          { id: 'd1', x: 3, y: 9, piece: { id: 23, player_number: 1, type: 'shi' } },
          { id: 'e1', x: 4, y: 9, piece: { id: 24, player_number: 1, type: 'jiang' } },
          { id: 'f1', x: 5, y: 9, piece: { id: 25, player_number: 1, type: 'shi' } },
          { id: 'g1', x: 6, y: 9, piece: { id: 26, player_number: 1, type: 'xiang' } },
          { id: 'h1', x: 7, y: 9, piece: { id: 27, player_number: 1, type: 'ma' } },
          { id: 'i1', x: 8, y: 9, piece: { id: 28, player_number: 1, type: 'ju', selected: true } }
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  winnerMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 20, player_number: 1, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: null },
          { id: 'c10', x: 2, y: 0, piece: null },
          { id: 'd10', x: 3, y: 0, piece: null },
          { id: 'e10', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
          { id: 'f10', x: 5, y: 0, piece: null },
          { id: 'g10', x: 6, y: 0, piece: null },
          { id: 'h10', x: 7, y: 0, piece: null },
          { id: 'i10', x: 8, y: 0, piece: null },

          { id: 'a9', x: 0, y: 1, piece: { id: 28, player_number: 1, type: 'ju' } },
          { id: 'b9', x: 1, y: 1, piece: null },
          { id: 'c9', x: 2, y: 1, piece: null },
          { id: 'd9', x: 3, y: 1, piece: null },
          { id: 'e9', x: 4, y: 1, piece: null },
          { id: 'f9', x: 5, y: 1, piece: null },
          { id: 'g9', x: 6, y: 1, piece: null },
          { id: 'h9', x: 7, y: 1, piece: null },
          { id: 'i9', x: 8, y: 1, piece: null },

          { id: 'a8', x: 0, y: 2, piece: null },
          { id: 'b8', x: 1, y: 2, piece: null },
          { id: 'c8', x: 2, y: 2, piece: null },
          { id: 'd8', x: 3, y: 2, piece: null },
          { id: 'e8', x: 4, y: 2, piece: null },
          { id: 'f8', x: 5, y: 2, piece: null },
          { id: 'g8', x: 6, y: 2, piece: null },
          { id: 'h8', x: 7, y: 2, piece: null },
          { id: 'i8', x: 8, y: 2, piece: null },

          { id: 'a7', x: 0, y: 3, piece: null },
          { id: 'b7', x: 1, y: 3, piece: null },
          { id: 'c7', x: 2, y: 3, piece: null },
          { id: 'd7', x: 3, y: 3, piece: null },
          { id: 'e7', x: 4, y: 3, piece: null },
          { id: 'f7', x: 5, y: 3, piece: null },
          { id: 'g7', x: 6, y: 3, piece: null },
          { id: 'h7', x: 7, y: 3, piece: null },
          { id: 'i7', x: 8, y: 3, piece: null },

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

          { id: 'a4', x: 0, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'b4', x: 1, y: 6, piece: null },
          { id: 'c4', x: 2, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'd4', x: 3, y: 6, piece: null },
          { id: 'e4', x: 4, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'f4', x: 5, y: 6, piece: null },
          { id: 'g4', x: 6, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'h4', x: 7, y: 6, piece: null },
          { id: 'i4', x: 8, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },

          { id: 'a3', x: 0, y: 7, piece: null },
          { id: 'b3', x: 1, y: 7, piece: { id: 18, player_number: 1, type: 'pao' } },
          { id: 'c3', x: 2, y: 7, piece: null },
          { id: 'd3', x: 3, y: 7, piece: null },
          { id: 'e3', x: 4, y: 7, piece: null },
          { id: 'f3', x: 5, y: 7, piece: null },
          { id: 'g3', x: 6, y: 7, piece: null },
          { id: 'h3', x: 7, y: 7, piece: { id: 19, player_number: 1, type: 'pao' } },
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

          { id: 'a1', x: 0, y: 9, piece: null },
          { id: 'b1', x: 1, y: 9, piece: { id: 21, player_number: 1, type: 'ma' } },
          { id: 'c1', x: 2, y: 9, piece: { id: 22, player_number: 1, type: 'xiang' } },
          { id: 'd1', x: 3, y: 9, piece: { id: 23, player_number: 1, type: 'shi' } },
          { id: 'e1', x: 4, y: 9, piece: { id: 24, player_number: 1, type: 'jiang' } },
          { id: 'f1', x: 5, y: 9, piece: { id: 25, player_number: 1, type: 'shi' } },
          { id: 'g1', x: 6, y: 9, piece: { id: 26, player_number: 1, type: 'xiang' } },
          { id: 'h1', x: 7, y: 9, piece: { id: 27, player_number: 1, type: 'ma' } },
          { id: 'i1', x: 8, y: 9, piece: null }
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  cantMoveMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'ma' } },
          { id: 'c10', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'xiang' } },
          { id: 'd10', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'shi' } },
          { id: 'e10', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
          { id: 'f10', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'shi' } },
          { id: 'g10', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'xiang' } },
          { id: 'h10', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'ma' } },
          { id: 'i10', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'ju' } },

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
          { id: 'b8', x: 1, y: 2, piece: { id: 10, player_number: 2, type: 'pao' } },
          { id: 'c8', x: 2, y: 2, piece: null },
          { id: 'd8', x: 3, y: 2, piece: null },
          { id: 'e8', x: 4, y: 2, piece: null },
          { id: 'f8', x: 5, y: 2, piece: null },
          { id: 'g8', x: 6, y: 2, piece: null },
          { id: 'h8', x: 7, y: 2, piece: { id: 11, player_number: 2, type: 'pao' } },
          { id: 'i8', x: 8, y: 2, piece: null },

          { id: 'a7', x: 0, y: 3, piece: { id: 12, player_number: 2, type: 'zu' } },
          { id: 'b7', x: 1, y: 3, piece: null },
          { id: 'c7', x: 2, y: 3, piece: { id: 13, player_number: 2, type: 'zu' } },
          { id: 'd7', x: 3, y: 3, piece: null },
          { id: 'e7', x: 4, y: 3, piece: { id: 14, player_number: 2, type: 'zu' } },
          { id: 'f7', x: 5, y: 3, piece: null },
          { id: 'g7', x: 6, y: 3, piece: { id: 15, player_number: 2, type: 'zu' } },
          { id: 'h7', x: 7, y: 3, piece: null },
          { id: 'i7', x: 8, y: 3, piece: { id: 16, player_number: 2, type: 'zu' } },

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

          { id: 'a4', x: 0, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'b4', x: 1, y: 6, piece: null },
          { id: 'c4', x: 2, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'd4', x: 3, y: 6, piece: null },
          { id: 'e4', x: 4, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'f4', x: 5, y: 6, piece: null },
          { id: 'g4', x: 6, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'h4', x: 7, y: 6, piece: null },
          { id: 'i4', x: 8, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },

          { id: 'a3', x: 0, y: 7, piece: null },
          { id: 'b3', x: 1, y: 7, piece: { id: 18, player_number: 1, type: 'pao' } },
          { id: 'c3', x: 2, y: 7, piece: null },
          { id: 'd3', x: 3, y: 7, piece: null },
          { id: 'e3', x: 4, y: 7, piece: null },
          { id: 'f3', x: 5, y: 7, piece: null },
          { id: 'g3', x: 6, y: 7, piece: null },
          { id: 'h3', x: 7, y: 7, piece: { id: 19, player_number: 1, type: 'pao' } },
          { id: 'i3', x: 8, y: 7, piece: null },

          { id: 'a2', x: 0, y: 8, piece: null },
          { id: 'b2', x: 1, y: 8, piece: null },
          { id: 'c2', x: 2, y: 8, piece: null },
          { id: 'd2', x: 3, y: 8, piece: null },
          { id: 'e2', x: 4, y: 8, piece: null },
          { id: 'f2', x: 5, y: 8, piece: null },
          { id: 'g2', x: 6, y: 8, piece: null },
          { id: 'h2', x: 7, y: 8, piece: null },
          { id: 'i2', x: 8, y: 8, piece: { id: 20, player_number: 1, type: 'ju' } },

          { id: 'a1', x: 0, y: 9, piece: null },
          { id: 'b1', x: 1, y: 9, piece: { id: 21, player_number: 1, type: 'ma' } },
          { id: 'c1', x: 2, y: 9, piece: { id: 22, player_number: 1, type: 'xiang' } },
          { id: 'd1', x: 3, y: 9, piece: { id: 23, player_number: 1, type: 'shi' } },
          { id: 'e1', x: 4, y: 9, piece: { id: 24, player_number: 1, type: 'jiang' } },
          { id: 'f1', x: 5, y: 9, piece: { id: 25, player_number: 1, type: 'shi' } },
          { id: 'g1', x: 6, y: 9, piece: { id: 26, player_number: 1, type: 'xiang' } },
          { id: 'h1', x: 7, y: 9, piece: { id: 27, player_number: 1, type: 'ma' } },
          { id: 'i1', x: 8, y: 9, piece: { id: 28, player_number: 1, type: 'ju' } }
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  moveToSelfCheckZoneMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: 'a10', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'ju' } },
          { id: 'b10', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'ma' } },
          { id: 'c10', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'xiang' } },
          { id: 'd10', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'shi' } },
          { id: 'e10', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'jiang' } },
          { id: 'f10', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'shi' } },
          { id: 'g10', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'xiang' } },
          { id: 'h10', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'ma' } },
          { id: 'i10', x: 8, y: 0, piece: null },

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
          { id: 'b8', x: 1, y: 2, piece: { id: 10, player_number: 2, type: 'pao' } },
          { id: 'c8', x: 2, y: 2, piece: null },
          { id: 'd8', x: 3, y: 2, piece: null },
          { id: 'e8', x: 4, y: 2, piece: null },
          { id: 'f8', x: 5, y: 2, piece: null },
          { id: 'g8', x: 6, y: 2, piece: null },
          { id: 'h8', x: 7, y: 2, piece: { id: 11, player_number: 2, type: 'pao' } },
          { id: 'i8', x: 8, y: 2, piece: null },

          { id: 'a7', x: 0, y: 3, piece: { id: 12, player_number: 2, type: 'zu' } },
          { id: 'b7', x: 1, y: 3, piece: null },
          { id: 'c7', x: 2, y: 3, piece: { id: 13, player_number: 2, type: 'zu' } },
          { id: 'd7', x: 3, y: 3, piece: null },
          { id: 'e7', x: 4, y: 3, piece: { id: 14, player_number: 2, type: 'zu' } },
          { id: 'f7', x: 5, y: 3, piece: null },
          { id: 'g7', x: 6, y: 3, piece: { id: 15, player_number: 2, type: 'zu' } },
          { id: 'h7', x: 7, y: 3, piece: null },
          { id: 'i7', x: 8, y: 3, piece: { id: 16, player_number: 2, type: 'zu' } },

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

          { id: 'a4', x: 0, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'b4', x: 1, y: 6, piece: null },
          { id: 'c4', x: 2, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'd4', x: 3, y: 6, piece: null },
          { id: 'e4', x: 4, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'f4', x: 5, y: 6, piece: null },
          { id: 'g4', x: 6, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },
          { id: 'h4', x: 7, y: 6, piece: null },
          { id: 'i4', x: 8, y: 6, piece: { id: 17, player_number: 1, type: 'zu' } },

          { id: 'a3', x: 0, y: 7, piece: null },
          { id: 'b3', x: 1, y: 7, piece: { id: 18, player_number: 1, type: 'pao' } },
          { id: 'c3', x: 2, y: 7, piece: null },
          { id: 'd3', x: 3, y: 7, piece: null },
          { id: 'e3', x: 4, y: 7, piece: { id: 9, player_number: 2, type: 'ju' } },
          { id: 'f3', x: 5, y: 7, piece: null },
          { id: 'g3', x: 6, y: 7, piece: null },
          { id: 'h3', x: 7, y: 7, piece: { id: 19, player_number: 1, type: 'pao' } },
          { id: 'i3', x: 8, y: 7, piece: null },

          { id: 'a2', x: 0, y: 8, piece: null },
          { id: 'b2', x: 1, y: 8, piece: null },
          { id: 'c2', x: 2, y: 8, piece: null },
          { id: 'd2', x: 3, y: 8, piece: null },
          { id: 'e2', x: 4, y: 8, piece: { id: 28, player_number: 1, type: 'ju', selected: true } },
          { id: 'f2', x: 5, y: 8, piece: null },
          { id: 'g2', x: 6, y: 8, piece: null },
          { id: 'h2', x: 7, y: 8, piece: null },
          { id: 'i2', x: 8, y: 8, piece: null },

          { id: 'a1', x: 0, y: 9, piece: { id: 20, player_number: 1, type: 'ju' } },
          { id: 'b1', x: 1, y: 9, piece: { id: 21, player_number: 1, type: 'ma' } },
          { id: 'c1', x: 2, y: 9, piece: { id: 22, player_number: 1, type: 'xiang' } },
          { id: 'd1', x: 3, y: 9, piece: { id: 23, player_number: 1, type: 'shi' } },
          { id: 'e1', x: 4, y: 9, piece: { id: 24, player_number: 1, type: 'jiang' } },
          { id: 'f1', x: 5, y: 9, piece: { id: 25, player_number: 1, type: 'shi' } },
          { id: 'g1', x: 6, y: 9, piece: { id: 26, player_number: 1, type: 'xiang' } },
          { id: 'h1', x: 7, y: 9, piece: { id: 27, player_number: 1, type: 'ma' } },
          { id: 'i1', x: 8, y: 9, piece: null }
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  }
};

const deepMerge = function(aObject, bObject) {
  let cObject = {};

  let aObjectKeys = [];
  let bObjectKeys = [];

  if (exists(aObject)) {
    aObjectKeys = Object.keys(aObject);
  }

  if (exists(bObject)) {
    bObjectKeys = Object.keys(bObject);
  }

  let keys = [...new Set([...aObjectKeys, ...bObjectKeys])];

  keys.forEach(function(k) {
    let aValue = undefined;
    let bValue = undefined;

    if (exists(aObject)) {
      aValue = aObject[k];
    }

    if (exists(bObject)) {
      bValue = bObject[k];
    }

    let cValue = undefined;

    if (exists(bValue)) {
      if (bValue.constructor === Object) {
        cValue = deepMerge(aValue, bValue);
      } else {
        cValue = bValue;
      }
    } else {
      cValue = aValue;
    }

    cObject[k] = cValue;
  });
  return cObject;
};

const fixtures = function(name, customArgs) {
  let definition = fixtureDefinitions[name];

  if (!exists(definition)) {
    throw new Error(`Undefined fixture: ${name}`);
  }

  let args = {};

  if (exists(customArgs)) {
    args = deepMerge(definition.args, customArgs);
  } else {
    args = Object.assign({}, definition.args);
  }

  return new definition.klass(args);
};

export default fixtures

