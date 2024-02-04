var scrollHeader = document.querySelector(".js-scroll");

var updateHeader = function() {
  offsetTop = window.pageYOffset;
  scrollHeader.style.opacity = Math.max(0, (100-offsetTop*0.75)/100);
  scrollHeader.style.transform = "translate3d(0," + -(Math.max(0, (offsetTop*0.3))) + "px," + -(Math.max(0, (offsetTop*0.02))) + "px)";
}

window.addEventListener("scroll", updateHeader);

function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.elem').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fade-in');
      }
    });
  }
  // if in viewport, show the animation
  checkElementLocation();
  