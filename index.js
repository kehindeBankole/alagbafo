document.getElementById("open").addEventListener("click", () => {
 document.getElementById("navlink").style.right = "0";
//gsap.to(".navlist", {right: '0', duration: 0.2, ease: 'elastic'});
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("navlink").style.right = "-30rem";
});
