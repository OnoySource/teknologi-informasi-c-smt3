document.addEventListener("DOMContentLoaded", function () {
    fetch("data_kelompok_psd.json")
        .then(response => response.json()) // parsing JSON
        .then(dataKelompok => {
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = ""; // kosongkan tabel sebelum isi data

            Object.keys(dataKelompok.kelompok).forEach(kelompok => {
                const data = dataKelompok.kelompok[kelompok];
                const anggota = data.anggota.join(", ");
                const makalah = data.makalah || "(belum ada)";

                const row = `
                    <tr>
                        <td>${kelompok}</td>
                        <td>${anggota}></td>
                        
                        <td>${makalah}</td>
                    </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Gagal memuat file:", error));
});
