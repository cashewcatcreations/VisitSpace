$(document).mousemove(function(e){
      
  height = $(".sun").height();


  $(".sun").css({
    left:e.pageX - height/2, 
    top:e.pageY - height/2
  });

  console.log(height)
});