//resize window

// window.style.height= window.innerHeight+"px";

// window.addEventListener('resize',function(){
//     window.style.height= window.innerHeight+"px";
// });



//header

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var topHeader = document.querySelector('.top-header');
    header.classList.toggle('header-visibility', window.scrollY > 0);
    topHeader.classList.toggle('top-header-visibility', window.scrollY > 0);
});

// header's drop down meno
$(function () {
    $('.nav-links li').hover(function () {
      $('>ul.ul-child:not(:animated)', this).slideDown(400);
    }, function () {
      $('>ul.ul-child', this).slideUp(300);
    }
    )
});

//Cyberspace(fzay majazi)
function toggle() {
    $('.ico01').click(function () {
      $('.Cyberspace').toggleClass('active');
    })
}
toggle();






















