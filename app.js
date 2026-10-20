function userPrompt(v,i){
  if(i===0) return `Tulis prompt COVER (tanpa narasi). Balas JSON: {"prompt":"..."}`;
  const prev=RESULTS.slice(1,i).map((r,k)=>`Scene ${k+1}: ${(r&&r.narasi)||""}`).join("\n");
  const stage=i===1?"pembukaan: perkenalan tokoh dan dunia":i===v.n?"penutup: resolusi hangat dan pesan cerita":i>v.n*0.6?"klimaks dan jalan keluar":"perkembangan petualangan dan konflik";
  return `Tulis Scene ${i} dari ${v.n} (${stage}).${prev?"\nRingkasan scene sebelumnya agar alur nyambung:\n"+prev:""}\nBalas JSON: {"prompt":"...","narasi":"..."}`;
}
function sceneCard(i,r,busy){
  let el=document.getElementById("sc_"+i);
  if(!el){el=document.createElement("div");el.id="sc_"+i;el.className="card scene";$("scenes").appendChild(el)}
  const title=i===0?"Cover":"Scene "+i;
  if(busy){el.innerHTML=`<h3>${title}</h3><p class="status">Menulis…</p>`;return}
  if(!r||r.error){el.innerHTML=`<h3>${title}</h3><p class="status err">Gagal dibuat. Periksa koneksi lalu coba lagi.</p><div class="row"><button class="btn ghost sm" data-re="${i}">Coba lagi</button></div>`;}
  else el.innerHTML=`<h3>${title}</h3><div class="lbl">Prompt</div><p>${esc(r.prompt||"")}</p>${i>0?`<div class="lbl">Narasi</div><p class="narasi">${esc(r.narasi||"")}</p>`:""}
    <div class="row"><button class="btn gold sm" data-cp="${i}">Salin prompt</button>${i>0?`<button class="btn ghost sm" data-cn="${i}">Salin narasi</button>`:""}<button class="btn ghost sm" data-re="${i}">Ulangi</button></div>`;
}
async function genOne(i){
  sceneCard(i,null,true);
  try{
    const t=await callClaude(sysPrompt(VALS),userPrompt(VALS,i));
    const j=parseJSON(t)||{prompt:t.trim(),narasi:""};
    RESULTS[i]=j; sceneCard(i,j);
  }catch(e){RESULTS[i]={error:true};sceneCard(i,{error:true})}
}
$("genScenes").onclick=async()=>{
  if(!VALS) return;
  const btn=$("genScenes"); btn.disabled=true; btn.textContent="Sedang menulis…";
  $("scenes").innerHTML=""; RESULTS=[]; $("copyAll").classList.add("hidden");
  const total=VALS.n+1, bar=$("prog"); bar.classList.remove("hidden");
  for(let i=0;i<total;i++){
    $("genStatus").textContent=`Menulis ${i===0?"cover":"scene "+i} (${i+1} dari ${total})`;
    await genOne(i);
    bar.firstElementChild.style.width=((i+1)/total*100)+"%";
  }
  const fail=RESULTS.filter(r=>!r||r.error).length;
  $("genStatus").textContent=fail?`${fail} bagian gagal. Tekan "Coba lagi" pada kartu terkait.`:"Selesai. Salin per scene atau semua sekaligus.";
  btn.disabled=false; btn.textContent="Buat ulang semua scene";
  $("copyAll").classList.remove("hidden");
};
$("scenes").addEventListener("click",async e=>{
  const b=e.target.closest("button"); if(!b) return;
  if(b.dataset.cp) copy(RESULTS[+b.dataset.cp].prompt||"");
  if(b.dataset.cn) copy(RESULTS[+b.dataset.cn].narasi||"");
  if(b.dataset.re){b.disabled=true;await genOne(+b.dataset.re)}
});
$("copyAll").onclick=()=>{
  const t=RESULTS.map((r,i)=>{
    if(!r||r.error) return "";
    return (i===0?"COVER":"SCENE "+i)+"\nPrompt: "+r.prompt+(i>0&&r.narasi?"\nNarasi: "+r.narasi:"");
  }).filter(Boolean).join("\n\n");
  copy(t);
};

try{ render();  }
catch(err){
  form.innerHTML='<div class="card"><h2>Opsi gagal dimuat</h2><p class="status err">'+esc(err&&err.message||err)+'</p><p class="status">Muat ulang halaman (refresh). Jika masih gagal, kirim pesan di atas ke pembuat tool.</p></div>';
}

