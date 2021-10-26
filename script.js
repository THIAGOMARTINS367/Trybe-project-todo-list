let textTask = document.querySelector('#texto-tarefa');
let buttonCreateTask = document.querySelector('#criar-tarefa');
let toDoList = document.querySelector('#lista-tarefas');
let buttonClearAll = document.querySelector('#apaga-tudo');
let RemoveCompletedItems = document.querySelector('#remover-finalizados');

function createTask() {
  if (textTask === '') {
    
  } else {
    toDoList.innerHTML += "<li class='li'>" + textTask.value + "</li>";

    textTask.value = '';
    
  }

}

function selectItem(event) {
  let resetLi = document.querySelectorAll('.li');
  let classListLi = event.target.classList;

  for (const iterator of resetLi) {
    iterator.classList.remove('selected');
  }

  for (const iterator of classListLi) {
    if (iterator === 'selected') {
      
    } else {
      event.target.classList.add('selected');

    }
    
  }
  
}

function taskCompleted(event) {
  let classListLi = event.target.classList;
  let completedClass = false;
  console.log(classListLi);

  for (const iterator of classListLi) {
    if (iterator === 'completed') {
      completedClass = true;

    }

  }

  if (completedClass === true) {
    event.target.classList.remove('completed');
    console.log('não passou');

  } else {
    event.target.classList.add('completed');
    console.log('passou');

  }
  
}

function clearList() {
  let listElements = document.querySelectorAll('.li');
  let itemsList = document.querySelector('#lista-tarefas');

  for (const iterator of listElements) {
    itemsList.removeChild(iterator);

  }

}

function ClearCompletedTasks() {
  let itemsCompleted = document.querySelectorAll('.completed');
  let itemsList = document.querySelector('#lista-tarefas');
  for (const iterator of itemsCompleted) {
    itemsList.removeChild(iterator);

  }
  
}

buttonCreateTask.addEventListener('click', createTask);

document.addEventListener('click', function(event) {
  let classLi = event.target.classList;
  for (const iterator of classLi) {
    if (iterator === 'li') {
      selectItem(event)

    };

  }
  
});

document.addEventListener('dblclick', function(event) {
  let classLi = event.target.classList;
  for (const iterator of classLi) {
    if (iterator === 'li') {
      taskCompleted(event)

    };

  }
  
});

buttonClearAll.addEventListener('click', clearList);

RemoveCompletedItems.addEventListener('click', ClearCompletedTasks);