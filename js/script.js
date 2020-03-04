$(document).ready(function() {

  changeIntro();
  pinFilters();
});

function changeIntro() {
  $('.filter-btn').hover(function() {
    $('.filters').toggleClass('display-and-grow');
    $('.filters__filter').toggleClass('display-content');
    $('.filters__heading--title').toggleClass('display-content');
  }, function() {
    $('.filters').toggleClass('display-and-grow');
    $('.filters__filter').toggleClass('display-content');
    $('.filters__heading--title').toggleClass('display-content');
  });
}

function pinFilters() {
  $('.filter-btn').click(function() {
    $('.filters').toggleClass('grow-and-pin');
    $('.filters__filter').toggleClass('pin-content');
    $('.filters__heading--title').toggleClass('pin-content');
    $('.filter-btn').toggleClass('pin-button');
    $('.main-section').toggleClass('pin-main-section');
    $('.filter-btn__icon--svg').toggleClass('display-none');

  })
}