//Write a program that prints the numbers from 1 to 100. 
//But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number 
//and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
//For numbers which are multiples of both five and seven print "ChickenMonkey".
//To determine if a number can be evenly divided by 3 or 5, use the JavaScript remainder operator.

function giveANumber (a) {
    while(a < 100) {
        a +=1
        
        if (a % 5 === 0 & a % 7 === 0) {
            console.log("chickenmonkey")
        }
        else if (a%5 === 0) {
            console.log("chicken")
        }
        else if (a%7 === 0){
            console.log("monkey")
        }
        else {
        console.log(a)
        }
    }
}
b = 0
giveANumber(b)
