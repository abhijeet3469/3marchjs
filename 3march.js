// /Decision making

//one condition
//if else
let a=10;
if (a == 10)
{
    console.log("success");
}
else
{
    console.log("failure");
}

//two condition
//if else ladder
let b=(-10);
if (b<0) 
{
    console.log("Negative");
} 
else if (b==0) 
{
  console.log("Zero");
} 
else 
{
   console.log("Positive");
}

//three or more condition
//switch-case statement

let gender = "m";
switch(gender)
{
    case "m":
        console.log("Male");
        break;
    case "f":
        console.log("female");
        break;
}
// Take age as the variable 
// age < 18 = Child
// greater than 18 but less than 40 = Adult 
// age is greater than 40 = Old age

let age=25;
switch(true)
{
    case age<18:
        console.log("Child");
        break;
    case 18<age<40:
        console.log("Adult");
        break;
    default:
        console.log("Old age");
        break;
}
// take variable name as day , its possible values are 0 1 2 3 4 5
// 0 = Monday 
// 5 : Saturday
let day= 4;
switch(day)
{
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wedday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
        break;
}


//LOOPS:

//for loop - 

//3 values
//initialization
//condition
//increment/decrement

//var a;
//declaring a variable

//var a = 12;
//initializing the variable with the value of 12

for (let i = 1; i < 11; i++) 
{
    console.log(i);;    
}

//Question: Print the table of 19 like 
//19 * 1 = 19
// 19 * 2 = 38

let c;
for (let i = 1; i < 11; i++)
{
    c = 19 * i;
    console.log(c);
}