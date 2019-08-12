import {projects} from "./projects.js";


$(document).ready(function(){
    handleNavBar();
    handleSubmit();
    renderProjects();
    handleIconClick();
    window.addEventListener("resize",handleScreenChange);
});

function handleScreenChange()
{
    if(screen.width > 370)
    {
        let navbar = document.getElementById("navLinks");
        navbar.style.display = "inline-block";
    }
    else
    {
        let navbar = document.getElementById("navLinks");
        navbar.style.display = "none";
    }
}

function handleIconClick()
{
    $('#icon').click(function(event)
    {
        event.preventDefault();
        let navbar = document.getElementById("navLinks");
        let style = window.getComputedStyle(navbar);
        if(style.getPropertyValue('display') === 'none')
        {
            navbar.style.display = 'block';
        }
        else
        {
            navbar.style.display = 'none';
        }
    })
}

function handleNavBar()
{
    $('li a').click(function(event)
    {
        event.preventDefault();

        let href = $(this).attr('href');
        document.querySelector(href).scrollIntoView(true);
        scrollBy(0,-40);
    })
}

function handleSubmit()
{
    $("#submit-button").click(function(event)
    {
        event.preventDefault();

    });
}

function renderProjects()
{
    /*  FORMAT
                <article class="sansserif">
                <div class="imageHolder">
                    <img class = "thumbnail" src = "images/project-images/quiz-app-small.PNG" alt="photo of riddle quiz app">
                </div>
                <div class = "project-contents">
                    <h2>Riddle Quiz App</h2>
                    <p>A project made for the Thinkful boot camp. It is a quiz of ten riddles
                            the user must solve. Made using HTML and Javascript.</p>
                    <a href="https://brittniludington.github.io/QuizApp/index.html">Demo</a>
                    <a href="https://github.com/BrittniLudington/QuizApp">Repository</a>
                </div>
            </article>
    */
   $("#projects").prepend('<h1 class="merriweather">Projects</h1>');
    for(let i = 0; i < projects.length; i++)
   {
       let html = '<article class="sansserif"><div class="imageHolder"><img class="thumbnail" src=' + projects[i].src +
        ' alt=' + projects[i].alt + '></div> ' + 
        '<div class = "project-contents"> <h2>' + projects[i].name + '</h2><p>' + projects[i].description +  '</p>' 
        + '<a href = ' + projects[i].demo + ' target="_blank" role="button" ><h3 class="projectLink">Demo</h3></a><a href = ' + projects[i].repo + ' target="_blank" role="button"><h3 class="projectLink">Repository</h3></a>';
        html += '<h3>Technology Used:</h3><ul>';
        for(let j = 0; j < projects[i].technology.length; j++)
        {
            html += '<li>' + projects[i].technology[j] + '</li>';
        }
        html += '</ul><div></article>'
        html = $.parseHTML(html);
        $("#projects").append(html);
   }
   
}