Number.prototype.roundTo = function(nTo) {
    nTo = nTo || 10;
    return Math.round(this * (1 / nTo) ) * nTo;
}

$(function() {
    var slides = $('#slider ul').children().length;
    var slideWidth = $('#slider').width();
    var min = 0;
    var max = -((slides - 1) * slideWidth);

    $("#slider ul").width(slides*slideWidth).draggable({
        axis: 'x',
        drag: function (event, ui) {
            if (ui.position.left > min) ui.position.left = min;
            if (ui.position.left < max) ui.position.left = max;
        },
        stop: function( event, ui ) {
            $(this).animate({'left': (ui.position.left).roundTo(slideWidth)})
        }
    });
});
