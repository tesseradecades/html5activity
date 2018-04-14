var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("includes/demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("currentTime").innerHTML = event.data;
        };
    } else {
        document.getElementById("currentTime").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

function stopWorker() { 
    w.terminate();
    w = undefined;
}

/*
$(document).ready(function(){
	var w;
    startWorker();
});*/
