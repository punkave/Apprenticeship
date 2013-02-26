$(document).ready(function(){
  $('.footer-accordion-content').hide();
  $('.footer-accordion-title').click(function(){
    $('.footer-accordion-content').slideToggle('blind');
    $(this).toggleClass('open');
  });
});
