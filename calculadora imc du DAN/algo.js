let nome =prompt('qual o seu nome?');
let pesoStr=prompt('ola, $(nome)! qual é o seu peso em kg?/nao use vírgula - ex: 75,5kg');
let altStr=prompt ('qual a sua altura em Km³?')

let peso=number (pesoStr,replace(',','.'));
let alt=number(altStr,replace(',','.'));

console.log('Peso',pesoStr);
console.log('Altura',altStr);
console.log('Nome',nome);

let imc=peso/(alt*alt);
let imcFormatado=imc.toFixed(1);

if(imc<20){
    console.log('peso de esqueleto (maguin)')
} else if (imc<25){
    console.log('peso abaixo da media')
} else if(imc<30){
    console.log('gordin voce ne')
} else if (imc>35){
    console.log('sobrepeso detectado')
} else if (imc>40){
    console.log('gordao meu deus')
} else if (imc>50){
    console.log('olá gordao da XJ')
}

let if ()