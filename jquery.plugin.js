
/**
 * @file
 * jQuery plugin boilerplate
 * 
 * Created by: Topsitemakers
 * http://www.topsitemakers.com/
 */
;(function ($, window, document, undefined) {

  var pluginName = 'boilerplate';

  // Default values
  var defaults = {
    property: "value"
  };

  /**
   * Plugin constructor
   */
  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  /**
   * Plugin funtions and events
   */
  Plugin.prototype = {
    
    /**
     * Plugin initialization
     */
    init: function() {
      
      // Sample - change color of all matched elements
      $(this.element).css("color", "red");

      // Sample - log our default value
      console.log('Default value: ' + this.options.property);

    },

    /**
     * Sample function
     */
    sample: function(el, options) {
      
      // 

    }

  }

  /**
   * Plugin wrapper
   */
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
      }
    });
  };

}(jQuery, window, document));
