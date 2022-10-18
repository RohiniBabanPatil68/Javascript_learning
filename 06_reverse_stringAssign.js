console.warn("=============Reverse String Assignment=============== ");

var str1 = "Hard work always pays back";
var str2 = "Soon I will be Angular IT Champ";
function reverse(str)
{
    var res ="";
    for(index = str.length-1;index >=0;index--)
    {
        if(str.charAt(index) != " ")
        {
            res = res + str.charAt(index);
        }
    }
    return res;
}
console.log(`Hard work always pays back : `,reverse(str1));
console.log("Soon I will be Angular IT Champ" ,reverse(str2));





