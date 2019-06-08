# oop-project

Summary  

Functional Programming project to filter through a JS object of arrays with incomplete values. Must return and filter a new array using if else logic and then use regex to further filter the new array.


---------------------------------Purpose------------------------------------------------------------------

At our nonprofit, our marketing department prepares an annual mailing to all 650 of our patrons which requires the creation of mailing labels containing a salutation and current address. While the addresses can be exported from within our CRM into an excel workbook format, some form of filtering and/or manual data entry is required in order to generate the proper salutation for each family as the accounts contain a parent one, parent two, student one, student two, etc...

My intention was to write some OOP code to filter a JS object containing several arrays of patron contact info (about 650) filter it and return a array of salutations which could then be copy pasted into a mail merge to generate mailing labels. 
An Object (var contacts) containing severals arrays with incomplete values of our 650 families is created from a CRM excel workbook export.



--------------------------------Code Explanation-----------------------------------------------------------

I first use an online "excel to array" converter to convert the following pieces of contact info into a JavaScript object featuring about 650 arrays that each contain 6 basic properties (object protoype-ish) each of which corresponds to a family or adult student currently enrolled in our program:

var contacts = [
{
last: 'Johnson',
first: 'Callie',
pOneFirst: '',
pOneLast: '',
pTwoFirst: '',
pTwoLast: ''}

...
];

Please note that for the purpose of demonstration, the code featured in the regexChain.js file only contains 5 arrays within the JS object and all names are pseudo names in order to preserve patron privacy. Also "first" and "last" would refer to the student's first and last name, "pOneFirst" - parent one's first name, "pTwoFirst" - parent two's first name, etc...

This JS object is assigned the variable "contacts"

The function createSalu() uses a for loop to iterate through all arrays in the object, using a series of if else statements to push the correct salutation into the salutations array. These if else statements ensure that;

if there is no parent (i.e. an adult student) then the adult student's first and last name are returned.
if there are two parents with the same last name, pOneFirst "&" pTwoFirst " " pOneLast is returned.
if there are two parents with different last names, pOneFirst " " pOneLast "&" pTwoFirst " " pTwoLast is returned.
if there is one parent then pOneFirst " " pOneLast is returned. 

The if else statements pseudocoded above effectively cover all possible scenarios required to generate accurate salutations for all 650 of our patrons/patron families. Also important to mention is an * is placed after each complete salutation to aid in later filtering once the data is pasted back into an excel workbook.

The returned values are pushed into an array "salutations" using the Array.push function.

The salutations array is turned into a string using the JSON.stringify function.

The properties from the original JS object "contacts" are then filtered out from our newly created salutations string using a series of regex replace() functions, capturing entire character sequences (/("pTwoFirst":)+/g; for example) replacing all the unwanted characters with "".

The remaining string (Callie Johnson*Gene & Debbie Smith*Jose Feliciano*Jennifer Lopez & Ben Affleck*Briggs Kiptonlanger & Danielle McGilliKutty*) is then pasted into excel, delimited at the remaining asterisk characters using the delimit data function, data is then transposed and pasted in the appropriate row and column next to its corresponding contact info data.




------------------------------------------Result-------------------------------------------

A mail merge complete with accurate salutations is now available in minutes for all 650 of our patrons. A process which used to require several hours to complete now only requires a few minutes and is completed with a much higher degree of accuracy.
