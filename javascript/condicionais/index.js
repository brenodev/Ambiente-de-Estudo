// function retornaSexo(sexo) {
//   // M, F
//   if (sexo === "M") {
//     return "Masculino ";
//   } else {
//     return "Feminino";
//   }
// }

// function retornaSexos(sexos) {
//   if (sexos === "M") {
//     return " Masculino";
//   } else if (sexos === "F") {
//     return "Feminino";
//   } else {
//     return "Outro";
//   }
// }

function retornaSexos(sexo) {
  switch (sexo) {
    case "M":
      return "Masculino";
    case "F":
      return "Feminino";
    default:
      return "Outro";
  }
}

var result = retornaSexos("a");
console.log(result);

// observação

// se dentro de uma condição eu coloco if (1 == '1') ele me retorna true, pois a condição verifica somente a igualdade
// se eu utilizo if(1 === '1) ele me retorna false pois nessa condição ela verifica a igualdade e o tipo
