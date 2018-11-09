Drupal.locale = { 'strings': {"":{"Not published":"\u041d\u0435 \u0435 \u043e\u0431\u0458\u0430\u0432\u0435\u043d\u043e","Edit":"\u0423\u0440\u0435\u0434\u0443\u0432\u0430\u045a\u0435","Select all rows in this table":"\u0418\u0437\u0431\u0435\u0440\u0438 \u0433\u0438 \u0441\u0438\u0442\u0435 \u0440\u0435\u0434\u043e\u0432\u0438 \u0432\u043e \u0442\u0430\u0431\u0435\u043b\u0430\u0442\u0430","Deselect all rows in this table":"\u041e\u0434\u0438\u0437\u0431\u0435\u0440\u0438 \u0433\u0438 \u0441\u0438\u0442\u0435 \u0440\u0435\u0434\u043e\u0432\u0438 \u0432\u043e \u0442\u0430\u0431\u0435\u043b\u0430\u0442\u0430"}} };;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Automatically display the guidelines of the selected text format.
 */
Drupal.behaviors.filterGuidelines = {
  attach: function (context) {
    $('.filter-guidelines', context).once('filter-guidelines')
      .find(':header').hide()
      .closest('.filter-wrapper').find('select.filter-list')
      .bind('change', function () {
        $(this).closest('.filter-wrapper')
          .find('.filter-guidelines-item').hide()
          .siblings('.filter-guidelines-' + this.value).show();
      })
      .change();
  }
};

})(jQuery);
;
