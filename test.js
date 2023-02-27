//array destructuring
'use strict';


const array1 = [2, 3, 4];
const a = array1[0];
const b = array1[1];
const c = array1[2];
console.log(a,b,c)

const [x, y, z] = array1 // destructuring assignment
console.log(x,y,z, typeof x, typeof array1)


const restaurant = {
    name : 'Classico Italiano',
    location : '58, Ibukun-olu Street, Akoka, Lagos',
    categories: ['Italian', 'Pizza', 'Americana'],
    starterMenu : ['chicken bbq', 'meaty bbq', 'bbq suya', 'salad'],
    mainMenu : ['Pizza', 'Pasta', 'Pallazo'],
}


let [main, , secondary] = restaurant.categories
console.log(main,secondary);
console.log(restaurant.categories);

[main, secondary] = [secondary, main];
console.log(main, secondary);