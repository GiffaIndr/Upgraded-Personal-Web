function myFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");
 }
 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    navlist.classList.toggle('active');
 };
 
 window.onscroll = () => {
    menu.classList.remove('bx-menu');
    navlist.classList.remove('active');
 }
 const sr = ScrollReveal({
    distance:'40px',
    duration: 2600,
    reset: true
 })
 sr.reveal('.home-text',{delay:300,origin:'left'})
 sr.reveal('.about,.portfolio,.project,.contact,.social-media',{delay:100, origin:'bottom'})

 var cursor = document.querySelector(".cursor");
 var cursor2 = document.querySelector(".cursor2");
 document.addEventListener("mousemove", function(e){
   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
   + "px; top: " + e.clientY + "px;";
 });
