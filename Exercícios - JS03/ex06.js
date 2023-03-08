/*
[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário;
 - O final da leitura de dados se dará com a entrada de um salário negativo.
 - Faça isso usando uma função!
*/
/*
const calcularMedia = (numbers) => {
  const somaSalario = numbers.reduce((total, item) => total + item.salario, 0)
  const mediaSalario = somaSalario / numbers.length

  const somaFilho = numbers.reduce((total, item) => total + item.filho, 0)
  const mediaFilho = somaFilho / numbers.length

  return {
    mediaFilho,
    mediaSalario,
  }
}

const filho = [2, 3, 5, 3]
const salario = [2.200, 1, 455, 3.540, 1.500]

const media = calcularMedia(filho, salario)

console.log(media, filho)*/


const calcularMedia = (lista) => {
  const somaSalarios = lista.reduce((total, item) => total + item.salario, 0);
  const mediaSalarios = somaSalarios / lista.length;

  const somaFilhos = lista.reduce((total, item) => total + item.filhos, 0);
  const mediaFilhos = somaFilhos / lista.length;

  return {
    mediaSalarios,
    mediaFilhos,
  };
};

const listaPessoas = [
  { nome: "João", salario: 2000, filhos: 1 },
  { nome: "Maria", salario: 3000, filhos: 2 },
  { nome: "Pedro", salario: 2500, filhos: 3 },
  { nome: "Charles", salario: 3500, filhos: 2 },
];

const media = calcularMedia(listaPessoas);

console.log(`A média de salários é ${media.mediaSalarios}`); // Output: A média de salários é 2500
console.log(`A média de filhos é ${media.mediaFilhos}`); // Output: A média de filhos é 1