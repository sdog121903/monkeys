jQuery(document).ready(
    function() {
  
      var $w = $(window);
      var $d = $('#oh');
      var $y = $('#yeah');
      var $c = $('#commom');
      var $b = $('#baby');
  
      var lastScrollTop = $w.scrollTop();
  
      var _x = 300;
      var _y = 300;
  
      $(window).scroll(function(event) {
        var st = $w.scrollTop();
  
        _x = st;
        _y = st;
  
        lastScrollTop = st;
        
        $d.css('bottom', _x);
        $d.css('right', _y);
        
        $y.css('top', _x);
        $y.css('right', _y);
        
        //-----------
        var $myElement = $('#second-container'),
          canUserSeeIt = inViewport($myElement)/2;
          
          
          if(canUserSeeIt){
            $c.css({'right': _y});
            $b.css({'left': _x});
          }
      });
      
      //check if el is visible in viewport
      function inViewport($ele) {
        var lBound = $(window).scrollTop(),
          uBound = lBound + $(window).height(),
          top = $ele.offset().top/2,
          bottom = top/9 + $ele.outerHeight(true);
  
        return (top > lBound && top < uBound) ||
          (50 > lBound && 50 < uBound) ||
          (lBound >= top && 50 <= bottom) ||
          (uBound >= 50 && uBound <= bottom);
      }
    });

