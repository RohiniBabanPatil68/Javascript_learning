var reverseString = function (str) {
    let lenthStr = str.length -1 ;
    var reverseStr= " ";

    for (let index = lenthStr; index >=0; index--) {
        
        console.log(str.charAt(index));

        var char = str.charAt(index);

        reverseStr = reverseStr + char;
    }
    console.log(`"${str} Given String Reversed: ${reverseStr}`);

    
}
reverseString("Hard work always pays back")
reverseString("Soon I will be IT Angular Champ")