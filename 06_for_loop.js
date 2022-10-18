// console.log(1) 
// console.log(2)


// console.log(10)

for (var test = 1; test <=10; test++) {
    console.log(test);
    
}
console.warn("====================================================");

// 0,2,4,8,10
for (var index = 0; index <=10; index=index+2) {
    console.log(index);
    
}
console.warn("====================================================");
// initialization: 1  update by 1;    condition <=10
for (var test = 1; test <= 10; test++) { // test = 1  2  3
    // console.log(test); // 1 2  3
}
// 0 2 4 6 8 10
for (let index = 0; index <= 10; index=index+2) { // index++   index = index+2
    // console.log(index);
}

// WAP to print numbers from 50 to 40 by decrementing by 1
for (let index = 50; index > 40; index--) { // 51  52  53 
    console.log(index); // 50  51 52 
    
}


// WAP to find first 15 odd numbers
// intialization index=1 ; condition index<30;  update index= index+2 

for (let index = 1; index < 30; index=index+2) {
console.log(index);
    
}


for (let index = 1; index < 30; index++) {
    if(index%2!=0){
        console.log(index);
    }
    
}

