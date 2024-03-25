// write a program that takes input as the speed of a car 
// if the speed is less than 70,it should print "Ok".
// otherwise for every 5km/s above the speed limit (70) it should give the driver one demerit point and print the total number of demerit points.
// Eg. if the speed is 80, it should print: "Points:2"
// If the driver gets more than 12 points , the function should print :"License suspended".

// create a prompt to input the drivers speed 


writeimport = prompt

const carSpeed = prompt ("Enter your speed");
// function for calculating total demerit points
// if carspeed is < 70 ,expected responce is "Ok"
// if carspeed is > 70 ,expected responce is the total amount of demerit points earned
// if demerit points > 12 ,expected responce is "License suspended" 
function totalDemeritPoints(carSpeed) {
  
  if(carSpeed < 70) {
    return `Ok`;
  } else if (carSpeed > 70) {
     return `Total points:`((carSpeed - 70) / 5 );
  } else if (((carSpeed-70) / 5) > 12 )
     return `License suspended`
}
