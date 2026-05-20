const PASSWORD = "6539";

function login(){
  let pass = document.getElementById("pass").value;

  if(pass === PASSWORD){
    document.getElementById("loginScreen").style.display="none";
    document.getElementById("app").style.display="block";
    showModels();
  }
}

/* MODELS */
function showModels(){

  const models = [
    {id:1, name:"Yusuf Gündar"},
    {id:2, name:"Emir Bolat"},
    {id:3, name:"Hamza Aygur"},
    {id:4, name:"Süleyman Köylü"},
    {id:5, name:"Yusuf İslam"},

    // 🔥 6. MODEL (TEK FOTO AÇILACAK)
    {id:6, name:"Anime Family", single:true}
  ];

  let html = `<div class="grid">`;

  models.forEach(m => {

    if(m.single){
      html += `
        <div class="card" onclick="openSingleImage(${m.id})">
          <img src="img/model${m.id}.jpg">
          <p class="nameTag">${m.name}</p>
        </div>
      `;
    } else {
      html += `
        <div class="card" onclick="openModel(${m.id})">
          <img src="img/model${m.id}.jpg">
          <p class="nameTag">${m.name}</p>
        </div>
      `;
    }

  });

  html += `</div>`;
  document.getElementById("content").innerHTML = html;
}

/* NORMAL MODEL (3 FOTO) */
function openModel(id){

  let html = `
    <div style="display:flex;justify-content:flex-end;margin-bottom:20px;">
      <button class="backBtn" onclick="showModels()">← Geri</button>
    </div>

    <div class="grid">
  `;

  for(let i=1;i<=3;i++){
    html += `
      <div class="card">
        <img src="img/model${id}_${i}.jpg" onclick="openLightbox(this.src)">
      </div>
    `;
  }

  html += `</div>`;

  document.getElementById("content").innerHTML = html;
}

/* 🔥 6. MODEL - TEK FOTO AÇ */
function openSingleImage(id){

  let html = `
    <div style="display:flex;justify-content:space-between;margin-bottom:20px;">
      <button class="backBtn" onclick="showModels()">← Geri</button>
    </div>

    <div style="display:flex;justify-content:center;">
      <img src="img/model${id}.jpg" style="
        max-width:90%;
        max-height:80vh;
        border-radius:12px;
        box-shadow:0 0 30px rgba(255,79,216,0.4);
      ">
    </div>
  `;

  document.getElementById("content").innerHTML = html;
}

/* LIGHTBOX */
function openLightbox(src){

  let box = document.createElement("div");
  box.id = "lightbox";

  box.innerHTML = `<img src="${src}">`;

  box.onclick = () => box.remove();

  document.body.appendChild(box);
}