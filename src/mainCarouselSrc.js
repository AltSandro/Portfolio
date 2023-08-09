(() => {
  $(document).ready(function () {
    $(".awSr div.awSlider .carousel").carousel({
      pause: "hover",
      interval: 5210 /*The interval of the transition*/,
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
})();

