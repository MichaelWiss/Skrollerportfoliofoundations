skrollr.init({
    forceHeight: false
  });
  
      $(document).foundation();
       threshold: 0
    
  $(window).scroll(function() {
    $('#slideLeft').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+450) {
        $(this).addClass("fadeIn");
      }
    });
  });

  $(window).scroll(function() {
    $('#slideRight').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+450) {
        $(this).addClass("fadeIn");
      }
    });
  });