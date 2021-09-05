$(function () {
  //
  $('.navbar .nav-item .nav-link').click(function(e){
    e.preventDefault();
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
  });
  //
  $('.upperbar .info .user .fa-search').click(function(){
    $('.upperbar .box-search').fadeIn();
  });
  //
  $('.upperbar .box-search .exit').click(function(){
    $('.upperbar .box-search').fadeOut();
  });
  /*******************************************************/
  $('.upperbar .info .user .fa-user').click(function(){
    $('.upperbar .box-login').fadeIn();
  });
  //
  $('.upperbar .box-login .exit').click(function(){
    $('.upperbar .box-login').fadeOut();
  });
});