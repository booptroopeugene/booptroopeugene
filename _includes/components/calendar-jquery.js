$(document).ready(function () {

  $('.fc-description').linkify({
    target: "_blank"
  });

  $('.fc-list-item').click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    var day = $(this).prevAll('.fc-list-heading:first').find('.fc-list-heading-main').html();
    var date = $(this).prevAll('.fc-list-heading:first').find('.fc-list-heading-alt').html();
    var time = $(this).find('.fc-list-item-time').html();
    $(this).find('.fc-time').html(`${day}, ${date}, ${time}`);

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
