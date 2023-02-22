let lista = document.getElementById("lista");
let texto = `Hola, mi nombre es "Pepe"`;
console.log(texto);

console.log(`cadena de texto en la línea 1 

cadena de texto en la línea 2
`);

let a = 5;
let b= 10;
console.log(`Suma es: ${a+b}
    y
    
    Multiplicación: ${a*b}
`);

let precio = 100;
const IVA = 0.16;
let total = `Total: ${(precio * (1 + IVA)).toFixed(2)}`;
console.log('Precio con iva: ' + total);

let persona = "Mike";
let edad = 16;

function miFuncion(cadenas, personaExp, edadExp){
    console.log(cadenas);
    console.log(cadenas[0]);
    console.log(personaExp);
    console.log(edadExp);

    /*
    if(edadExp>18)
        return "Mayor de edad";
    else
        return "Menor de edad";
    */

    // Si la condicion se cumple, ejecuta la primera, sino la segunda
    return edadExp>18 ? "Mayor de edad" : "Menor de edad";
}

const resultado = miFuncion`El señor  ${persona} tiene una edad de ${edad}.`;
console.log(resultado);

let titulo = "Mejores cantantes mujeres";
let cantantes = ["Rihana", "Bellacath", "Shakira"];
let html = `<h2>${titulo} </h2>`;

html += "<ul>"
for(let cantante of cantantes){
    html += `<li>${cantante}</li>`;
}
html += "</ul>"

lista.innerHTML = html;