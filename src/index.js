let urlBaseRaM = "https://rickandmortyapi.com/api/character/";
let urlBasePokemons = "https://pokeapi.co/api/v2/pokemon/";
// url to get the image of pokemon
let urlPokemonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";                    

const getInfoRaM = async() => {
    try{
        //Get data from API 
        const responseRickMorty = await fetch(urlBaseRaM);
        const dataRaM = await responseRickMorty.json();
        const generalArrayRickMorty = Object.entries(dataRaM.results);
        
        const arrayRickMorty = [];
        const arrayRickMortyNames = [];  // names array
        const arrayRickMortyTypes = [];  // types array
        const arrayRickMortySpecies = []; // speceies array
        //Slide containing the cards
        const slider = document.getElementById("Slider");

        for(let i = 0; i < generalArrayRickMorty.length; i ++){
            arrayRickMorty.push(Object.entries(generalArrayRickMorty[i][1]));
            //Filling arrays
            arrayRickMortyNames.push(arrayRickMorty[i][1][1]);
            arrayRickMortyTypes.push(arrayRickMorty[i][4][1]);
            arrayRickMortySpecies.push(arrayRickMorty[i][3][1]);   
        }
        console.log(arrayRickMorty);
        const validacion = () => {
            const foundName = arrayRickMortyNames.find(i => i == input.value);
            const indexFoundName = arrayRickMortyNames.findIndex(i => i == input.value);

            if(indexFoundName != -1){
            //Create cards of Rick and Morty
            const card = document.createElement('article');
            card.className = "cardRaMPokemons";
            const imageRickMortyCharacter = document.createElement("img");
            imageRickMortyCharacter.className = "image";
            imageRickMortyCharacter.src = `${urlBaseRaM}/avatar/${indexFoundName + 1}.jpeg`;
            
            //Add cards
            slider.append(card);
            card.append(imageRickMortyCharacter);

            const listInfo = document.createElement("ul"); //list with information
            card.append(listInfo);

            //Function to craate the li elements of ul list (with character information)
            const addLiElement = (array, characterSettings) => {
                const li = document.createElement("li");
                listInfo.append(li);
                for (let i = 0; i < array.length; i++) {
                    if(indexFoundName === i + 1){
                        const setting = document.createTextNode(characterSettings + array[i + 1]);
                        li.append(setting);
                    }
                }   
            }
            //Calling the function
            addLiElement(arrayRickMortyNames, "Name: ");
            addLiElement(arrayRickMortySpecies, "Species: ");
            addLiElement(arrayRickMortyTypes, "Type: ");
            
            }
            //If does not found the name of Rick and Morty character
            else{
                const getInfoPokemons = async() => {
                    try {
                        const responsePokemons = await fetch(urlBasePokemons);
                        const dataPokemons = await responsePokemons.json();
                        
                        const generalArrayPokemons = Object.entries(dataPokemons.results);
                        
                        const arrayPokemons = [];
                        const arrayPokemonsNames = [];  // names array
                        
                        for(let i = 0; i < generalArrayPokemons.length; i ++){
                            arrayPokemons.push(Object.entries(generalArrayPokemons[i][1]));
                            //Filling arrays
                            arrayPokemonsNames.push(arrayPokemons[i][0][1]); 
                        }
                    
                        const foundPokemonName = arrayPokemonsNames.find(i => i == input.value);
                        const foundPokemonIndex = arrayPokemonsNames.findIndex(i => i == input.value);
                       
                        if (foundPokemonIndex != -1){
                            //Add pokemon card
                            const pokemonCard = document.createElement("article");
                            pokemonCard.className = "cardRaMPokemons";
                            slider.append(pokemonCard);
                            //Add image of pokemon
                            const pokemonImg = document.createElement("img");
                            pokemonImg.className = "image ";
                            pokemonCard.append(pokemonImg);
                            pokemonImg.src = `${urlPokemonImg}/${foundPokemonIndex + 1}.png`;
                            
                            //create list of pokemon information
                            const listPokemonInfo = document.createElement("ul");
                            pokemonCard.append(listPokemonInfo);

                            const liElement = document.createElement("li");
                            listPokemonInfo.append(liElement);
                            const namePokemon = document.createTextNode(foundPokemonName);
                            liElement.append(`Name: ${foundPokemonName}`);
                            
                        }
                        else{
                            alert("Escriba el nombre del personaje correctamente");
                            console.log("aqui " + foundPokemonIndex);
                        }    
                    }
                    catch(error){
                        console.log(error);
                    }
                }
                getInfoPokemons();
            }
           
        }
        //Clean the slider
        const cleanAll = () => {
            document.getElementById('Slider').innerHTML = '';
        }

            const input = document.getElementById("NameInput");
            const buttom = document.getElementById('Btn');
            const buttomClean = document.getElementById("Btn-clean");

            buttom.addEventListener("click", validacion);
            buttomClean.addEventListener("click", cleanAll);
    }

    catch(error){
        console.log(error);
    }
}

getInfoRaM();