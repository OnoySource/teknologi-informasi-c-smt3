document.addEventListener("DOMContentLoaded", function () {
    fetch("daa_kelompok_basisdata.json")
        .then(response => response.json()) // Parsing JSON
        .then(dataKelompok => {
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = ""; // Kosongkan tabel sebelum diisi data

            Object.keys(dataKelompok.kelompok).forEach(kelompok => {
                const anggota = dataKelompok.kelompok[kelompok].join(", "); // Gabungkan anggota dengan koma
                
                const row = `<tr>
                    <td>${kelompok}</td>
                    <td>${anggota}</td>
                    <td>?</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Gagal memuat file:", error));
});