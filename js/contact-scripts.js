$(function() {
  $("form#content").submit(function(event) {
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();

    if (firstName && lastName && email && message) {
    } else {
      alert("Fill out every section!");
    };
    
    $("#form-response").show();
    $("#content").hide();

  event.preventDefault();

  });
});
