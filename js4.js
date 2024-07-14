
        const ctx = document.getElementById('myChart1');
        const ctx2 = document.getElementById('myChart2');
        const ctx3 = document.getElementById('myChart3');
        const ctx4 = document.getElementById('myChart4');

        // console.log(consumoCombinado);

        function estadistic(){
        calcTotAno();

        var tPyC= (
          consumoCombinado.data[2018].tPyC+
          consumoCombinado.data[2019].tPyC+
          consumoCombinado.data[2020].tPyC+
          consumoCombinado.data[2021].tPyC+
          consumoCombinado.data[2022].tPyC+
          consumoCombinado.data[2023].tPyC
        ).toFixed(2);
        var tPla= (
          consumoCombinado.data[2018].tPla+
          consumoCombinado.data[2019].tPla+
          consumoCombinado.data[2020].tPla+
          consumoCombinado.data[2021].tPla+
          consumoCombinado.data[2022].tPla+
          consumoCombinado.data[2023].tPla
        ).toFixed(2);
        var tVid= (
          consumoCombinado.data[2018].tVid+
          consumoCombinado.data[2019].tVid+
          consumoCombinado.data[2020].tVid+
          consumoCombinado.data[2021].tVid+
          consumoCombinado.data[2022].tVid+
          consumoCombinado.data[2023].tVid
        ).toFixed(2);

        var tMet= (
          consumoCombinado.data[2018].tMet+
          consumoCombinado.data[2019].tMet+
          consumoCombinado.data[2020].tMet+
          consumoCombinado.data[2021].tMet+
          consumoCombinado.data[2022].tMet+
          consumoCombinado.data[2023].tMet
        ).toFixed(2);


        var tOtr= (
          consumoCombinado.data[2018].tOtr+
          consumoCombinado.data[2019].tOtr+
          consumoCombinado.data[2020].tOtr+
          consumoCombinado.data[2021].tOtr+
          consumoCombinado.data[2022].tOtr+
          consumoCombinado.data[2023].tOtr
        ).toFixed(2);



        console.log("tPyC:",tPyC)
        console.log("tPla:",tPla)
        console.log("tVid:",tVid)
        console.log("tMet:",tMet)
        console.log("tMet:",tOtr)
        console.log("consumocombinado", consumoCombinado );

        // MATERIAL RECUPERADO

        // total / año
        var  mr2018 = mpRecuperado[0][2018].PyC+
                      mpRecuperado[0][2018].Pla+
                      mpRecuperado[0][2018].Vid+
                      mpRecuperado[0][2018].Met+
                      mpRecuperado[0][2018].Otr

        var  mr2019 = mpRecuperado[0][2019].PyC+
                      mpRecuperado[0][2019].Pla+
                      mpRecuperado[0][2019].Vid+
                      mpRecuperado[0][2019].Met+
                      mpRecuperado[0][2019].Otr

        var  mr2020 = mpRecuperado[0][2020].PyC+
                      mpRecuperado[0][2020].Pla+
                      mpRecuperado[0][2020].Vid+
                      mpRecuperado[0][2020].Met+
                      mpRecuperado[0][2020].Otr

        var  mr2021 = mpRecuperado[0][2021].PyC+
                      mpRecuperado[0][2021].Pla+
                      mpRecuperado[0][2021].Vid+
                      mpRecuperado[0][2021].Met+
                      mpRecuperado[0][2021].Otr

        var  mr2022 = mpRecuperado[0][2022].PyC+
                      mpRecuperado[0][2022].Pla+
                      mpRecuperado[0][2022].Vid+
                      mpRecuperado[0][2022].Met+
                      mpRecuperado[0][2022].Otr


        var  mr2023 = mpRecuperado[0][2023].PyC+
                      mpRecuperado[0][2023].Pla+
                      mpRecuperado[0][2023].Vid+
                      mpRecuperado[0][2023].Met+
                      mpRecuperado[0][2023].Otr


        console.log("MP Total 2018:",consumoCombinado.data[2018].tAno);
        console.log("MP Total 2019:",consumoCombinado.data[2019].tAno);
        console.log("MP Total 2020:",consumoCombinado.data[2020].tAno);
        console.log("MP Total 2021:",consumoCombinado.data[2021].tAno);
        console.log("MP Total 2022:",consumoCombinado.data[2022].tAno);
        console.log("MP Total 2023:",consumoCombinado.data[2023].tAno);


        console.log("mr2018", mr2018),
        console.log("mr2019", mr2019),
        console.log("mr2020", mr2020),
        console.log("mr2021", mr2021),
        console.log("mr2022", mr2022),
        console.log("mr2023", mr2023)
        console.log("Tot Rec:",(mr2018+mr2019+mr2020+mr2021+mr2022+mr2023))

        // Total / MP Recuperado
        var pycRec =      mpRecuperado[0][2018].PyC+
                          mpRecuperado[0][2019].PyC+
                          mpRecuperado[0][2020].PyC+
                          mpRecuperado[0][2021].PyC+
                          mpRecuperado[0][2022].PyC+
                          mpRecuperado[0][2023].PyC;
        var plaRec =      mpRecuperado[0][2018].Pla+
                          mpRecuperado[0][2019].Pla+
                          mpRecuperado[0][2020].Pla+
                          mpRecuperado[0][2021].Pla+
                          mpRecuperado[0][2022].Pla+
                          mpRecuperado[0][2023].Pla;
        var vidRec =      mpRecuperado[0][2018].Vid+
                          mpRecuperado[0][2019].Vid+
                          mpRecuperado[0][2020].Vid+
                          mpRecuperado[0][2021].Vid+
                          mpRecuperado[0][2022].Vid+
                          mpRecuperado[0][2023].Vid;
        var metRec =      mpRecuperado[0][2018].Met+
                          mpRecuperado[0][2019].Met+
                          mpRecuperado[0][2020].Met+
                          mpRecuperado[0][2021].Met+
                          mpRecuperado[0][2022].Met+
                          mpRecuperado[0][2023].Met;
        var otrRec =      mpRecuperado[0][2018].Otr+
                          mpRecuperado[0][2019].Otr+
                          mpRecuperado[0][2020].Otr+
                          mpRecuperado[0][2021].Otr+
                          mpRecuperado[0][2022].Otr+
                          mpRecuperado[0][2023].Otr;

        console.log("Total pyCRec", pycRec)
        console.log("Total plaRec", plaRec)
        console.log("Total vidRec", vidRec)
        console.log("Total metRec", metRec)
        console.log("Total otrRec", otrRec)
        console.log("Tot Rec:",(pycRec+plaRec+vidRec+metRec+otrRec))
        

        /// % MP RECUPERADO / AÑO

        var pMpR2018 = (mr2018/consumoCombinado.data[2018].tAno)*100;
        var pMpR2019 = (mr2019/consumoCombinado.data[2019].tAno)*100;
        var pMpR2020 = (mr2020/consumoCombinado.data[2020].tAno)*100;
        var pMpR2021 = (mr2021/consumoCombinado.data[2021].tAno)*100;
        var pMpR2022 = (mr2022/consumoCombinado.data[2022].tAno)*100;
        var pMpR2023 = (mr2023/consumoCombinado.data[2023].tAno)*100;
        console.log("%2018:",pMpR2018);
        console.log("%2019:",pMpR2019);
        console.log("%2020:",pMpR2020);
        console.log("%2021:",pMpR2021);
        console.log("%2022:",pMpR2022);
        console.log("%2023:",pMpR2023);






        // var mrTot = mrPyC2018+mrPyC2019+mrPyC2020+mrPyC2021+mrPyC2022+mrPyC2023
        // cosnsole.log("mr2018",mrPyC2018)
        // console.log("mr2019",mrPyC2019)
        // console.log("mrTot",mrTot)



                //CHART 1 CONCSUMOS TOTALES
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: [2018, 2019, 2020,2021, 2022, 2023],
            datasets: [{
                label: 'Consumo Total/Año (t) Todos los materiales',
                data: [consumoCombinado.data[2018].tAno.toFixed(2), consumoCombinado.data[2019].tAno.toFixed(2), consumoCombinado.data[2020].tAno.toFixed(2), consumoCombinado.data[2021].tAno.toFixed(2), consumoCombinado.data[2022].tAno.toFixed(2), consumoCombinado.data[2023].tAno.toFixed(2)],
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });

                //CHART 2
        new Chart(ctx2, {
            type: 'doughnut',
            data:  {
                labels: [
                  'Papel y Cartón',
                  'Plástico',
                  'Vidrio',
                  'Metal', 
                  'Otros'                  
                ],
                datasets: [{
                  label: 'My First Dataset',
                  data: [tPyC, tPla, tVid, tMet,tOtr],
                  backgroundColor: [
                    'rgb(218, 253, 186)',
                    'rgb(164, 235, 163)',
                    'rgb(69, 196, 176)',
                    'rgb(19, 103, 138)',
                    'rgb(1, 32, 48)'                                        
                  ],
                  hoverOffset: 4
                }]
              }
        })

 
                //CHART 3 Total recuperado por año
                new Chart(ctx3, {
                  type: 'bar',
                  data: {
                  labels: [2018, 2019, 2020,2021, 2022, 2023],
                  datasets: [{
                      label: 'Recuperación Total/Año (t) Todos los materiales',
                      data: [mr2018,mr2019,mr2020, mr2021, mr2022,mr2023],
                      backgroundColor: [
                        'rgb(100, 99, 132)'],
                      borderWidth: 1
                  }]
                  },
                  options: {
                  scales: {
                      y: {
                      beginAtZero: true
                      }
                  }
                  }
              });
      
                      //CHART 4 % recuperacion / año
              new Chart(ctx4, {
                type: 'bar',
                data: {
                labels: [2018, 2019, 2020,2021, 2022, 2023],
                datasets: [{
                    label: 'Recuperación Total/Año (t) Todos los materiales',
                    data: [pMpR2018, pMpR2019, pMpR2020, pMpR2021, pMpR2022, pMpR2023],
                    backgroundColor: [
                      'rgb(19, 103, 138)'],
                    borderWidth: 1
                }]
                },
                options: {
                scales: {
                    y: {
                    beginAtZero: true
                    }
                }
                }
            });
            }