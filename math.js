function tambah(a, b) {
  if(a === null || b === null) {
    throw new Error("Tidak Bisa menginput null")
  }
  return a + b;
}

function kali(a, b) {
  if(typeof(a) === 'string' || typeof(b) === 'string'){
    throw new Error("Tidak Bisa Menginput String")
  }
  return a * b;
}

function kurang(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Tidak Bisa Menginput Nilai Negatif");
  }
  return a - b;
}

function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak Bisa Membagi dengan nol");
  }
  return a / b;
}

module.exports = { tambah, kali, kurang, bagi };
