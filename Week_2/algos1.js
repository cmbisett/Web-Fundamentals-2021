var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answer = lifesAnswers[Math.ceil(Math.random() * lifesAnswers.length)]

console.log(answer)

// MAKE IT INTO A FUNCTION

function magic8(lifesAnswers){
    var max = lifesAnswers.length
    var min = 0
    var predict = Math.floor(Math.random() * (max - min) + min);
    return lifesAnswers[predict]
}

var prediction = magic8(lifesAnswers)
console.log(prediction) 

// --------------------------------------------------------------------------------
// ARRAYS OF OBJECTS PRACTICE

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// names of pokemon whos id's are greater than 99
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}

//pokémon objects whose id is evenly divisible by 3
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id % 3 ==0) {
        console.log(pokémon[i])
    }
}

//pokemon thats have more than one type
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length > 1) {
        console.log(pokémon[i].name)
    }
}

//names of pokémon whose only type is poison
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[0] == 'poison' && pokémon[i].types.length == 1) {
        console.log(pokémon[i].name)
    }
}

//console.log the first type of pokémon whos second type is 'flying'
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[1] == 'flying') {
        console.log (pokémon[i].types[0])
    }
}