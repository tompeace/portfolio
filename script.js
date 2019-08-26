
var Piece = function() {
    this.fadeIn();
};

Piece.prototype = {
    fadeIn: function() {
        var target = document.querySelector('.fade-in');
        target.classList.add('js-active');
    }
};

window.onload = new Piece();

