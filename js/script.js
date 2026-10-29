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
//Actividad 4: Objetos y Arreglos
//

let pokemon2 = {
    name: 'squirtle',
    type: 'water',
    level: '8',
    description: 'Squirtle is a water-type Pokémon known for its protective shell. It evolves into Wartortle and eventually into Blastoise.'
};


let pokedex = [
    {
        name: 'charmander',
        type: 'fire',
        level: '5',
        description: 'Charmander is a fire-type Pokémon known for its fiery tail. It evolves into Charmeleon and eventually into Charizard.'
    },
    {
        name: 'squirtle',
        type: 'water',
        level: '8',
        description: 'Squirtle is a water-type Pokémon known for its protective shell. It evolves into Wartortle and eventually into Blastoise.'
    },
    {
        name: 'bulbasaur',
        type: 'grass/poison',
        level: '7',
        description: 'Bulbasaur is a grass/poison-type Pokémon known for the plant bulb on its back. It evolves into Ivysaur and eventually into Venusaur.'
    },
    {
        name: 'pikachu',
        type: 'electric',
        level: '10',
        description: 'Pikachu is an electric-type Pokémon known for its yellow fur and ability to generate electricity. It evolves from Pichu and can evolve into Raichu.'
    }
];

let pokedex2 = [
    {
        name: 'eevee',
        type: 'normal',
        level: '5',
        description: 'Eevee is a normal-type Pokémon known for its multiple evolution options. It can evolve into various forms such as Vaporeon, Jolteon, Flareon, and more.'

    },
    {
        name: 'glaceon',
        type: 'ice',
        level: '10',
        description: 'Glaceon is an ice-type Pokémon and one of the evolutions of Eevee. It evolves from Eevee when exposed to an Ice Stone or when leveled up near an Ice Rock.'

    },
    {
        name: 'vaporeon',
        type: 'water',
        level: '15',
        description: 'Vaporeon is a water-type Pokémon and one of the evolutions of Eevee. It evolves from Eevee when exposed to a Water Stone.'
    }
];

console.log(pokedex2[2].name);
console.log(pokedex2.length);

//Actividad 5: Push y Pop

let Array = [1, 2, 3, 4, 5];

console.log(Array);

Array.push(6);

console.log(Array);

//Actividad 6: For y ForEach
// Usar ForEach para agregar un nuevo elemento, si el elemento ya existe, no agregarlo, si no existe, agregarlo.'

let nuevoPokemon = {
    name: 'jolteon',
    type: 'electric',
    level: '20',
    description: 'Jolteon is an electric-type Pokémon and one of the evolutions of Eevee. It evolves from Eevee when exposed to a Thunder Stone.'
};

let existe = false;

pokedex2.forEach(function(pokemon) {
    existe = true;
    console.log('El pokemon ' + pokemon.name + ' ya existe en la pokedex2');
});

if (!existe) {
    pokedex2.push(nuevoPokemon);
    console.log('El pokemon ' + nuevoPokemon.name + ' ha sido agregado a la pokedex2');
} else {
    console.log('El pokemon ' + nuevoPokemon.name + ' no se ha agregado a la pokedex2 porque ya existe');
}
pokedex2.find(function(pokemon) {
    if (pokemon.name === 'jolteon') {
        console.log('El pokemon ' + pokemon.name + ' ya existe en la pokedex2');
    }
});

console.log(pokedex2);

//Crud: Crear, Leer, Actualizar y Eliminar

//Generar las cuatro funciones para poder aplicarlas a un arreglo de objetos, en este caso la pokedex2. Crear una funcion para cada operacion, que reciba como parametro el arreglo y el objeto a crear, leer, actualizar o eliminar.

//Funcion crear
function crearPokemon(arreglo, pokemon) {
    arreglo.push(pokemon);
    console.log('El pokemon ' + pokemon.name + ' ha sido agregado a la pokedex2');
}

//Funcion leer
function leerPokemon(arreglo, nombre) {
    let pokemon = arreglo.find(function(pokemon) {
        return pokemon.name === nombre;
    });
    if (pokemon) {
        console.log('El pokemon ' + pokemon.name + ' ha sido encontrado en la pokedex2');
    };
}

//Funcion actualizar
function actualizarPokemon(arreglo, nombre, nuevoPokemon) {
    let index = arreglo.findIndex(function(pokemon) {
        return pokemon.name === nombre;
    });
    if (index !== -1) {
        arreglo[index] = nuevoPokemon;
        console.log('El pokemon ' + nombre + ' ha sido actualizado en la pokedex2');
    }   
}   
//Funcion eliminar
function eliminarPokemon(arreglo, nombre) {
    let index = arreglo.findIndex(function(pokemon) {
        return pokemon.name === nombre;
    });
    if (index !== -1) {
        arreglo.splice(index, 1);
        console.log('El pokemon ' + nombre + ' ha sido eliminado de la pokedex2');
    }
}   

//Ejercicios de Javascript

//Ejercicios de Javascript

//Ejercicio 1
// Autocuración con posciones de vida
// Genera un programa que tome encuenta una variable de vida 
// y si esta es menor a 50, se le sumen 30 puntos de vida
// Agrega una variable para controlar el limite inferior para usar pociones y otra variable para controlar el limite superior de vida
// Agrega también una variable para controlar la cantidad de pociones que tiene el jugador
// Usa que se ejecute cada 2 segundos y que baje la vida del jugador en 5 puntos hasta llegar a 0 
// Para esto último vas a necesitar investigar la función setInterval() de Javascript

// Variables de vida y pociones
let vida = 100;
let limiteInferior = 50;
let limiteSuperior = 100;
let pociones = 3;

// Función para autocuración


function autocuracion() {
    if (vida < limiteInferior && pociones > 0) {
        vida = Math.min(vida + 30, limiteSuperior);
        pociones--;
        console.log('Usaste una poción. Vida actual: ' + vida + '. Pociones restantes: ' + pociones);
    } else if (vida >= limiteInferior) {
        console.log('No necesitas usar una poción. Vida actual: ' + vida);
    } else if (pociones === 0) {
        console.log('No tienes más pociones. Vida actual: ' + vida);
    }
}

// Función para disminuir la vida
function disminuirVida() {
    vida -= 5;
    if (vida < 0) {
        vida = 0;
    }
    console.log('Vida actual: ' + vida);
    autocuracion();
}

const intervaloAutocuracion = setInterval(function() {
    disminuirVida();
    if (vida === 0) {
        clearInterval(intervaloAutocuracion);
    }
}, 2000);


//Ejercicio 2
// Organiza los elementos de la bolsa
// Crea un programa que tenga un arreglo de objetos con los elementos de la bolsa de un jugador
// Cada objeto debe tener un nombre, una cantidad y un tipo de elemento
// Crea una función que divida el arreglo en 3 arreglos diferentes dependiendo del tipo de elemento y que los muestre ordenados por cantidad en consola 
// Muestra el resultado en consola
// Ejemplo de arreglo de objetos:

let bolsa = [
    { nombre: 'Poción', cantidad: 5, tipo: 'Consumible' },
    { nombre: 'Pokebola', cantidad: 10, tipo: 'Captura' },
    { nombre: 'Antídoto', cantidad: 2, tipo: 'Consumible' },
    { nombre: 'Revive', cantidad: 1, tipo: 'Consumible' },
    { nombre: 'Superball', cantidad: 3, tipo: 'Captura' },
    { nombre: 'Huevo', cantidad: 1, tipo: 'Objeto Especial' }
];  
// Función para organizar los elementos de la bolsa
function organizarBolsa(bolsa) {
    let consumibles = [];
    let capturas = [];
    let objetosEspeciales = [];

    bolsa.forEach(function(elemento) {
        switch(elemento.tipo) {
            case 'Consumible':
                consumibles.push(elemento);
                break;
            case 'Captura':
                capturas.push(elemento);
                break;
            case 'Objeto Especial':
                objetosEspeciales.push(elemento);
                break;
        }
    });

    // Ordenar cada arreglo por cantidad
    consumibles.sort(function(a, b) {
        return b.cantidad - a.cantidad;
    });
    capturas.sort(function(a, b) {
        return b.cantidad - a.cantidad;
    });
    objetosEspeciales.sort(function(a, b) {
        return b.cantidad - a.cantidad;
    });

    // Mostrar los resultados en consola
    console.log('Consumibles:');
    consumibles.forEach(function(elemento) {
        console.log('- ' + elemento.nombre + ': ' + elemento.cantidad);
    });

    console.log('Capturas:');
    capturas.forEach(function(elemento) {
        console.log('- ' + elemento.nombre + ': ' + elemento.cantidad);
    });

    console.log('Objetos Especiales:');
    objetosEspeciales.forEach(function(elemento) {
        console.log('- ' + elemento.nombre + ': ' + elemento.cantidad);
    });
}

organizarBolsa(bolsa);

//Ejercicio 3
//Crea un programa que tomando en cuenta las caracteristicas de los pokemones (2)
//Ejecute funciones de ataque y cálculo de daño dependiendo de las estadisticas del pokemon para cálculo de daño
//Ejemplo: Pikachu lanza un ataque que hace 20 de daño, 
// si el pokemon enemigo tiene 50 de vida, al recibir el ataque 
// le quedaran 30 de vida, pero si el pokemon enemigo tiene 10 de defensa, 
// el ataque de Pikachu le hará 10 de daño y le quedarán 40 de vida

// Crea un arreglo de objetos con los pokemones y sus estadisticas
let pokemones = [
    { nombre: 'Pikachu', ataque: 20, defensa: 10, vida: 50 },
    { nombre: 'Charmander', ataque: 15, defensa: 5, vida: 40 },
    { nombre: 'Bulbasaur', ataque: 10, defensa: 8, vida: 60 }
];

// Función para calcular el daño
function calcularDanio(atacante, defensor) {
    let danio = atacante.ataque - defensor.defensa;
    if (danio < 0) {
        danio = 0;
    }   
    defensor.vida -= danio;
    if (defensor.vida < 0) {
        defensor.vida = 0;
    }
    console.log(atacante.nombre + ' atacó a ' + defensor.nombre + ' y le hizo ' + danio + ' de daño. Vida restante de ' + defensor.nombre + ': ' + defensor.vida);
}

// Ejemplo de ataque
calcularDanio(pokemones[0], pokemones[1]); // Pikachu ataca a Charmander
calcularDanio(pokemones[1], pokemones[2]); // Charmander ataca a Bulbasaur
calcularDanio(pokemones[2], pokemones[0]); // Bulbasaur ataca a Pikachu
