
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

/*
form.addEventListener('submit',sumarInputValue);

function sumarInputValue(event) {
   //onsole.log({event})
   event.preventDefault();
   const suma = input1.value + input2.value;
   resultado.innerText = "Resultado: " + suma;
}
*/


//del type ="button"
btn.addEventListener('click',sumarInputValue);

function sumarInputValue(event) {
   //onsole.log({event})
   //event.preventDefault();
   const suma = input1.value + input2.value;
   resultado.innerText = "Resultado: " + suma;
}