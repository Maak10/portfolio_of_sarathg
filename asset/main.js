




    document.addEventListener('DOMContentLoaded', function () {
    var whatsappButton = document.getElementById('whatsapp-button');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Show/hide WhatsApp button based on scroll direction
        if (scrollTop > lastScrollTop) {
            whatsappButton.classList.remove('hidden');
        } else {
            whatsappButton.classList.add('hidden');
        }

        lastScrollTop = scrollTop;
    });
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
