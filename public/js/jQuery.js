$(function () {
    var intervalID = setInterval(function () {
        $('#images img').first()
            .hide()
            .next()
            .show()
            .end()
            .appendTo('#images');
    }, 1200);

    $('button').on('click', function () {
        clearInterval(intervalID);
    }); // stop function

    
}); // end function