   document.addEventListener("DOMContentLoaded", function () {
            const menu = document.getElementById("menu");
            const menuBtn = document.querySelector(".menu-btn");
            const closeBtn = document.querySelector(".close-btn");

            function toggleMenu() {
                menu.classList.toggle("active");
            }

            menuBtn.addEventListener("click", toggleMenu);
            closeBtn.addEventListener("click", toggleMenu);
        });


          AOS.init({
            duration: 1000, // duração do efeito
            once: true, // anima só na primeira vez que aparece
        });

        window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };