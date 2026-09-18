let valorContador=10;

function mostrarCidade(){
    let cidade=document.getElementById("cidade").value;

    let mensagem=document.getElementById("mensagem");

    mensagem.textContent="Prepare suas malas! Sua próxima aventura será em " + cidade + "! 🌴";
}

function destacarMensagem(){
    let mensagem=document.getElementById("mensagem");

    mensagem.classList.toggle("destacada");
}

function aumentar(){
    valorContador++;

    document.getElementById("contador").textContent=valorContador;
}

function diminuir(){
    valorContador--;

    document.getElementById("contador").textContent=valorContador;
}

document.getElementById("botaoCidade").addEventListener("click", mostrarCidade);

document.getElementById("botaoEstilo").addEventListener("click", destacarMensagem);

document.getElementById("botaoMais").addEventListener("click", aumentar);

document.getElementById("botaoMenos").addEventListener("click", diminuir);
