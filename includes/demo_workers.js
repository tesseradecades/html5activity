var i = new Date().toLocaleTimeString();
function timedCount() {
    i = new Date().toLocaleTimeString();
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();
