let urlBaseRaM = "https://rickandmortyapi.com/api/character/";
let urlBasePokemons = "https://pokeapi.co/api/v2/pokemon/";

const getInfoRaM = async() => {
    try{
        //Get data from API 
        const responseRickMorty = await fetch(urlBaseRaM);
        const dataRaM = await responseRickMorty.json();
        const generalArrayRickMorty = Object.entries(dataRaM.results);
        console.log(generalArrayRickMorty); 
        
        const arrayRickMorty = [];
        const arrayRickMortyNames = [];  // names array
        const arrayRickMortyTypes = [];  // types array
        const arrayRickMortySpecies = []; // speceies array

        const mainContainer = document.getElementById("Main");

        for(let i = 0; i < generalArrayRickMorty.length; i ++){
            arrayRickMorty.push(Object.entries(generalArrayRickMorty[i][1]));
            //Filling arrays
            arrayRickMortyNames.push(arrayRickMorty[i][1][1]);
            arrayRickMortyTypes.push(arrayRickMorty[i][4][1]);
            arrayRickMortySpecies.push(arrayRickMorty[i][3][1]);   
        }

        const validacion = () => {
            const foundName = arrayRickMortyNames.find(i => i == input.value);
            const indexFoundName = arrayRickMortyNames.findIndex(i => i == input.value);

            if(indexFoundName != -1){
            //Create cards of Rick and Morty
            const card = document.createElement('article');
            card.className = "rickMortyCard";
            const imageRickMortyCharacter = document.createElement("img");
            imageRickMortyCharacter.className = "characterRickMortyImg";
            imageRickMortyCharacter.src = `${urlBaseRaM}/avatar/${indexFoundName + 1}.jpeg`;
            
            //Add cards
            mainContainer.append(card);
            card.append(imageRickMortyCharacter);

            const listInfo = document.createElement("ul"); //list with information
            card.append(listInfo);

            //Function to craate the li elements of list ul(with character information)
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
            else if (indexFoundName === -1){
                const getInfoPokemons = async() => {
                    try {
                        const responsePokemons = await fetch(urlBasePokemons);
                        const dataPokemons = await responsePokemons.json();
                        
                        const generalArrayPokemons = Object.entries(dataPokemons.results);
                        console.log(generalArrayPokemons);
                        
                        const arrayPokemons = [];
                        const arrayPokemonsNames = [];  // names array
                        
                        for(let i = 0; i < generalArrayPokemons.length; i ++){
                            arrayPokemons.push(Object.entries(generalArrayPokemons[i][1]));
                            //Filling arrays
                            arrayPokemonsNames.push(arrayPokemons[i][0][1]); 
                        }

                        const foundPokemonName = arrayPokemonsNames.find(i => i = input.value);
                        const foundPokemonIndex = arrayPokemonsNames.findIndex(i => i = input.value);

                        if (foundPokemonIndex != -1){
                            console.log(foundPokemonName);
                        }
                        else{
                            alert("Escriba el nombre del personaje correctamente");
                        }
                        

                    }
                    catch(error){
                        console.log(error);
                    }
                }
                getInfoPokemons();
            }
            
    
        }

            const input = document.getElementById("NameInput");
            const buttom = document.getElementById('Btn');
            buttom.addEventListener("click", validacion);
    }

    catch(error){
        console.log(error);
    }
}

getInfoRaM();