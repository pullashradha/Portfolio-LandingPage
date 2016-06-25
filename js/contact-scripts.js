//User Interface Logic
$(document).ready(function(event) {
  $("form#content").submit(function(event) {
    event.preventDefault();
    var name = $("input#first-name").val();
    $(".first-name").append(name);
    $("#form-response").show();
    $("#content").hide();
  });
});
