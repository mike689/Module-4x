function MenuSelection()
{
    if (document.getElementById("appmenu").value == "Show Area 1")
    {
        document.getElementById("main").style.visibility = "visible";
        document.getElementById("second").style.visibility = "hidden";
    }
    else if (document.getElementById("appmenu").value == "Show Area 2")
    {
        document.getElementById("second").style.visibility = "visible";
        document.getElementById("main").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("main").style.visibility = "hidden";
        document.getElementById("second").style.visibility = "hidden";        
    }
}