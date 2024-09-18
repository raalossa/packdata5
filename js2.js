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
            <div class= "cardActivities">
                <br/>
                <hr/>


                <div class= "cardActe1"> No: ${active.No} </div>  
                <div class= "cardActe2"> <p> Actividad: ${active.actividad} </p> </div>  
                <div class= "cardActe3">
                    <div class= "cardActe4"> Requisito: ${active.requisito} </div>  
                    <div class= "cardActe4"> Fecha: ${active.fecha} </div>  
                    <div class= "cardActe4"> Avance(%): ${active.avance} </div>  
                    <div class= "cardActe4"> Estado: ${active.estado} </div>  
                </div> 
                <div class= "cardActe5"> <button class= "button5"> Editar </button> </div>  
                <br/>

            </div>  
            `
           

}