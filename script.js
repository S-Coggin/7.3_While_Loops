alert("CONNECTED");

//prints numbers between -10 and 19
var count = -10;

while(count <= 10) {
    console.log(count);
    count++;
}


//prints all even numbers between 300 and 333 in console
var count = 10;

while(count <=40) {
    console.log(count);
    count+=2;
}


//prints all odd numbers between 300 and 333 in console
var count = 300;

while(count <=330) {
    console.log(count);
    count+=3;
} 


//prints all numbers divisible by 3 AND 5 between 5 and 50
var count = 5;

while(count <=50) {
  if(count % 3 === 0 && count % 5 === 0){
    console.log(count); 
}
    count++;
}
