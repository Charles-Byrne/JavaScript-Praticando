/* CONTROLE DE FLUXO - CONDICIONAIS - IF / ELSE

if = SE
else = Se não
else if = mas se...

*/

const temperature = 37

if (temperature >= 36 && temperature <= 37) {
  console.log("A pessoa está saudável")
} else if (temperature >= 38) {
  console.log("A pessoa está com febre")
} else {
  console.log("A pessoa está com hiportermia, precisará se aquecer o mais rápido possível")
}