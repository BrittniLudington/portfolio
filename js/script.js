$(document).ready(function(){
    handleNavBar();
    handleSubmit();
});

function handleNavBar()
{
    $('li a').click(function(event)
    {
        event.preventDefault();

        let href = $(this).attr('href');
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
    })
}

function handleSubmit()
{
    $("#submit-button").click(function(event)
    {
        event.preventDefault();

    });
}