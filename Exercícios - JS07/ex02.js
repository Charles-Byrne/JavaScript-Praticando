

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'Sataya Nadella', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
  { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

const add10PercentMarketValue = company => {
  company.marketValue = company.marketValue * 1.10 //adicionando 10% unsando .map
  
  return company // retornando a companies inteira

}

const oldCompanies = company => company.foundedOn < 2000 // Filtrou as companias antes de 200 usando o .filter

const allOldCompaniesMarketValue = (acc, company) => acc + company.marketValue // somando o valor das empresa usando o .reduce

const myBestCompanies = companies
  .map(add10PercentMarketValue) // adicionando 10%
  .filter(oldCompanies) // Filtrou as companias antes de 200
  .reduce(allOldCompaniesMarketValue, 0) // somando o valor das empresa usando o .reduce

console.log(myBestCompanies)