
var myPokemonMaster = ["zekrom", "charizard", "zapdos", "raikou"];
var firstToFight = myPokemonMaster[0];
var secondToFight = myPokemonMaster [1];
myPokemonMaster.pop();
myPokemonMaster.push( "Thundurus", "Tornadus", "Genesect");

 var roster = myPokemonMaster.length
//console.log(myPokemonMaster);
//console.log(secondToFight);
//console.log(firstToFight);
//console.log(myPokemonMaster.length);
//console.log(myPokemonMster)

for (var i = 0;  i < myPokemonMaster.length; i++) {
    console.log(myPokemonMaster)
}

if (roster > 5 ){
    for (var i = 0;  i < roster; i++) {
       console.log(myPokemonMaster[i]) 
    };
} else{

    console.log("You Can't Play! Not Enough Pokemon!")
};

