$(document).ready(function() {

  activePraise();
  openAccountMenu('.account-menu');
  hideOnClickOutside('.account-menu');

});

function activePraise() {
  $('.praise__box').click(function(event) {
    // console.log(event.target.querySelector('.praise__box .praise__box--icon'));
    $(event.target).toggleClass('active-praise');
    $(event.target.querySelector('.praise__box .praise__box--icon')).toggleClass('active-praise__icon');
  })
}

function openAccountMenu(selector) {
  var userNav = $('.header__user-nav');



  $(userNav).click(function(event) {

    $(selector).toggleClass('display-none');
  })


}

function hideOnClickOutside(selector) {

  const outsideClickListener = (event) => {
    $target = $(event.target);
    if (!$target.closest(selector).length && $(selector).is(':visible')) {
      $(selector).toggleClass('display-none');
      removeClickListener();
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}