document.getElementById("open").addEventListener("click", () => {
  document.getElementById("navlink").style.right = "0";
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("navlink").style.right = "-30rem";
});
const boxes = gsap.utils.toArray(".box");
gsap.registerPlugin(ScrollTrigger);
boxes.forEach((box, i) => {
  const anim = gsap.fromTo(
    box,
    { autoAlpha: 0, y: 10 },
    { duration: 1, autoAlpha: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: "play none none none",
    once: false,
  });
});

// https://twitter.com/uixmat

function scrollNav() {
  $('.nav-item a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 300);
    return false;
  });
}
scrollNav();


lightGallery(document.getElementById('lightgallery'));