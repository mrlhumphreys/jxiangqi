# JXiangqi

A xiangqi game state and validation library written in Javascript.

## Installation

Install via npm:

  $ npm install @mrlhumphreys/jxiangqi

## Usage

ES5:

```javascript
  var Match = require('@mrlhumphreys/jxiangqi').Match;
```

ES6:

```javascript
  import { Match } from '@mrlhumphreys/jxiangqi'
```

Initialize a new match object:

```javascript 
  var match = new Match({
    id: 1,
    game_state: {
      current_player_number: 1,
      squares: [
        { 
          id: 'a10', 
          x: 0, 
          y: 0, 
          piece: {
            id: 1, 
            player_number: 2, 
            type: 'ju' 
          }
        },
        ...
      ]
    },
    players: [
      { player_number: 1, name: 'aaa' },
      { player_number: 2, name: 'bbb' }
    ],
    winner: null
  });
```

Serialize match

```javascript
  match.asJson;
```

Make Move

```javascript
  playerNumber = 1;
  match.touchSquare('a10', playerNumber); // select piece at a9 
  match.touchSquare('a9', playerNumber); // move piece to a10 
```

Get winner

```javascript
  match.winner
```

## Development

After checkout out the repo, run `npm install` to install dependencies. Run `npm build` to transpile ES6 to ES5 into the lib directory. Run `npm test` to run the tests.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mrlhumphreys/jxiangqi. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
