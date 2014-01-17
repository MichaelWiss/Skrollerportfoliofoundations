<script>
  skrollr.init({
    forceHeight: false
  });
  </script>

  <script>
  jQuery("#responsive_headline").fitText();
</script>


    <script>
      $(document).foundation();
       threshold: 0
    </script>

    <script>
  $(window).scroll(function() {
    $('#slideLeft').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+450) {
        $(this).addClass("fadeIn");
      }
    });
  });
</script>

<script>
  $(window).scroll(function() {
    $('#slideRight').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+450) {
        $(this).addClass("fadeIn");
      }
    });
  });
</script>
