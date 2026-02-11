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
