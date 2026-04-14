const paragrafos = document.querySelector('.paragrafos');
console.log(paragrafos);
const ps = paragrafos.querySelectorAll('p');
console.log(ps);

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}