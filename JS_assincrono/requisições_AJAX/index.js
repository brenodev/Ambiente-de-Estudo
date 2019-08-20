// usado para retornar uma informação do servidor
var xhr = new XMLHttpRequest();

// passa a variavel.open e o primeiro parametro é o metodo seguido da URL
xhr.open('GET', 'https://api.github.com/users/brenodev')

// para enviar os parametros
xhr.send(null)

// 
xhr.onreadystatechange = function(){
  if (xhr.readyState === 4){
    console.log(JSON.parse(xhr.responseText));
  }
}