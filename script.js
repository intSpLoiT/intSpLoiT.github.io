const terminal = document.getElementById("terminal");
const messages = [
    "Scanning network...",
    "Exploiting vulnerabilities...",
    "Bypassing security protocols...",
    "Connecting to intSpLoiT framework...",
    "Downloading payloads...",
    "intSpLoiT Framework initialized successfully!",
    "Developer: intSpLoiT (Kral)",
    "GitHub: <a href='https://github.com/intSpLoiT' target='_blank'>github.com/intSpLoiT</a>",
    "Blog: <a href='#' onclick='alert(\"Blog is under construction...\"); return false;'>Coming Soon...</a>",
    "root@intSpLoiT:~# "
];
let index = 0;

function typeMessage() {
    if (index < messages.length) {
        let line = messages[index];
        let charIndex = 0;
        
        function typeChar() {
            if (charIndex < line.length) {
                terminal.innerHTML += line[charIndex];
                charIndex++;
                setTimeout(typeChar, 50);
            } else {
                terminal.innerHTML += "<br>";
                index++;
                let delay = index === messages.length - 1 ? 200 : 500;
                setTimeout(typeMessage, delay);
            }
        }
        typeChar();
    } else {
        terminal.innerHTML += '<span class="cursor"></span>';
    }
}

// **Matrix Efekti**
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 10);
const drops = Array(columns).fill(0);
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * 10, drops[i] * 10);

        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
let matrixInterval = setInterval(drawMatrix, 50);

// **5 saniye sonra Matrix efekti kapanacak ve terminal açılacak**
setTimeout(() => {
    clearInterval(matrixInterval);
    document.querySelector(".matrix").remove();
    terminal.style.display = "block";
    typeMessage();
}, 5000);