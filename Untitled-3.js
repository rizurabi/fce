// Loading screen fade-out
window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 600);
    }, 1200);
};

// Smooth scroll buttons
document.getElementById("learn-more").onclick = () => {
    document.getElementById("info-section").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("contact-us").onclick = () => {
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
};

// Fun chat button action
document.getElementById("chat-button").onclick = () => {
    alert("Chat support coming soon! 😊");
};

// SCROLL FADE-IN EFFECT FOR SERVICE CARDS
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});