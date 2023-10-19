function navigo (){
  const header = document.querySelector('header');
  const visual = document.querySelector('.visual');
  const visualHeight = visual.clientHeight;
  document.addEventListener('scroll', onScroll, { passive: true });
  function onScroll () {
    const scrollposition = pageYOffset;
    const nav = document.querySelector('nav');
    if (visualHeight <= scrollposition){
      header.classList.add('fix');
    }
    else {
      header.classList.remove('fix');
    }
  } 
}
navigo()

const mobileMenu = document.querySelector('.mobile-btn');

mobileMenu.onclick = () => { mobileMenu.classList.toggle('on'); };

// 모바일2차메뉴, 아코디언구조
let tabButtons = document.querySelectorAll('.mobile-depth1 > span');
for (const eachButton of [...tabButtons]) {
  eachButton.addEventListener('click', function () {
    collapse(this);
  });
};
// 아코디언 함수
function collapse(element) {
  let alreadyOn = document.querySelector(".mobile-depth1 > span.on");
  // 기존에 활성화된 버튼 변수선언
  let alreadyOnThis = alreadyOn !== element;
  // 기존에 활성화된 버튼이 내가 누른 버튼이 아닌 경우 변수선언

  if (alreadyOnThis) {
    // 닫혀있는 버튼을 누른경우, 모든 대상에서 on제거 후
    for (const eachButton of [...tabButtons]) {
      eachButton.classList.remove("on");
      eachButton.nextElementSibling.classList.remove("on");
    }
    // 누른대상과 그형제에 on 활성화
    element.classList.add("on");
    element.nextElementSibling.classList.add("on");
  } else {
    // 열어놓은 버튼을 또 누른경우, 누른대상과 그형제에 on 제거
    element.classList.remove("on");
    element.nextElementSibling.classList.remove("on");
  }
};

// swiper js
var swiper1 = new Swiper(".visual-swiper", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".visual-swiper.swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".visual-swiper.swiper-button-next",
    prevEl: ".visual-swiper.swiper-button-prev",
  },
});


var swiper2 = new Swiper(".notice-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".notice-swiper.swiper-button-next",
    prevEl: ".notice-swiper.swiper-button-prev",
  },
  pagination: {
    el: ".notice-swiper.swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});