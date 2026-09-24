let tarefas=[];
let totalTarefas=0;
let totalConcluidas=0;

function adicionarTarefa(){
    let nome=document.getElementById("tarefa").value.trim();
    let materia=document.getElementById("material").value.trim();
    let prioridade=document.getElementById("prioridades").value;
    let mensagem=document.getElementById("mensagem");
    
    if(nome=="" || materia=="" || prioridade==""){
        mensagem.textContent="Preencha todos os campos!";
        mensagem.style.color="red";
        return;
    }

    letduplicada=tarefas.some(function(tarefa){
        return tarefa.nome.toLowerCase()===nome.toLowerCase();
    });

    
