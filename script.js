            document.addEventListener("DOMContentLoaded", () => {
                const audio = document.getElementById("background-music");

                // Cek apakah ada posisi terakhir yang tersimpan
                const savedTime = localStorage.getItem("audioTime");
                if (savedTime) {
                    audio.currentTime = parseFloat(savedTime); // Set waktu terakhir
                }

                audio.muted = false; // Pastikan suara bisa keluar
                audio
                    .play()
                    .catch(error => console.log("Autoplay dicegah:", error));

                // Simpan posisi setiap 1 detik agar bisa dilanjutkan
                setInterval(() => {
                    localStorage.setItem("audioTime", audio.currentTime);
                }, 1000);
            });

    function toggleContent() {
      const content = document.getElementById("container");
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // tampilkan
      } else {
        content.style.display = "none"; // sembunyikan
      }
    }
    
    function toggleSidebar() {
      const sideshow = document.getElementById("sidebar");
      const burger = document.getElementById("hamburger");
      sideshow.classList.toggle("active"); // toggle class 
      burger.classList.toggle("active"); 
  }

function dontClick(el) {
  // hentikan interval lama kalau ada
  if (document.flashInterval) clearInterval(document.flashInterval);

  const flash = document.getElementById("flash");

  // ganti warna background berkedip
  document.flashInterval = setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    flash.style.backgroundColor = `rgb(${r},${g},${b})`;
  }, 10);

  // daftar animasi yang ada
  const effects = ["chaos-spin", "chaos-wiggle", "chaos-bounce", "chaos-pulse"];

  // pilih semua elemen di body kecuali flash & video
  const elements = document.querySelectorAll("body *:not(#flash):not(#autoVideo)");

  elements.forEach(el => {
    // hapus class chaos lama dulu
    el.classList.remove(...effects);

    // ambil animasi random
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    el.classList.add(randomEffect);
  });

  // kalau video belum ada, tambahkan
  if (!document.getElementById("autoVideo")) {
    const video = document.createElement("video");
    video.id = "autoVideo";
    video.src = "buried_alive.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    document.body.appendChild(video);

    // langsung unmute setelah klik
    video.muted = false;
    video.play();
  } else {
    const video = document.getElementById("autoVideo");
    video.muted = false;
    video.play();
  }
}

