window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  var scrolled = window.scrollY > 0;
  
  header.classList.toggle('scrolled', scrolled);
    document.querySelectorAll('.c_content').forEach(function (section, index) {
      var hLi = document.querySelectorAll('.h_li')[index];
      var headerHeight = document.querySelector('.header').offsetHeight;

      if (isElementInViewport(section, headerHeight)) {
          hLi.classList.add('on');
      } else {
          hLi.classList.remove('on');
      }
  });
});

function isElementInViewport(element, headerHeight) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - headerHeight
  );
}


function scrollToSection(sectionNumber) {
  var sectionId = "section" + sectionNumber;
  var headerHeight = document.querySelector('.header').offsetHeight;
  var section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({ 
      top:section.offsetTop - headerHeight,
      behavior: 'smooth' 
    });
  }
}

/* 포토폴리오 */
$('.portSlide').slick({
  arrows: false,
  asNavFor: '.btnList',
});
$('.btnList').slick({
  // slidesToShow: 3,
  // slidesToScroll: 1,
  arrows : false,
  asNavFor: '.portSlide',
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true
});
/* 포토폴리오 pc ver */
$('.portSlide_pc').slick({
  arrows: false,
  asNavFor: '.btnList_pc',
});
$('.btnList_pc').slick({
  arrows : false,
  asNavFor: '.portSlide_pc',
  focusOnSelect: true,
  vertical : true,
  slidesToShow : 4
});
$('.btnList_pc .btn').click(function(){
  $('.hiddenBtns').removeClass('on')
  $('.hiddenBtns').stop().slideUp();
  $(this).find('.hiddenBtns').stop().slideDown();
})