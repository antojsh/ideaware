$(document).ready(function() {
    var slider = $('#slider');
    var items_slider = slider.find('.slider-item');
    var numSecciones = items_slider.length;
    slider.wrapInner('<div class="slider-inner" />');
    var slider_inner = $('.slider-inner');
    slider_inner.css('width', 100 * numSecciones + '%');
    items_slider.css('width', 100 / numSecciones + '%');


    slider.prepend('<div id="contet-selects"></div>');
    var content_selects = $('#contet-selects');
    for (var i = 0; i < numSecciones; i++) {
        content_selects.append('<div class="selector_item selector' + i + '">');
    }

    $('.selector_item').click(function() {
        $('.selector' + $(this).index()).addClass('selector_selected').siblings().removeClass('selector_selected');
        changePosition()
    })
    var i = 0;
    $('.selector0').addClass('selector_selected').siblings().removeClass('selector_selected');

    function mover() {
        if (i == 0) {
            slider_inner.css('left', '0')
        } else if (i > 0) {
            slider_inner.css('left', '-' + 100 * i + '%')
        }
        $('.selector' + i).addClass('selector_selected').siblings().removeClass('selector_selected');
    }

    function changePosition() {
        if (i < numSecciones - 1) {
            i++;
        } else {
            i = 0;
        }
        mover()

    }

})
