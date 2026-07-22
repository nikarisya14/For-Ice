let step = 0;
let isPlaying = false;

// Audio Direct Stream Universal (MP3 Reliable Cloud Source)
const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3";

function startMusic() {
  let music = document.getElementById("bgMusic");
  if (!music.src) {
    music.src = audioUrl;
  }
  
  music.play().then(() => {
    isPlaying = true;
  }).catch(err => {
    console.log("Autoplay blocked, waiting for user click:", err);
  });
}

function toggleMusic() {
  let music = document.getElementById("bgMusic");
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    startMusic();
  }
}

function nextPage() {
  let icon = document.getElementById("icon");
  let title = document.getElementById("title");
  let message = document.getElementById("message");
  let btn = document.getElementById("nextBtn");

  // Tekan butang pertama kali -> Paksa audio main melalui user gesture
  if (step === 0) {
    startMusic();
  }

  step++;

  if (step === 1) {
    icon.innerText = "✨";
    title.innerText = "Ada pesanan khas...";
    message.innerText = "Saja nak hantar link ni kat kau 🫣";
    btn.innerText = "Tekan Sini ➡️";
  } 
  else if (step === 2) {
    icon.innerText = "🙈";
    title.innerText = "Sebenarnya kan...";
    message.innerText = "Kau selalu buat aku senyum sorang-sorang tahu tak?";
    btn.innerText = "Lagi... 💖";
  } 
  else if (step === 3) {
    icon.innerText = "💌";
    title.innerText = "Thank You!";
    message.innerText = "Terima kasih sebab sentiasa ada dan buat hari-hari aku lebih bermakna.";
    btn.innerText = "Wish Khas ✨";
  } 
  else if (step === 4) {
    icon.innerText = "🌸";
    title.innerText = "Wish Untuk Kau";
    message.innerText = "Semoga segala urusan kau sentiasa dipermudahkan dan bahagia selalu!";
    btn.innerText = "Habis dah! ❤️";
  } 
  else {
    icon.innerText = "💖";
    title.innerText = "Hehe That's All!";
    message.innerText = "Send screenshot ni kat aku kalau dah habis baca 😉";
    btn.style.display = "none";
  }
}
