// Envelope modal functions
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    envelope.classList.add('open');
    setTimeout(() => {
        modal.classList.add('active');
        overlay.classList.add('active');
    }, 900); // Delay to match envelope animation
}
function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}
// Main functionality
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("input[type='text']");
    const buttons = document.querySelectorAll(".keypad button");
    const correctPin = "012369"; // Correct PIN to match
    buttons.forEach(button => {
        const value = button.textContent;
        if (value !== "*") {
            button.addEventListener("click", () => {
                if (value !== "#") {
                    inputField.value += value;
                }
                if (inputField.value.trim() === correctPin) {
                    toastr.success("Yown! 😭💗");
                    setTimeout(() => {
                        window.location.href = "one.html";
                    }, 1500);
                } else if (inputField.value.length >= correctPin.length) {
                    toastr.error("Try again!");
                    inputField.value = "";
                }
            });
        }
        if (value === "*") {
            button.addEventListener("click", () => {
                inputField.value = "";
            });
        }
    });
    // Timer
    const startDate = new Date("1996-12-03T00:00:00");
    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById("timer").textContent =
            `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    setInterval(updateTimer, 1000);
    updateTimer();
});