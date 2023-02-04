//this is completely unfinished and sh rm, hope to work on it sometime soon, also going to upload it to github so i can work on it at school
// Date started: 04/02/2023
// Author: Tomek Dobrowolski

var time_secs = 0;

function start() 
{
    on = true;
}

function stop()
{
    on = false;
}

function reset()
{
    time_secs = 0;
    on = false;
    document.getElementById("time").innerHTML = time_secs;
}

function update()
{   
    if (on) time_secs += 1;
    document.getElementById("time").innerHTML = time_secs;
}

setInterval(update, 1000);