// QUESTION 1

var city_name= "karachi"
var user_city=prompt("Enter a city name")
if(city_name==user_city){
alert("Welcome to city of lights")
}else{
    alert("plz enter a correct city")
}
// QUESTION 2

var gen1="male"
var gen2="female"
var user_gen=prompt("Enter you are gender")
if(user_gen==gen1){
    alert("Good Morning Sir")
}else if(user_gen==gen2){
    alert("Good Morning Madam")
}else{
    alert("plz enter a correct gender")
}
// QUESTION 3

var col1="red"
var col2="yellow"
var col3="green"
var user_color=prompt("Enter a color name")
if(user_color==col1){
    alert("Must Stop")
}else if(user_color==col2){
alert("Ready to move")
}else if(user_color==col3){
    alert("Move now")
}else{
    alert("plz enter a correct color")
}
// QUESTION 4

var user_fuel=+prompt("Enter you are fuel")
if(user_fuel<0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("you are fuel is full")
}
// QUESTION 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// THIS PROGRAM IS CORRECT

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// THIS PROGRAM IS WRONG

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// THIS PROGRAM IS WRONG

if (c === 13){
alert("condition 2 is true");
}
// THIS PROGRAM IS CORRECT

if (++c < 14){
alert("condition 3 is true");
}
// THIS PROGRAM IS WRONG

if(c === 14){
alert("condition 4 is true");
}
// THIS PROGRAM IS CORRECT

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// THIS PROGRAM IS CORRECT

if (true){
alert("True");
}
if (false){
alert("False");
}
// THIS PROGRAM IS COORECT

if("car" < "cat"){
    alert("car is smaller than cat");
    }
    // THIS PROGRAM IS CORRECT

    // QUESTION 6

    var subject1=+prompt("Enter a subject1 marks")
    var subject2=+prompt("Enter a subject2 marks")
    var subject3=+prompt("Enter a subject3 marks")
    var total_marks=300
    console.log("total marks" + total_marks)
    var obtained_marks=subject1+subject2+subject3
    console.log("obtained marks" + obtained_marks)
    var percentage=obtained_marks/total_marks*100
    console.log("percentage" + percentage)
    
    if(percentage>=80){
        console.log("Grade A-one")
        console.log("remarks Excellent")
    }else if(percentage>=70){
        console.log(" Grade A")
        console.log("remarks good")
    }else if(percentage>=60){
        console.log("Grade B")
        console.log("remarks you need to improve ")
    }else{
        console .log("fail")
        console.log("sorry")
    }
    
    // QUESTION 7

    var my_secretnum="2"
    var user_num=+prompt("Guess the number")
    if(my_secretnum==user_num){
        alert("Bingo! Correct answer")

    }else if(user_num==(my_secretnum+1)){
        alert("Close enough to the correct answer")

    }else{
        alert("wrong number plz try again")
    }

    // QUESTION 8

    var user_value=+prompt("Enter a number")
    if(user_value%3==0){
        alert("this number is divisible by 3")

    }else{
        alert("this number is not divisible by 3")
    }

    //  QUSTION 9

    var user_value=+prompt("Enter a number")
    if(user_value%2==0){
        alert("this number is even")

    }else{
        alert("this number is odd")
    }

    //QUESTION 10
    
    var T=+prompt("Enter a temperature")
    if(T > 40){
        alert("It is too hot outside")
    }else if(T > 30){
    alert("The Weather today is Normal")
    }else if (T > 20){
        alert("Today Weather is cool")
    }else if (T > 10){
        alert("OMG! Today weather is so Cool")
    }

    // QUESTION 11

var first_number=+prompt("Enter a first number")
var second_number=+prompt("Enter a second number")
var operation=prompt("Enter a operation")
if(operation=="+"){
    alert("The addition answer is ="+ (first_number+second_number))

}else if(operation=="-"){
    alert("The subtraction answer is ="+ (first_number-second_number))

}else if(operation=="*"){
    alert("The multipilication answer is ="+ (first_number*second_number))
}else if(operation=="/"){
    alert("The division answer is ="+ (first_number/second_number))
}else if(operation=="%"){
    alert("The modules answer is ="+ (first_number%second_number))
}
    