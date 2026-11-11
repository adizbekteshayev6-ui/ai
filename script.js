
/* =====================================
   NEUROVERSE — CS 1.6 GAME SYSTEM
===================================== */

// CS 1.6 o'yinini ishga tushirish
function playCS16() {
    const steamProtocol = "steam://run/10";

    try {
        window.location.href = steamProtocol;
    } catch (error) {
        alert("CS 1.6 ni ishga tushirish uchun Steam dasturini oching.");
    }
}

// Yuklab olish sahifasiga o'tish
function downloadCS16() {
    window.open(
        "https://store.steampowered.com/app/10/CounterStrike/",
        "_blank"
    );
}

// Tugmalarni ulash
document.addEventListener("DOMContentLoaded", function () {

    const playButton = document.getElementById("playCS16");
    const downloadButton = document.getElementById("downloadCS16");

    if (playButton) {
        playButton.addEventListener("click", playCS16);
    }

    if (downloadButton) {
        downloadButton.addEventListener("click", downloadCS16);
    }

});

// Global foydalanish
window.playCS16 = playCS16;
window.downloadCS16 = downloadCS16;
