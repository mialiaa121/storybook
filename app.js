(function(){if(window.__sbLoaded)return;window.__sbLoaded=true;
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

function sel(id){
  const s=document.getElementById("f_"+id); if(!s) return "";
  if(s.value===CUSTOM) return document.getElementById("ci_"+id).value.trim();
  return s.value;
}
function chips(id){ return [...(state[id]||[])]; }
function list(a){
  if(!a.length) return "";
  if(a.length===1) return a[0];
  return a.slice(0,-1).join(", ")+" dan "+a[a.length-1];
}
function lc(s){return s.charAt(0).toLowerCase()+s.slice(1)}

function readAll(){
  const v={};
  SECTIONS.forEach(s=>s.fields.forEach(f=>{ v[f.id]= f.type==="select"? sel(f.id) : chips(f.id); }));
  v.n=Math.max(1,Math.min(60,parseInt(v.jumlah)||8));
  v.judul=v.judul||"[Judul bebas]"; v.tokoh=v.tokoh||"[Tokoh]";
  return v;
}

function buildMaster(v){
  const fitur=v.fitur, touch=fitur.includes("Touch-and-feel");
  const fiturTxt = fitur.length ? "Rancang buku sebagai buku interaktif premium dengan fitur "+list(fitur.map(x=>x.toLowerCase()===x?x:x))+
    " menggunakan mekanisme rekayasa kertas yang realistis"+
    (fitur.includes("Pop-up")?", konstruksi kertas bertingkat, dan karakter yang berdiri secara tiga dimensi":"")+
    (fitur.includes("Lift-the-flap")?", jendela lift-the-flap dengan sudut membulat dan ilustrasi kejutan di baliknya":"")+
    (touch&&v.tekstur.length?", fitur touch-and-feel berupa tekstur "+list(v.tekstur.map(lc)):"")+
    (fitur.includes("Die-cut")?", serta die-cut berupa potongan halaman berbentuk karakter, jendela lingkaran, siluet hewan, atau lubang untuk mengintip halaman berikutnya":"")+
    (fitur.includes("Pull-tab")?", pull-tab geser yang menggerakkan elemen adegan":"")+
    (fitur.includes("Cermin mini")?", cermin mini yang aman untuk anak":"")+
    (fitur.includes("Tombol suara")?", tombol suara pada halaman":"")+"."
    : "Buku dibuat sebagai buku cerita bergambar tanpa fitur interaktif, fokus pada kekuatan ilustrasi.";

  const onom = v.onom.startsWith("Tidak") ? "Jangan gunakan efek suara pada ilustrasi."
    : "Tambahkan efek suara (onomatope) bergaya komik"+(v.onomlist.length?" seperti "+v.onomlist.map(x=>`"${x}"`).join(", "):"")+
      " menggunakan huruf besar berwarna-warni, tata letak melengkung, efek gerakan, garis tepi komik, dan penempatan yang mengikuti aksi"+(v.onom.startsWith("Sedikit")?", dipakai hemat hanya pada momen penting":"")+" sehingga ilustrasi terasa hidup saat dibacakan.";

  const kw=["Buku Cerita Anak Premium", v.halaman.split(" (")[0].split(",")[0], "Full Bleed Illustration", v.jenis.split(" (")[0].split(" dengan")[0],
    ...fitur, "Komposisi Sinematik","Ilustrasi Editorial","Buku Cerita Anak Berkualitas Internasional","Highly Detailed","Ultra Quality","Vibrant Colors","Soft Lighting","Child-Friendly","Expressive Characters","Professional Publishing Quality","Consistent Character Design","Rich Textures","Magical Atmosphere","Format "+v.ukuran, "Rasio "+v.rasio.split(" (")[0]];

  return `Buat ilustrasi buku cerita anak (storybook) premium berkualitas penerbit profesional yang dirancang untuk anak usia ${v.usia}, dengan tampilan dan kualitas produksi setara buku cerita bergambar internasional terlaris. Gunakan format ${v.ukuran} dengan rasio gambar ${v.rasio}, komposisi ${lc(v.halaman)}, ${lc(v.jenis)}, finishing ${lc(v.finishing)}, ${lc(v.kertas)}, kualitas cetak ultra tinggi, warna-warna cerah dan kaya, standar ilustrasi editorial profesional, serta detail ilustrasi yang sangat tinggi.

Gunakan gaya ilustrasi yang konsisten pada seluruh halaman buku, dengan style: ${v.gaya}, dengan tetap mempertahankan bentuk yang membulat, pencahayaan sinematik, suasana ${lc(v.mood)}, harmoni warna hangat, nuansa imajinatif, mata besar yang ekspresif, ekspresi wajah yang menggemaskan, kualitas ilustrasi premium, dan desain karakter yang konsisten di setiap halaman.

Rancang setiap karakter dengan proporsi membulat, tampilan yang ramah anak, pakaian berwarna-warni, tangan dan kaki yang lembut, siluet yang menarik, serta ekspresi emosi yang jelas${v.ekspresi.length?" seperti "+list(v.ekspresi.map(lc)):""} sehingga mampu menyampaikan cerita secara visual.

Susun setiap adegan dengan komposisi ${lc(v.kamera)}, dilengkapi environmental storytelling, kedalaman sinematik, perspektif realistis, pose yang dinamis, interaksi alami antar karakter, garis panduan visual (leading lines), dan pencahayaan lembut sehingga setiap halaman mampu menceritakan kisahnya bahkan tanpa teks.

Tampilkan ilustrasi sebagai buku cerita cetak premium yang realistis dengan ketebalan halaman yang nyata, serta sediakan ruang kosong (negative space) secara alami pada langit, awan, rumput, dinding, lantai, air, salju, pasir, atau gradasi warna lembut untuk penempatan judul, narasi, dialog, maupun keterangan tanpa menutupi karakter utama. Sisakan area tipografi yang bersih dengan gaya huruf ${lc(v.font)}, mudah dibaca, dengan tata letak yang menarik.

${onom}

${fiturTxt}

Gunakan pencahayaan ${v.cahaya.length?list(v.cahaya.map(lc)):"lembut"}, bayangan halus, dan suasana hangat yang ramah anak. Terapkan palet warna: ${lc(v.palet)}, dengan kontras yang nyaman di mata, saturasi seimbang, dan tampilan visual yang menenangkan.

Lengkapi latar dengan detail yang kaya namun tidak mengganggu fokus${v.detail.length?", seperti "+list(v.detail.map(lc)):""}, serta elemen lain yang sesuai dengan cerita.

Pastikan setiap halaman secara alami menyampaikan nilai-nilai positif${v.nilai.length?" seperti "+list(v.nilai.map(lc)):""} tanpa terlihat menggurui. Pertahankan standar ilustrasi penerbit profesional dengan kualitas setara buku cerita anak pemenang penghargaan, komposisi bersih, serta pencahayaan, warna, tekstur, dan desain karakter yang konsisten pada seluruh halaman, tanpa objek buram, anatomi yang salah, anggota tubuh berlebih, objek ganda, wajah terpotong, maupun cacat visual lainnya.

[Judul Cerita: ${v.judul}
Tema Cerita: ${v.tema}
Tokoh Utama: ${v.tokoh}
Latar Tempat: ${v.latar}
Adegan: ${v.adegan}
Ekspresi: ${v.ekspresi.join(", ")}
Pesan Edukasi: ${v.pesan}
Jumlah scene: ${v.n} scene]

Kata Kunci Akhir: ${kw.filter(Boolean).join(", ")}.

Buatkan teks prompt di setiap scene (cover, lalu scene 1 sampai ${v.n}). Buatkan teks prompt saja dan tambahkan narasi di setiap scene (bahasa narasi: ${v.bnarasi}; gaya: ${lc(v.tone)}; ${v.panjang}; ${lc(v.dialog)}; sudut pandang ${lc(v.sudut)}), kecuali cover.`;
}

/* ---------- output ---------- */
let MASTER="", VALS=null, RESULTS=[];
const $=id=>document.getElementById(id);

let toastT;
function toast(t="Tersalin"){const e=$("toast");e.textContent=t;e.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove("show"),t.length>20?3200:1400)}
async function copy(text,silent){
  try{await navigator.clipboard.writeText(text)}
  catch(e){const t=document.createElement("textarea");t.value=text;t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(_){}t.remove()}
  if(!silent) toast();
}
function download(name,text){
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"}));a.download=name;document.body.appendChild(a);a.click();a.remove();
}

function chatgptURL(){ return "https://chatgpt.com/?q="+encodeURIComponent(MASTER); }
function openChatGPT(){
  copy(MASTER,true);
  const w=window.open(chatgptURL(),"_blank","noopener");
  if(!w) toast("Pop-up diblokir. Tekan tombol Buka ChatGPT");
  else toast("Prompt disalin. Jika kolom chat kosong, tempel (paste)");
}
$("buildBtn").onclick=()=>{
  VALS=readAll(); MASTER=buildMaster(VALS);
  $("masterText").textContent=MASTER;
  $("openGpt").href=chatgptURL();
  $("out").classList.remove("hidden");
  openChatGPT();
  $("out").scrollIntoView({behavior:"smooth",block:"start"});
};
$("resetBtn").onclick=()=>{ render(); $("out").classList.add("hidden"); $("scenes").innerHTML=""; RESULTS=[]; window.scrollTo({top:0,behavior:"smooth"}); };
$("copyMaster").onclick=()=>copy(MASTER);
$("dlMaster").onclick=()=>download("storybook-prompt-master.txt",MASTER);

/* ---------- AI per-scene ---------- */
async function callClaude(system,user){
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-6",max_tokens:1000,system,messages:[{role:"user",content:user}]})});
  const d=await r.json();
  if(!d.content) throw new Error("Tidak ada respons");
  return d.content.filter(c=>c.type==="text").map(c=>c.text).join("\n");
}
function parseJSON(t){
  const c=t.replace(/```json|```/g,"").trim();
  const a=c.indexOf("{"), b=c.lastIndexOf("}");
  try{return JSON.parse(c.slice(a,b+1))}catch(e){return null}
}
function sysPrompt(v){
  const en=v.bprompt==="English";
  return `Kamu adalah penulis prompt ilustrasi buku cerita anak profesional. Gunakan pengaturan buku berikut sebagai acuan konsisten untuk SEMUA halaman.

${MASTER.split("[Judul Cerita:")[0]}
Cerita: judul "${v.judul}"; tema ${v.tema}; tokoh: ${v.tokoh}; latar: ${v.latar}; inti cerita: ${v.adegan}; pesan: ${v.pesan}. Total ${v.n} scene.

Aturan keluaran:
- Balas HANYA dengan satu objek JSON valid, tanpa markdown.
- Field "prompt": prompt gambar mandiri dalam bahasa ${en?"Inggris":"Indonesia"}, 130–180 kata, mencakup: format/rasio ${v.rasio}, gaya ${v.gaya}, deskripsi tetap setiap tokoh (warna, ciri fisik, pakaian) agar konsisten antar halaman, aksi dan ekspresi, komposisi foreground/middle/background, pencahayaan, negative space untuk teks, onomatope${v.onom.startsWith("Tidak")?" (jangan dipakai)":""}, dan fitur interaktif bila relevan.
- Field "narasi": narasi halaman dalam bahasa ${v.bnarasi}, gaya ${v.tone}, panjang ${v.panjang}, ${v.dialog.toLowerCase()}, sudut pandang ${v.sudut.toLowerCase()}. Untuk cover, JANGAN sertakan field "narasi".
- Cover: tampilkan judul besar "${v.judul}" di ruang kosong dan semua tokoh utama dengan ekspresi menyambut.`;
                          }
    
