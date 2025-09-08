document.addEventListener("DOMContentLoaded", function () {
    fetch("data_piket.json")
        .then(response => response.text())
        .then(text => {
            const dataPiket = JSON.parse(text);

            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = ""; // Kosongkan tabel

            // Menentukan jumlah baris berdasarkan jumlah anggota tim
            const jumlahAnggota = dataPiket.tim_1.length;

            for (let i = 0; i < jumlahAnggota; i++) {
                const row = `<tr>
                    <td>${dataPiket.tim_1[i]}</td>
                    <td>${dataPiket.tim_2[i]}</td>
                    <td>${dataPiket.tim_3[i]}</td>
                    <td>${dataPiket.tim_4[i]}</td>
                </tr>`;
                tableBody.innerHTML += row;
            }
        })
        .catch(error => console.error("Gagal memuat file:", error));
});