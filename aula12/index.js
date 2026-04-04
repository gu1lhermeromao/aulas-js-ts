let varA = 'A'; // B
let varB = 'B'; // c
let varC = 'C'; // A

console.log(varA, varB, varC);

/*
var1 = varA;
varA = varB;
varB = varC;
varC = varA;
varC = var1;
*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);