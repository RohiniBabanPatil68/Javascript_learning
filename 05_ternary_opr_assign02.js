var tcsEligibilityCheck = function(grad_score,hsc_score, ssc_score, candidate_name){

    var result = grad_score>= 70 || hsc_score >= 80 || ssc_score >90
    ? `congrates ${candidate_name} you are eligible for TCS interview`
   : "Unfortunately you are not eligible for enterview"
    console.log(result);
}
tcsEligibilityCheck(80,86,90, "Mohit Sharma");
tcsEligibilityCheck(69,65,95, "Anil Pandey");

console.warn("====================Assignent 0A========================================");

    
