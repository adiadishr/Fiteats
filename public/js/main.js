document.getElementById("topbutton").addEventListener("click", function(event) {
    event.preventDefault();
    const navbar = document.getElementById("navbar");
    navbar.scrollIntoView({ behavior: "smooth" });
});