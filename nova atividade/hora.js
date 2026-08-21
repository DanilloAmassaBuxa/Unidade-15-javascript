const agora=new Date();
const hora=agora.getHours();
const minutos=agora.getMinutes();
const minutosFormatados=String(minutos).padStart(2,'0');
const horaTexto=`${hora}:${minutosFormatados}`;


const pagina=document.getElementById('pagina');
const emojiEL=document.getElementById('emoji');
const saudacaoEL=document.getElementById('saudacao');
const horarioEL=document.getElementById('horario');


let turno='';
let emoji='';
let msg='';


if(hora>=5 && hora<12){
    turno='manhã';
    emojiStr='🌅';
    msg='Bom dia flor do dia!';
} else if(hora>=12 && hora<18){
    turno='tarde';
    emojiStr='🌇';
    msg='Boa tarde!';
} else if(hora>=18 && hora<23){
    turno='noite';
    emojiStr='🌃';
    msg='Boa noite!';
}