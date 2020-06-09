import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log('task 1');

let filterFinalInfo = fifaData.filter((home) => {
    
    return home.Year == 2014 && home.Stage == "Final" 
});
console.log(filterFinalInfo[0]["Home Team Name"]);
console.log(filterFinalInfo[0]["Home Team Goals"]);
console.log(filterFinalInfo[0]["Away Team Name"]);
console.log(filterFinalInfo[0]["Away Team Goals"]);
console.log(filterFinalInfo[0]["Win conditions"]);


// let filterAwayTeam = fifaData.filter((away) => {
    
//     return away.Year == 2014 && away.Stage == "Final" 
// });
// console.log(filterAwayTeam[0]["Away Team Name"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

console.log('task 2');

function getFinals(Data) {
    let FilterFinalsData = Data.filter((final) => {
        return final.Stage == "Final"
    })
    return FilterFinalsData
};

console.log(getFinals(fifaData));






/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
console.log('task 3')



function getYears(data) {
    
    const onlyYears = data.map(cb => cb.Year);
   return onlyYears
};
console.log(getYears(getFinals(fifaData)));



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

console.log('task 5')



function getWinners(data) {
    let onlyWinners = data.map ((winner) => {
        if (winner['Home Team Goals'] < winner['Away Team Goals']){ 
            return winner['Home Team Name'];}
            else if (winner['Home Team Goals'] == winner['Away Team Goals']){
                return winner['Win conditions']
            }
         else { return winner['Away Team Name']};
         
        
    })
    return onlyWinners
}

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

console.log('Task 6')

function getWinnersByYear(getWinners, getYears) {
    let year = getYears;
    let country = getWinners;
    for (let i = 0; i < year.length; i++ ) {
     console.log(`In ${year[i]}, ${country[i]} won the world cup!`)
    }

};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let averageHome = data.reduce((total, goal) => {
        return total += goal['Home Team Goals']/data.length
    }, 0);

    console.log('Home Team Goals Average: '+ averageHome.toFixed(2));
    let averageAway = data.reduce((total, goal) => {
        return total += goal['Away Team Goals']/data.length
    }, 0);
    console.log('Away Team Goals Average: ' + averageAway.toFixed(2))

};


getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();
