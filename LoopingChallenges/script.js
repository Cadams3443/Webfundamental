// 1. Print Odds 1-20

for(var i = 1; i <=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}


// 2. Decreasing Multiples of 3 (From 100 - 0)

for(var i = 100; i>=1; i--){
    if(i%3 === 0){
        console.log(i);
    }
}


// 3. Print the Sequence (4, 2.5, 1, -0.5, -2, -3.5)
var array = [4, 2.5, 1, -0.5, -2, -3.5];

for(var i = 0; i <array.length-1;i++){
    console.log(array[i]);
}


// 4. Sigma (add values of every number, 1-100)
var sum = 0;

for(var i = 1; i <= 100; i++){
   var sum = sum + i;

}

console.log(sum);


// Factorial  (the produc of all values 1-12)

var product = 1; 

for (var i = 1; i <= 12; i++){
    var product = i * product;
}

console.log(product);