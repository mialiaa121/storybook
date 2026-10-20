const CUSTOM = "__custom__";
const S = (id,label,opts,def=0)=>({id,label,type:"select",opts,def});
const C = (id,label,opts,defs=[])=>({id,label,type:"chips",opts,defs});

const SECTIONS = [
 {title:"Cerita", sub:"judul sampai jumlah scene", open:true, fields:[
  S("judul","Judul cerita",["Kelinci Kecil yang Pemberani","Bintang yang Hilang di Langit Malam","Si Beruang dan Madu Ajaib","Petualangan Kucing Kecil di Taman Pelangi","Ikan Kecil Mencari Samudra","Rubah Kecil dan Lentera Hutan","Gajah Kecil yang Takut Gelap","Naga Mungil Belajar Terbang"]),
  S("tema","Tema cerita",["Persahabatan dan Petualangan","Kebaikan dan Berbagi","Keberanian","Rasa Ingin Tahu","Kerja Sama","Menghadapi Rasa Takut","Kejujuran","Cinta Lingkungan","Mengenal Emosi","Cerita Pengantar Tidur","Mengenal Keluarga","Hari Pertama Sekolah"]),
  S("tokoh","Tokoh utama",["Seekor kelinci kecil, seekor burung biru, dan kura-kura bijaksana","Anak beruang, kelinci putih, dan burung hantu","Anak perempuan kecil dan naga ramah","Anak laki-laki dan robot kecil","Kucing kecil, anjing setia, dan kupu-kupu","Gajah kecil dan monyet jenaka","Seekor ikan kecil, penyu, dan lumba-lumba","Rubah kecil, kunang-kunang, dan tupai"]),
  S("latar","Latar tempat",["Hutan ajaib yang dipenuhi bunga warna-warni dan pepohonan besar","Taman bunga dengan pelangi dan kupu-kupu","Desa kecil di tepi danau","Kastel di atas awan","Lautan dengan terumbu karang berwarna","Padang savana saat senja","Pegunungan bersalju yang hangat","Sekolah dan taman bermain","Kamar tidur penuh mainan","Luar angkasa penuh bintang dan planet"]),
  S("adegan","Adegan utama",["Kelinci kecil membantu burung biru yang tersesat mencari keluarganya di dalam hutan.","Anak beruang mencari madu ajaib dan bertemu teman-teman baru.","Seorang anak dan naga ramah belajar terbang bersama.","Anak kucing menemukan peta harta karun di taman.","Ikan kecil menjelajah lautan untuk menemukan rumah barunya.","Sekelompok hewan bekerja sama membangun jembatan setelah hujan badai."]),
  C("ekspresi","Ekspresi karakter",["Penasaran","Berani","Bahagia","Terkejut","Mengantuk","Takut","Bangga","Tertawa","Menangis","Kagum","Berpikir","Bersemangat"],["Penasaran","Berani","Bahagia"]),
  S("pesan","Pesan edukasi",["Selalu menolong teman yang membutuhkan.","Jujur itu membuat hati tenang.","Berani mencoba hal baru.","Berbagi membuat semua bahagia.","Menghargai perbedaan.","Menjaga alam adalah tugas kita semua.","Tidak apa-apa meminta tolong.","Bekerja sama membuat kita kuat.","Sabar dan tekun akan membuahkan hasil."]),
  C("nilai","Nilai positif tambahan",["Kebaikan","Persahabatan","Empati","Kreativitas","Rasa ingin tahu","Kerja sama","Tanggung jawab","Percaya diri","Kemandirian","Rasa hormat","Memecahkan masalah","Syukur"],["Kebaikan","Persahabatan","Empati","Kerja sama"]),
  S("jumlah","Jumlah scene",["4","6","8","10","12","14","16","20","24"],2),
 ]},
 {title:"Buku dan format", sub:"usia, rasio, ukuran", fields:[
  S("usia","Usia pembaca",["3–7 tahun","0–2 tahun (bayi dan balita)","2–4 tahun","4–6 tahun","5–8 tahun","6–9 tahun","8–12 tahun","Semua usia (keluarga)"]),
  S("rasio","Rasio gambar",["1:1 (persegi)","4:3 (landscape)","3:4 (portrait)","16:9 (lebar sinematik)","9:16 (vertikal, layar ponsel)","3:2 (landscape)","2:3 (portrait)","4:5 (portrait)","2:1 (panorama dua halaman)","21:9 (ultra lebar)"]),
  S("ukuran","Ukuran cetak",["20 × 20 cm","15 × 15 cm","21 × 21 cm","25 × 25 cm","A5 (14,8 × 21 cm)","A4 (21 × 29,7 cm)","20 × 25 cm","Hanya digital (tanpa ukuran cetak)"]),
  S("halaman","Komposisi halaman",["1 halaman penuh (full one-page) dengan ilustrasi full-bleed","Double spread, ilustrasi menyatu mulus di kedua halaman","Satu halaman dengan bingkai bulat","Panel bertingkat seperti komik"]),
  S("jenis","Jenis buku",["Board book tebal dengan sudut membulat (rounded corners)","Hardcover bergambar","Softcover bergambar","Buku kain lembut","Buku digital (e-book)"]),
  S("finishing","Finishing",["Laminasi doff","Laminasi glossy","Spot UV pada judul","Cover linen bertekstur","Tanpa finishing khusus"]),
  S("kertas","Kertas",["Tekstur kertas premium yang lembut","Kertas matte tebal","Kertas daur ulang berserat","Kertas kanvas halus"]),
 ]},
 {title:"Gaya visual", sub:"gaya, cahaya, warna", fields:[
  S("gaya","Gaya ilustrasi",["Ilustrasi Storybook Bergaya Disney","Animasi 3D bergaya Pixar","Cat air (watercolor) lembut","Gouache hangat bergaya buku klasik","Bergaya Studio Ghibli","Flat vector yang bersih","Kolase kertas (paper-cut)","Krayon dan pensil warna","Plastisin / clay 3D","Digital painting sinematik","Chibi / kawaii","Retro vintage 1960-an"]),
  C("cahaya","Pencahayaan",["Matahari pagi yang lembut","Cahaya hangat dalam ruangan","Golden hour","Pencahayaan volumetrik","Pantulan cahaya alami","Cahaya bulan dan bintang","Cahaya lentera","Berawan lembut"],["Matahari pagi yang lembut","Golden hour","Pencahayaan volumetrik"]),
  S("palet","Palet warna",["Pastel hangat dengan warna cerah yang harmonis","Pastel dingin yang menenangkan","Warna primer cerah dan berani","Earth tone hangat","Neon lembut malam hari","Monokrom ungu dengan aksen emas","Warna musim gugur"]),
  S("kamera","Komposisi dan sudut",["Sinematik dengan foreground, middle ground, background seimbang","Setinggi mata anak (eye-level)","Sudut tinggi (bird's-eye view)","Sudut rendah yang megah","Close-up emosional","Wide shot pemandangan luas"]),
  C("detail","Detail latar",["Bunga","Pepohonan","Rumput","Awan","Furnitur kayu","Mainan","Buku","Bebatuan","Pegunungan","Bintang","Bulan","Kastel","Desa","Hutan","Lautan","Sekolah","Taman bermain"],["Bunga","Pepohonan","Rumput","Awan","Bebatuan"]),
  S("mood","Suasana",["Hangat, magis, dan penuh mimpi","Ceria dan energik","Tenang dan menenangkan (bedtime)","Petualangan seru","Lucu dan jenaka","Haru dan menyentuh"]),
 ]},
 {title:"Interaktif dan tipografi", sub:"pop-up, flap, huruf, onomatope", fields:[
  C("fitur","Fitur interaktif",["Pop-up","Lift-the-flap","Touch-and-feel","Die-cut","Pull-tab","Cermin mini","Tombol suara"],["Pop-up","Lift-the-flap","Touch-and-feel","Die-cut"]),
  C("tekstur","Tekstur touch-and-feel",["Kain lembut","Bulu","Beludru","Emboss","Karet","Kayu","Daun","Gelembung","Glitter","Silikon"],["Kain lembut","Bulu","Beludru","Glitter"]),
  S("font","Gaya huruf",["Sans-serif membulat seperti Fredoka, Quicksand, Baloo, atau Nunito","Font komik ceria","Tulisan tangan anak","Serif klasik buku dongeng","Font tebal membulat (bubble)"]),
  S("onom","Efek suara (onomatope)",["Ya, gaya komik berwarna-warni","Sedikit saja","Tidak perlu"]),
  C("onomlist","Pilihan onomatope",["BOOM!","POP!","WHOOSH!","SPLASH!","ROAR!","MEOW!","MOO!","CIIIP!","SZZZ!","WOW!","YAY!","TOK TOK!","PLOP!","GUK GUK!"],["POP!","WHOOSH!","CIIIP!","WOW!","YAY!"]),
 ]},
 {title:"Narasi dan bahasa", sub:"teks tiap scene", fields:[
  S("bnarasi","Bahasa narasi",["Indonesia","English","Indonesia + English (bilingual)","Jawa","Sunda"]),
  S("bprompt","Bahasa prompt gambar",["Indonesia","English"]),
  S("tone","Gaya narasi",["Lembut dan hangat","Ceria dan berirama","Puitis","Jenaka","Tenang untuk pengantar tidur"]),
  S("panjang","Panjang narasi per scene",["2–3 kalimat pendek","1 kalimat","3–4 kalimat","1 paragraf pendek"]),
  S("dialog","Dialog tokoh",["Sertakan dialog singkat","Tanpa dialog","Banyak dialog"]),
  S("sudut","Sudut pandang",["Orang ketiga","Orang pertama (tokoh utama)","Narator yang menyapa anak"]),
 ]},
];

const state = {}; // chips selections
const form = document.getElementById("form");

function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}

function render(){
  form.innerHTML="";
  SECTIONS.forEach(sec=>{
    const d=document.createElement("details"); if(sec.open) d.open=true;
    d.innerHTML=`<summary><span>${sec.title}<span class="sub">${sec.sub}</span></span></summary><div class="body"></div>`;
    const body=d.querySelector(".body");
    sec.fields.forEach(f=>{
      const w=document.createElement("div"); w.className="field";
      if(f.type==="select"){
        w.innerHTML=`<label class="l" for="f_${f.id}">${f.label}</label>
          <select id="f_${f.id}">${f.opts.map((o,i)=>`<option value="${esc(o)}"${i===f.def?" selected":""}>${esc(o)}</option>`).join("")}<option value="${CUSTOM}">✏️ Isi sendiri…</option></select>
          <div class="custom hidden" id="c_${f.id}"><input type="text" id="ci_${f.id}" placeholder="Tulis sendiri: ${f.label.toLowerCase()}" autocomplete="off"></div>`;
        const sel=w.querySelector("select"), box=w.querySelector(".custom");
        sel.addEventListener("change",()=>{
          const on=sel.value===CUSTOM; box.classList.toggle("hidden",!on);
          if(on) box.querySelector("input").focus();
        });
      } else {
        state[f.id]=new Set(f.defs);
        w.innerHTML=`<label class="l">${f.label}</label><div class="chips" id="ch_${f.id}"></div>
          <div class="addrow"><input type="text" id="ai_${f.id}" placeholder="Tambah sendiri…" autocomplete="off"><button class="btn ghost sm" type="button" id="ab_${f.id}">Tambah</button></div>`;
        const holder=w.querySelector(".chips");
        const addChip=(o)=>{
          const b=document.createElement("button"); b.type="button"; b.className="chip"; b.textContent=o;
          b.setAttribute("aria-pressed",state[f.id].has(o));
          b.onclick=()=>{ if(state[f.id].has(o)) state[f.id].delete(o); else state[f.id].add(o); b.setAttribute("aria-pressed",state[f.id].has(o)); };
          holder.appendChild(b);
        };
        f.opts.forEach(addChip);
        const inp=w.querySelector("input"), add=()=>{
          const v=inp.value.trim(); if(!v) return;
          if([...holder.children].some(c=>c.textContent.toLowerCase()===v.toLowerCase())){inp.value="";return}
          state[f.id].add(v); addChip(v); inp.value="";
        };
        w.querySelector("#ab_"+f.id).onclick=add;
        inp.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();add()}});
      }
      body.appendChild(w);
    });
    form.appendChild(d);
  });
}

                            
