console.warn("================Loop Assignment 01==============================");

for (let index = 5; index <=15;index++){
    console.log(index);
}
console.warn("---------------------------------------------------------");
for (let loop = 50; loop >=40; loop--) {
    
    console.log(loop);
}
console.warn("---------------------------------------------------------");
console.log(`Find first 15 odd numbers `);
for (let oddNumbers =1; oddNumbers <30;oddNumbers++){
if (oddNumbers%2!=0) {
    console.log(oddNumbers);
    
}
}
console.warn("---------------------------------------------------------");
console.log(`Find first 10 Even numbers`);
var countEven = 0;
for (let evenNumbers = 0; evenNumbers <100; evenNumbers++){
if (evenNumbers%2==0) {
    console.log(evenNumbers);
    countEven = countEven+1;
    if(countEven==10){
        break;
    }

}
}
console.warn("---------------------------------------------------------");
console.log(`Print table of 5:`);
  for (let table = 5;table<=50; table=table+5){
console.log(table);
  } 
  console.warn("---------------------------------------------------------");
  console.log(`Print table of 10:`);
    for (let table02 = 10;table02<=100; table02=table02+10){
  console.log(table02);
    }
    console.warn("---------------------------------------------------------");
console.log(`Print table of 10 in revers direction:`);
  for (let reverseTable = 100;reverseTable>=10; reverseTable=reverseTable-10){
console.log(reverseTable);
  } 
  console.warn("---------------------------------------------------------");


