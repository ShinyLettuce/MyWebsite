window.onscroll = function(){onScroll()}
window.onload = function(){onScroll()}

function onScroll()
{
    if(window.scrollY > 100)
    {     
        //alert("Yo")
        document.getElementById("topButton").style.display = "block";
    }
    else
    {
        document.getElementById("topButton").style.display = "none";
    }
}

function topFunction()
{
    window.scrollTo({top: 0, behavior: "smooth"})
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
}