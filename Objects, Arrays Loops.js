/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
let firstFiveNumbers = [1, 2, 3, 4, 5];
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
let thatsMe = {
    name: 'Erik',
    surename: 'Ondra',
    email: 'erik.ondra@yahoo.com',
    age: 25
}


/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
thatsMe.hasDrivingLicense = true;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete thatsMe.age

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
let thatsMe2 = {
    name: 'John',
    surename: 'Doe',
    email: 'john.doe@yahoo.com',
    age: 25
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

let totalShoppingCart = 20;

if (totalShoppingCart < 50) {
    totalShoppingCart + 10
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let newTotalShoppingCart = totalShoppingCart - (totalShoppingCart * 0.2)
if (totalShoppingCart < 50) {
    totalShoppingCart + 10
}

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

let car = {
    brand: 'Audi',
    model: 'A5',
    licensePlate: 'RDX491'
}

let car1 = Object.assign({}, car)
car1.licensePlate = 'RDX991'

let car2 = Object.assign({}, car)
car2.licensePlate = 'TDX4341'

let car3 = Object.assign({}, car)
car3.licensePlate = 'HJS645'

let car4 = Object.assign({}, car)
car4.licensePlate = 'HGS098'

let car5 = Object.assign({}, car)
car5.licensePlate = 'SEO110'

console.log(car1, car2, car3);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
let carsForRent = [car, car1, car2, car3, car4, car5]
console.log(carsForRent);


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
carsForRent.shift()
carsForRent.pop()
console.log(carsForRent);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
/* WRITE YOUR ANSWER HERE */
console.log(car.brand, car.model, car.licensePlate)



/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */
let carsForSale = [];
carsForSale = [car, car1, car2];

let totalCars = carsForRent.length + carsForSale.length;
console.log(totalCars);



/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i])
}

// with map
carsForSale.map(item => console.log(item));

