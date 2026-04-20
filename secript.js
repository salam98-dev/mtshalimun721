function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('CBT E-Learning MTs Halimun')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Fungsi Backend untuk Integrasi ke Google Sheets nantinya
function getSoalUjian(mapel) {
  // Logika mengambil soal berdasarkan mata pelajaran (misal: Informatika)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(mapel);
  var dataSoal = sheet.getDataRange().getValues();
  
  // Hapus baris header
  dataSoal.shift(); 
  return dataSoal; 
}

function simpanJawabanSiswa(nis, nama, mapel, nilai) {
  // Logika merekap nilai yang langsung terhubung ke Dashboard Guru
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Rekap_Nilai');
  sheet.appendRow([new Date(), nis, nama, mapel, nilai]);
  return "Data berhasil disimpan";
}