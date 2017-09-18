(function($) {
    $.fn.accordion = function(options) {
        var settings = $.extend({
            activeClass: 'active',
            accordionTrigger: '.accordion__title',
            accordionContent: '.accordion__content'
        }, options);

        return this.each(function() {
            var $accordionTitle = $(settings.accordionTrigger);

            if ($accordionTitle.length) {
                $accordionTitle.on('click', function() {
                    var $thisItem = $(this);

                    if ($thisItem.parent().hasClass(settings.activeClass)) {
                        $thisItem.parent().removeClass(settings.activeClass);
                        $thisItem.next(settings.accordionContent).slideUp();
                    } else {
                        $thisItem.parent().addClass(settings.activeClass);
                        $thisItem.next(settings.accordionContent).slideDown();
                    }
                })
            } else {
                console.error('Please check the accordion title in the plug-in');
            }
        })
    };
})(jQuery);

$(function() {
    $('.accordion__container').accordion({
        activeClass: '_is_active',
        accordionTrigger: '.accordion__title',
        accordionContent: '.accordion__content'
    });
});