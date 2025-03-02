document.addEventListener("DOMContentLoaded", function () {
    const matrix = document.getElementById("matrix");
    const consoleDiv = document.getElementById("console");
    const typingDiv = document.getElementById("typing");

    function startMatrix() {
        let chars = "01";
        let matrixText = "";
        for (let i = 0; i < 500; i++) {
            matrixText += chars[Math.floor(Math.random() * chars.length)];
        }
        matrix.innerHTML = `<span>${matrixText}</span>`;
    }
    let matrixInterval = setInterval(startMatrix, 100);

    // 5 saniye sonra Matrix'i kapat ve Terminal'i başlat
    setTimeout(() => {
        clearInterval(matrixInterval);
        matrix.style.display = "none";
        consoleDiv.style.display = "block";

        startTerminal();
    }, 5000);

    function startTerminal() {
        new Typewriter(typingDiv, {
            loop: false,
            delay: 50,
        })
            .typeString("root@intSpLoiT:~# System booting up...<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Checking security protocols...<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Loading intSpLoiT modules...<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Verifying user identity...<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Access granted!<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Welcome, intSpLoiT user.<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Fetching latest exploits...<br>")
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Connection to GitHub established!<br>")
            .pauseFor(500)
            .typeString(
                'root@intSpLoiT:~# GitHub: <a href="https://github.com/intSpLoiT" target="_blank">https://github.com/intSpLoiT</a><br>'
            )
            .pauseFor(500)
            .typeString(
                'root@intSpLoiT:~# Blog: <a href="#" onclick="alert(\'Hazırlanıyor...\')">Hazırlanıyor...</a><br>'
            )
            .pauseFor(500)
            .typeString("root@intSpLoiT:~# Terminal ready.<br>")
            .start();
    }
});