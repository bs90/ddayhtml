(function(){
  $.fn.interval_fade = function(userOptions){
    var options = {
      interval: 500,
      opacity: 0.5
    }
    $.extend(options, userOptions);
    return $(this).each(function(){
      var container = $(this);
      var fadeIn = true;
      var timerId = setInterval(function(){
        if (fadeIn){
          container.fadeTo("fast", options.opacity);
          fadeIn = false;
        } else {
          container.fadeTo("fast", 1);
          fadeIn = true;
        }
      }, options.interval);
    });
  };
})(jQuery)