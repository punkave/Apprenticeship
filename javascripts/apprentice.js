$(document).ready(function(){
  $('.footer-accordion-content').hide();
  $('.footer-accordion-title').click(function(){
    $('.footer-accordion-content').slideToggle('blind');
    $(this).toggleClass('open');
  });
  var breakpoint = $("<div class='top-bar-js-breakpoint'/>").appendTo("body");
  function apprenticeshipHyphen() {
    if ($(window).width() < breakpoint.width()) {
      $('.apprentitle').text('Appren- ticeship');
    } else {
      $('.apprentitle').text('Apprenticeship');
    }
  }
  apprenticeshipHyphen();
  $(window).on('resize', apprenticeshipHyphen);
});
