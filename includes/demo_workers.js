var i;

var d = new Date();

function timedCount() {
    //i=i+1;
    i = d.toLocaleTimeString();
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();