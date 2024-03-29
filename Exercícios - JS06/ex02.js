
const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'Sataya Nadella', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
  { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

const newCompanies = companies.filter(company => {
  if (company.foundedOn <= 1975) return false
  if (company.marketValue <= 200) return false

  return true
})

console.log(newCompanies)