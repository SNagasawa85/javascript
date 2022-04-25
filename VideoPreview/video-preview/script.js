console.log("page loaded...");

function preview(){
    var candleVid = document.getElementById ("candlevideo");
    candleVid.play ();
    candleVid.audio= 0;
    console.log("this video is playing");
}

function stoppreview(){
    var stopvid = document.getElementById ("candlevideo");
    stopvid.pause ();
    console.log("video no longer playing")
}