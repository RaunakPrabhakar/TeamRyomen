/ Show the button when scrolling down
window.onscroll = function() {
    const button = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; 
    } else {
        button.style.display = "none"; 
    }
};
document.getElementById("scrollTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});