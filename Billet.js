//Deklarasi dan inisialisasi atribut
var loop = true;
var idPembeli = [];
var pembeli = {};
var pil;
let idx = 0;

//Function untuk menampung data Pembeli
function Pembeli(parName, parNik, parAlamat, parHp, parKode, parJenis, parharga) {
  var intro = '<== SELAMAT DATANG DI BILLET ==>'
  var name = parName
  var nik = parNik
  var alamat = parAlamat
  var hp = parHp
  var kode = parKode
  var jenis = parJenis
  var harga = parharga

  this.getIntro = function(){ 
    return intro; 
    }

  this.getName = function() {
    return name;
  }

  this.getNik = function() {
    return nik;
  }

  this.getAlamat = function() {
    return alamat;
  }

  this.getHp = function() {
    return hp;
  }
  
  this.getKode = function() {
    return kode;
  }

  this.getJenis = function() {
    return jenis;
  }

  this.getHarga = function() {
    return harga;
  }
}


//Perulangan menu
while (loop == true) {
  var pembeli = new Pembeli()
  console.log("\n" + pembeli.getIntro())
  console.log("\n==============================");
  console.log("            E-Tiket           ");
  console.log("==============================");
  console.log("1. Lihat Jadwal");
  console.log("2. Pembelian");
  console.log("3. Detail Pembelian");
  console.log("4. Keluar");
  console.log("==============================");
  pil = prompt("Masukan pilihan\t: ");

  switch(pil) {
    case '1':
    //Menu melihat jadwal
      console.log("\n1. Jadwal Konser Hari ini");
      console.log("2. Jadwal Film Hari ini");
      let jwl = prompt("Masukkan pilihan\t: ");

      //kondisi percabangan jadwal tiket
      if (jwl == '1'){
        console.log("\n<=== JADWAL KONSER ===>")
        console.log("+------+--------------------+--------------+----------+-----------+")
        console.log("| Kode | Nama Konser\t\t| Lokasi\t\t| Tanggal | Waktu\t  |")
        console.log("+------+--------------------+--------------+----------+-----------+")
        console.log("| K001 | Maroon 5 Tour 2021 | GOR Satria   | 18/01/21 | 16.30 WIB |")
        console.log("+------+--------------------+--------------+----------+-----------+")
        console.log("| K002 | Justin B Tour 2021 | Taman Andang | 18/01/21 | 19.00 WIB |")
        console.log("+------+--------------------+--------------+----------+-----------+")
      } else if (jwl == '2'){
        console.log("\n<=== JADWAL FILM ===>")
        console.log("+------+----------------+--------+----------+-----------+")
        console.log("| Kode | Judul Film\t\t| Lokasi | Tanggal  | Waktu\t\t|")
        console.log("+------+----------------+--------+----------+-----------+")
        console.log("| F001 | MARIPOSA\t\t| CGV\t | 18/01/21 | 10.30 WIB |")
        console.log("+------|\t\t\t\t|\t\t |\t\t\t|-----------+")
        console.log("| F002 |\t\t\t\t|\t\t |\t\t\t| 13.30 WIB |")
        console.log("+------+----------------+--------+----------+-----------+")
        console.log("| F003 | BLOODSHOT\t\t| CGV\t | 18/01/21 | 10.30 WIB |")
        console.log("+------|\t\t\t\t|\t\t |\t\t\t|-----------+")
        console.log("| F004 |\t\t\t\t|\t\t |\t\t\t| 14.30 WIB |")
        console.log("+------+----------------+--------+----------+-----------+")
      } else {
        console.log("MASUKKAN PILIHAN YANG SESUAI")
      }
      break;
      
    case '2':
    //Menu pembelian
      //User memasukkan jumlah pembeli
      let jmlBeli = prompt('Masukkan Jumlah Pembeli : ')

      for(let i = 1; i <= jmlBeli; i++){
        //User memilih jenis tiket
        console.log("\n--- Pilih Tiket ---");
        console.log("1. Konser");
        console.log("2. Film");

        //User memasukkan pilihan tiket
        let jns = prompt("Masukan Pilihan\t: ");
        let jenis;
        
        //kondisi percabangan jenis tiket
        if (jns == '1') {
          jenis = "Tiket konser";

          //daftar kode tiket
          console.log("\n\t\t\t< Kode Tiket >")
          console.log("+------+--------------------+")
          console.log("| Kode | Nama Konser\t\t|")
          console.log("+------+--------------------+")
          console.log("| K001 | Maroon 5 Tour 2021 |")
          console.log("+------+--------------------+")
          console.log("| K002 | Justin B Tour 2021 |")
          console.log("+------+--------------------+")

          //User mengisi identitas
          console.log('\n<=== PEMBELI KE-'+i+' ==>\n')
          name = prompt("Masukkan Nama\t: ");
          nik = prompt("Masukkan NIK\t: ");
          alamat = prompt("Masukkan Alamat\t: ");
          hp = prompt("Masukkan No HP\t: ");

          //User memasukkan kode tiket
          kode = prompt("Masukan kode\t: ");

          //kondisi percabangan kode tiket
          if (kode == 'K001') {
            harga = 1500000
            kode = "+------+--------------------+--------------+----------+-----------+" + "\n | K001 | Maroon 5 Tour 2021 | GOR Satria   | 18/01/21 | 16.30 WIB |" + "\n +------+--------------------+--------------+----------+-----------+";
          } else if (kode == 'K002') {
            harga = 2500000
            kode = "+------+--------------------+--------------+----------+-----------+" + "\n| K002 | Justin B Tour 2021 | Taman Andang | 18/01/21 | 19.00 WIB |" + "\n+------+--------------------+--------------+----------+-----------+";
          } else {
            kode = ">unknown<";
          }
        } else if (jns == '2') {
          jenis = "Tiket Film";

          //daftar kode tiket
          console.log("\n\t\t\t< Kode Tiket >")
          console.log("+------+----------------+-----------+")
          console.log("| Kode | Judul Film\t\t| Waktu\t\t|")
          console.log("+------+----------------+-----------+")
          console.log("| F001 | MARIPOSA\t\t| 10.30 WIB |")
          console.log("+------+----------------+-----------+")
          console.log("| F002 |\t\t\t\t| 13.30 WIB |")
          console.log("+------+----------------+-----------+")
          console.log("| F003 | BLOODSHOT\t\t| 10.30 WIB |")
          console.log("+------+----------------+-----------+")
          console.log("| F004 |\t\t\t\t| 14.30 WIB |")
          console.log("+------+----------------+-----------+")

          //User mengisi identitas
          console.log('\n<=== PEMBELI KE-'+i+' ==>\n')
          name = prompt("Masukkan Nama\t: ");
          nik = prompt("Masukkan NIK\t: ");
          alamat = prompt("Masukkan Alamat\t: ");
          hp = prompt("Masukkan No HP\t: ");

          //User memasukkan kode tiket
          kode = prompt("Masukan kode\t: ");

          //kondisi percabangan kode tiket
          if (kode == 'F001') {
            harga = 50000
            kode = "+------+----------------+--------+----------+-----------+" + "\n | F001 | MARIPOSA\t\t| CGV\t | 18/01/21 | 10.30 WIB |" + "\n +------+----------------+--------+----------+-----------+";
          } else if (kode == 'F002') {
            harga = 50000
            kode = "+------+----------------+--------+----------+-----------+" + "\n| F002 | MARIPOSA\t\t| CGV\t | 18/01/21 | 13.30 WIB |" + "\n+------+----------------+--------+----------+-----------+";
          } else if (kode == 'F003') {
            harga = 50000
            kode = "+------+----------------+--------+----------+-----------+" + "\n| F003 | BLOODSHOT\t\t| CGV\t | 18/01/21 | 10.30 WIB |" + "\n+------+----------------+--------+----------+-----------+";
          } else if (kode == 'F004') {
            harga = 50000
            kode = "+------+----------------+--------+----------+-----------+" + "\n| F004 | BLOODSHOT\t\t| CGV\t | 18/01/21 | 14.30 WIB |" + "\n+------+----------------+--------+----------+-----------+";
          } else {
            kode = ">unknown<";
          }
        } else {
          jenis = ">unknown<";
        }

        pembeli = new Pembeli(name, nik, alamat, hp, kode, jenis, harga);
        //memasukan object ke array
        idPembeli.push(pembeli);
      }
      break;

    case '3':
    //Menu Detail Data
      index = 1 //index dimulai dari 1

      //output data
      for (let x in idPembeli) {
        console.log(`\n<== DETAIL PEMBELIAN PEMBELI KE-${index}==>\n`)
        console.log(`Nama\t\t\t: ${ idPembeli[x].getName() }`);
        console.log(`NIK\t\t\t\t: ${ idPembeli[x].getNik() }`);
        console.log(`Alamat\t\t\t: ${ idPembeli[x].getAlamat() }`);
        console.log(`No Hp\t\t\t: ${ idPembeli[x].getHp() }`);
        console.log(`Jenis Tiket\t\t: ${ idPembeli[x].getJenis() }`);
        console.log(` --Detail Tiket--\n ${ idPembeli[x].getKode() }`);
        console.log(`Harga\t\t\t: ${ idPembeli[x].getHarga() }`);
        console.log(`ID PEMBAYARAN\t: 202100${index}`);
        index++
      }
      break;

    case '4':
      //Mengakhiri program
      loop = false;
      console.log("\n-TERIMA KASIH TELAH BERKUNJUNG-"); 
      break; 

    default :
      //Jika pilihan tidak sesuai
      console.log("\nMasukan Pilihan Yang Sesuai\n");
      break;
  }
}