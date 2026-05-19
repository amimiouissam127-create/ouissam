$(document).ready(function(){
    $('#btn-test').click(function(){
        console.log("clicked!!!")
        //$(".paragraph-2").hide();
        $(".title1").css('color','red')
        $(".title1").css({'color':'red' ,'backgroundColor':'black'});
    })
})
$("#btn-hide").on("click",function(){
    $(".title1").hide();
})

$("#btn-show").on("click",function(){
    $(".title1").show();
})

//Event
    $("#btn-toggle").dblclick(function(){
        $(".title1").toggle();
    })