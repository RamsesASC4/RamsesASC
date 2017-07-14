// NAME, TYPE, HP, DEF, ATK, LEGEND

// var myPokemonRoster = [
//     ["zekrom"
//     ], ["dragon and electric"],
//  [100], [120], [150], [true] 
//  [["thundurus"], ["flying and electric"],
//  [90], [80], [125], [true]]
//  [["zapdos"], ["flying and electric"], [90], [85], [90]
//  [true]]
// ]

var myPokemonRoster = [
    ["zekrom", "Dragon and Electric", 100, 120, 150, true],
    ["thundurus",
    "flying and electric",
    90,
    80,
    125,
    true],
    ["zapdos",
    "flying and electric",
    90,
    85,
    90,
    true],
    ["tornadus",
    "flying",
    79,
    70,
    115,
    true],
    ["genesect",
    "bug and steel",
    71,
    95,
    120,
    true],
    ["raikou",
    "electric",
    90,
    75,
    85,
    true]
]

function pokeCounter() {
    var myPrintString = '';
    for (var i=0; i < myPokemonRoster.length; i++) {
    var myPrintString = myPrintString + '#'+ i + ' ' + myPokemonRoster[i][0] + 'TYPE: ' + myPokemonRoster[i][1] + '> ' + "HP: " + myPokemonRoster[i][2] + "> " + "DEF: " + myPokemonRoster[i][3] + "> " + "ATK: " + myPokemonRoster[i][4] + "> " + "LEGEND: " + myPokemonRoster[i][5] ;
    // for (var x=0; x < myPokemonRoster.length; x++) {

    // }
}
console.log(myPrintString);

}

pokeCounter();


