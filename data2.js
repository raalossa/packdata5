
const pdatauser =[
    
        { id:1, compania:"Gransori",
            usuarios:[
                {
                    userId:1,
                    username: "Rafael",
                    usersurname: "Osorio",
                    usermail: "innovacion@gransori.com",
                    userPassword: "1234"
                },
                {
                    userId:2,
                    username: "Ana Maria",
                    usersurname: "Osorio Sánchez",
                    usermail: "anamria_osorio@gransori.com",
                    userPassword: "1234"
                }
            ],
        },
        {  id:2, compania:"Casa Luker",

            usuarios:[
                {
                    userId:1,
                    username: "Pepe",
                    usersurname: "Luker",
                    usermail: "innovacion@gransori.com",
                    userPassword: "1234"
                },
                {
                    userId:2,
                    username: "Charlie",
                    usersurname: "Luker",
                    usermail: "anamria_osorio@gransori.com",
                    userPassword: "1234"
                }
            ],
        }
    ];


const pdatacomp =[
    {  id:1, compania:"Gransori",


    empaques:[
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

                    
    ]
    },

    {  id:2, compania:"Casa Luker",

        empaques:[
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
    
                        
        ]
        }




    ];
    

