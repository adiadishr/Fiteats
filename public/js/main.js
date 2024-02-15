// Smooth Scroll with even slower speed
document.getElementById("topbutton").addEventListener("click", function (event) {
    event.preventDefault();
    const navbar = document.getElementById("navbar");

    // Delay scrolling by 100 milliseconds (adjust as needed)
    setTimeout(function () {
        navbar.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); // Adjust the options here
    }, 100); // Adjust the delay time here
});