$(document).ready(function() {

  activePraise();

});



function activePraise() {
  $('.praise__box').click(function(event) {
    // console.log(event.target.querySelector('.praise__box .praise__box--icon'));
    $(event.target).toggleClass('active-praise');
    $(event.target.querySelector('.praise__box .praise__box--icon')).toggleClass('active-praise__icon');
  })
}