// 초기에 한 번 섹션 활성화 상태 설정
updateActiveSection();

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", function () {
  updateActiveSection();

  var header = document.querySelector(".header");
  var scrolled = window.scrollY > 0;
  header.classList.toggle("scrolled", scrolled);
});

// 각 섹션의 활성화 상태 업데이트 함수
function updateActiveSection() {
  var headerHeight = document.querySelector(".header").offsetHeight;
  var sections = document.querySelectorAll(".c_content");
  var hLis = document.querySelectorAll(".h_li");

  var viewportCenter = window.innerHeight / 2;

  // 현재 활성화된 섹션 인덱스 찾기
  var activeSectionIndex = -1;
  sections.forEach(function (section, index) {
    var rect = section.getBoundingClientRect();
    var sectionTop = rect.top;
    var sectionBottom = rect.bottom;

    // 섹션의 중앙이 뷰포트 중앙에 있는지 확인
    if (sectionTop <= viewportCenter && sectionBottom >= viewportCenter) {
      activeSectionIndex = index;
    }
  });

  // 모든 .h_li 요소에서 on 클래스 제거
  hLis.forEach(function (hLi) {
    hLi.classList.remove("on");
  });

  // 활성화된 섹션에만 on 클래스 추가
  if (activeSectionIndex !== -1) {
    hLis[activeSectionIndex].classList.add("on");
  }
}

// 스크롤하여 섹션으로 이동하는 함수
function scrollToSection(sectionNumber) {
  var sectionId = "section" + sectionNumber;
  var headerHeight = document.querySelector(".header").offsetHeight;
  var section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}





/* 포토폴리오 */
$(".portSlide").slick({
  arrows: false,
  asNavFor: ".btnList",
});
$(".btnList").slick({
  // slidesToShow: 3,
  // slidesToScroll: 1,
  arrows: false,
  asNavFor: ".portSlide",
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
});
/* 포토폴리오 pc ver */
$(".portSlide_pc").slick({
  arrows: false,
  asNavFor: ".btnList_pc",
});
$(".btnList_pc").slick({
  arrows: false,
  asNavFor: ".portSlide_pc",
  focusOnSelect: true,
  vertical: true,
  slidesToShow: 4,
});
$(".btnList_pc .btn").click(function () {
  $(".hiddenBtns").removeClass("on");
  $(".hiddenBtns").stop().slideUp();
  $(this).find(".hiddenBtns").stop().slideDown();
});
