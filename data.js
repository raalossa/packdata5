
// BASES DE DATOS
const packages = [

    {
        codigo :"Emp1",
        nombre: "Envase 2",
        descripcion:"Cartón impreso dentro de bolsa termosellada transparente de PP",
        linkImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFJJ2UIrrFwA7SteuAgm9RtHPQVtVtIHcFQ&s",
        
        componentes: [
            {
            papelgUnd :50, 
            plastgUnd : 93, 
            vidriogUnd: 50, 
            metalgUnd: 170, 
            otrogUnd: 12
        }
        ],

        consumos:[{
            2018 : 5000,
            2019 : 12500,
            2020 : 7700,
            2021 : 2340,
            2022 : 7500,
            2023 : 8700,
            2024 : 2400,

            
        }]
    },

    {
        codigo :"Emp2",
        nombre: "Envase 3",
        descripcion:"Cartón impreso dentro de bolsa termosellada transparente de PP",
        linkImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tCrpivHqLKYMBuxe57DGlhYb7KcVE8awImHT5kQSL7K8yJM5O9CZC9Kf8-NVSjuR9RU&usqp=CAU",
        
        componentes: [
            {
            papelgUnd :30, 
            plastgUnd : 103, 
            vidriogUnd: 60, 
            metalgUnd: 180, 
            otrogUnd: 13
        }
        ],
        consumos:[{
            2018 : 6000,
            2019 : 13600,
            2020 : 3400,
            2021 : 2340,
            2022 : 7500,
            2023 : 8700,
            2024 : 2400
            
        }]
    },

    
    
    {
        codigo :"Emp3",
        nombre: "Envase 4",
        descripcion:"Cartón impreso dentro de bolsa termosellada transparente de PP",
        linkImagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/554230/w=1068,h=832,f=webp,fit=contain,q=85",
        
        componentes: [
            {
            papelgUnd :45, 
            plastgUnd : 123, 
            vidriogUnd: 0, 
            metalgUnd: 60, 
            otrogUnd: 12
        }
        ],
        consumos:[{
            2018 : 7000,
            2019 : 14700,
            2020 : 3400,
            2021 : 2340,
            2022 : 7500,
            2023 : 8700,
            2024 : 2400
            
        }]
    },

    {
        codigo :"Emp5",
        nombre: "Envase 5",
        descripcion:"Cartón impreso dentro de bolsa termosellada transparente de PP",
        linkImagen: "https://exitocol.vtexassets.com/arquivos/ids/5806397/barredor-burlete-flexible-para-puerta-de-garaje-x3mt-max-hogar-negro.jpg?v=637484152907870000",
        
        componentes: [
            {
            papelgUnd :55, 
            plastgUnd : 133, 
            vidriogUnd: 0, 
            metalgUnd: 0, 
            otrogUnd: 12
        }
        ],
        consumos:[{
            2018 : 8000,
            2019 : 15000,
            2020 : 3400,
            2021 : 2340,
            2022 : 7500,
            2023 : 8700,
            2024 : 2400
            
        }]
    },


    
    {codigo:"Emp4567",nombre:"Empaque Barredor Flex",descripcion:"Blister plastico PVC transparente con cartón impreso, sellado con cinta pegante",linkImagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFJJ2UIrrFwA7SteuAgm9RtHPQVtVtIHcFQ&s",
            componentes:[{
            
            papelgUnd:65,
            plastgUnd : 140,
            vidriogUnd: 0,
            metalgUnd: 0,
            otrogUnd: 0}],

            consumos:[{
                2018 : 9000,
                2019 : 16500,
                2020 : 3400,
                2021 : 2340,
                2022 : 7500,
                2023 : 8700,
                2024 : 2400
                
            }]
        
        },

            {codigo:"Emp7",nombre:"Caja de cartón Pequeña 1",descripcion:"Caja de cartón empaque secundario Se cierra con cinta plástica de 2 Pulgadas de ancho",linkImagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tCrpivHqLKYMBuxe57DGlhYb7KcVE8awImHT5kQSL7K8yJM5O9CZC9Kf8-NVSjuR9RU&usqp=CAU",componentes:[{papelgUnd:580,
                plastgUnd : 70,
                vidriogUnd: 150,
                metalgUnd: 0,
                otrogUnd: 0}],
                consumos:[{
                    2018 : 10000,
                    2019 : 17500,
                    2020 : 3400,
                    2021 : 2340,
                    2022 : 7500,
                    2023 : 8700,
                    2024 : 2400
                    
                }]},

                {codigo:"EmpSepOll1",nombre:"Empaque Separador Ollas",descripcion:"Bolsa plástica termosellada con impresion en Cartón Maule",linkImagen:"https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/554230/w=1068,h=832,f=webp,fit=contain,q=85",componentes:[{papelgUnd:30,
                    plastgUnd : 85,
                    vidriogUnd: 160,
                    metalgUnd: 0,
                    otrogUnd: 0}],
                    consumos:[{
                        2018 : 11000,
                        2019 : 18500,
                        2020 : 3400,
                        2021 : 2340,
                        2022 : 7500,
                        2023 : 8700,
                        2024 : 2400
                        
                    }]}

      
                
]

const mpRecuperado = [
        {
            2018:{
                "PyC":1.2,
                "Pla":2,
                "Vid":0.5,
                "Met":0.7,
                "Otr":0.2,
        } 
    ,

                2019:{
                "PyC":0.20,
                "Pla":0.2,
                "Vid":0.5,
                "Met":0.7,
                "Otr":0.2,
        },

                2020:{
                "PyC":0.2,
                "Pla":0.2,
                "Vid":0.5,
                "Met":0.7,
                "Otr":0.2,
        },

                2021:{
                "PyC":0.2,
                "Pla":0.12,
                "Vid":0.5,
                "Met":0.2,
                "Otr":0.12,
        },

                2022:{
                "PyC":1.2,
                "Pla":0.2,
                "Vid":0.5,
                "Met":0.2,
                "Otr":0.12,
        },

                2023:{
                "PyC":1.2,
                "Pla":1.2,
                "Vid":0.5,
                "Met":0.7,
                "Otr":0.2,
        } 

}


]


const actividades = [

    {
        No:1,
        actividad : "Tener informe de materiales utilizados en año anterior, incluyendo cantidades y mejoras en los materiales utilizados.",
        requisito :"32.5",
        fecha : "15 jul 2024",
        avance : 50,
        estado : "Pendiente"
    },
    {
        No:2,
        actividad : "Recibir auditoria de la ANLA relacionada con materiales utilizados.",
        requisito :"22",
        fecha : "20 ago 2024",
        avance : 70,
        estado : "Pendiente"
    },
    {
        No:3,
        actividad : "Actividad 3, incorporar procedimiento de manejo de envases según la norma 1407 de 2018",
        requisito :"24.4",
        fecha : "23 sep 2024",
        avance : 25,
        estado : "Terminado"
    },
    {
        No:4,
        actividad : "Emitir certificados de recuoeracion de materiales.",
        requisito :"36",
        fecha : "5 oct 2024",
        avance : 99,
        estado : "Pendiente"
    },
    {
        No:5,
        actividad : "Tener informe de materiales utilizados en año anterior, incluyendo cantidades y mejoras en los materiales utilizados.",
        requisito :"32.5",
        fecha : "15 jul 2024",
        avance : 50,
        estado : "Pendiente"
    },
    {
        No:6,
        actividad : "Recibir auditoria de la ANLA relacionada con materiales utilizados.",
        requisito :"22",
        fecha : "20 ago 2024",
        avance : 70,
        estado : "Pendiente"
    },
    {
        No:7,
        actividad : "Actividad 3, incorporar procedimiento de manejo de envases según la norma 1407 de 2018",
        requisito :"24.4",
        fecha : "23 sep 2024",
        avance : 25,
        estado : "Terminado"
    },
    {
        No:8,
        actividad : "Emitir certificados de recuoeracion de materiales.",
        requisito :"36",
        fecha : "5 oct 2024",
        avance : 99,
        estado : "Pendiente"
    },

]


const gestores = [

    {
        No:1,
        gestor : "Descont",
        tipo: "Gestión integral, Peligrosos",
        imagenGest : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv4qcyMRQtKkFDsNmrdqhwniT54PHgT4S9Q&s", 
        web: "https://www.descont.com.co/inicio",
        materiales : ["Papel y Cartón", "Plastico"]
         
    },
    {
        No:2,
        gestor : "Habitat Soluciones Integrales",
        tipo: "Orgánicos, Peligrosos",
        imagenGest : "https://habitatsolucionesintegrales.com/wp-content/uploads/2020/07/cropped-Logo-Habitat-Soluciones.png", 
        web: "https://habitatsolucionesintegrales.com/",
        materiales : ["Papel y Cartón", "Plastico"]
         
    },

    {
        No:3,
        gestor : "Punto Azul",
        tipo: "Gestión integral",
        imagenGest : "https://images.squarespace-cdn.com/content/v1/639a395f569c5172ae9292e6/98e4ae57-67cd-4fb1-9bc3-a17174d7bf27/Logo_PuntoAzul_Horizontal.png?format=1500w", 
        web: "https://www.puntoazul.com.co/plan-de-envases-y-empaques",
        materiales : ["Papel y Cartón", "Plastico"]
         
    },
    {
        No:4,
        gestor : "CircuLab by Fractal",
        tipo: "Gestión integral",
        imagenGest : "https://static.wixstatic.com/media/58e45f_1b66ef29e503451abd2edcf4f23ff29a~mv2.png/v1/fill/w_382,h_380,al_c,lg_1,q_85,enc_auto/logo.png", 
        web: "https://www.estrategiasfractal.com/circulab",
        materiales : ["Papel y Cartón", "Plastico"]
         
    },
    {
        No:5,
        gestor : "Green Plastic",
        tipo: "Plásticos",
        imagenGest : "https://greenplastic.co/wp-content/uploads/2021/07/Logo_green_plastic_verde_webR.svg", 
        web: "https://greenplastic.co/",
        materiales : ["Papel y Cartón", "Plastico"]
         
    },

]

