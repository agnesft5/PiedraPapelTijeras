function letsPlay(string1,string2){
    if (string1 === string2){
        return("Ha habido empate!")
    }else if(string1 === "papel" && string2 === "piedra"){
        return("El ordenador gana");
    }else if(string1 === "piedra" && string2 === "tijeras"){
        return("El ordenador gana");
    }else if(string1 ==="tijeras" && string2 ==="papel"){
        return("El ordenador gana");
    }else if(string1 === "piedra" && string2 === "papel"){
        return("Has ganado!");
    }else if(string1 === "papel" && string2 === "tijeras"){
        return("Has ganado!");
    }else if(string1 ==="tijeras" && string2 ==="piedra"){
        return("Has ganado!");
    }else{
        return("Vuelve a jugar!")
    }
}

    let array = ["piedra","papel","tijeras"];


//on vull que vagi el resultat
let outputContainerPC = document.querySelector(".result__textpc")
let outputContainer = document.querySelector(".result__text");

//botó pedra
let piedraButton = document.querySelectorAll(".piedra__button")[0];
piedraButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingPiedra = letsPlay(string1,"piedra")
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML =`${playingPiedra}`
});

//botó paper
let papelButton = document.querySelectorAll(".papel__button")[0];
papelButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingPapel = letsPlay(string1,"papel")
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML = `${playingPapel}`
});

//botó tisores
let tijerasButton = document.querySelectorAll(".tijeras__button")[0];
tijerasButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingTijeras= letsPlay(string1,"tijeras")
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML = `${playingTijeras}`
});