let salary = document.querySelector(".income")
let dependent = document.querySelector(".no. of dependents")

if(salary == 50000 && dependent == 1){
    console.log ("Expenditure is " + salary / 0.1)
}
else if (salary == 50000 && dependent == 0) {
    console.log("Expenditure is " + salary / 0.01)
}
else if(salary <= 100000 && (dependent == 1 || dependent == 2)){
    console.log ("Expenditure is " + salary / 0.2)
}
else if (salary == 100000 && dependent == 2){
    console.log ("Expenditure is " + salary / 0.1)
}
else if (salary == 150000 && dependent <= 3) {
    console.log("Expenditure is " + salary / 0.3)
}
else if (salary == 200000 && (dependent == 4 || dependent == 3)){
    console.log("Expenditure is " + salary / 0.4)
}
else if (salary == 250000 && (dependent == 4 || dependent == 5)){
    console.log("Expenditure is " + salary / 0.5)
}
else if (salary < 50000  && dependent == 5){
    console.log("Expenditure is " + salary / 0.7)
}
else if (salary == 200000 && dependent == 0){
    console.log("Expenditure is " + salary / 0.1)
}
else if(salary == 200000 && dependent >= 5){
    console.log("Expenditure is " + salary / 0.7)
}

