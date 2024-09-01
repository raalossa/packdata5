class Consumo {
    constructor(year, tPyC, tPla, tVid, tMet, tOtr, tAno) {
        this.year = year;
        this.tPyC = tPyC;
        this.tPla = tPla;
        this.tVid = tVid;
        this.tMet = tMet;
        this.tOtr = tOtr;
        this.tAno = tAno;
    }
}

// Clase para combinar los datos en una estructura con múltiples años
class ConsumoCombinado {
    constructor() {
        this.data = {};
    }

    agregarAno(consumo) {
        this.data[consumo.year] = {
            tPyC: consumo.tPyC,
            tPla: consumo.tPla,
            tVid: consumo.tVid,
            tMet: consumo.tMet,
            tOtr: consumo.tOtr,
            tAno: consumo.tAno
        };
    }

    mostrarDatos() {
        for (const year in this.data) {
            console.log(`Datos para el año ${year}:`);
            console.log(`  tPyC: ${this.data[year].tPyC}`);
            console.log(`  tPla: ${this.data[year].tPla}`);
            console.log(`  tVid: ${this.data[year].tVid}`);
            console.log(`  tMet: ${this.data[year].tMet}`);
            console.log(`  tOtr: ${this.data[year].tOtr}`);
            console.log(`  tAno: ${this.data[year].tAno}`);
        }
    }
}

// Instancias de la clase Consumo para diferentes años
const c2018 = new Consumo(2018, 4, 3, 5, 7, 8, 27);
const c2019 = new Consumo(2019, 2, 3, 3, 2, 5, 15);

// Crear una instancia de ConsumoCombinado
const consumoCombinado = new ConsumoCombinado();

// Agregar años a la instancia de ConsumoCombinado
consumoCombinado.agregarAno(c2018);
consumoCombinado.agregarAno(c2019);

// Mostrar los datos combinados
consumoCombinado.mostrarDatos();

// Agregar otro año
const c2020 = new Consumo(2020, 5, 6, 4, 3, 2, 20);
consumoCombinado.agregarAno(c2020);

const c2021 = new Consumo(2021, 4, 6, 6, 2, 7, 25);
consumoCombinado.agregarAno(c2021);


// Mostrar los datos combinados después de agregar un nuevo año
consumoCombinado.mostrarDatos();

console.log(consumoCombinado)
