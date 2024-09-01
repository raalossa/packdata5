// GESTORES



// const gestToShow = document.getElementById("gestCard");
// console.log("Halando ID Gestor")


document.addEventListener("DOMContentLoaded", () => {
    const gestToShow = document.getElementById("gestCard");

let gestData = (gestores);
displayGestCard(gestores);


// Mustra de las Tarjetas Gestor
function displayGestCard(x){
    // console.log("js5, displaing Gestores")
    const cardGestHtml = x.map(createGestCard).join('');
    gestToShow.innerHTML = cardGestHtml;

    // console.log("js5, after displaing Gestores")
};


// Creación de las tarjetas Gestor
function createGestCard(card){


    console.log("Creating Gestor ")
    // console.log("El Gestor es: ", card.gestor)
    console.log("El Gestor es: ", card.No)
    // console.log("El Gestor es: ", card.tipo)
    console.log("El Gestor es: ", card.web)
    return `
    <div class="box">
        <button class="buttongest"> <img src=${card.imagenGest} width=80%> </button>
        <h2> ${card.gestor} </h2>
        <p>  ${card.tipo} </p>
        <a href= ${card.web} target="_blank" > <button class="webb"> web </button> </a>
    </div>

    `

};
})




