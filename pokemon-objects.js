var myPokemon = [ {
    name: "zekrom",
    type: ["flying", "electric"],
    hp: 90,
    def: 80,
    atk: 125,
    legendary: true
},
{
    name: "zapdos",
    type: ["flying", "electric"],
    hp: 90,
    def: 85,
    atk: 90,
    legendary: true
},
{
    name: "tornadus",
    type: "flying",
    hp: 79,
    def: 70,
    atk: 115,
    legendary: true
},
{
    name: "genesect",
    type: ["steel", "bug"],
    hp: 71,
    def: 95,
    atk: 120,
    legendary: true
},
{
    name: "raikou",
    type: "electric",
    hp: 90,
    def: 75,
    atk: 85,
    legendary: true
},
{
    name: "mewto",
    type: "psychic",
    hp: 106,
    def: 90,
    atk: 110,
    legendary: true
}
]

console.log(myPokemon)




function printRoster(){
    for (x = 0; x < 6; x++) {
         console.log(myPokemon[x].hp)
    }
}   
printRoster();

function pokemonAttacked(){
for (x = 0; x < 6; x++) {
    console.log(myPokemon[x].hp - 10)
}
}
pokemonAttacked();




// function printRoster(NAME, TYPE, HP, DEF, ATK, LEGENDARY) {
//     this.NAME = NAME
//     this.TYPE = TYPE
//     this.HP = HP
//     this.DEF = DEF
//     this.ATK = ATK
//     this.LEGENDARY = LEGENDARY
// }



// var zekrom = new printRoster ("zekrom", ["flying", "electric"], 90, 80, 125, true);
// var zapdos = new printRoster ("zapdos", ["flying", "electric"], 90, 85, 90, true) ;
// var tornadus = new printRoster ("tornadus", "flying", 79, 70, 115, true);
// var genesect = new printRoster ("genesect", ["bug", "steel"], 71, 95, 120, true);
// var raikou = new printRoster ("raikou", "electric", 90, 75, 85, true);
// myPokemon.push (zekrom, zapdos, tornadus, genesect, raikou );
