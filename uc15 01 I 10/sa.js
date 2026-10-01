const titulo=document.querySelector('h1');
titulo.textContent-'javascript chegou';

const logo=document.querySelector('menu.logo');
logo.textContent='<Dev/>';

const inexistente=document.querySelector('.xyz');
console.log(inexistente);

inexistente.textContent='oi';

if(inexistente){
    inexistente.textContent='oi';
} else{
    console.log('nao encontrou o elemento');
}

const links=document.querySelectorAll('menu-link');
console.log('quantidade', links.length);

console.log(links[0].textContent);
console.log(links[1].textContent);

links[0].textContent='inicio';
links[1].textContent='projetos';
links[2].textContent='sobre';
links[3].textContent='contato';

const nada=document.querySelectorAll('.xyz');
console.log(nada.length);

querySelector('seletor')
querySelectorAll('seletor')

querrySelector('h1')
querySelectorAll('.card')
querrySelector('#logo')