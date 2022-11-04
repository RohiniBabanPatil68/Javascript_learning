function do_assignments(callback,copy_assignments_amar){
    console.log("I am doing assignment and it is done now... ");
    callback();
    copy_assignments_amar();
}

function copy_assignments(){
    console.log("Hey bro... Thank you.Let me copy ");
}

function copy_assignments_amar(){
    console.log("Hey bro... Thank you.Let me copy ");
}

do_assignments(copy_assignments,copy_assignments_amar );
//copy_assignments();

function display() {
    console.log("display function");
}

//setInterval(display, 2000);

setTimeout(display,4000);



