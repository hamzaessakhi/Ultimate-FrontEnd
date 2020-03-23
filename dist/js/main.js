$(function(){
    'use strict';
    $('.toggle-sidebar').on('click',function(){
        $('.content-area,.sidebar').toggleClass('no-sidebar');
    });
//Toggle submenu
$('.toggle-submenu').on('click',function(){
        $(this).find('.fa-angle-right')
        .toggleClass('down');
        $(this)
        .next('.child-links')
        .slideToggle();
        
    });
//open /close full screen
    $(".toggle-fullscreen").on("click",function(){
        $(this).toggleClass("full-screen") ;
        if($(this).hasClass("full-screen")) { //page is Now Full Screen
            openFullscreen();
        } else { //Page is nto fullscreen
            closeFullscreen();
        }
    });
    
});

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
}
}

/* Close fullscreen */
function closeFullscreen() {
if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
}
}