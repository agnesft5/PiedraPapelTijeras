function letsPlay(event,string1,string2){
    if (string1 === string2){
        return("Ha habido empate!")
    }else if(string1 === "Papel" && string2 === "Piedra"){
        return("El ordenador gana");
    }else if(string1 === "Piedra" && string2 === "Tijeras"){
        return("El ordenador gana");
    }else if(string1 ==="Tijeras" && string2 ==="Papel"){
        return("El ordenador gana");
    }else if(string1 === "Piedra" && string2 === "Papel"){
        return("Has ganado!");
    }else if(string1 === "Papel" && string2 === "Tijeras"){
        return("Has ganado!");
    }else if(string1 ==="Tijeras" && string2 ==="Piedra"){
        return("Has ganado!");
    }else{
        return("Vuelve a jugar!")
    }
}

    let array = ["Piedra","Papel","Tijeras"];


function goBack (){
    location.reload(true)
}



//on vull que vagi el resultat
let outputContainerPC = document.querySelector(".result__textpc")
let outputContainer = document.querySelector(".result__text");
let returnButton = document.querySelector(".result__button");
let victoriaContainer = document.querySelector(".bi__victoria");
let derrotaContainer = document.querySelector(".bi__derrota");

//botó pedra
let piedraButton = document.querySelectorAll(".piedra__button")[0];
piedraButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingPiedra = letsPlay(event,string1,"Piedra")
    let contadorVictoriasPiedra = contadorVictorias(playingPiedra); //CONTADOR VICTORIA
    victoriaContainer.value = `${contadorVictoriasPiedra}`//CONTADOR VICTORIA - aqui s'ha de crear el contenidor per l'output (els inputs de dalt a la dreta i fer l'inner.HTML)
    let contadorDerrotasPiedra = contadorDerrotas(playingPiedra); //CONTADOR DERROTA
    derrotaContainer.value = `${contadorDerrotasPiedra}`; //CONTADOR DERROTA
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML =`${playingPiedra}`
    returnButton.className = ["btn btn-secondary mt-0 mb-10 result__button"];
    returnButton.addEventListener("click",()=>{goBack()
    });
});

//botó paper
let papelButton = document.querySelectorAll(".papel__button")[0];
papelButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingPapel = letsPlay(event,string1,"Papel")
    let contadorVictoriasPapel = contadorVictorias(playingPapel); //CONTADOR VICTORIA
    victoriaContainer.value = `${contadorVictoriasPapel}`//CONTADOR VICTORIA - aqui s'ha de crear el contenidor per l'output (els inputs de dalt a la dreta i fer l'inner.HTML)
    let contadorDerrotasPapel = contadorDerrotas(playingPapel); //CONTADOR DERROTA
    derrotaContainer.value = `${contadorDerrotasPapel}`; //CONTADOR DERROTA
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML = `${playingPapel}`
    returnButton.className = ["btn btn-secondary mt-0 mb-10 result__button"];
    returnButton.addEventListener("click",()=>{goBack()
    });
});

//botó tisores
let tijerasButton = document.querySelectorAll(".tijeras__button")[0];
tijerasButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingTijeras= letsPlay(event,string1,"Tijeras")
    let contadorVictoriasTijeras = contadorVictorias(playingTijeras); //CONTADOR VICTORIA
    victoriaContainer.value = `${contadorVictoriasTijeras}`//CONTADOR VICTORIA - aqui s'ha de crear el contenidor per l'output (els inputs de dalt a la dreta i fer l'inner.HTML)
    let contadorDerrotasTijeras = contadorDerrotas(playingTijeras); //CONTADOR DERROTA
    derrotaContainer.value = `${contadorDerrotasTijeras}`; //CONTADOR DERROTA
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML = `${playingTijeras}`;
    returnButton.className = ["btn btn-secondary mt-0 mb-10 result__button"];
    returnButton.addEventListener("click",()=>{goBack()
    });
});

function contadorVictorias(playingWeapon){
let contadorUsuario = 0;
    if(playingWeapon === "Has ganado!"){
        contadorUsuario++;
    }
    return contadorUsuario;
}

function contadorDerrotas(playingWeapon){
    let contadorPC = 0;
        if(playingWeapon === "El ordenador gana"){
            contadorPC++;
        }
        return contadorPC;
    }