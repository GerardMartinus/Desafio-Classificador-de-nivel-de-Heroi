var nome = "Bruno";
var nivel = "2001";

if (nivel <= 1000) {
  nivel = "Ferro";
}
if (nivel >= 1001 && nivel <= 2000) {
  nivel = "Bronze";
}
if (nivel >= 2001 && nivel <= 5000) {
  nivel = "Prata";
}
if (nivel >= 5001 && nivel <= 7000) {
  nivel = "Ouro";
}
if (nivel >= 7001 && nivel <= 8000) {
  nivel = "Platina";
}
if (nivel >= 8001 && nivel <= 9000) {
  nivel = "Ascendente";
}
if (nivel >= 9001 && nivel <= 10000) {
  nivel = "Imortal";
}
if (nivel >= 10001) {
  nivel = "Radiante";
}

console.log("O Herói de nome", nome, "está no nível de", nivel);
