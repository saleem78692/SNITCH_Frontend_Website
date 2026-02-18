var data = document.getElementById("view-more");
data.addEventListener("click", function () {
    data.style.display = "none";
    document.getElementById("new-popular").style.display = "block";
    document.getElementById("new-popular").style.display = "block";
    document.getElementById("hide-more").style.display = "block";
});

var hide = document.getElementById("hide-more");
hide.addEventListener("click", function () {
    hide.style.display = "none";
    document.getElementById("new-popular").style.display = "none";
    document.getElementById("new-popular").style.display = "none";
    document.getElementById("view-more").style.display = "block";
});


const wrapper = document.getElementById('filterWrapper');

let speed = 1;

function autoScroll() {
    wrapper.scrollLeft += speed;

    if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.clientWidth) {
        wrapper.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();

// Sticky Secondary Header Logic
let lastScrollTop = 0;
const secondaryHeader = document.getElementById('secondaryHeader');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Optional: Add a subtle shadow to main header on scroll
    const mainHeader = document.querySelector('.navbar');
    if (scrollTop > 10) {
        mainHeader.classList.add('shadow');
    } else {
        mainHeader.classList.remove('shadow');
    }

    // Logic for Secondary Header
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling Down AND scrolled past 100px - Hide Secondary Header
        secondaryHeader.classList.add('nav-hidden');
    } else {
        // Scrolling Up - Show Secondary Header
        secondaryHeader.classList.remove('nav-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
