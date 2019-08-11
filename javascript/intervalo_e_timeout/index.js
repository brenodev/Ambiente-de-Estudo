// executa uma vez porem, da um delay conforme o tempo que eu coloco
function exibe() {
  console.log("set timeout");
}
setTimeout(exibe, 3000);

//executa várias vezes no intervalo que eu defino

function exibeAlgo() {
  console.log("set interval");
}
setInterval(exibeAlgo, 5000);
