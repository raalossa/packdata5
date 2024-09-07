// Generador de actividades Plan de Acción

const newAct = document.getElementById("contAct");
console.log("En js2");
const act = actividades;
console.log(act[1])
console.log(act);
var qActivities = actividades.length;
console.log("Actividades: ", qActivities)
var i = 0;
let actData = actividades;
displayActivities (actividades);

function displayActivities(acts){
    const activeHtml = acts.map(createActHtml).join('');
    newAct.innerHTML = activeHtml;

};

function createActHtml(active){


            return  `
            <div class= "tableb">
                <div width="5%"> No: ${active.No} </div>  
                <div width="50%"> <p> Actividad: ${active.actividad} </p> </div>  
                <div width="10%"> Requisito: ${active.requisito} </div>  
                <div width="10%"> Fecha: ${active.fecha} </div>  
                <div width="10%"> Avance(%): ${active.avance} </div>  
                <div width="10%"> Estado: ${active.estado} </div>  
                <div width="5%"> <button> Editar </button> </div>  
            </div>  
            `
          

}