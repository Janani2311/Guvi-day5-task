/* Question 1. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” */


class Movie {
    // set class property rating to "PG" as default
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movie){
    let PgMovies =[];
        for(let i = 0 ; i < movie.length; i++){
            if(movie[i].rating == 'PG')
                PgMovies.push(movie[i]);
        }
    return PgMovies;
    }
}

//d. instance of class movie represents film
let film = new Movie("Casino Royale", "Eon Productions","PG13");

//creating objects
let film1 = new Movie("ayalaan", "KGR studios");
let film2 = new Movie("Conjuring","New Line Cinema", "PG18");
let film3 = new Movie("vikram","red giant");
let film4 = new Movie("parking", "passion studios");

//example for set default value "PG" for rating
console.log(film1, film3);

//creating array of Movie objects and passing it as argument for getPG method
let movArr = [film,film1,film2,film3,film4];
console.log(film.getPG(movArr));

/*-------------------------------------------------------------------------------------------------------*/


//Question 2. Circle-class 

class Circle{
    constructor(rad = 1.0, col = "red"){
        this.radius = rad;
        this.colour = col;
    }

    get circleRadius(){
        return this.radius;
    }
    set circleRadius(rad){
        this.radius = rad;
    }
    get circleColour(){
        return this.colour;
    }
    set circleColour(col){
        this.colour = col;
    }
    tostring(){
        return `circle of radius ${this.radius} and colour ${this.colour}`;
    }
    get area(){
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }
    get circumference(){
        return 2 * Math.PI * this.radius;
    }
}

var obj = new Circle();
var obj1 = new Circle(3.5)
var obj2 = new Circle(4.5, "green");
console.log(obj1.circleRadius);
console.log(obj1.colour);
console.log(obj1.area);

console.log(obj.colour);
console.log(obj.tostring());
console.log(obj.area);
console.log(obj.circumference);

console.log(obj2.circumference);
console.log(obj2.tostring());

/*---------------------------------------------------------------------------------------------*/

//3. Write a person class to hold all the details

class Person{
    constructor(fname,lname,id,mobile,city){
        this.firstName = fname;
        this.lastName = lname;
        this.emailId = id;
        this.contact = mobile;
        this.city = city;
    }
}

var p1 = new Person("Krishiv", "Vinodh", "krishiv@csacademy.in","15451221","erode");
var p2 = new Person("Mukunth", "Vinodh", "muku@gmail.com", "154421321", "tgode");
var p3 = new Person("Janani", "Vinodh","janaeswar@gmail.com", "54421215", "cbe");
var p4 = new Person("Vinodh", "Kumar", "vinodh@gmail.com", "443546", "davangere");

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.emailId);
console.log(p1.contact);
console.log(p1.city);

console.log(p2.firstName);
console.log(p2.lastName);
console.log(p2.emailId);
console.log(p2.contact);
console.log(p2.city);

console.log(p4.firstName);
console.log(p4.lastName);
console.log(p4.emailId);
console.log(p4.contact);
console.log(p4.city);

/*------------------------------------------------------------------------------------------------------------*/

//4. write a class to calculate the uber price

//my assumption of calculation
//1.set minimum fare for first 3 kilometers
//2.for above 3 kilometers it charge - 8 per kilometer
//3.for long distance - if it takes more than 3 hours, charges will be 120 per hour 

class Uber{
    constructor(){
        this.minimumFare = 100;
        this.costPerkilometer = 8;
        this.costPerHour = 120;
    }

    calculateUberPrice(distance, hrs) {
        let priceTime = 0;
        let priceDistance = 0;
        if(distance > 3)
        priceDistance = this.costPerkilometer * (distance);
        if(hrs > 3) {     
        priceTime = this.costPerHour * (hrs);
        }
        let total = this.minimumFare + priceDistance + priceTime;
        return total;
    } 
}


let baseFare = new Uber();

let person1 = baseFare.calculateUberPrice(10, 1);
let person2 = baseFare.calculateUberPrice(100, 6);
let person3 = baseFare.calculateUberPrice(1,1);
console.log(`cost for person1 ${person1}`);
console.log(`cost for person2 ${person2}`);
console.log(`cost for person3 ${person3}`);

/*--------------------------------------------------------------------------------------------------*/