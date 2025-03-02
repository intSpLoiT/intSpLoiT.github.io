document.addEventListener("DOMContentLoaded", function () {
    const text = [
        "root@intSpLoiT:~# Initializing system...",
        "root@intSpLoiT:~# Connecting to secure servers...",
        "root@intSpLoiT:~# Verifying integrity...",
        "root@intSpLoiT:~# Fetching latest repositories...",
        "root@intSpLoiT:~# Compiling kernel modules...",
        "root@intSpLoiT:~# Loading AI modules...",
        "root@intSpLoiT:~# Enabling encryption protocols...",
        "root@intSpLoiT:~# Welcome to intSpLoiT Framework!",
        "root@intSpLoiT:~# Access granted!"
    ];

    let i = 0;
    let j = 0;
    const typingElement = document.getElementById("typing");
    const cursor = document.getElementById("cursor");
    const buttons = document.getElementById("buttons");

    function playTypingSound() {
        const audio = new Audio("https://www.myinstants.com/media/sounds/keyboard.mp3");
        audio.play();
    }

    function type() {
        if (i < text.length) {
            if (j < text[i].length) {
                typingElement.innerHTML += text[i][j];
                j++;
                playTypingSound();
                setTimeout(type, Math.random() * 80 + 20); // Rastgele hız
            } else {
                typingElement.innerHTML += "\n";
                j = 0;
                i++;
                setTimeout(type, 500);
            }
        } else {
            setTimeout(() => {
                cursor.style.display = "none";
                buttons.style.display = "block";
            }, 1000);
        }
    }

    type();
});