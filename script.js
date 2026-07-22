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
    title.innerText = "btw, aku panggil kau ice sbb ice dgn izz cam sama";
    message.innerText = "MUAHAHAHAHA🫣";
    btn.innerText = "Tekan Sini ➡️";
  } 
  else if (step === 2) {
    icon.innerText = "🫵";
    title.innerText = "thanks tau";
    message.innerText = "sbb bagi aku peluang untuk suka kau ";
    btn.innerText = "MUHEHEHE";
  } 
  else if (step === 3) {
    icon.innerText = "💌";
    title.innerText = "goodluck on your study!!";
    message.innerText = "trust me, kau tk seteruk dari apa yg kau fikir pun";
    btn.innerText = "biar lagu berbicara ah";
  } 
  else if (step === 4) {
    icon.innerText = "👨🏻‍🏫";
    title.innerText = "bye iceeeeeee";
    message.innerText = "jumpa kat ipg nantiiiiii ";
    btn.innerText = "19 more days";
    } 
  else if (step === 5) {
    icon.innerText = "🚗";
    title.innerText = "maafla menggangu kehidupan kau AHHAHAH";
    message.innerText = "aku bosan+taktau nk buat apa";
    btn.innerText = "last lasttt";
  } 
  else if (step === 6) { // <--- DAH FIX KAT SINI (Tambah syarat step === 5)
    icon.innerText = "💖";
    title.innerText = "Hehe That's All!";
    message.innerText = "thanks bukak link ni, now aku dh boleh hack email kau";
    btn.innerText = "jkjk";
    btn.style.display = "inline-block"; 
  } 
  else {
    // Bila tekan "Ulang Semula 🔄", reset balik ke awal
    step = 0;
    icon.innerText = "👋🏻";
    title.innerText = "haiii 🧊";
    message.innerText = "aku saje nak test github ni";
    btn.innerText = "Next";
    btn.style.display = "inline-block";
  }
}
