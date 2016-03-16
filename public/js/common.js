'use strict';

function pageScrollTop() {
    $('body,html').animate({
        scrollTop: 0
    }, 5000);
    return false;
}