// script.js

/* =========================
   VISITOR COUNTER (LOCAL)
========================= */

let visits = localStorage.getItem("regicidio_visits");

if (!visits) {
  visits = 123;
}

visits = parseInt(visits) + 1;

localStorage.setItem("regicidio_visits", visits);

document.getElementById("count").textContent =
String(visits).padStart(6, "0");


/* =========================
   CUSTOM CURSOR †
========================= */

const cursor = document.createElement("div");
cursor.classList.add("cursor");
cursor.innerHTML = "†";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + 12 + "px";
  cursor.style.top = e.clientY + 8 + "px";
});


/* =========================
   FLOATING PARTICLES
========================= */

const symbols = ["✦", "†", "⛧"];
const container = document.getElementById("particles");

function createParticle() {

  const p = document.createElement("span");

  p.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  p.style.position = "absolute";
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.top = window.innerHeight + "px";

  p.style.color = Math.random() > 0.7 ? "#ffb4d8" : "#ffffff";
  p.style.fontSize = (10 + Math.random() * 10) + "px";

  p.style.opacity = "0.22";
  p.style.transition = "transform 8s linear, opacity 8s linear";

  container.appendChild(p);

  setTimeout(() => {
    p.style.transform =
      `translateY(-${window.innerHeight + 200}px)`;
    p.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    p.remove();
  }, 8200);
}

setInterval(createParticle, 1400);


/* =========================
   AUTOPLAY FIX
========================= */

const audio = document.getElementById("ambient");

document.addEventListener("click", () => {
  audio.play().catch(() => {});
}, { once:true });


// CARD PARALLAX SMOOTH

const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (e.clientX - centerX) / centerX;
  const moveY = (e.clientY - centerY) / centerY;

  const rotateY = moveX * 4;   // antes estaba muy alto
  const rotateX = moveY * -3;

  card.style.transform = `
    perspective(1000px)
    rotateY(${rotateY}deg)
    rotateX(${rotateX}deg)
    translateY(-2px)
  `;

});

document.addEventListener("mouseleave", () => {
  card.style.transform = `
    perspective(1000px)
    rotateY(0deg)
    rotateX(0deg)
    translateY(0px)
  `;
});