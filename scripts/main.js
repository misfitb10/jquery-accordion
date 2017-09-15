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
                    if ( $(this).parent().hasClass(settings.activeClass) ) {
                        $(this).parent().removeClass(settings.activeClass);
                        $(this).next(settings.accordionContent).slideUp();
                    } else {
                        $(this).parent().addClass(settings.activeClass);
                        $(this).next(settings.accordionContent).slideDown();
                    }
                })
            } else {
                console.error('Please check the accordion title in the plug-in');
            }
        })
    };
}(jQuery));

$(document).ready(function() {
    $('.accordion__container').accordion({
        activeClass: '_is_active',
        accordionTrigger: '.accordion__title',
        accordionContent: '.accordion__content'
    });
});


