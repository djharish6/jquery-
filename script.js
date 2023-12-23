$(document).ready(function(){
    $('#testBtn').click(function(){
       // alert('hello');
       $('.box').hide();
    });
    $('.box').mouseenter(function(){
        $(this).css({"background-color": "black"});
    }
    )
    $('.box').mouseleave(function(){
        $(this).css({"background-color": "red"});
    })
});