$(document).ready(function(){
    $('#testBtn').click(function(){
       // alert('hello');
       $('.box').fadeToggle(9000);
    });
    $('.box').mouseenter(function(){
        $(this).css({"background-color": "black"});
    }
    )
    $('.box').mouseleave(function(){
        $(this).css({"background-color": "red"});
    })
    $("#name").blur(function(){
       var userinput = $(this).var();
       if(userinput.length < 3){
           $('.error').show()
       }
    })
});