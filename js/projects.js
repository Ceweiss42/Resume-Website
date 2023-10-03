function start()
{
    invis();
    switchVisible("1");
}

let currtab = 0;

let tabs = ["1", "2", "3", "4", "5"];

function invis()
{
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
  
}

function switchVisible(i)
{
    stopPlayer();
    invis();

    if (i == "2")
    {
        var iframe = document.querySelector('#youtube-video');
        iframe.src = source;
        console.log("HERE");
    }
  
    document.getElementById(i).style.display = "flex";
}

function switchRight()
{
    currtab++;
    
    
    if (currtab > 4)
    {
        currtab = 0;
    }
    switchVisible(tabs[currtab]);

}

function switchLeft()
{
    currtab--;
    if (currtab < 0)
    {
        currtab = 4;
    }


    switchVisible(tabs[currtab]);

}

var source = "https://www.youtube.com/embed/XJI0XePPJJs?si=hqAaj4V6RwFlC8fN"; // Declare a global variable to hold the YouTube player


window.onload = start;

function stopPlayer() {
    var iframe = document.querySelector('#youtube-video');
    iframe.src = "";

    console.log("stopPlayer() called")
}