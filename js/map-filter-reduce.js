/*
*Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
Use .map to create an array of strings where each element is a user's email address
Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use
the result to calculate the average.
Use .reduce to get the longest email from the list of users.
Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersWithThreeOrMoreLanguages = users.filter(function (user){
    return user.languages.length >= 3;
});

let emailAddresses = users.map((user ) => user.email)

emailAddresses.forEach(function (email){
    console.log(email);
});

let totalYears = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
}, 0);

let averageYearsExp = totalYears / users.length;
console.log(averageYearsExp);

let longestEmail = users.reduce((longest, user) => {
    if (user.email > longest.length) {
        longest.user.email;
    } return longest;
}, '')
console.log(longestEmail);

let instructorString = users.reduce((resultString, user) =>{
    return resultString += user.name;
}, 'Your instructors are: ');

console.log(instructorString);


//Bonus
let languages = users.reduce((listOfLanguages, user) => {

    user.languages.forEach(function (lang) {
        // console.log(listOfLanguages);
        if (!listOfLanguages.includes(lang)) {
            listOfLanguages.push(lang);
        }
    })
    return listOfLanguages;
}, [])
console.log(languages);