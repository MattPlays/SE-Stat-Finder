const [getAsync] = [require('request').get, require('request').post].map(require('util').promisify);
class Player {
    /**
     * 
     * @param {String} name 
     * @param {String} protons 
     * @param {String} level 
     * @param {String} kills 
     * @param {String} deaths 
     * @param {String} assists 
     * @param {String} headshots 
     * @param {String} knife_kills 
     * @param {String} longest_killstreak 
     * @param {String} teams 
     * @param {String} kdr 
     * @param {String} kpm 
     * @param {String} headshot_kill_percentage 
     * @param {String} playtime 
     * @param {String} attacking_time 
     * @param {String} defending_time 
     * @param {Number} playerID 
     */
    constructor(name, protons, level, kills, deaths, assists, headshots,knife_kills,longest_killstreak, teams, kdr, kpm, headshot_kill_percentage, playtime, attacking_time, defending_time, playerID)
    {
        this.name = name;
        this.protons = protons;
        this.level = level;
        this.kils = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.headshots = headshots;
        this.knife_kills = knife_kills;
        this.longest_killstreak = longest_killstreak;
        this.teams = teams;
        this.kdr = kdr;
        this.kpm = kpm;
        this.headshot_kill_percentage = headshot_kill_percentage;
        this.playtime = playtime;
        this.attacking_time = attacking_time;
        this.defending_time = defending_time;
        this.playerID = playerID;
    }
}

class Match_Player {
    /**
     * 
     * @param {String} name 
     * @param {String} team 
     * @param {String} protons 
     * @param {String} xp 
     * @param {String} points 
     * @param {String} kills 
     * @param {String} deaths 
     * @param {String} assists 
     * @param {String} kdr 
     * @param {String} kill_streak 
     * @param {String} headshots 
     * @param {String} melee_kills 
     * @param {String} blocks_placed 
     * @param {String} blocks_destroyed 
     */
    constructor(name, team, protons, xp, points, kills, deaths, assists, kdr, kill_streak, headshots, melee_kills, blocks_placed, blocks_destroyed) {
        this.name = name;
        this.team = team;
        this.protons = protons;
        this.xp = xp;
        this.points=  points;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.kdr = kdr;
        this.kill_streak = kill_streak;
        this.headshots = headshots;
        this.melee_kills = melee_kills;
        this.blocks_placed = blocks_placed;
        this.blocks_destroyed = blocks_destroyed;
    }
}
class Match {
    /**
     * 
     * @param {String} date 
     * @param {String} map 
     * @param {String} mode 
     * @param {String} team 
     * @param {String} protons 
     * @param {String} xp 
     * @param {String} points 
     * @param {String} kills 
     * @param {String} deaths 
     * @param {String} assists 
     * @param {String} kdr 
     * @param {String} longest_killstreak 
     * @param {String} headshots 
     * @param {String} melee 
     * @param {String} blocks_placed 
     * @param {String} blocks_destroyed 
     * @param {String} matchID 
     */
    constructor(date, map, mode, team, protons, xp, points, kills, deaths, assists, kdr, longest_killstreak, headshots, melee, blocks_placed, blocks_destroyed, matchID){
        this.date = date;
        this.map = map;
        this.mode = mode;
        this.team = team;
        this.protons = protons;
        this.xp = xp;
        this.points = points;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.kdr = kdr;
        this.longest_killstreak = longest_killstreak;
        this.headshots = headshots;
        this.melee = melee;
        this.blocks_placed = blocks_placed;
        this.blocks_destroyed = blocks_destroyed;
        this.matchID = matchID;
    }
}
class Weapon  {
    /**
     * 
     * @param {String} name 
     * @param {String} total_kills 
     * @param {String} times_fired 
     * @param {String} accuracy 
     * @param {String} headshot_hit_percentage 
     * @param {String} total_player_damage 
     * @param {String} ttk 
     * @param {String} dps 
     */
    constructor(name, total_kills, times_fired, accuracy, headshot_hit_percentage, total_player_damage, ttk, dps) {
        this.name = name;
        this.total_kills = total_kills;
        this.times_fired = times_fired;
        this.accuracy = accuracy;
        this.headshot_hit_percentage = headshot_hit_percentage;
        this.total_player_damage = total_player_damage;
        this.ttk = ttk;
        this.dps = dps;
    }
}
class Medal {
    /**
     * 
     * @param {String} medal 
     * @param {String} count 
     */
    constructor(medal, count) {
        this.medal = medal;
        this.count = count;
    }
}
class Match_Medal {
    /**
     * 
     * @param {String} medal 
     * @param {String} rank 
     * @param {String} player 
     */
    constructor(medal, rank, player) {
        this.medal = medal;
        this.rank = rank;
        this.player = player;
    }
}
class Rank {
    /**
     * 
     * @param {String} gamemode 
     * @param {String} average_rank 
     * @param {String} average_score 
     */
    constructor(gamemode, average_rank, average_score) {
        this.gamemode = gamemode;
        this.average_rank = average_rank;
        this.average_score = average_score;
    }
}
class Server {
    /**
     * 
     * @param {String} name 
     * @param {String} identifier 
     * @param {String} region 
     * @param {String} version 
     * @param {String} address 
     * @param {Number} portOffset 
     * @param {String} map 
     * @param {String} gameMode 
     * @param {Number} players 
     * @param {Number} maxPlayers 
     * @param {Number} timeRemaining 
     * @param {Number} lastUpdate 
     * @param {Boolean} tournament 
     */
    constructor(name,identifier,region,version,address,portOffset,map,gameMode,players,maxPlayers,timeRemaining,lastUpdate,tournament) {
        this.name = name;
        this.identifier = identifier;
        this.region = region;
        this.version = version;
        this.address = address;
        this.portOffset = portOffset;
        this.map = map;
        this.gameMode = gameMode;
        this.players = players;
        this.maxPlayers = maxPlayers;
        this.timeRemaining = timeRemaining;
        this.lastUpdate = lastUpdate;
        this.tournament = tournament;
    }
}
class API {
    constructor() {

    };
    /**
     * @param {(String|Number)} ID 
     * @returns {Array<Player, Array<Match>, Array<Weapon>, Array<Medal>, Array<Rank>>}
     */
    async findPlayerStatsByID(ID) {
        let promise = new Promise((res, rej) => {
            getAsync(`https://sectorsedge.com/player/${ID}`)
                .then(({ statusCode, body }) => {
                    if (statusCode != "200") rej("Player not Found")
                    //Cheerio Scraping
                    const $ = require("cheerio").load(body)
                    var stats = $('table#stats tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    var m = $('table.sortable:not(#weaponStats):not(#medals):not(#pubRanks) tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    var weapons = $('table#weaponStats tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    var md = $('table#medals tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    var r = $('table#pubRanks tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    //Array Creation
                    let matches = new Array()
                    let wps = new Array()
                    let medals = new Array()
                    let ranks = new Array()
                    //Assigning and Loops
    
                    //Player
                    const player = new Player($(".collapsible").children('h1').text(), stats[0], stats[1], stats[2], stats[3],stats[4], stats[5], stats[6], stats[7], stats[8], stats[9],stats[10], stats[11],stats[12],stats[13],stats[14], ID);
                    //Player Matches
                    for (let i = 0; i < m.length; i++) {
                        const match = new Match(m.shift() || "N/A", m.shift().replace("CF", 'Crashed Freighter').replace("AD", 'Aegis Desert').replace("IS", "Ice Station").replace("MC", "Magma Chamber").replace("AR", "Arena").replace("ST", "Soltrium Temple").replace("RW", "Railway") || "N/A", m.shift().replace('SAL', 'Salvage').replace("BRK", "Breakthrough").replace("SPI", "Spire").replace("STA", "Static") || "N/A", m.shift().replace('\n\t\t\t\t\t\t\t\t\tAegis\n\t\t\t\t\t\t', 'Aegis').replace("\n\t\t\t\t\t\t\t\tHelix\n\t\t\t\t\t\t", "Helix") || "N/A", m.shift() || "N/A", m.shift() || "N/A", m.shift() || "N/A", m.shift() || "N/A", m.shift() || "N/A", m.shift() || "N/A","0", m.shift() || "N/A",m.shift() || "N/A", m.shift() || "N/A",m.shift() || "N/A", m.shift() || "N/A","N/A");
                        match.matchID = $("span.matchDate a").filter(function() {
                            return $(this).text() == match.date
                        }).attr('href').replace('/match/', '');
                        match.kdr = parseFloat(match.kills / match.deaths).toFixed(2).toString()
                        if (match.kdr == Infinity || match.kdr == "NaN") match.kdr = match.kills
                        matches.push(match)
                    }
                    //Player Weapon Stats
                    for (let i = 0; i < weapons.length; i++) {
                        const weapon = new Weapon(weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A",weapons.shift() || "N/A")
                        wps.push(weapon)
                    }
                    //Player Medals
                    for (let i = 0; i < md.length; i++) {
                        const medal = new Medal(md.shift()||"N/A", md.shift()||"N/A");
                        medals.push(medal)
                    }
                    //Player Rankings
                    for (let i = 0; i < r.length; i++) {
                        const rank = new Rank(r.shift().replace('SAL', 'Salvage').replace("BRK", "Breakthrough").replace("SPI", "Spire").replace("STA", "Static") || "N/A",r.shift() || "N/A",r.shift() || "N/A")
                        ranks.push(rank)
                    }
                    res([player, matches, wps, medals, ranks])
                })
        })
        let result = await promise
        return result
    }
    /**
     * @param {String} name 
     * @returns {Array<Player, Array<Match>, Array<Weapon>, Array<Medal>, Array<Rank>>}
     */
    async findPlayerStatsByName(name) {
        let promise = new Promise((res, rej) => {
            getAsync('https://sectorsedge.com/players/')
                .then(async({ statusCode, body }) => {
                    if (statusCode != 200) rej("Not Found")
                    const $ = require('cheerio').load(body)
                    try {
                        var playerID = $('span.playerName').filter(function() {
                            return ($(this).text().includes(name))
                        }).parent().parent().parent().attr('href').replace('/player/', '')
                        let [player, matches, weapons, medals, ranks] = await getPlayerDataByID(playerID)
                        res([player, matches, weapons, medals, ranks])
                    } catch (error) {
                        rej("Player not Found")
                    }
                })
        })
        let result = await promise
        return result
    }
    /**
     * @param {String} ID 
     * @returns {Array<Array<Match_Player>, Array<Match_Medal>>}
     */
    async findMatchStatsByID(ID) {
        let promise = new Promise((res, rej) => {
            getAsync(`https://sectorsedge.com/match/${ID}`)
                .then(({ statusCode, body }) => {
                    if (statusCode != "200" || body.includes("{\"status\":\"INTERNAL_ERROR\"}")) rej("Match not Found")
                    const $ = require('cheerio').load(body)
                    var tbl = $('table#players tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    var tbl2 = $('table#medals tr').map(function() {
                        return $(this).find('td').map(function() {
                            return $(this).text();
                        }).get();
                    }).get();
                    var players = new Array()
                    var medals = new Array()
                    for (let i = 0; i < tbl.length; i++) {
                        const player = new Match_Player(
                         tbl.shift().replace('\n\t\t\t\t\t\t', '').replace('\n\t\t\t\t', '') || "N/A",
                         tbl.shift().replace('\n\t\t\t\t\t\t', '').replace('\n\t\t\t\t', '') || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         0,
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A",
                         tbl.shift() || "N/A"
                         )
                        player.kdr = parseFloat(player.kills / player.deaths).toFixed(2).toString()
                        if (player.kdr == Infinity || player.kdr == "NaN") player.kdr = player.kills
                        players.push(player)
                    }
    
                    for (let i = 0; i < tbl2.length; i++) {
                        const medal = new Match_Medal(tbl2.shift() || "N/A",tbl2.shift() || "N/A",tbl2.shift() || "N/A");
                        medals.push(medal)
                    }
                    res([players, medals])
                })
        })
        let result = await promise
        return result
    }
    /**
     * 
     * @param {Boolean} empty 
     * @param {Boolean} full 
     * @param {Array<String>} regions 
     * @param {Array<String>} gamemodes 
     * @returns {Server}
     */
    async findServers(empty, full, regions, gamemodes) {
        const promise = new Promise((resolve, reject) => {
            const data = JSON.stringify({
                "empty": empty,
                "full": empty,
                "regions": regions,
                "gamemodes": gamemodes,
                // "key": "False-True-uswestuscentraluseastBreakthroughSalvageSpireStatic"
                "key": `${empty}-${full}-${regions.join("")}${gamemodes.join("")}`
    
            })
    
            const options = {
                hostname: 'us-match-c.sectorsedge.com',
                port: 443,
                path: '/serverQuery',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                }
            }
            const req = https.request(options, res => {
                let reply = '';
                res.on('data', d => {
                    reply += d;
                })
                res.on("end", () => {
                    resolve(reply);
                })
            })
    
            req.on('error', error => {
                reject(error);
            })
            req.write(data)
            req.end()
        })
        let result = await promise;
        return result
    }
}
module.exports = {
    API
};