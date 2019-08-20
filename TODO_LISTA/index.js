// Referenciando meus elementos
var listElement = document.querySelector('#app div ul');
var inputElement = document.querySelector('#app div input')
var buttonElement = document.querySelector('#app div button')

// Criando forma de armazenamento dos TODO's dentro do javascript
var todos = [
  'Fazer Café',
  'Terminar Curso',
  'Zerar Game'
]
function renderTodos(){
  // Função para percorrer array e renderizar os TODO's e mostrar em tela
  for (todo of todos) {
 
    var todoElement = document.createElement('li');
 
    var todoText = document.createTextNode(todo);
 
    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

    var linkText = document.createTextNode('Excluir')

    linkElement.appendChild(linkText)
    
    todoElement.appendChild(todoText)
    todoElement.appendChild(linkElement)
    
    listElement.appendChild(todoElement)
  }
}
renderTodos()
/*
  Funcionalidade para adicionar novo TODO, para isso preciso ouvir o clique no
  botão adicionar,recuperar o valor do input e adicionar como novo item no array
  de TODO's
*/
function addTodo(){
  //defino esse metodo para não renderizar todos items do array
  listElement.innerHTML = '';
  // recuperar valor do input 
  var todoText = inputElement.value;
  //retornar todo para o array
  todos.push(todoText)
  //apagar o texto atual do input
  inputElement.value = ''
  // renderizar novo TODO que acaba de ser adicionado no final
  renderTodos();
}
// chamar função para adicionar novo TODO 
buttonElement.onclick = addTodo

/*
  Funcionalidade para Remover um TODO, retirar ele da lista por completo. 
*/
function deleteTodo(pos){
  todos.splice(pos, 1)
  renderTodos()
}