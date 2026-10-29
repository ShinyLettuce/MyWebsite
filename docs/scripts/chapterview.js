
document.addEventListener('DOMContentLoaded', function(){onLoad()})

var headers;

function create(htmlStr)
{
var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function onLoad()
{
    headers = document.getElementsByClassName("work");
    var chapterView = document.getElementsByClassName("chapters")
    for(let i = 0; i < headers.length; i++)
    {
        //alert("<li><a href= \"#" + headers[i].textContent + "\">" + headers[i].textContent + "</a></li>")

        var text = headers[i].textContent.slice(1)

        var fragment = create("<a><li>" + text + "</li></a>")

        fragment.children[0].href = "#" + text
        chapterView[0].appendChild(fragment);
    }
}