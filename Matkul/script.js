document.addEventListener("DOMContentLoaded", function () {
    fetch("data_matkul.json")
    .then(response => response.text()) 
    .then(text => {
        const dataMatkul = JSON.parse(text); // Ubah teks JSON ke array
        
        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = ""; // Kosongkan tabel
        
        dataMatkul.forEach((data, index) => {
            const row = `<tr>

                <td>${data.hari}</td>
                <td>${data.pukul}</td>
                <td>${data.kode}</td>
                <td>${data.mata_kuliah}</td>
                <td>${data.teori}</td>
                <td>${data.praktik}</td>
                <td>${data.jumlah_sks}</td>
                <td>${data.dosen}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error("Gagal memuat file:", error));
});
