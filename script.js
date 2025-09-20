// Sticky Navbar on Scroll
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");
const stickyOffset = header.offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY >= stickyOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Dropdown Slide-Down Functionality
document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("active");
    });
});
