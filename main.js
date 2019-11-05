"use strict";

(function() {

  function buttonClicked() {
    console.log($(this));
    alert($(this).data("cle-produit"));
  }

  function init() {
    $("button").each(function() {
      $(this).click(buttonClicked);
    });
  }

  $(document).ready(init);

})();
