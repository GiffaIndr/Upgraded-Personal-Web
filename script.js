function myFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");
 }
 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = () => {
    menu.classList.toggle('bx bx-menu');
    navlist.classList.toggle('active');
 };
 
 window.onscroll = () => {
    menu.classList.remove('bx bx-menu');
    navlist.classList.remove('active');
 }
 const sr = ScrollReveal({
    distance:'40px',
    duration: 2600,
    reset: true
 })
 sr.reveal('.home-text',{delay:300,origin:'left'})
 sr.reveal('.about,.portfolio,.project,.contact,.social-media',{delay:100, origin:'bottom'})