//Actividad 1: Variables y Funciones

const name = "Michael Jeremy";

let age = 19; 

age = 20; 

let proyectofavorito = "Arcane";

console.log(name);
console.log(age);
console.log(proyectofavorito);

console.log('Hola mi nombre es ' + name + ' y tengo ' + age + ' años.');

//1. Declarar mostrarAge, funcion sin parametros que muestre la edad en consola.

function mostrarAge() {
    console.log(age);
}
//2. Agregarle un parametro a la funcion mostrarAge, que reciba un valor y lo muestre en consola.

function mostrarAge(valor) {
    console.log(valor);
}

function saludar(nombre) {
    console.log('Hola ' + nombre);
}
//3. Llamar a la funcion saludar y pasarle como argumento el nombre de la variable name.

saludar(name);  
mostrarAge(age); // Llamada a la función mostrarAge con el valor de age como argumento.

//Actividad 2: Condicionales

let edad = 25; // Variable definida después de su uso en console.log(edad)
let edad2 = 18; // Variable definida después de su uso en console.log(edad2)
let edad3 = 17; // Variable definida después de su uso en console.log(edad3)

if (edad > 18) {
    console.log('Eres mayor de edad');
}
else if (edad < 18) {
    console.log('Eres menor de edad');
}   
if (edad2 === 18) {
    console.log('Eres exactamente 18 años, por lo tanto eres mayor de edad');
}
if (edad3 < 18 && proyectofavorito === "Arcane") {
    console.log('Eres menor de edad y tu proyecto favorito es Arcane');
}       
else {
    console.log('Eres menor de edad y tu proyecto favorito no es Arcane');
}

//Actividad 3: Ciclos

let i = 1;
while (i < 11) {
    console.log(i);
    i++;
}

let o = 1;
while (o < 11) {
    if (o % 2 === 0) {
    console.log(o);
   
}
o++;
}
let herramientas = ["Martillo", "Destornillador", "Llave", "Taladro", "Sierra"];
for (let h = 0; h < herramientas.length; h++) {
    console.log(herramientas[h]);
}

let j = 5;
while (j > 0) {
    console.log(j);
    j--;
}