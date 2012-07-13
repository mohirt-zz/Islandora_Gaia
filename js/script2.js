(function ($) {

Drupal.behaviors.fusionEqualheights = {
  attach: function (context, settings) {
    if (jQuery().equalHeights) {
      $(".equalize").equalHeights();
    }
  }
};

})(jQuery);