let textTask = document.querySelector('#texto-tarefa');
let buttonCreateTask = document.querySelector('#criar-tarefa');
let toDoList = document.querySelector('#lista-tarefas');
let buttonClearAll = document.querySelector('#apaga-tudo');
let RemoveCompletedItems = document.querySelector('#remover-finalizados');
let buttonSaveList = document.querySelector('#salvar-tarefas');

window.onload = function() {
  let quantityItems = parseInt(localStorage.getItem('quantityItems'));
  console.log(quantityItems)
  if (quantityItems > 0) {
    for (let index = 1; index < quantityItems + 1; index++) {
      toDoList.innerHTML += localStorage.getItem(String(index));

    }
  }

} 

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

  for (const iterator of classListLi) {
    if (iterator === 'completed') {
      completedClass = true;

    }

  }

  if (completedClass === true) {
    event.target.classList.remove('completed');

  } else {
    event.target.classList.add('completed');

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

function saveList() {
  localStorage.clear();
  let listItems = document.querySelectorAll('.li');
  let itemCount = 0;
  
  for (const iterator of listItems) {
    itemCount += 1;
    let textContents = iterator.outerHTML;
    localStorage.setItem(String(itemCount), textContents)
    console.log(textContents);
    
  }

  localStorage.setItem('quantityItems', itemCount);
  
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

buttonSaveList.addEventListener('click', saveList);