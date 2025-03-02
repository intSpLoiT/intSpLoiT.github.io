document.addEventListener("DOMContentLoaded", function () {
    // Matrix efekti 5 saniye sürecek
    setTimeout(() => {
        $("#matrix").fadeOut(1000, function() {
            $("#console").fadeIn(1000);
            startTerminalEffect();
        });
    }, 5000);
});

function startTerminalEffect() {
    let typewriter = new Typewriter(document.getElementById("typing"), {
        loop: false,
        delay: 80 // Yazı hızı yavaşlatıldı (daha gerçekçi olsun diye)
    });

    // Klavye sesi
    let typingSound = document.getElementById("typingSound");

    typewriter
        .callFunction(() => typingSound.play()) // Klavye sesi başlasın
        .typeString('root@intSpLoiT:~# Initializing system...')
        .pauseFor(1200)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Fetching resources...')
        .pauseFor(1200)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Scanning network...')
        .pauseFor(1200)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Exploit modules loaded...')
        .pauseFor(1200)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Checking vulnerabilities...')
        .pauseFor(1200)
        .deleteAll()
        .typeString('root@intSpLoiT:~# System Ready!')
        .pauseFor(1200)
        .callFunction(() => {
            typingSound.pause(); // Klavye sesi dursun
            typingSound.currentTime = 0;
        })
        .callFunction(() => {
            // Terminal efektinden sonra butonları göster
            $("#buttons").fadeIn(1000).css("opacity", "1");
        })
        .start();
}