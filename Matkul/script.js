document.addEventListener("DOMContentLoaded", function () {
    fetch("data_matkul.json")
    .then(response => response.json()) // langsung JSON aja bre
    .then(dataMatkul => {
        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";

        let lastHari = "";

        dataMatkul.forEach((data) => {
            // kalau hari berubah, kasih baris kosong
            if (lastHari && lastHari !== data.hari) {
                tableBody.innerHTML += `
                  <tr class="spacer"><td colspan="8"></td></tr>
                `;
            }

            const row = `
              <tr>
                <td>${data.hari}</td>
                <td>${data.pukul}</td>
                <td>${data.kode}</td>
                <td>${data.mata_kuliah}</td>
                <td>${data.teori}</td>
                <td>${data.praktik}</td>
                <td>${data.jumlah_sks}</td>
                <td>${data.dosen}</td>
                <td>${data.ruang}</td>
              </tr>
            `;
            tableBody.innerHTML += row;
            lastHari = data.hari; // update hari terakhir
        });
    })
    .catch(error => console.error("Gagal memuat file:", error));
});
