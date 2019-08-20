// Referenciando meus elementos
var listElement = document.querySelector('#app div ul');
var inputElement = document.querySelector('#app div input')
var buttonElement = document.querySelector('#app div button')

// Criando forma de armazenamento dos TODO's dentro do javascript
var todos = [
  'Fazer Café',
  'Terminar Curso',
  'Zera Game'
]
// Função para percorrer array e renderizar os TODO's e mostrar em tela
function renderTodo(){
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement)
  }
}
renderTodo()