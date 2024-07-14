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

            <table class= "tableb">

            <tr> 
                <td width="5%"> ${active.No} </td>  
                <td width="50%"> <p> ${active.actividad} </p> </td>
                <td width="10%"> ${active.requisito} </td>
                <td width="10%"> ${active.fecha} </td>  
                <td width="10%"> ${active.avance} </td>
                <td width="10%"> ${active.estado} </td>
                <td width="5%"> <button> Editar </button> </td>    
            </tr>

            </table>
            `
        

       

}