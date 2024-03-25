// write a program whose task is to calculate an individual's Net salary.
// Net salary is calculated by
// (Gross salary=(basic salary + benefits)) - (Deduction(payee + NHIF + NSSF))


// Income Tax Individual Tax Rates Monthly Taxable income
// On the first shs 24,000 Tax rate = 10%
// On the next shs 8,333 Tax = 25%
// On the next shs 467,667 Tax = 30%
// On the next shs 300,000 Tax = 32.5%
// Above 800,000 Tax = 35%


// NHIF
// Up to 5,999                 = 150 shs
// 6,000 - 7,999               = 300 shs
// 8,000 - 11,999              = 400 shs
// 12,000 - 14,999             = 500 shs
// 15,000 - 19,999             = 600 shs
// 20,000 - 24,999             = 750 shs
// 25,000 - 29,999             = 850 shs
// 30,000 - 34,999             = 900 shs
// 35,000 - 39,999             = 950 shs
// 40,000 - 44,999             = 1,000 shs
// 45,000 - 49,999             = 1,100 shs
// 50,000 - 59,999             = 1,200 shs
// 60,000 - 69,999             = 1,300 shs
// 70,000 - 79,999             = 1,400 shs
// 80,000 - 89,999             = 1,500 shs
// 90,000 - 99,999             = 1,600 shs
// Above 100,000               = 1,700 shs



// NSSF Rates
// Nssf deduction rate of 5%
// Maximum Nssf rate amount is 2000 shs




const basicSalary = prompt ("Enter your basic salary.")
const benefits = prompt ("Enter total amount of benefit.")

// turn strings to numbers
basicSalary = parseFloat(basicSalary)
benefits = parseFloat(benefits)

// calculating gross salary
 function grossSalary(x) {
    console.log (basicSalary + benefits)

}

// calculating paye

function payeRate(x) {

    if (x < 24000){
        return 0;
    }else if (x = 24000) {
       return (x * 0.1);
    }else if (x  > 24000 && x <= 32333) {
        return ((x - 24000) * 0.25);
    }else if (x > 32334 && x <= 467667) {
        return ((x - 32334) * 0.3);
    }else if (x < 467668 && x <= 799999) {
        return ((x -467668) * 0.325)
    }else if (x > 800000) {
        return ((x - 800000) * 0.35)
    }else return "Invalid input";
}
// calculate nssf

function nssfRate(x) {

    if (x > 0 && x < 40000) {
        return x * 0.05
    }else if (x >= 40000) {
        return 2000
    }else return "Invalid input";
}
// calculate nhif 
function nhifRate(x) {
    if (x > 0 && x <= 5999) {
    return 150;
    }else if (x >= 6000 && x <= 7999) {
        return 300;
    }else if (x >= 8000 && x <= 11999) {
        return 400;
    }else if (x >= 12000 && x <= 14999) {
        return 500;
    }else if (x >= 15000 && x <= 19999) {
        return 600;
    }else if (x >= 20000 && x <= 24999) {
        return 750;
    }else if (x >= 25000 && x <= 29999) {
        return 850;
    }else if (x >= 30000 && x <= 34999) {
        return 900;
    }else if (x >= 35000 && x <= 39999) {
        return 950;
    }else if (x >= 40000 && x <= 44999) {
        return 1000;
    }else if (x >= 45000 && x <= 49999) {
        return 1100;
    }else if (x >= 50000 && x <= 59999) {
        return 1200;
    }else if (x >= 60000 && x <= 69999) {
        return 1300;
    }else if (x >= 70000 && x <= 79999) {
        return 1400;
    }else if (x >= 80000 && x <= 89999) {
        return 1500;
    }else if (x >= 90000 && x <= 99999) {
        return 1600;
    }else if (x > 100000){
        return 1700;
    }else return 'Invalid input';
}
// calculating Total Deductions
// calculating Total Deductions
function totalDeductions(x) {
    const totalDeduction = payeRate(x) + nhifRate(x) + nssfRate(x);
    return totalDeduction;
}

// Net Salary grossSalary - totalDeductions
function netSalary(x) {
    const totalDeduction = totalDeductions(x);
    const gross = grossSalary(x);
    const net = gross - totalDeduction;
    return net;
}

// Call the functions with the provided input
const totalDeductionAmount = totalDeductions(basicSalary + benefits);
const individualNetSalary = netSalary(basicSalary + benefits);

console.log("Total Deductions: " + totalDeductionAmount);
console.log("Net Salary: " + individualNetSalary);