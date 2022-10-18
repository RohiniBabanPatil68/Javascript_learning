
console.error("==Q.NO 1================WAF to count vowels from given String using includes==============");

var givenString = "Good Morning IT Champ";
console.log(`Given String Is:`, givenString);
var str = givenString.toLowerCase();
const vowel = ["a", "e", "i", "o", "u"];

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowel.includes(letter)) {
            count++;
        }
    }
    return count
}
var res = countVowel(str);
console.log(`Total NO. of vowels in given string are =` , res);
console.error("==================WAF to count vowels from given String==============");
var str = "I love javaScript";
console.log(`Given String Is:`, str);
var str1 = str.toLowerCase();
var vowels = ['a','e','i','o','u'];

function countVowels(){
    var count =0;
    for (let index = 0; index < str1.length; index++) {
        if(str1.charAt(index) =="a" ||str1.charAt(index) =="e" ||str1.charAt(index) =="i" ||str1.charAt(index) =="o"||str1.charAt(index) =="u")
        {
            count++;
        }

    }
    return count;
}
var res = countVowels(str1);
console.log(`the num of vowels in given string are = ${res}` );
console.log("================= Sum of all the Numbers from 1 to 10 ======================");
var add = function () {
    var add = 0;
for (let index = 0; index <=10; index++) {
    add = add+index;
    
}
console.log(`Addition of all the numbers is: ${add}`);

}
add();

console.warn("-----------------sum of squre Numbers from 1 to 5--------------------------");
 function sumOfSquare() {
    var sum =0;
    for (let index = 1; index <=5; index++) {
        sum = sum +(index*index);
        
    }console.log(`sum of squre Numbers from 1 to 5` ,sum);
 }sumOfSquare();

 console.error("---------------Even position Characters--------------------");
 var str1 = "Hard work always pays back";
 var str2 = "Soon I will be Angular IT Champ";
 
 function evenPositionChar(str) {
 
     var res=" ";
     for (let index = 0; index < str.length; index++) {
         
         if (index%2==0 && str.charAt(index)!= " ")  {
             res = res + str.charAt(index)
             
         }
     }
     return res;
 }
 var ans = evenPositionChar(str1);
 var res = evenPositionChar(str2);
 console.log(`Even POsition Characters :`, ans);
 console.log(`Even POsition Characters :`,res);
 
 
 console.error("---------------ODD position Characters--------------------");
 var str1 = "Hard work always pays back";
 var str2 = "Soon I will be Angular IT Champ";
 
 function oddPositionChar(str) {
 
     var res=" ";
     for (let index = 0; index < str.length; index++) {
         
         if (index%2!=0 && str.charAt(index)!= " ")  {
             res = res + str.charAt(index)
             
         }
     }
     return res;
 }
 var ans = oddPositionChar(str1);
 var res = oddPositionChar(str2);
 console.log(`Odd POsition Characters :` ,ans);
 console.log(`Odd POsition Characters :`,res);
 




