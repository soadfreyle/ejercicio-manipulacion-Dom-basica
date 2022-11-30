console.log('Hello, word');
// desde js entrar a html
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#id');
const input = document.querySelector('input');

//saber .estado del elemento
console.log(h1);
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
}
);
//modifico etiqueta q seleccione

h1.innerHTML = 'Vivo en <br> San Pedro, Sucre';
h1.innerText = 'Vivo en <br> San Pedro, Sucre';
//
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'Sony');
h1.classList.add('rojo');
h1.classList.remove('Sony');
console.log(h1.classList.contains('rojo'));
input.value = '1514';

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2022/11/20/21/18/africa-7605276_640.jpg')
console.log(img);


//borrar contenido de elemento p y agregar la img

pid.innerHTML = "";
pid.appendChild(img); // agrega la img
//pid.innerHTML = img; error trato de meter la img y la convirtio en string


