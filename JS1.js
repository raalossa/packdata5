//Validar Clave
function checkpass(){
    var emp = document.getElementById("empresa").value
    console.log("empresa: " + emp)
    var pass = document.getElementById("pass").value
    console.log("Clave: " + pass);
    
    if ((pass === "1234") && (emp === "Gransori")){
        //alert("Clave correcta")
            window.location.href = "Company.html";
        }else {
        alert("Clave o Usuario incorrectos, Intente de nuevo")
    }
    
    }

// Calculos Global

    var qPacks = packages.length;
    console.log(qPacks);

    //Variables a Imprimir
    var tPyC2018 = 0;
    var tPla2018 = 0;
    var tVid2018 = 0;
    var tMet2018 = 0;
    var tOtr2018 = 0;
    var sTotalMP2018 = 0;

    var ano1 = 2018;
    var ano2 = ano1+1;
    var ano3 = ano1+2;
    var ano4 = ano1+3;
    var ano5 = ano1+4;
    var ano6 = ano1+5;
    var ano7 = ano1+6;


    //Pruebas consumos arrays y Class
    var totalesArr = [2,3];
    console.log(totalesArr[1])
    var total2 = (Object.values(totalesArr))
    console.log(typeof(total2))
    console.log(total2)
    total2.push(3, 4, 5)
    console.log(total2);
    const c2 = 0;

    //Clase para consumos

    class Consumo { 
        constructor ( year, tPyC, tPla, tVid, tMet, tOtr, tAno){
            this.year= year;
            this.tPyC = tPyC;
            this.tPla = tPla;
            this.tVid = tVid;
            this.tMet = tMet;
            this.tOtr = tOtr;
            this.tAno = tAno;
        }
    }

    //Clase para combinar consumos años

    class ConsumoCombinado {
        constructor() {
            this.data = {};
        }

        agregarAno(consumo){
            this.data[consumo.year] = {
                tPyC : consumo.tPyC,
                tPla : consumo.tPla,
                tVid : consumo.tVid,
                tMet : consumo.tMet,
                tOtr : consumo.tOtr,
                tAno : consumo.tAno
            }
        }
    }

    //Crear una instancia de Consumo combinado

    const consumoCombinado = new ConsumoCombinado();



    var c2018 = [];


//Calculo Materiales Total




console.log("Cant Empaques" , qPacks)

console.log(packages)
console.log("Código global",packages[0].codigo)
console.log("Código global",packages[0].nombre)
console.log("detalle global",packages[0].componentes)
console.log("Consumos global",packages[0].consumos[0][2020])

var consumos = packages[0].consumos[0];
var qAnos = Object.keys(consumos).length
console.log("Q años",(qAnos));


//recorrer Años


function calcTotAno (x){

var y = ano1;

for (var g=0; g< qAnos; g++){

var x = y + g;
console.log(y)



//AÑO LOOP /////////////////////////////////////////////////////////////
 
// PYC
var sumTPyC18=0;
for(var i = 0;i<qPacks;i++){
    console.log("consc empaque",i, "* * * * * * * * * ");
    //Total empaques del periodo
    var tPack2018 = packages[i].consumos[0][x];
    console.log("packs/año/emp", tPack2018)
    //Peso de material de  1 empaque
    var pyc18 = packages[i].componentes[0].papelgUnd;
    //Peso de 1 material de 1 empaque todo el periodo
    var pycXpackX2018 = pyc18*tPack2018;
    console.log("g/emp: ",pyc18)
    console.log("gPyC/emp",pycXpackX2018)
    var sumTPyC18 = sumTPyC18 + pycXpackX2018;
    console.log("Sumatoria Total: ",sumTPyC18);
   }
   tPyC2018 = ((sumTPyC18)/1000000);
   console.log(`tPyC2018: ${tPyC2018} Toneladas ///////////////`)

// Pla
var sumTPla18=0;
for(var i = 0;i<qPacks;i++){
    console.log("consc empaque",i, "* * * * * * * * * ");
    //Total empaques del pewriodo
    var tPack2018 = packages[i].consumos[0][x];
    console.log("packs/año/emp 2018 ", tPack2018)
    //Peso de material de  1 empaque
    var pla18 = packages[i].componentes[0].plastgUnd;
    //Peso de 1 material de 1 empaque todo el periodo
    var plaXpackX2018 = pla18*tPack2018;
    console.log("g/emp: ",pla18)
    console.log("gPla/emp 2018",plaXpackX2018)
    var sumTPla18 = sumTPla18 + plaXpackX2018;
    console.log("Sumatoria Total: ",sumTPla18);
   }
   tPla2018 = ((sumTPla18)/1000000);
   console.log(`tPla 2018: ${tPla2018} Toneladas ///////////////`)

   // Vid
var sumTVid18=0;
for(var i = 0;i<qPacks;i++){
    console.log("consc empaque",i, "* * * * * * * * * ");
    //Total empaques del pewriodo
    var tPack2018 = packages[i].consumos[0][x];
    console.log("packs/año/emp 2018 ", tPack2018)
    //Peso de material de  1 empaque
    var vid18 = packages[i].componentes[0].vidriogUnd;
    //Peso de 1 material de 1 empaque todo el periodo
    var vidXpackX2018 = vid18*tPack2018;
    console.log("g/emp: ",vid18)
    console.log("gVid/emp 2018",vidXpackX2018)
    var sumTVid18 = sumTVid18 + vidXpackX2018;
    console.log("Sumatoria Total: ",sumTVid18);
   }
   tVid2018 = ((sumTVid18)/1000000);
   console.log(`tVid 2018: ${tVid2018} Toneladas ///////////////`)

      // Met
var sumTMet18=0;
for(var i = 0;i<qPacks;i++){
    console.log("consc empaque",i, "* * * * * * * * * ");
    //Total empaques del pewriodo
    var tPack2018 = packages[i].consumos[0][x];
    console.log("packs/año/emp 2018 ", tPack2018)
    //Peso de material de  1 empaque
    var met18 = packages[i].componentes[0].metalgUnd;
    //Peso de 1 material de 1 empaque todo el periodo
    var metXpackX2018 = met18*tPack2018;
    console.log("g/emp: ",met18)
    console.log("g/emp 2018",metXpackX2018)
    var sumTMet18 = sumTMet18 + metXpackX2018;
    console.log("Sumatoria Total: ",sumTMet18);
   }
   tMet2018 = (sumTMet18/1000000);
   console.log(`tMet 2018: ${tMet2018} Toneladas ///////////////`)

     // Otr
     var sumTOtr18=0;
     for(var i = 0;i<qPacks;i++){
         console.log("consc empaque",i, "* * * * * * * * * ");
         //Total empaques del pewriodo
         var tPack2018 = packages[i].consumos[0][x];
         console.log("packs/año/emp 2018 ", tPack2018)
         //Peso de material de  1 empaque
         var otr18 = packages[i].componentes[0].otrogUnd;
         //Peso de 1 material de 1 empaque todo el periodo
         var otrXpackX2018 = otr18*tPack2018;
         console.log("g/emp: ",otr18)
         console.log("g/emp 2018",otrXpackX2018)
         var sumTOtr18 = sumTOtr18 + otrXpackX2018;
         console.log("Sumatoria Total: ",sumTOtr18);
        }
        tOtr2018 = (sumTOtr18/1000000);
        console.log(`tOtr 2018: ${tOtr2018} Toneladas ///////////////`)

        // SUMA MATERIALES
     
        sTotalMP2018 = (tPyC2018+tPla2018+tVid2018+tMet2018+tOtr2018);
        console.log("Total MP2018: ",sTotalMP2018);






        //Genera Class

        const c2018 = new Consumo (x, tPyC2018, tPla2018, tVid2018, tMet2018, tOtr2018, sTotalMP2018);
        console.log(c2018)

        consumoCombinado.agregarAno(c2018)

    }

}

const c2025 = new Consumo (2025, 3, 4, 3, 5, 5, 20)

// consumoCombinado.agregarAno(c2018)
console.log("Consumo Combinado",consumoCombinado)
console.log("Consumo Combinado Det",consumoCombinado.data)
console.log(typeof(consumoCombinado))









    // Main content

    function mainCont(){

        calcTotAno();
        console.log("Consumo Combinado Det Det",consumoCombinado.data[2023].tAno)
        console.log("Main Executed")
        //const mainElements = document.getElementById("cont");

        const dCardP = document.getElementById("contMain");
        const detCard = `

        <table class= "tableMC"> 
            <tr  >
                <td class= "tdMC"> 
                    <h1 class = "titleComp"> ${qPacks} </h1> 
                    <h2 class= "titleComplement"> Empaques en Sistema </h2> 
                </td>
                <td class= "tdMC"> 
                
                MATERIALES
                
                <table class="box3">
                        <tr>
                            <td > Material </td>
                            <td> ${ano3} (t) </td>                            
                            <td> ${ano4} (t) </td>
                            <td> ${ano5} (t) </td>
                            <td> ${ano6} (t) </td>
                            
                        </tr>
                        <tr>
                            <td> Papel y Cartón </td>
                            <td> ${consumoCombinado.data[2020].tPyC.toFixed(2)} </td>
                            <td> ${consumoCombinado.data[2021].tPyC.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2022].tPyC.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2023].tPyC.toFixed(2)} </td>                                                         
                        </tr>
                        <tr>
                            <td> Plástico </td>
                            <td> ${consumoCombinado.data[2020].tPla.toFixed(2)} </td>
                            <td> ${consumoCombinado.data[2021].tPla.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2022].tPla.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2023].tPla.toFixed(2)} </td>                                                         
                        </tr>
                        <tr>
                            <td> Vidrio </td>
                            <td> ${consumoCombinado.data[2020].tVid.toFixed(2)} </td>
                            <td> ${consumoCombinado.data[2021].tVid.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2022].tVid.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2023].tVid.toFixed(2)} </td>                                  
                        </tr>
                        <tr>
                            <td> Metal </td>
                            <td> ${consumoCombinado.data[2020].tMet.toFixed(2)} </td>
                            <td> ${consumoCombinado.data[2021].tMet.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2022].tMet.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2023].tMet.toFixed(2)} </td>                               
                        </tr>
                        <tr>
                            <td> Otros </td>
                            <td> ${consumoCombinado.data[2020].tOtr.toFixed(2)} </td>
                            <td> ${consumoCombinado.data[2021].tOtr.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2022].tOtr.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2023].tOtr.toFixed(2)} </td>                             
                        </tr>
                                                <tr>
                            <td> Total (t) </td>
                            <td> ${consumoCombinado.data[2020].tAno.toFixed(2)} </td>
                            <td> ${consumoCombinado.data[2021].tAno.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2022].tAno.toFixed(2)} </td>   
                            <td> ${consumoCombinado.data[2023].tAno.toFixed(2)} </td>                                                                                
                        </tr>
                    </table> 

                </td>

            </tr>
            
            <tr>
                <td class= "tdMC"> 
                    <h1 class = "titleComp"> 83% </h1> 
                    <h1> Avance de Actividades </h1> 
                </td>
                <td class= "tdMC"> 
                    <h1 class = "titleComp"> 20% </h1> 
                    <h1> Porcentaje de recuperación </h1> 
                </td>

            </tr>
        

        </table>
       
        `

        dCardP.innerHTML = detCard;
    }






//Empaques .....
//Get Elements from HTML Page Empaques

const packList = document.getElementById("cont");
const searchInput = document.getElementById('search');
const detailPackContainer = document.getElementById("contDetail")

console.log(packList)
 
searchInput.addEventListener('input', handleSearchInput);

let packData = packages;
displayPacks (packages);

function displayPacks(packs){
    const packCardHtml = packs.map(createPackCardHTML).join('');
    packList.innerHTML = packCardHtml;
}


function createPackCardHTML (pack){
    
return `

        <div class="box" onclick="handlePackClick(this);"><!-- Add onclick event -->
            <h2>${pack.codigo}</h2>
            <p>${pack.nombre}</p>
            <img src="${pack.linkImagen}" alt="${pack.nombre} Image" style="width:100%; height:20vh;">            
<button onclick="viewPackComponents('${pack.codigo}'); event.stopPropagation();" style="width:100%;">Ver Detalle </button>
</div>
`

}

function handlePackClick (element) {

    const clickPackCard = element;
    if (clickPackCard){
        const clickPackName = clickPackCard.querySelector("h2").textContent;
        const selectedPack = packData.find(pack => pack.codigo === clickPackName);

        if (selectedPack){
            displayPackDetails(selectedPack);
        }
  
  
    }
}

function displayPackDetails (pack){
    console.log("Displaing Pack Details!")
    const packDetailsHtml = `
            <button onclick="window.location.reload();">Back</button>
            <h2>${pack.codigo}</h2>
            
            <img src="${pack.linkImagen}">

    `;
    detailPackContainer.innerHTML = packDetailsHtml

};

// Detalle de un empaque
function viewPackComponents (packName){


    //busca el empaque que he seleccionado
    const selectedPack = packData.find(pack => pack.codigo === packName);
    const packNomSel = (selectedPack.componentes);

    //Materiales por empaque Peso y %
    const spPapyCart = selectedPack.componentes[0].papelgUnd;
    const spPlast = selectedPack.componentes[0].plastgUnd;
    const spVidrio = selectedPack.componentes[0].vidriogUnd;
    const spMetal = selectedPack.componentes[0].metalgUnd;
    const spOtros = selectedPack.componentes[0].otrogUnd;
    const spTotal = (spPapyCart+spPlast+spVidrio+spMetal+spOtros)

    console.log("Detalle de un empaque!")
    console.log(selectedPack.codigo)
    console.log("Papel y Carton: ",spPapyCart)
    console.log("PLastico: ",spPlast)
    console.log("Vidrio: ",spVidrio)
    console.log("Metal: ",spMetal)
    console.log("Otros: ",spOtros)
    console.log("Total: ",spTotal)

    // %%
    const pPapyCart = (spPapyCart/spTotal)*100;
    const pPlast = (spPlast/spTotal)*100;
    const pVidrio = (spVidrio/spTotal)*100;
    const pMetal = (spMetal/spTotal)*100;
    const pOtros = (spOtros/spTotal)*100;
    const pTotal = (pPapyCart+pPlast+pVidrio+pMetal+pOtros)

    console.log("% Pap y Carton: ", pPapyCart);
    console.log("% Plastico: ", pVidrio);
    console.log("% Vidrio: ", pVidrio);
    console.log("% Metal: ", pMetal);
    console.log("% Otros: ", pOtros);
    console.log("% Total: ", pTotal);
    
    
    
    
    //Borrar cntenido empaques en display antes de ver detalle
    packList.innerHTML = "";

    const packNameDetailHtml = `
           
    <table class= "box2">
            <tr>
                <tr>
                    <td class="tline"> <h1> Código: ${selectedPack.codigo} </h1></td>                   
                    <td class="tline"> <h1> Nombre: ${selectedPack.nombre} </h1></td>                

                </tr>
                
                <td class="tline"><img class="image2" src= "${selectedPack.linkImagen}"></td>
                <td class="tline"> 
                    <table class="box3">
                        <tr>
                            <td > Material </td>
                            <td> Peso (g) </td>
                            <td> Porcentaje (%) </td>
                        </tr>
                        <tr>
                            <td> Papel y Cartón </td>
                            <td> ${spPapyCart} </td>
                            <td> ${pPapyCart.toFixed(1)} </td>                            
                        </tr>
                        <tr>
                            <td> Plástico </td>
                            <td> ${spPlast} </td>
                            <td> ${pPlast.toFixed(1)} </td>                            
                        </tr>
                        <tr>
                            <td> Vidrio </td>
                            <td> ${spVidrio} </td>
                            <td> ${pVidrio.toFixed(1)} </td>                            
                        </tr>
                        <tr>
                            <td> Metal </td>
                            <td> ${spMetal} </td>
                            <td> ${pMetal.toFixed(1)} </td>                            
                        </tr>
                        <tr>
                            <td> Otros </td>
                            <td> ${spOtros} </td>
                            <td> ${pOtros.toFixed(1)} </td>                            
                        </tr>
                        <tr>
                            <td> Otros </td>
                            <td> ${spTotal} </td>
                            <td> ${pTotal.toFixed(1)} </td>                            
                        </tr>
                    </table> 
                <tr>
                  
                    <td>  <button onclick="window.location.reload();">Back</button></td>     
                    <td> <button> Editar Empaque</td>                                

                </tr>
                </td>
            </tr>

          

        </table>

        `



    

    detailPackContainer.innerHTML = packNameDetailHtml;

};

function handleSearchInput (){

    let searchKeyWord = searchInput.value;

    const filterPacks = packData.filter (pack => {
        let packItemsToSearch = `${pack.nombre} ${pack.codigo}`;
        packItemsToSearch = packItemsToSearch.toLowerCase();
        return packItemsToSearch.includes(searchKeyWord);


    })

    console.log(searchKeyWord);
    displayPacks(filterPacks)

}




