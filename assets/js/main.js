window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  var scrolled = window.scrollY > 0;
  
  header.classList.toggle('scrolled', scrolled);
    // 각 섹션에 도달했을 때 h_li에 on 클래스 추가
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