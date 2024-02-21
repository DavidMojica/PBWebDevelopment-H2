//5 variables let const
//3 arrow, sin param, 1 param, 2 o + param
//integrar con lamado a funciones y mostrar resultados
//Entregar en: 28-02-24

//--------Variable declaration--------//
const nombre = "Dolores";
const apellidos = "Delano Rojas";
const arroz = 2500;
const carne = 18000;
const random = Math.random();
let fullName = undefined;
//Errors
const err_1 = "Complete name is not a string, instead is a";

/*--------ARROWS---------*/
const productsValue = () => {
    return arroz + carne;
}

const multiplyPerRandom = num => {
    return num * getRandomNumber(1, 100);
}

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const completeName = (userName, userLastName) => {
    return `${userName} ${userLastName}`;
}

//---------Integracion mediante Logs-----------//
console.log(`Products total -----> ${productsValue()}`);
console.log(`Number * Random ------> ${multiplyPerRandom(10)}`);
console.log(`Random number ------> ${getRandomNumber(500, 1000)}`);
console.log(`Full name ------> ${completeName(nombre, apellidos)}`);
