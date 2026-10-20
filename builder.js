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
  const url=chatgptURL();
  let w=null;
  try{ w=window.open(url,"_blank"); }catch(e){}
  if(!w){ window.location.href=url; }
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
            
