let textTask = document.querySelector('#texto-tarefa');
let buttonCreateTask = document.querySelector('#criar-tarefa');
let toDoList = document.querySelector('#lista-tarefas');
let buttonClearAll = document.querySelector('#apaga-tudo');
let RemoveCompletedItems = document.querySelector('#remover-finalizados');
let buttonSaveList = document.querySelector('#salvar-tarefas');
let buttonMoveTop = document.querySelector('#mover-cima');
let buttonMoveBottom = document.querySelector('#mover-baixo');
let buttonRemoveSelected = document.querySelector('#remover-selecionado');

window.onload = function () {
  let quantityItems = parseInt(localStorage.getItem('quantityItems'));
  if (quantityItems > 0) {
    for (let index = 1; index < quantityItems + 1; index += 1) {
      toDoList.innerHTML += localStorage.getItem(String(index));
    }
  }
};

function createTask() {
  if (textTask.value === '') {
  } else {
    toDoList.innerHTML += "<li class='li'>" + textTask.value + '</li>';

    textTask.value = '';
  }
}

let saveSelectedItem;
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
      saveSelectedItem = event.target;
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
    localStorage.setItem(String(itemCount), textContents);
  }

  localStorage.setItem('quantityItems', itemCount);
}

function moveItemTop() {
  let listItems = document.querySelectorAll('.li');
  let indexSelected = 0;
  let array2 = [];

  for (const key in listItems) {
    array2 = [];
    let a = listItems[key].classList;
    let string = '';
    for (const iterator of String(a)) {
      if (iterator === ' ') {
        array2.push(string);
        string = '';
      } else {
        string += iterator;
      }
    }
    array2.push(string);

    for (const iterator of array2) {
      if (iterator === 'selected') {
        indexSelected = key;
      }
    }
  }

  let array = [];
  if (indexSelected === 0) {
  } else {
    for (let index = 0; index < listItems.length; index += 1) {
      if (index === indexSelected - 1) {
        array.push(listItems[index + 1].outerHTML);
        array.push(listItems[index].outerHTML);
        index += 1;
      } else {
        array.push(listItems[index].outerHTML);
      }
    }
    clearList();

    for (const iterator of array) {
      toDoList.innerHTML += iterator;
    }
  }
}

function moveItemBottom() {
  let listItems = document.querySelectorAll('.li');
  let checkSelected = false;
  let indexSelected = 0;
  let array2 = [];

  for (const key in listItems) {
    array2 = [];
    let a = listItems[key].classList;
    let string = '';
    for (const iterator of String(a)) {
      if (iterator === ' ') {
        array2.push(string);
        string = '';
      } else {
        string += iterator;
      }
    }
    array2.push(string);

    for (const iterator of array2) {
      if (iterator === 'selected') {
        indexSelected = key;
        checkSelected = true;
      }
    }
  }
  indexSelected = parseInt(indexSelected);

  let array = [];
  if (indexSelected >= listItems.length - 1 || checkSelected === false) {
  } else {
    for (let index = 0; index < listItems.length; index += 1) {
      if (index === indexSelected) {
        array.push(listItems[index + 1].outerHTML);
        array.push(listItems[index].outerHTML);
        index += 1;
      } else {
        array.push(listItems[index].outerHTML);
      }
    }

    clearList();

    for (const iterator of array) {
      toDoList.innerHTML += iterator;
    }
  }
}

function removeSelected() {
  saveSelectedItem.remove();
}

buttonCreateTask.addEventListener('click', createTask);

document.addEventListener('click', function (event) {
  let classLi = event.target.classList;
  for (const iterator of classLi) {
    if (iterator === 'li') {
      selectItem(event);
    }
  }
});

document.addEventListener('dblclick', function (event) {
  let classLi = event.target.classList;
  for (const iterator of classLi) {
    if (iterator === 'li') {
      taskCompleted(event);
    }
  }
});

buttonClearAll.addEventListener('click', clearList);

RemoveCompletedItems.addEventListener('click', ClearCompletedTasks);

buttonSaveList.addEventListener('click', saveList);

buttonMoveTop.addEventListener('click', moveItemTop);

buttonMoveBottom.addEventListener('click', moveItemBottom);

buttonRemoveSelected.addEventListener('click', removeSelected);
