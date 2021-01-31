# SE-Stat-Finder
[![GitHub license](https://img.shields.io/github/license/MattPlays/SE-Stat-Finder.svg)](LICENSE)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/MattPlays/SE-Stat-Finder?sort=semver)](https://github.com/MattPlays/SE-Stat-Finder/releases)

### SE-Stat-Finder is well exactly what it sounds like, You can lookup Sector's Edge players and matches.

All Information gathered from using this package is publically available at [Sector's Edge Website](https://sectorsedge.com)

### Git

To keep up-to-date with any changes, first clone this repo and `cd` into it:

```sh
git clone https://github.com/MattPlays/SE-Stat-Finder.git
cd SE-Stat-Finder
```

### Installation

Currently, **SE-Stat-Finder** is only available on npm

```sh
npm i @mattplays/se-api
```

### Usage

To use **SE-Stat-Finder** you must initialize the API.

```js
let {API} = require("@mattplays/se-api");
let api = new API();
```

#### Functions

`findPlayerStatsByID()`
| Input | Output |
| ----- |:------:|
| `String|Number`| `Array<Player, Array<Match>, Array<Weapon>, Array<Medal>, Array<Rank>>` |


This function will Error if the ID is invalid.
```js
let [Player, Matches, Weapons, Medals, Ranks] = await api.findPlayerStatsByID(2535);
```

`findPlayerStatsByName()`
| Input | Output |
| ----- |:------:|
| `String` | `Array<Player, Array<Match>, Array<Weapon>, Array<Medal>, Array<Rank>>`|


This function will error, if the name cannot be found.
```js
let [Player, Matches, Weapons, Medals, Ranks] = await api.findPlayerStatsByName("Vercidium"); //Vercidium is one of the Developers of Sector's Edge.
```

`findMatchStatsByID()`
| Input | Output |
| ----- |:------:|
| `String` | `Array<Array<Match_Player>, Array<Match_Medal>>`|


This function will Error, if the Match ID is invalid.
```js
let [Players, Medals] = await api.findMatchStatsByID("5ffe136938767110e79c0281");
```

## License

Licensed under the [MIT license](LICENSE).
