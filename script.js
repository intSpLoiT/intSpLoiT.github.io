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
        delay: 40
    });

    typewriter
        .typeString('root@intSpLoiT:~# Initializing system...')
        .pauseFor(1000)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Fetching resources...')
        .pauseFor(1000)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Scanning network...')
        .pauseFor(1000)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Exploit modules loaded...')
        .pauseFor(1000)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Checking vulnerabilities...')
        .pauseFor(1000)
        .deleteAll()
        .typeString('root@intSpLoiT:~# Welcome to intSpLoiT Terminal')
        .pauseFor(1000)
        .start();
}