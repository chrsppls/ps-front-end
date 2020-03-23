$(document).ready(function() {

  $(".row-hover").click(function() {
    console.log("Click happened");
    window.location = $(this).data("href");
  });
})