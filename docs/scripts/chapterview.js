
document.addEventListener('DOMContentLoaded', function(){onLoad()})
document.addEventListener('scroll', function(){onScroll()})

var headers, chapterHeaders, currentChapter;

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
        var text = headers[i].textContent.slice(1)

        var fragment = create("<a><li>" + text + "</li></a>")

        fragment.children[0].href = "#" + text
        chapterView[0].appendChild(fragment);
    }
}

function onScroll()
{
    currentChapter = 0;
    
    var docTop = document.body.getBoundingClientRect().top

    var chapter = document.getElementsByClassName("chapters")

    headers = document.getElementsByClassName("work");

    for(let i = 0; i < chapter[0].children.length; i++)
    {
        chapter[0].children[i].className = '';
    }

    for(let i = 0; i < headers.length; i++)
    {
         var height = headers[i].getBoundingClientRect().top - docTop

         if(window.scrollY > height)
         {
            currentChapter = i + 1;
         }
    }

    chapter[0].children[currentChapter].className = 'relevant';
}