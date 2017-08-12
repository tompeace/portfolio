(function() {
  var Piece = function(){
    this.fade();
  };

  Piece.prototype = {
    fade: function(){
      var target = document.querySelector('.fade-in');
      target.classList.add('js-active');
    }
  };

  window.onload = new Piece();
})();
