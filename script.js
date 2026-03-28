// jQuery("#js-drawer-button").on("click", function ( e ) {
//     e.preventDefault();
//     jQuery(this).toggleClass("is-checked");
//     jQuery("#js-drawer-content").slideToggle();
// });

// jQuery("#js-drawer-button").on("click", function (e) {
//     e.preventDefault();
//     jQuery(this).toggleClass("is-checked");
//     jQuery("#js-drawer-content").toggleClass("is-checked");
// });

const drawerIcon = document.querySelector("#js-drawer-button");
const drawerContent = document.querySelector("#js-drawer-content");

if (drawerIcon) {
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    drawerIcon.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
  });
}

jQuery("#js-top-button").on("click", function (e) {
  e.preventDefault();
  jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

// qa
jQuery(".js-qa-accordion").on("click", function (e) {
  e.preventDefault();
  $(this)
    .closest(".qa-card")
    .toggleClass("is-open")
    .find(".qa-card__body")
    .slideToggle();
});

// swiper
const swiper = new Swiper("#js-gallery-swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 80,
  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

// aboutModal
// jQuery(".js-modal-open").on("click", function (e) {
//   e.preventDefault();
//   jQuery("#js-about-modal")[0].showModal();
// });

// jQuery(".js-modal-close").on("click", function (e) {
//   e.preventDefault();
//   jQuery("#js-about-modal")[0].close();
// });
const modalOpen = document.querySelector(".js-modal-open");
const modalCloses = document.querySelectorAll(".js-modal-close");
const aboutModal = document.querySelector("#js-about-modal");

modalOpen.addEventListener("click", function (e) {
  e.preventDefault();
  if (aboutModal) {
    aboutModal.showModal();
  }
});

modalCloses.forEach(function (modalClose) {
  modalClose.addEventListener("click", function (e) {
    e.preventDefault();
    if (aboutModal) {
      aboutModal.close();
    }
  });
});

// smoothScroll
jQuery("a[href^='#']").on("click", function (e) {
  const speed = 700;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" === id ? "html" : id);
  const position = jQuery(target).offset().top;

  e.preventDefault();
  jQuery("html, body").animate({ scrollTop: position }, speed, "swing");
});

// spの時ドロワー閉じる
jQuery("#js-drawer-content a[href^='#']").on("click", function (e){
  e.preventDefault();
  jQuery("#js-drawer-button").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// トップへ戻るボタン
// jQuery(window).on("scroll", function (){
//   if(jQuery(this).scrollTop() > 100){
//     jQuery(".js-pagetop").addClass("is-show");
//   }else{
//     jQuery(".js-pagetop").removeClass("is-show");
//   }
// });

const pageTop = document.querySelector(".js-pagetop");
window.addEventListener("scroll", function(){
  if(100 < this.scrollY){
    pageTop.classList.add("is-show");
  } else{
    pageTop.classList.remove("is-show");
  }
});
