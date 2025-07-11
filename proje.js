let kitap1 = { isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 30, raf: "1.5" }
let kitap2 = { isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 45, raf: "2.3" }
let kitap3 = { isim: "İnsan Neyle Yaşar", yazar: "Tolstoy", fiyat: 39, raf: "4.1" }
let kitap4 = { isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 55, raf: "5.5" }
let kitap5 = { isim: "Şeker Portakalı", yazar: "Jose", fiyat: 43, raf: "3.3" }

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

let raf11 = { kod: "1.1.Raf", goster: false }
let raf12 = { kod: "1.2.Raf", goster: false }
let raf13 = { kod: "1.3.Raf", goster: false }
let raf14 = { kod: "1.4.Raf", goster: false }
let raf15 = { kod: "1.5.Raf", goster: false }

let raf21 = { kod: "2.1.Raf", goster: false }
let raf22 = { kod: "2.2.Raf", goster: false }
let raf23 = { kod: "2.3.Raf", goster: false }
let raf24 = { kod: "2.4.Raf", goster: false }
let raf25 = { kod: "2.5.Raf", goster: false }

let raf31 = { kod: "3.1.Raf", goster: false }
let raf32 = { kod: "3.2.Raf", goster: false }
let raf33 = { kod: "3.3.Raf", goster: false }
let raf34 = { kod: "3.4.Raf", goster: false }
let raf35 = { kod: "3.5.Raf", goster: false }

let raf41 = { kod: "4.1.Raf", goster: false }
let raf42 = { kod: "4.2.Raf", goster: false }
let raf43 = { kod: "4.3.Raf", goster: false }
let raf44 = { kod: "4.4.Raf", goster: false }
let raf45 = { kod: "4.5.Raf", goster: false }

let raf51 = { kod: "5.1.Raf", goster: false }
let raf52 = { kod: "5.2.Raf", goster: false }
let raf53 = { kod: "5.3.Raf", goster: false }
let raf54 = { kod: "5.4.Raf", goster: false }
let raf55 = { kod: "5.5.Raf", goster: false }

let raflar = [
    [raf51, raf52, raf53, raf54, raf55],
    [raf41, raf42, raf43, raf44, raf45],
    [raf31, raf32, raf33, raf34, raf35],
    [raf21, raf22, raf23, raf24, raf25],
    [raf11, raf12, raf13, raf14, raf15]];

function rafOlustur() {
    console.clear();
    let satir = "";
    for (let i = 0; i < raflar.length; i++) {
        for (let j = 0; j < 5; j++) {
            satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "|";
        }
        console.log(satir);
        satir = "";
    }
}
rafOlustur();

// gereksiz uzayacağını düşündüğüm için bu deneme projem burada iptal edilmiştir.