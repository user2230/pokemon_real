const PokemonImage = document.getElementById("js--pokemon-img");
let randomnumber= Math.floor(Math.random() * 250 + 1);    
 
 
console.log('PokemonImage: '+PokemonImage);
let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomnumber)
    .then(function (response) {
        console.log('test1');
        return response.json();
    })
    .then(function (realData) {
        console.log('test2:' + realData.sprites);
        PokemonImage.src = realData.sprites.front_default;
    });
 
 
    const catchButton = document.getElementById("js--catch-button");
    const pokemonText = document.getElementById("js--pokemon-text");
    let pokemonGamePlayed = false;
    console.log(pokemonText);
 
    catchButton.onclick = function() {
        if (pokemonGamePlayed === false) {
            let catchNumber = Math.floor(Math.random() * 2);
            if (catchNumber === 0) {
                pokemonText.innerText = "de pokemon is weg gerend";
            } else {
                pokemonText.innerText = "de pokemon is gevangen";
            }
            pokemonGamePlayed = true;
        }
 
       
       
    }
 
 
    const showname = document.getElementById("show-name");
 
    fetch("https://api.tvmaze.com/search/shows?q=peacemaker")
      .then(function (response) {
        console.log('test3');
        return response.json();
      })
      .then(function (realData2) {
        console.log('test4:' + realData2[0].show.name);
        showname.innerText = realData2[0].show.name;
    });

    const nameText = document.getElementById("js--name");
    const inputField = document.getElementById("js--input");
    inputField.onkeyup = function(event) {
        if(event.keyCode === 13) {
            let name = inputField.value;
           let age = fetch("https://api.agify.io/?name=" + name)
           .then(function (response) {
               return response.json();
           })
           .then(function (echteData) {
            inputField.style.display = "none";
               nameText.innerText = echteData.age;
           } ); 
       
        }
    }

 