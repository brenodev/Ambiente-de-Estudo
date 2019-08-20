/* alem de referenciar elementos através da dom com javascript também podemos
criar elementos através do javascript */
var linkElement = document.createElement("a");
linkElement.href = "http://github.com/brenodev";
// ou uso setAttribute('href', "http://github.com/brenodev")
// agora preciso criar um texto para acessar o link
var textElement = document.createTextNode("Acessar meu GitHub");
// posicionando o texto dentro do elemento com o link
linkElement.appendChild(textElement);
// adicionando o elemento para o corpo do HTML
var containerElement = document.getElementById("app");
containerElement.appendChild(linkElement);
// removendo elemento
var inputElement = document.querySelector("#nome");
containerElement.removeChild(inputElement);
