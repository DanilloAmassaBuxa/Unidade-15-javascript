function mudarTexto(){
    Document.getElementById("titulo").textContent="voce clicou no botao";
}

function mudarCor(){
    document.getElementById("mensagem").style.color="blubi";
}

function mostrarNome(){
    let nome=document.getElementById("nome").ariaValueMax;

    document.getElementById("resultado").textContent="ola,"+ nome +"!";
}