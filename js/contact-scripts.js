$(function() {
  $("form#content").submit(function(event) {


    var name = $("input#first-name").val();
    $(".first-name").append(name);
    $("#form-response").show();
    $("#content").hide();

  event.preventDefault();

  });
});
