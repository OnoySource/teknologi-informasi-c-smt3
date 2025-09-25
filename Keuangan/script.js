async function loadKas() {
  try {
    const response = await fetch("keuangan.json");
    const dataKas = await response.json();

    const tbody = document.querySelector("#kasTable tbody");

    dataKas.transaksi.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.tanggal}</td>
        <td>${item.keterangan}</td>
        <td>${item.uang_masuk.toLocaleString("id-ID")}</td>
        <td>${item.uang_keluar.toLocaleString("id-ID")}</td>
        <td>RP ${item.saldo.toLocaleString("id-ID")}</td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Gagal memuat data kas:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadKas);
