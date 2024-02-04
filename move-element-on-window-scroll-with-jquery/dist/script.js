jQuery(document).ready(
  function() {

    var $w = $(window);
    var $d = $('#oh');
    var $y = $('#yeah');
    var $c = $('#commom');
    var $b = $('#baby');

    var lastScrollTop = $w.scrollTop();

    var _x = 0;
    var _y = 0;

    $(window).scroll(function(event) {
      var st = $w.scrollTop();

      _x = st;
      _y = st;

      lastScrollTop = st;
      
      $d.css('bottom', _x);
      $d.css('right', _y);
      
      $y.css('top', _x);
      $y.css('left', _y);
      
      //-----------
      var $myElement = $('#second-container'),
        canUserSeeIt = inViewport($myElement);
        
        
        if(canUserSeeIt){
          $c.css({'left': _y});
          $b.css({'right': _x});
        }
    });
    
    //check if el is visible in viewport
    function inViewport($ele) {
      var lBound = $(window).scrollTop(),
        uBound = lBound + $(window).height(),
        top = $ele.offset().top,
        bottom = top+ $ele.outerHeight(true);

      return (top > lBound && top < uBound) ||
        (bottom > lBound && bottom < uBound) ||
        (lBound >= top && lBound <= bottom) ||
        (uBound >= top && uBound <= bottom);
    }
  });