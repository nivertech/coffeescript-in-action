(function() {
  var Model;

  Model = (function() {

    function Model() {}

    Model.prototype.dirify = function(s) {
      return s.toLowerCase().replace(/[^a-zA-Z0-9-]/gi, '-');
    };

    return Model;

  })();

  exports.Model = Model;

}).call(this);