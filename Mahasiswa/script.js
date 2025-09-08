document.addEventListener("DOMContentLoaded", function () {
    fetch("data_mahasiswa.json")
    .then(response => response.text()) 
    .then(text => {
        const dataMahasiswa = JSON.parse(text); // Ubah teks JSON ke array
        
        const tableBody = document.getElementById("table-body");
        tableBody.innerHTML = ""; // Kosongkan tabel
        
        dataMahasiswa.forEach((mhs, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${mhs.nama}</td>
                <td>${mhs.nim}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error("Gagal memuat file:", error));
});
