function start()
{
    invis();
    switchVisible("1");
}

let currtab = 0;

let tabs = ["1", "2"];

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
    invis();

    if (currtab != 0)
    {
        document.getElementById("3").style.display = "flex";
        document.getElementById("4").style.display = "flex";
        document.getElementById("5").style.display = "flex";
    }
    
  
    document.getElementById(i).style.display = "flex";
}

function switchRight()
{
    currtab++;
    
    
    if (currtab > 1)
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
        currtab = 1;
    }


    switchVisible(tabs[currtab]);

}

window.onload = start;