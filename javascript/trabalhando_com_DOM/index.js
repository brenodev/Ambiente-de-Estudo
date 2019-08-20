// referenciando elemento dentro do javascript
/* Por ID
 */
var inputElement1 = document.getElementById("nome");
console.log(inputElement1);
/* pela tag , esse metodo sempre retorna um vetor e usando o indice eu defino
qual tag buscar
*/
var inputElement2 = document.getElementsByTagName("input")[0];
console.log(inputElement2);
/* buscando pela classe e como o tag ele sempre retorna um vetor 
podendo assim selecionar seu indice */
var inputElement3 = document.getElementsByClassName("nome")[0];
console.log(inputElement3);
/* os conteúdos citados anteriormente podem ser descartados utilizando uma syntaxe
que é outra forma de buscar elementos na DOM percorrendo por ela até encontrar o 
elemento e essa syntaxe passa apenas 1 elemento*/
var inputElement4 = document.querySelector("body div#root input");
console.log(inputElement4);
// referenciando o botão usando queryselector
var btnElement = document.querySelector("button.botao");
btnElement.onclick = function() {
  // alert("botão clicado");
  var text = inputElement.value;
  alert(text);
};
// manipulando input com query selector e exibindo texto no alert
var inputElement = document.querySelector("input[name = nome]");
