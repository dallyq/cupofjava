let html = '';
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let randomRGB = `rgb( ${red}, ${green}, ${blue} )`;

for ( let i = 1; i <= 10; i++ ) {
  red;
  green;
  blue;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;

console.log(html);