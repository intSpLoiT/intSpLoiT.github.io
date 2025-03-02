var Typer = {
  text: '',
  index: 0,
  speed: 2,
  file: '',
  
  init: function () {
    fetch(Typer.file)
      .then(response => response.text())
      .then(data => {
        Typer.text = data;
        Typer.text = Typer.text.trim();
      });

    setInterval(Typer.updLstChr, 500);
  },

  content: function () {
    return document.getElementById('console').innerHTML;
  },

  write: function (str) {
    document.getElementById('console').innerHTML += str;
  },

  addText: function () {
    if (Typer.text) {
      var cont = Typer.content();
      if (cont.endsWith('|')) {
        document.getElementById('console').innerHTML = cont.slice(0, -1);
      }

      Typer.index += Typer.speed;
      var text = Typer.text.substring(0, Typer.index).replace(/\n/g, '<br/>');
      document.getElementById('console').innerHTML = text;

      window.scrollBy(0, 50);
    }
  },

  updLstChr: function () {
    var cont = Typer.content();
    if (cont.endsWith('|')) {
      document.getElementById('console').innerHTML = cont.slice(0, -1);
    } else {
      Typer.write('|');
    }
  },
};

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
    document.getElementById("terminal").style.display = "block";
    Typer.init();
    setInterval(() => Typer.addText(), 50);
}, 5000);