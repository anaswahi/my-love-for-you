// Typewriter effect
let text = "I love you so much ❤️";
let i = 0;

function typeWriter() {
    const demo = document.getElementById("demo");
    if (i < text.length) {
        demo.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 90);   // speed of typing
    }
}

// Show romantic modal instead of ugly alert
function showMessage() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Start everything when page loads
window.addEventListener('load', () => {
    typeWriter();
});