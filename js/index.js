let tim = 12;
let jane = 22;
let john = 14; 

tim = tim + 10;

let teamTotal = tim + jane; 
let victory = john / 2;
let total = teamTotal + victory;

 

let answer = "Tim & Jane now have " + total + " marbles!";

console.log(answer)


let timmyAmount = 10; 
let susanAmount = 25; 

let timmyTaxRate = 0.15; 
let susanTaxRate = 0.26; 


let timmyTaxAmount = timmyAmount * timmyTaxRate;
let susanTaxAmount = susanAmount * susanTaxRate;

let totalTaxAmount = timmyTaxAmount + susanTaxAmount;

console.log(`The Tax Man will claim R${totalTaxAmount.toFixed(2)} from Timmy & Susan.`);



let johnScore = 0;
let timScore = 0;
let alfieScore = 0;
let gwenScore = 0;
let totalScore = 0;
let averageScore = 0;


johnScore = 67;
timScore = 80;
alfieScore = 90;
gwenScore = 56;


totalScore = johnScore + timScore + alfieScore + gwenScore;


averageScore = totalScore / 4;


console.log(`The students' average score before adding 7 marks is: ${averageScore/100}`);


johnScore += 7;
timScore += 7;
alfieScore += 7;
gwenScore += 7;


totalScore = johnScore + timScore + alfieScore + gwenScore;


averageScore = totalScore / 4;


console.log(`The students' average score after adding 7 marks is: ${averageScore/100}`);

