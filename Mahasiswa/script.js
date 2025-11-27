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

function searching() {
    let input = document.getElementById("search").value.toLowerCase();
    let table = document.getElementById("table-body");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].getElementsByTagName("td");

        let nim = cols[0].textContent.toLowerCase();
        let nama = cols[1].textContent.toLowerCase(); 

        if (nim.indexOf(input) > -1 || nama.indexOf(input) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}