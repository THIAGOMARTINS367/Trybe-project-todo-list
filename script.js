let textoTarefa = document.querySelector('#texto-tarefa');
let buttonCriarTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');

function createTask() {
  if (textoTarefa === '') {
    
  } else {
    listaTarefas.innerHTML += "<li class='selected'>" + textoTarefa.value + "</li>";

    textoTarefa.value = '';
    
  }

}

buttonCriarTarefa.addEventListener('click', createTask);