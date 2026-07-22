let step = 0;

// Fungsi Button On/Off Lagu kat Atas Kanan
function toggleMusic() {
  let music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Fungsi Cerita Bila Tekan Button "haii"
function nextPage() {
  let icon = document.getElementById("icon");
  let title = document.getElementById("title");
  let message = document.getElementById("message");
  let btn = document.getElementById("nextBtn");
  let music = document.getElementById("bgMusic");

  // Cuba pasang lagu masa tekan "haii" pertama kali
  if (step === 0) {
    music.play().catch(e => console.log("User perlu tekan play manual:", e));
  }

  step++;

  if (step === 1) {
    icon.innerText = "🧊";
    title.innerText = "btw, aku nk panggil kau ice sbb ice dgn izz cam sama MUAHAHA";
    message.innerText = "lgipun perangai kau mmg mcm ice pun🙂‍↕️";
    btn.innerText = "tpi dlm personal je la kot";
  } 
  else if (step === 2) {
    icon.innerText = "🫵";
    title.innerText = "thanks tau";
    message.innerText = "sbb bagi aku peluang untuk suka kau ";
    btn.innerText = "MUHEHEHE";
  } 
  else if (step === 3) {
    icon.innerText = "💌";
    title.innerText = "goodluck in your studies!!";
    message.innerText = "trust me, kau tk seteruk dari apa yg kau fikir pun";
    btn.innerText = "hehe:>";
    } 
  else if (step === 4) {
    icon.innerText = "🔥";
    title.innerText = "nak tanyaa";
    message.innerText = "buat streak tiktok jomm?🫣(nada tidak memaksa)";
    btn.innerText = "kalau kau tknk pun xpe";
  } 
  else if (step === 5) {
    icon.innerText = "👨🏻‍🏫";
    title.innerText = "cikgu icee";
    message.innerText = "jumpa kat ipg nantiiiiii ";
    btn.innerText = "19 more days";
    } 
  else if (step === 6) {
    icon.innerText = "🚗";
    title.innerText = "maafla menggangu kehidupan kau AHHAHAH";
    message.innerText = "aku bosan+taktau nk buat apa";
    btn.innerText = "last lasttt";
  } 
  else if (step === 7) { // <--- DAH FIX KAT SINI (Tambah syarat step === 5)
    icon.innerText = "💖";
    title.innerText = "bye icee🧊";
    message.innerText = "thanks bukak link ni, now aku dh boleh hack email kau";
    btn.innerText = "jkjk";
    btn.style.display = "inline-block"; 
  } 
  else {
    // Bila tekan "Ulang Semula 🔄", reset balik ke awal
    step = 0;
    icon.innerText = "👋🏻";
    title.innerText = "haiii 🧊";
    message.innerText = "aku saje nak test github ni dari: nik yg imut";
    btn.innerText = "Next";
    btn.style.display = "inline-block";
  }
}
