$(function() {
  $(window).scroll(function() {
    var scrollY = $(this).scrollTop();
    var sectionHeight = parseInt( $('section').css('height') );

    if (scrollY > sectionHeight) {
      console.log($('main section').eq(0).css('background') )
    }
  });
});
