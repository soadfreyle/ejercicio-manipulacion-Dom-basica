
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');


function btnOnClick() {

   console.log(Number(input1.value) + parseInt(input2.value)); 
   const suma = (+input1.value) + (+input2.value);
   resultado.innerText = "Resultado: " + suma;


}