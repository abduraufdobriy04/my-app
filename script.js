
// ================================
// SAHIFALARNI OLISH
// ================================

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const flowers = document.getElementById("flowers");
const final = document.getElementById("final");

// Tugmalar
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const finalBtn = document.getElementById("finalBtn");


// ================================
// SAHIFANI ALMASHTIRISH
// ================================

function showScreen(screen) {

    intro.classList.remove("active");
    main.classList.remove("active");
    flowers.classList.remove("active");
    final.classList.remove("active");

    screen.classList.add("active");
}


// ================================
// "HIKOYANI BOSHLASH"
// ================================

startBtn.onclick = function () {

    showScreen(main);

};


// ================================
// "DAVOMINI KO'RISH"
// ================================

nextBtn.onclick = function () {

    showScreen(flowers);

};


// ================================
// "OXIRGI SAHIFAGA O'TISH"
// ================================

finalBtn.onclick = function () {

    showScreen(final);

};


// ================================
// YULDUZLAR
// ================================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 3 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    star.style.animationDelay =
        Math.random() * 2 + "s";

    starsContainer.appendChild(star);
}


// ================================
// UCHUVCHI YURAKLAR
// ================================

const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom =
        "-50px";

    const size =
        Math.random() * 20 + 12;

    heart.style.fontSize =
        size + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, duration * 1000);
}


// Har 700 millisekundda yurak
setInterval(createHeart, 700);


// Birinchi yuraklar
for (let i = 0; i < 8; i++) {

    setTimeout(createHeart, i * 300);

}

