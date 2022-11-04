let is_sir_share_notes_and_recordings = true;
let promise = new Promise(function (resolve, reject) {
    if (is_sir_share_notes_and_recordings) {
        resolve(" Sir share notes and recordings !!")
       
    }else{
        reject(" Sir does not share notes and recordings !!")
    }
    
}) ;
promise.then(function(successs){
console.log(successs);
}).catch(function(failure){
    console.log(failure);
}).finally(function(){
    console.log("Done.....");
})