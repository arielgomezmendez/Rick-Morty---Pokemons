let urlBaseRaM = "https://rickandmortyapi.com/api/character/";
let urlBasePokemons = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154";

const getInfo = async() => {
    //Obtaining  information  from Rick and Morty API
    try{
        const responseRaM = await fetch(urlBaseRaM);
        const dataRaM = await responseRaM.json();    
        //Obtaining a matrix of arrays(2x2) of strings,the entries method helps to convert objects in arrays
        const generalArrayRaM = Object.entries(dataRaM.results);
        const arrayRaM = [];

        for(let i = 0; i < generalArrayRaM.length; i ++){
            //Obtaining a matrix of arrays(2x2) with values and properties
            arrayRaM.push(Object.entries(generalArrayRaM[i][1])); 
        }
        console.log(arrayRaM);
    }
    
    catch(error){
        console.log(error);
    }

    //Obtaining  information  from  Pokemons API
    try{
        const responsePokemons = await fetch(urlBasePokemons);
        const dataPokemons = await responsePokemons.json();
        console.log(dataPokemons.results);
    }


    catch(error){
        console.log(error);
    }
}

getInfo();
