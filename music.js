documnt.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("background-music");

    if (!audio) {
        // Jika elemen audio belum ada, buat elemen baru
        audio = document.createElement("audio");
        audio.id = "background-music";
        audio.autoplay = true;
        audio.loop = true;
        audio.muted = false; // Pastikan tidak mute
        audio.innerHTML = `<source src="/Backsound/A_Friend_allesgutebeginntmitdir.mp3" type="audio/mpeg">`;
        document.body.appendChild(audio);
    }

    // Cek posisi terakhir musik
    const savedTime = localStorage.getItem("audioTime");
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    audio.play().catch(error => console.log("Autoplay dicegah:", error));

    // Simpan posisi setiap 1 detik agar bisa dilanjutkan
    setInterval(() => {
        localStorage.setItem("audioTime", audio.currentTime);
    }, 1000);
});