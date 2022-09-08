let ciudades = ["Medellin", "Bogota", "Cali"];

for (let i = 0; i < ciudades.length; i++) {
  console.log(ciudades[i]);
}

ciudades.forEach((ciudad) => {
  console.log(ciudad);
});

// push-pop-shift son mutables
console.log(ciudades);
ciudades.push("Bucaramanga");
console.log(ciudades);
ciudades.pop();
console.log(ciudades);
ciudades.shift();
console.log(ciudades);

//inmutables
//Map >> Extraer
let nombres = ["Juan", "ana", "Lina"];
var nombresPrint = nombres.map((nombre) => `${nombre}`);
console.log(nombresPrint);
console.log(nombres);

let products = [
  { name: "Gaseosa", cost: 20 },
  { name: "Malta", cost: 30 },
  { name: "Jugo", cost: 40 },
];
var nombreProductos = products.map((product) => product.name);
console.log(nombreProductos);

var productsTax = products.map((product) => {
  return { ...product, tax: 19 };
});
console.log(productsTax);
console.log(products);

const equiposFPC = [
  { nombre: "Nacional", ciudad: "Medellin", ligas: 17, libertadores: 2 },
  { nombre: "Medellin", ciudad: "Medellin", ligas: 8, libertadores: 0 },
  { nombre: "Millonarios", ciudad: "Bogota", ligas: 15, libertadores: 0 },
  { nombre: "SantaFe", ciudad: "Bogota", ligas: 10, libertadores: 0 },
  { nombre: "America", ciudad: "Cali", ligas: 15, libertadores: 0 },
  { nombre: "Cali", ciudad: "Cali", ligas: 10, libertadores: 0 },
  { nombre: "OnceCaldas", ciudad: "Manizales", ligas: 5, libertadores: 1 },
];

//Map = Iterar Extraer
const nombresEquipos = equiposFPC.map((equipo) => equipo.nombre);
console.log(nombresEquipos);
//Find = buscar
const ciudadBogota = equiposFPC.find((equipo) => equipo.ciudad === "Bogota");
console.log(ciudadBogota);
//Every
const everyLibertadores = equiposFPC.every((equipo) => equipo.libertadores > 0);
console.log(everyLibertadores);
//Some
const someLibertadores = equiposFPC.some((equipo) => equipo.libertadores > 0);
console.log(someLibertadores);

//Filter
const ciudadMedellin = equiposFPC.filter(
  (equipo) => equipo.ciudad === "Medellin"
);
console.log(ciudadMedellin);

const soloNombresEquiposCiudadMedellin = equiposFPC
  .filter((equipo) => equipo.ciudad === "Medellin")
  .map((equipo) => equipo.nombre);
console.log(soloNombresEquiposCiudadMedellin);

//Reduce
const totalLibertadores = equiposFPC.reduce(
  (acumulador, equipo) => (acumulador += equipo.libertadores),
  0
);
console.log(totalLibertadores);

const totalLigasCiudadCali = equiposFPC
  .filter((equipo) => equipo.ciudad === "Cali")
  .reduce((acumulador, equipo) => (acumulador += equipo.ligas), 0);
console.log(totalLigasCiudadCali);

const texto = [
  "llama a la función",
  "callback",
  "sobre cada",
  " elemento del array",
];
const frase = texto.reduce(
  (fraseCompleta, palabra) => (fraseCompleta += " " + palabra),
  " "
);
console.log(frase);

const teamWinLigas = equiposFPC.reduce((prev, current) => {
  return prev.libertadores > current.libertadores ? prev : current;
});
console.log(teamWinLigas);

const objTotales = equiposFPC.reduce(
  (prev, equipo) => ({
    ligas: prev.ligas + equipo.ligas,
    libertadores: prev.libertadores + equipo.libertadores,
  }),
  { ligas: 0, libertadores: 0 }
);

console.log(objTotales);
