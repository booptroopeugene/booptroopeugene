$(document).ready(function () {
  $('.fc-description').linkify({
    target: "_blank"
  });

  $('.fc-list-item').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var modal = $(this).find('.fc-modal');
    modal.fadeIn();
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
    if ($(e.target).hasClass('fc-modal')) {
      modal.fadeOut();
      $('html, body').css({
        overflow: 'auto',
        height: 'auto'
      });
    }
  });

  $('.fc-modal a').click(function (e) {
    e.stopPropagation();
    window.open(e.target.href);
  });

  $('.fc-modal-close').click(function (e) {
    e.stopPropagation();
    $('.fc-modal').fadeOut();
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  });

});
