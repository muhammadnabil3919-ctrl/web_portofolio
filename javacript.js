let skor = 0;
let waktu = 10;
let gameAktif = false;
let timer;

const kucing = document.getElementById("kucing");
const skorText = document.getElementById("skor");
const waktuText = document.getElementById("waktu");

function mulaiGame() {
    skor = 0;
    waktu = 10;
    gameAktif = true;

    skorText.textContent = skor;
    waktuText.textContent = waktu;

    pindahkanKucing();

    clearInterval(timer);

    timer = setInterval(function() {
        waktu--;

        waktuText.textContent = waktu;

        if (waktu <= 0) {
            clearInterval(timer);
            gameAktif = false;

            alert(`Game selesai! Skor: ${skor}`);
        }
    }, 1000);
}

kucing.addEventListener("click", function() {
    if (!gameAktif) {
        return;
    }

    skor++;

    skorText.textContent = skor;

    pindahkanKucing();
});

function pindahkanKucing() {
    const area = document.getElementById("game");

    const x = Math.random() * (area.clientWidth - 60);
    const y = Math.random() * (area.clientHeight - 60);

    kucing.style.left = x + "px";
    kucing.style.top = y + "px";
}
let skor = 0;
let waktu = 30;
let nyawa = 3;
let level = 1;

let gameAktif = false;
let timer;

let highScore = localStorage.getItem("highScore") || 0;

// Mengambil elemen HTML

const kucing = document.getElementById("kucing");
const game = document.getElementById("game");

const skorText = document.getElementById("skor");
const waktuText = document.getElementById("waktu");
const nyawaText = document.getElementById("nyawa");
const levelText = document.getElementById("level");

const pesan = document.getElementById("pesan");
const tombolMulai = document.getElementById("mulai");

const highScoreText = document.getElementById("highScore");


// Menampilkan High Score

highScoreText.textContent = highScore;


// ==========================
// MULAI GAME
// ==========================

function mulaiGame() {

    skor = 0;
    waktu = 30;
    nyawa = 3;
    level = 1;

    gameAktif = true;

    skorText.textContent = skor;
    waktuText.textContent = waktu;
    nyawaText.textContent = nyawa;
    levelText.textContent = level;

    pesan.style.display = "none";

    kucing.style.display = "block";

    tombolMulai.textContent = "🔄 MAIN LAGI";

    clearInterval(timer);

    pindahkanKucing();

    // Timer

    timer = setInterval(function () {

        waktu--;

        waktuText.textContent = waktu;

        if (waktu <= 0) {

            selesaiGame();

        }

    }, 1000);
}


// ==========================
// KLIK KUCING
// ==========================

kucing.addEventListener("click", function () {

    if (!gameAktif) {
        return;
    }

    // Tambah skor

    skor++;

    skorText.textContent = skor;


    // Setiap 10 skor naik level

    if (skor % 10 === 0) {

        level++;

        levelText.textContent = level;

        alert("🎉 LEVEL " + level + "!");
    }


    // Pindahkan kucing

    pindahkanKucing();

});


// ==========================
// PINDAHKAN KUCING
// ==========================

function pindahkanKucing() {

    const lebarGame = game.clientWidth;
    const tinggiGame = game.clientHeight;

    const ukuranKucing = kucing.offsetWidth;

    const x =
        Math.random() *
        (lebarGame - ukuranKucing);

    const y =
        Math.random() *
        (tinggiGame - ukuranKucing);

    kucing.style.left = x + "px";
    kucing.style.top = y + "px";
}


// ==========================
// GAME SELESAI
// ==========================

function selesaiGame() {

    clearInterval(timer);

    gameAktif = false;

    kucing.style.display = "none";

    pesan.style.display = "block";

    pesan.innerHTML =
        "🎮 GAME SELESAI!<br><br>" +
        "🏆 Skor kamu: " + skor;


    // Cek High Score

    if (skor > highScore) {

        highScore = skor;

        localStorage.setItem(
            "highScore",
            highScore
        );

        highScoreText.textContent = highScore;

        pesan.innerHTML +=
            "<br><br>🥳 HIGH SCORE BARU!";
    }
}
let skor = 0;
let nyawa = 3;
let level = 1;
let waktu = 60;

let gameAktif = false;

let posisiPlayer = 50;

let timer;
let enemyTimer;
let gameLoop;

let highScore =
    localStorage.getItem("spaceHighScore") || 0;


// ==========================
// ELEMENT HTML
// ==========================

const game = document.getElementById("game");

const player =
    document.getElementById("player");

const pesan =
    document.getElementById("pesan");

const skorText =
    document.getElementById("skor");

const nyawaText =
    document.getElementById("nyawa");

const levelText =
    document.getElementById("level");

const waktuText =
    document.getElementById("waktu");

const tombolMulai =
    document.getElementById("mulai");

const highScoreText =
    document.getElementById("highScore");


highScoreText.textContent = highScore;


// ==========================
// MULAI GAME
// ==========================

function mulaiGame() {

    skor = 0;

    nyawa = 3;

    level = 1;

    waktu = 60;

    posisiPlayer = 50;

    gameAktif = true;


    skorText.textContent = skor;

    nyawaText.textContent = nyawa;

    levelText.textContent = level;

    waktuText.textContent = waktu;


    pesan.style.display = "none";

    player.style.display = "block";

    tombolMulai.textContent = "🔄 MAIN LAGI";


    // Bersihkan musuh lama
    document
        .querySelectorAll(".enemy, .bullet, .boss")
        .forEach(element => element.remove());


    clearInterval(timer);

    clearInterval(enemyTimer);


    // TIMER
    timer = setInterval(() => {

        waktu--;

        waktuText.textContent = waktu;


        if (waktu <= 0) {

            selesaiGame();

        }

    }, 1000);


    // BUAT MUSUH
    enemyTimer = setInterval(() => {

        if (gameAktif) {

            buatMusuh();

        }

    }, 1200);


    // Loop game
    gameLoop = requestAnimationFrame(updateGame);

}


// ==========================
// GERAK PEMAIN
// ==========================

function gerakKiri() {

    if (!gameAktif) return;

    posisiPlayer -= 5;

    if (posisiPlayer < 5) {

        posisiPlayer = 5;

    }

    player.style.left = posisiPlayer + "%";
}


function gerakKanan() {

    if (!gameAktif) return;

    posisiPlayer += 5;

    if (posisiPlayer > 95) {

        posisiPlayer = 95;

    }

    player.style.left = posisiPlayer + "%";
}


// ==========================
// KEYBOARD
// ==========================

document.addEventListener("keydown", function(event) {

    if (!gameAktif) return;


    if (
        event.key === "ArrowLeft" ||
        event.key.toLowerCase() === "a"
    ) {

        gerakKiri();

    }


    if (
        event.key === "ArrowRight" ||
        event.key.toLowerCase() === "d"
    ) {

        gerakKanan();

    }


    if (
        event.key === " " ||
        event.key === "ArrowUp"
    ) {

        event.preventDefault();

        tembak();

    }

});


// ==========================
// TEMBAK
// ==========================

function tembak() {

    if (!gameAktif) return;


    const bullet =
        document.createElement("div");

    bullet.classList.add("bullet");


    const playerRect =
        player.getBoundingClientRect();

    const gameRect =
        game.getBoundingClientRect();


    const x =
        playerRect.left -
        gameRect.left +
        playerRect.width / 2 -
        3;


    const y =
        playerRect.top -
        gameRect.top -
        15;


    bullet.style.left = x + "px";

    bullet.style.top = y + "px";


    game.appendChild(bullet);


    let posisiY = y;


    const bulletMove =
        setInterval(() => {

            posisiY -= 10;

            bullet.style.top =
                posisiY + "px";


            // Jika keluar layar
            if (posisiY < -30) {

                clearInterval(bulletMove);

                bullet.remove();

            }


            // Cek tabrakan
            cekTembakan(
                bullet,
                bulletMove
            );


        }, 20);

}


// ==========================
// BUAT MUSUH
// ==========================

function buatMusuh() {

    const enemy =
        document.createElement("div");

    enemy.classList.add("enemy");

    enemy.innerHTML = "👾";


    const ukuran =
        game.clientWidth - 50;


    const posisiX =
        Math.random() * ukuran;


    enemy.style.left =
        posisiX + "px";


    enemy.style.top = "-50px";


    game.appendChild(enemy);


    let posisiY = -50;


    const kecepatan =
        2 + level * 0.5;


    const enemyMove =
        setInterval(() => {

            if (!gameAktif) {

                clearInterval(enemyMove);

                enemy.remove();

                return;

            }


            posisiY += kecepatan;

            enemy.style.top =
                posisiY + "px";


            // Musuh sampai bawah
            if (posisiY > game.clientHeight - 70) {

                clearInterval(enemyMove);

                enemy.remove();

                kehilanganNyawa();

            }


            // Cek tabrakan dengan player
            if (tabrakan(enemy, player)) {

                clearInterval(enemyMove);

                enemy.remove();

                kehilanganNyawa();

            }

        }, 30);


    enemy.dataset.move =
        "true";

}


// ==========================
// CEK PELURU
// ==========================

function cekTembakan(
    bullet,
    bulletMove
) {

    const musuh =
        document.querySelectorAll(
            ".enemy, .boss"
        );


    musuh.forEach(enemy => {

        if (
            tabrakan(
                bullet,
                enemy
            )
        ) {

            clearInterval(bulletMove);

            bullet.remove();


            // Ledakan
            ledakan(
                enemy.offsetLeft,
                enemy.offsetTop
            );


            enemy.remove();


            skor += 10;


            skorText.textContent =
                skor;


            cekLevel();

        }

    });

}


// ==========================
// TABRAKAN
// ==========================

function tabrakan(a, b) {

    const rectA =
        a.getBoundingClientRect();

    const rectB =
        b.getBoundingClientRect();


    return !(
        rectA.right < rectB.left ||
        rectA.left > rectB.right ||
        rectA.bottom < rectB.top ||
        rectA.top > rectB.bottom
    );

}


// ==========================
// LEDAKAN
// ==========================

function ledakan(x, y) {

    const explosion =
        document.createElement("div");

    explosion.classList.add(
        "explosion"
    );

    explosion.innerHTML = "💥";


    explosion.style.left =
        x + "px";

    explosion.style.top =
        y + "px";


    game.appendChild(explosion);


    setTimeout(() => {

        explosion.remove();

    }, 500);

}


// ==========================
// KEHILANGAN NYAWA
// ==========================

function kehilanganNyawa() {

    if (!gameAktif) return;


    nyawa--;


    nyawaText.textContent =
        nyawa;


    // Efek layar
    game.style.transform =
        "translateX(5px)";


    setTimeout(() => {

        game.style.transform =
            "translateX(-5px)";

    }, 50);


    setTimeout(() => {

        game.style.transform =
            "translateX(0)";

    }, 100);


    if (nyawa <= 0) {

        selesaiGame();

    }

}


// ==========================
// LEVEL
// ==========================

function cekLevel() {

    const levelBaru =
        Math.floor(skor / 100) + 1;


    if (
        levelBaru > level
    ) {

        level =
            levelBaru;


        levelText.textContent =
            level;


        tampilkanLevel();

    }

}


// ==========================
// PESAN LEVEL
// ==========================

function tampilkanLevel() {

    const pesanLevel =
        document.createElement("div");


    pesanLevel.style.position =
        "absolute";

    pesanLevel.style.top =
        "40%";

    pesanLevel.style.left =
        "50%";

    pesanLevel.style.transform =
        "translate(-50%, -50%)";

    pesanLevel.style.fontSize =
        "35px";

    pesanLevel.style.fontWeight =
        "bold";

    pesanLevel.style.zIndex =
        "50";

    pesanLevel.innerHTML =
        "⭐ LEVEL " +
        level +
        "!";


    game.appendChild(
        pesanLevel
    );


    setTimeout(() => {

        pesanLevel.remove();

    }, 1000);


    // Boss setiap level 5
    if (
        level % 5 === 0
    ) {

        buatBoss();

    }

}


// ==========================
// BOSS
// ==========================

function buatBoss() {

    const boss =
        document.createElement("div");

    boss.classList.add("boss");

    boss.innerHTML = "👹";


    boss.style.left =
        "50%";

    boss.style.transform =
        "translateX(-50%)";

    boss.style.top =
        "-100px";


    game.appendChild(boss);


    let posisiY = -100;


    const bossMove =
        setInterval(() => {

            posisiY += 2;

            boss.style.top =
                posisiY + "px";


            if (
                posisiY >
                game.clientHeight - 150
            ) {

                clearInterval(
                    bossMove
                );

                boss.remove();

                kehilanganNyawa();

            }


            if (
                !document.body.contains(
                    boss
                )
            ) {

                clearInterval(
                    bossMove
                );

            }

        }, 30);

}


// ==========================
// UPDATE GAME
// ==========================

function updateGame() {

    if (!gameAktif) return;


    // Buat loop terus berjalan
    gameLoop =
        requestAnimationFrame(
            updateGame
        );

}


// ==========================
// GAME SELESAI
// ==========================

function selesaiGame() {

    if (!gameAktif) return;


    gameAktif = false;


    clearInterval(timer);

    clearInterval(enemyTimer);


    player.style.display =
        "none";


    document
        .querySelectorAll(
            ".enemy, .bullet, .boss"
        )
        .forEach(element => {

            element.remove();

        });


    pesan.style.display =
        "block";


    pesan.innerHTML =
        "💥 GAME OVER!<br><br>" +
        "🏆 Skor kamu: " +
        skor;


    // HIGH SCORE
    if (
        skor > highScore
    ) {

        highScore =
            skor;


        localStorage.setItem(
            "spaceHighScore",
            highScore
        );


        highScoreText.textContent =
            highScore;


        pesan.innerHTML +=
            "<br><br>🥳 HIGH SCORE BARU!";

    }

}