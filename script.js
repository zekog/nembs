const targetDate = new Date(2024, 3, 7, 11, 30, 00); // Ustaw datę premiery
const countdownContainer = document.getElementById("countdown-container");
const outNowText = document.getElementById("out-now-text");
const coverImage = document.getElementById("cover-image");
const linkContainer = document.getElementById("links-container");
const Title = document.getElementById("title");
const mainContainer = document.getElementById("main-container");

    // Dodanie animacji FadeIn z diagnostyką
    console.log("Dodawanie klas 'fadeIn'..."); // Diagnostyka
    countdownContainer.classList.add("fadeIn");
    outNowText.classList.add("fadeIn");
    coverImage.classList.add("fadeIn");
    linkContainer.classList.add("fadeIn");
    Title.classList.add("fadeIn");

const updateCountdown = () => {
  const currentDate = new Date();
  const diff = targetDate - currentDate;

  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days-left").textContent = daysLeft;
  document.getElementById("hours-left").textContent = hoursLeft;
  document.getElementById("minutes-left").textContent = minutesLeft;
  document.getElementById("seconds-left").textContent = secondsLeft;

  // Sprawdź, czy odliczanie zakończyło się
    if (diff <= 0) {
    countdownContainer.style.display = "none";
    outNowText.style.display = "block";

    // Dodanie animacji FadeIn z diagnostyką
    console.log("Dodawanie klas 'fadeIn'..."); // Diagnostyka
    countdownContainer.classList.add("fadeIn");
    outNowText.classList.add("fadeIn");
    coverImage.classList.add("fadeIn");
    linkContainer.classList.add("fadeIn");
    Title.classList.add("fadeIn");
  }
};

setInterval(updateCountdown, 1000);
updateCountdown(); 
