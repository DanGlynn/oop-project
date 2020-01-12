//Explanation of OOP project


// An Object (var contacts) containing severals arrays with incomplete values of our 650 families is created from a CRM excel workbook export.

// The function createSalu uses a for loop to iterate through all arrays in the object, using a series of if else statements to push the correct...
// ...salutation into the salutations object.

// The salutations object is then turned into a string and all characters besides the values required for the stringSalutations...
// ...are filtered out using a series of regex replace() functions.

// The remaining string is then delimited at the *'s within excel, data is transposed, and pasted into the original document to facilitate a mail merge.


function createSalu(contacts) {
var salutations = [];
var contacts = [
{
last: 'Johnson',
first: 'Callie',
pOneFirst: '',
pOneLast: '',
pTwoFirst: '',
pTwoLast: ''},
{
last: 'Smith',
first: 'Cassie',
pOneFirst: 'Gene',
pOneLast: 'Smith',
pTwoFirst: 'Debbie',
pTwoLast: 'Smith'},
{
last: 'Feliciano',
first: 'Felicity',
pOneFirst: 'Jose',
pOneLast: 'Feliciano',
pTwoFirst: '',
pTwoLast: ''},
{
last: 'Affleck',
first: 'Ben Jr.',
pOneFirst: 'Jennifer',
pOneLast: 'Lopez',
pTwoFirst: 'Ben',
pTwoLast: 'Affleck'},
{
last: 'Kiptonlanger',
first: 'Brooklyn',
pOneFirst: 'Briggs',
pOneLast: 'Kiptonlanger',
pTwoFirst: 'Danielle',
pTwoLast: 'McGilliKutty'}
];

for (var i = 0; i < contacts.length; i++) {
  if ((contacts[i].pOneFirst) &&
(contacts[i].pTwoFirst) &&
(contacts[i].pOneLast === contacts[i].pTwoLast)) {
    salutations.push({pOneFirst: contacts[i]['pOneFirst']}, " & ", {pTwoFirst: contacts[i]['pTwoFirst']}, " ", {pOneLast: contacts[i]["pOneLast"]},"*");
} else if ((contacts[i].pOneFirst) &&
(contacts[i].pTwoFirst) &&
(contacts[i].pOneLast !== contacts[i].pTwoLast)) {
      salutations.push({pOneFirst: contacts[i]['pOneFirst']}, " ", {pOneLast: contacts[i]["pOneLast"]}, " & ", {pTwoFirst: contacts[i]['pTwoFirst']}, " ", {pTwoLast: contacts[i]["pTwoLast"]},"*");
} else if ((contacts[i].pOneFirst) ||
(contacts[i].pTwoFirst)) {
      salutations.push({pOneFirst: contacts[i]['pOneFirst']}, " ", {pOneLast: contacts[i]['pOneLast']},"*");
} else {
      salutations.push({first: contacts[i]['first']}, " ", {last: contacts[i]['last']},"*");
      }
    }
    var stringSalutations = JSON.stringify(salutations);

let fixRegex = /("pOneFirst":)+/g;
let replaceText = "";
let filter1 = stringSalutations.replace(fixRegex, replaceText);

let fixRegex2 = /("pTwoFirst":)+/g;
let replaceText2 = "";
let filter2 = filter1.replace(fixRegex2, replaceText2);

let fixRegex3 = /("pOneLast":)+/g;
let replaceText3 = "";
let filter3 = filter2.replace(fixRegex3, replaceText3);

let fixRegex4 = /("pTwoLast":)+/g;
let replaceText4 = "";
let filter4 = filter3.replace(fixRegex4, replaceText4);

let fixRegex5 = /("last":)+/g;
let replaceText5 = "";
let filter5 = filter4.replace(fixRegex5, replaceText5);

let fixRegex6 = /("first":)+/g;
let replaceText6 = "";
let filter6 = filter5.replace(fixRegex6, replaceText6);

let fixRegex7 = /"/g;
let replaceText7 = "";
let filter7 = filter6.replace(fixRegex7, replaceText7);

let fixRegex8 = /,/g;
let replaceText8 = "";
let filter8 = filter7.replace(fixRegex8, replaceText8);

let fixRegex9 = /{/g;
let replaceText9 = "";
let filter9 = filter8.replace(fixRegex9, replaceText9);

let fixRegex10 = /}/g;
let replaceText10 = "";
let result = filter9.replace(fixRegex10, replaceText10);
return result;
  };

console.log(createSalu());
