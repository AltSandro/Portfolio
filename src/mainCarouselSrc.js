(() => {
    "use strict"
  $(document).ready(function () {
    $(".awSr div.awSlider .carousel").carousel({
      pause: "hover",
      interval: 5210,
    });

    let startImage = $(".awSr div.awSlider .item.active .awSr > img").attr(
      "src"
    );
    $(".awSr div.awSlider").append('<img src="' + startImage + '">');

    $(".awSr div.awSlider .carousel").on("slid.bs.carousel", function () {
      let bscn = $(this).find(".item.active .awSr > img").attr("src");
      $(".awSr div.awSlider > img").attr("src", bscn);
    });
  });

  document.querySelectorAll('.awSr.left.carousel-control, .awSr.right.carousel-control').forEach(link => {
   
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
       
    });

    
    link.addEventListener('touchstart', function(event) {
       
        this.classList.add('hover-active'); 
    });

    link.addEventListener('touchend', function() {
        this.classList.remove('hover-active'); 
    });

    link.addEventListener('touchcancel', function() {
        this.classList.remove('hover-active'); 
    });

    
    link.addEventListener('contextmenu', function(event) {
        event.preventDefault(); 
    });
  });

})();
