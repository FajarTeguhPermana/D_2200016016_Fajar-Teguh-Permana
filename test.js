const { expect } = require("chai");
const { tambah, kali, kurang, bagi } = require("./math");
const { describe } = require("mocha");
describe("Pengujian Fungsi Matematika", function () {
  it("seharusnya mengembalikan 4 saat menambahkan 2 + 2", function () {
    expect(tambah(2, 2)).to.equal(4);
  });
  it("seharusnya mengembalikan 6 saat mengalikan 2 * 3", function () {
    expect(kali(2,3 )).to.equal(6);
  });
  it("seharusnya mengembalikan 0 saat mengurangkan 2 - 2", function () {
    expect(kurang(2, 2)).to.equal(0);
  });
  it("seharusnya mengembalikan 2 saat membagi 6 / 3", function () {
    expect(bagi(6, 3)).to.equal(2);
  });
});

describe("Memeriksa kasus negative untuk fungsi Kurang dan Bagi ", function() {
  it("seharusnya mengembalikan error saat membagi dengan 0", function () {
    expect(() => bagi(6, 0)).to.throw("Tidak Bisa Membagi dengan nol");
  });
  it("seharusnya mengembalikan error saat menginput nilai negatif pada pengurangan", function () {
    expect(() => kurang(-1, -7)).to.throw("Tidak Bisa Menginput Nilai Negatif");
  });
});

describe("Memeriksa kasus negative untuk fungsi kali dan tambah", function() {
  it("seharusnya mengembalikan error saat menginput String pada perkalian", function () {
    expect(() => kali("halo", 3)).to.throw("Tidak Bisa Menginput String");
  });

  it("seharusnya mengembalikan error saat menginput Null pada pertambahan", function () {
    expect(() => tambah(15, null)).to.throw("Tidak Bisa menginput null");
  });
});


