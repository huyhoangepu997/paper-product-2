// $(document).ready(function(){
// 	$('[data-toggle="tooltip"]').tooltip();   
// });

// Slide

$(".service__silder").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 575,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  ]
});

// Click Quick View

var quickView = document.getElementById("quick-view");
var cart = document.getElementById("cart");
var body = document.getElementsByTagName("body");
quickView.addEventListener("click", quickViewFunction);

function quickViewFunction() {
  cart.style.display = "block";
  body[0].backgroundColor = "#333";
}