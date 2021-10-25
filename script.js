let textoTarefa = document.querySelector('#texto-tarefa');
let buttonCriarTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');

function createTask() {
  if (textoTarefa === '') {
    
  } else {
    listaTarefas.innerHTML += "<li class='li'>" + textoTarefa.value + "</li>";

    textoTarefa.value = '';
    
  }

}

function selectItem(event) {
  let classSelected = document.querySelectorAll('.li');
  let classListLi = event.target.classList;

  for (const iterator of classListLi) {
    if (iterator === 'selected') {
      
    } else {
      event.target.classList.add('selected');

    }
    
  }

  classListLi = event.target.classList;
  for (const key of classSelected) {
    key.style.backgroundColor = 'white';

  }

  for (const iterator of classListLi) {
    if (iterator === 'selected') {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      
    };

  }
  
}

buttonCriarTarefa.addEventListener('click', createTask);

document.addEventListener('click', function(event) {
  let classLI = event.target.classList;
  for (const iterator of classLI) {
    if (iterator === 'li') {
      selectItem(event)

    };

  }
  
});