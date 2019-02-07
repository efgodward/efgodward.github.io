jQuery(document).ready(function($) {
  $("#submitButton").click(function() {
    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());

    if (name === "") {
      alert("Please enter your name.");
      return false;
    } else if (email === "") {
      alert("Please enter your email.");
      return false;
    }
    //need to put something for both name and email missing but was getting syntax errors
    else if (name != "") {
      $("input")
        .val("")
        .removeAttr("name");
    } else if (email != "") {
      $("input")
        .val("")
        .removeAttr("email");
    }
  });
});

var resizeId;
$(window).resize(function() {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 500);
});

function doneResizing() {
  if ($(window).width() < 800) {
    alert("I am shrinking!");
    return false;
  }
}
