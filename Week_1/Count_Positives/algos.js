//GIVEN AN ARRAY, PRINT THE NUMBERS OF POSITIVE INTIGERS WITH GIVEN ARRAY

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
//ITERATE THROUGHT THE ARRAU (FOR LOOP)
//CHECK THO SEE IF THE NUMBERS IN ARRAY ARE GREATER OR EQUAL TO 0 (CONDITIONALS)(FOR LOOP AND IF STATEMENT)


if (var i=0, i<numbers.length, i++) {
    if (numbers[i]>=0) {
        countPositives += 1;
    }
    console.log (countPositives)
}


console.log("there are " + countPositives + " positive values");
