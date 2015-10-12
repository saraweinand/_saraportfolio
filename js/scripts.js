\$(window).scroll(function(){
    $(".four").css("opacity", 1 - $(window).scrollTop() / 250);
  });