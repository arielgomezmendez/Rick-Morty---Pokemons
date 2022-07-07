let urlBaseRaM = "https://rickandmortyapi.com/api/character/";

const getInfo = async() => {
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

        /*const text = document.createTextNode("sfjgdffhg");
        mainContainer.append(text);

        const fillingList = () => {
            for (let i = 0; i < arrayRickMortyNames.length; i ++) {
                const text = document.createTextNode(arrayRickMortyNames[i]);
                mainContainer.append(text);
            }
        }
        fillingList();*/

        const validacion = () => {
            const foundName = arrayRickMortyNames.find(i => i == input.value);
            const indexFoundName = arrayRickMortyNames.findIndex(i => i == input.value);

            //Create cards of Rick and Morty
            const card = document.createElement('article');
            card.className = "rickMortyCard";
            const imageRickMortyCharacter = document.createElement("img");
            imageRickMortyCharacter.className = "characterRickMortyImg";
            imageRickMortyCharacter.src = `${urlBaseRaM}/avatar/${indexFoundName + 1}.jpeg`;
            
            //Add cards
            mainContainer.append(card);
            card.append(imageRickMortyCharacter);
            console.log(foundName);

            const listInfo = document.createElement("ul"); //list with information
            card.append(listInfo);

            const li1 = document.createElement("li");
            listInfo.append(li1);
            for (let i = 0; i < arrayRickMortyNames.length; i++) {
                if(indexFoundName === i + 1){
                    const text = document.createTextNode("Name: " + arrayRickMortyNames[i + 1]);
                    li1.append(text);
                }
            }

            const li2 = document.createElement("li");
            listInfo.append(li2);
            for (let i = 0; i < arrayRickMortySpecies.length; i++) {
                if(indexFoundName === i + 1){
                    const text = document.createTextNode("Species: " + arrayRickMortySpecies[i + 1]);
                    li2.append(text);
                }
            }

            const li3 = document.createElement("li");
            listInfo.append(li3);
            for (let i = 0; i < arrayRickMortyTypes.length; i++) {
                if(indexFoundName === i + 1){
                    const text = document.createTextNode("Types: " + arrayRickMortyTypes[i + 1]);
                    li3.append(text);
                }
            }

            /*const listInfoElements = []; 
            
            for(let i = 0; i < 3; i++ ){
                const li = document.createElement("li");
                listInfoElements.push(li);
            }
            listInfo.append(...listInfoElements);*/

            }

            const input = document.getElementById("NameInput");
            const buttom = document.getElementById('Btn');
            buttom.addEventListener("click", validacion);
        }

    catch(error){
        console.log(error);
    }
}

getInfo();