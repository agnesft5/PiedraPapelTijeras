function letsPlay(string1,string2){
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

//botó pedra
let piedraButton = document.querySelectorAll(".piedra__button")[0];
piedraButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingPiedra = letsPlay(string1,"Piedra")
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML =`${playingPiedra}`
    returnButton.className = ["btn btn-secondary m-3 result__button"];
    returnButton.addEventListener("click",()=>{goBack()
    });
});

//botó paper
let papelButton = document.querySelectorAll(".papel__button")[0];
papelButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingPapel = letsPlay(string1,"Papel")
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML = `${playingPapel}`
    returnButton.className = ["btn btn-secondary m-3 result__button"];
    returnButton.addEventListener("click",()=>{goBack()
    });
});

//botó tisores
let tijerasButton = document.querySelectorAll(".tijeras__button")[0];
tijerasButton.addEventListener("click",()=>{
    let index = Math.round(Math.random()*(array.length-1));
    let string1 = array[index];
    let playingTijeras= letsPlay(string1,"Tijeras")
    outputContainerPC.innerHTML = `El ordenador ha sacado: ${string1}`
    outputContainer.innerHTML = `${playingTijeras}`
    returnButton.className = ["btn btn-secondary m-3 result__button"];
    returnButton.addEventListener("click",()=>{goBack()
    });
});