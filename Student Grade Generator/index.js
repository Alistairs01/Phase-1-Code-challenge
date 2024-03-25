// write a program that prompts the user to input student marks
// input should be >= 0 <= 100
// Then output the correct grade
// x > 79 = A
// x = 60 to 79 = B
// x = 59 to 49 = C
// x = 40 to 49 = D
// x < 40 = E

const studentMarks = window.prompt ("Enter your student marks");


// assigning the correct grade to the correct marks
// create a function studentGrades 
// set parameters to marks
// use if else

function studentGrades(x) {
    
    if (x < 40) {
        grade = "E";
    } else if (x >= 40 && x <= 49) {
        grade = "D";
    } else if (x >= 50 && x <= 59) {
        grade = "C";
    } else if (x >= 60 && x <= 79) {
        grade = "B";
    } else if (x > 79 && x <= 100) {
        grade = "A";
    }else 
          grade = "invalid entry";

    return `Your grade is: ${grade}`;
}