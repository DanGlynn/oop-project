# Salutation Creator

### User Stories

1. I have a Javascript Object from a Customer Relations Management file consisting of a series of key-value pairs which represent the first and last names of family or individual account holders. This object contains several incomplete key value pairs. 
2. The function will filter through the object and return a new array containing an appropriate salutation for each family or individual represented in the initial JS Object.
3. This function must take into account the following logic;
    - if there is no parent (i.e. an adult student) then the adult student's first and last name are returned.
    - if there are two parents with the same last name, pOneFirst "&" pTwoFirst " " pOneLast is returned.
    - if there are two parents with different last names, pOneFirst " " pOneLast "&" pTwoFirst " " pTwoLast is returned.
    - if there is one parent then pOneFirst " " pOneLast is returned. 


### Technologies Used

* Javascript
* Regex
