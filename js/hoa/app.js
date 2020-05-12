const companies = [
    { name: 'Company One', category: "Finance", start: 1981, end: 2003 },
    { name: 'Company Two', category: "Retail", start: 1992, end: 2008 },
    { name: 'Company Three', category: "Technology", start: 1987, end: 2005 },
    { name: 'Company Four', category: "Auto", start: 1999, end: 2020 },
    { name: 'Company Five', category: "Finance", start: 2000, end: 2009 },
    { name: 'Company Six', category: "Retail", start: 1988, end: 2008 },
    { name: 'Company Seven', category: "Technology", start: 1986, end: 2006 },
    { name: 'Company Eight', category: "Auto", start: 2011, end: 2016 },
    { name: 'Company Nine', category: "Finance", start: 1989, end: 2004 },
    { name: 'Company Ten', category: "Retail", start: 1981, end: 2019 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 81, 56, 99, 89, 34, 31];

//forEach

companies.forEach(item => console.log(item));

//Map method
const companyNames = companies.map(company => company.name);
console.log(companyNames);
const compamyInfo = companies
    .map(company => `${company.name} Starts at: ${company.start}`);
console.log(compamyInfo);
const list = document.createElement('ul');
compamyInfo.forEach(company => {
    list.innerHTML += `<li>
        ${company}
    </li>`
});
document.body.appendChild(list);

const squareAges = ages.map(age => Math.ceil(Math.sqrt(age)));
console.log(squareAges);



//Filter method

const canDrink = ages.filter(age => age > 21);
console.log(canDrink);
const retailCompanies = companies
    .filter(company => company.category === 'Retail');
console.log(retailCompanies);
const eightiesCompanies = companies
    .filter(company => company.start >= 1980 && company.start < 1990);
console.log(eightiesCompanies);
const decadeCompanies = companies
    .filter(company => company.end - company.start >= 10);
console.log(decadeCompanies);

//Reduce method
const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
console.log(sumOfAges);

//Sort method
const sortedCompanies = companies.sort((a, b) => {
    return a.start < b.start ? 1 : -1;
});
console.log(sortedCompanies);
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

const companyAges = companies
    .reduce((acc, company) => acc + (company.end - company.start), 0);
console.log(companyAges);
