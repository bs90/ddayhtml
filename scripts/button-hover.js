(function(){
  $.fn.button_hover = function(userOptions){
    var options = {
      opacity: 0.8
    }
    $.extend(options, userOptions);
    return $(this).each(function(){
      var container = $(this);
      container.hover(function(){
        container.fadeTo("fast", options.opacity);
      }, function(){
        container.fadeTo("fast", 1);
      });
    });
  };
})(jQuery)