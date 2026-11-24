/* =========================================================
   1. O‘QUVCHILAR RO‘YXATI
   ========================================================= */

const studentNames = [
    "Abdimalikova Mohinur",
    "Abdimavlanov Muhammadali",
    "Abdukarimova Rayhon",
    "Abdumannatov Lazizbek",
    "Baratov Jahongir",
    "Irsmuhamadov Abdishukur",
    "Madrahimov Shohmalik",
    "Mominjanova Guldona",
    "Muhammataliev Ibrohim",
    "Nasriddinova Guliroza",
    "Nizamtaeva Gavharoy",
    "Niyazov Elnur",
    "Ravshanbekova Mahliyaxon",
    "Saydirahimova Muxlisa",
    "Ulug‘bekova Charos"
];


/*
  SHAXSIY SURATLAR SONI

  Har bir o‘quvchi uchun nechta shaxsiy surat borligini shu yerda belgilaysiz.

  Masalan:
  1: 6  -> 1a.png dan 1f.png gacha
  2: 10 -> 2a.png dan 2j.png gacha
  3: 11 -> 3a.png dan 3k.png gacha

  Agar o‘quvchi uchun son ko‘rsatilmasa, standart 6 ta surat chiqadi.
*/

const photoCounts = {
    1: 6,
    2: 6,
    3: 6,
    4: 6,
    5: 6,
    6: 6,
    7: 6,
    8: 6,
    9: 6,
    10: 6,
    11: 6,
    12: 6,
    13: 6,
    14: 6,
    15: 6
};


/* =========================================================
   2. O‘QUVCHILAR MA’LUMOTLARI
   Har bir o‘quvchining ma’lumotlarini ID orqali o‘zgartiring.
   ========================================================= */

const studentInfo = {

    1: {
        about: "Men Abdimalikova Mohinur 2010 yil iyunning 28-sanasida tug'ilganman.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Matematika",
        hobbies: "Kitob o‘qish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    2: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Informatika",
        hobbies: "Dasturlash",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    3: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Ingliz tili",
        hobbies: "Rasm chizish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    4: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Tarix",
        hobbies: "Sport",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    5: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Biologiya",
        hobbies: "Kitob o‘qish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    6: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Fizika",
        hobbies: "Shaxmat",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    7: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Matematika",
        hobbies: "Sport",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    8: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Ona tili",
        hobbies: "Rasm chizish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    9: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Informatika",
        hobbies: "Dasturlash",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    10: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Kimyo",
        hobbies: "Kitob o‘qish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    11: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Ingliz tili",
        hobbies: "Musiqa",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    12: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Geografiya",
        hobbies: "Sayohat",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    13: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Adabiyot",
        hobbies: "Kitob o‘qish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    14: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Matematika",
        hobbies: "Sport",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    },

    15: {
        about: "Men haqimda ma’lumot.",
        interests: "Qiziqishlarim.",
        favoriteSubject: "Ingliz tili",
        hobbies: "Rasm chizish",
        achievements: "Yutuqlarim.",
        career: "Kelajakdagi kasbim.",
        dream: "Orzularim.",
        goal: "Maqsadlarim.",
        memories: "Xotiralarim."
    }

};


/* O‘quvchilar ro‘yxatini ma’lumotlar bilan birlashtirish */

const students = studentNames.map((name, index) => ({
    id: index + 1,
    name: name,
    ...studentInfo[index + 1]
}));


/* =========================================================
   3. SINFDOSHLAR GALEREYASI
   Yangi surat qo‘shish uchun bitta qator qo‘shing.
   ========================================================= */

const classmates = [
    { photo: "sinf1.png",  title: "8-Mart bayrami" },
    { photo: "sinf2.png",  title: "Yangi yil 2027" },
    { photo: "sinf3.png",  title: "Sinf xonasida" },
    { photo: "sinf4.png",  title: "Sayohat vaqtida" },
    { photo: "sinf5.png",  title: "So'nggi qo'ng'iroq" },
    { photo: "sinf6.png",  title: "Ochiq dars jarayoni" },
    { photo: "sinf7.png",  title: "Sport musobaqasi" },
    { photo: "sinf8.png",  title: "Ekskursiya" },
    { photo: "sinf9.png",  title: "Bayram tadbiri" },
    { photo: "sinf10.png", title: "Kuzgi tabiat" },
    { photo: "sinf11.png", title: "Navro'z bayrami" },
    { photo: "sinf12.png", title: "Olimpiada kuni" },
    { photo: "sinf13.png", title: "Teatrga sayohat" },
    { photo: "sinf14.png", title: "Kutubxonada" },
    { photo: "sinf15.png", title: "1-sentabr - Bilimlar kuni" },
    { photo: "sinf16.png", title: "Sinf yig'ilishi" },
    { photo: "sinf17.png", title: "Iqtidorli o'quvchilar" },
    { photo: "sinf18.png", title: "Fotoseans" },
    { photo: "sinf19.png", title: "Xotira daftari" },
    { photo: "sinf20.png", title: "Bizning ahil sinf" }
];

/*
  HAR BIR ALBOM ICHIDA NECHTA SURAT BORLIGI

  Ko'rsatilmasa, standart 6 ta chiqadi:
  sinf1a.png, sinf1b.png, sinf1c.png, sinf1d.png, sinf1e.png, sinf1f.png

  Boshqacha son kerak bo'lsa, shu yerga yozing. Masalan:
  sinf2: 10  ->  sinf2a.png dan sinf2j.png gacha
*/
const albumCounts = {
    // sinf1: 6,
    // sinf2: 10,
};

const DEFAULT_ALBUM_COUNT = 6;


/* =========================================================
   4. MUALLIMLAR
   ========================================================= */

const teachers = [
    {
        role: "Maktabimiz Direkto'ri",
        name: "Nishanqulo'v Valihan",
        image: "d1.png"
    },
    {
        role: `Maktambimiz Tarbia zavuchi :
        Rus Tili va Adabiyot Ustozimiz`,
        name: "Eshanqulo'va Parohat",
        image: "z1.png"
    },
    {
        role: "Direkto'r O'rin Bosari : Himiya Ustozimiz",
        name: "Baroato'v Abdullazhon",
        image: "z2.png"
    },
    {
        role: "Innovatsiya zavuchi",
        name: "Nishanqulo'v Marufzhon",
        image: "z3.png"
    },
    {
        role: "Sinf rahbari",
        name: "Mutalo‘va Gulnora",
        image: "m1.png"
    },
    {
        role: "Boshlang‘ich sinf o‘qituvchisi V-sinfning",
        name: "Karibaeva Oydin",
        image: "m2.png"
    },
    {
        role: "Boshlang‘ich sinf o‘qituvchisi B-sinfning",
        name: "Hudaybergeno‘va Muhlisa",
        image: "m3.png"
    },
    {
        role: "Boshlang‘ich sinf o‘qituvchisi A-sinfning",
        name: "Barato'va Qizilgul",
        image: "m4.png"
    },
    {
        role: "Info'rmatika Ustozimiz",
        name: "Barato'v Sunnat",
        image: "u1.png"
    },
    {
        role: "Qozoq Tili va Adabiyot Ustozimiz",
        name: "Zhandarbaev Muhit",
        image: "u2.png"
    },
    {
        role: "Matem Savothonlik Ustozimiz",
        name: "Abdirahimo'v Muslimbek",
        image: "u3.png"
    },
    {
        role: "Algebra va Geameetriya Ustozimiz",
        name: "Касымова Наргиза",
        image: "u4.png"
    },
    {
        role: "Python Ilovalashtirshdagi Ustozimiz",
        name: "Azamkhano'v Suhrob",
        image: "u5.png"
    },
    {
        role: "Fizika Ustozimiz",
        name: "Barato'v Oyatulloh",
        image: "u6.png"
    },
    {
        role: "Geografiya Ustozimiz",
        name: "Abdiganieva Shoira",
        image: "u7.png"
    },
    {
        role: "Qozoqiston va Jahon Tarih Ustozimiz",
        name: "Akramo'v Sardor",
        image: "u8.png"
    },
    {
        role: "Құқық Ustozimiz",
        name: "Nuriddino'v Adil",
        image: "u9.png"
    },
    {
        role: "Ingiliz Tili Ustozimiz",
        name: "Axmeto'va Nigora",
        image: "u10.png"
    },
    {
        role: "Biologiya Ustozimiz",
        name: "Astano'va Gavharoy",
        image: "u11.png"
    },
    {
        role: "Jismoniy Tarbia Ustozimiz",
        name: "Imamo'v Vohitzhan",
        image: "u12.png"
    },
    {
        role: "Birinchi Harbiy Tayorgarlikdagi Ustozim",
        name: "Imamo'v Muzaffar",
        image: "u13.png"
    }
];


/* =========================================================
   5. YORDAMCHI FUNKSIYALAR
   ========================================================= */

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

/* HTML atributlari ichiga xavfsiz matn qo'yish */
function escapeAttr(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/* O'quvchining shaxsiy surat nomlari: 1a.png, 1b.png ... */
function getPersonalPhotoNames(studentId) {
    const count = photoCounts[studentId] ?? 6;

    return Array.from({ length: count }, (_, index) => {
        return `${studentId}${LETTERS[index]}.png`;
    });
}


/* =========================================================
   6. SAHIFALARNI ALMASHTIRISH
   ========================================================= */

function showPage(pageId) {
    const target = document.getElementById(pageId);

    if (!target) return;

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    target.classList.add("active");

    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.toggle("active", button.dataset.page === pageId);
    });

    document.getElementById("nav").classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   7. O‘QUVCHI KARTALARI
   ========================================================= */

function createStudentCards() {
    const container = document.getElementById("studentList");

    container.innerHTML = students.map(student => `
        <button class="student-card" data-student-id="${student.id}">

            <img src="${student.id}.png"
                 alt="${escapeAttr(student.name)}"
                 onerror="this.style.opacity='0.15'">

            <div class="student-card-info">
                <span>O‘QUVCHI ${String(student.id).padStart(2, "0")}</span>
                <h3>${student.name}</h3>
            </div>

        </button>
    `).join("");
}


/* =========================================================
   8. O‘QUVCHI PROFILI
   ========================================================= */

function openProfile(id) {
    const student = students.find(item => item.id === Number(id));

    if (!student) return;

    const profile = document.getElementById("profileContent");
    const personalPhotos = getPersonalPhotoNames(student.id);

    profile.innerHTML = `
        <div class="profile-header">

            <img class="profile-photo"
                 src="${student.id}.png"
                 alt="${escapeAttr(student.name)}">

            <div>
                <span class="eyebrow">
                    O‘QUVCHI ${String(student.id).padStart(2, "0")}
                </span>

                <h1>${student.name}</h1>
            </div>

        </div>

        <div class="profile-sections">

            <article class="profile-info-card">
                <h3>1. Men haqimda</h3>
                <p>${student.about}</p>
            </article>

            <article class="profile-info-card">
                <h3>2. Qiziqishlarim</h3>
                <p>
                    ${student.interests}

                    Sevimli fanim: ${student.favoriteSubject}

                    Mashg‘ulotlarim: ${student.hobbies}
                </p>
            </article>

            <article class="profile-info-card">
                <h3>3. Yutuqlarim</h3>
                <p>${student.achievements}</p>
            </article>

            <article class="profile-info-card">
                <h3>4. Orzularim va maqsadlarim</h3>
                <p>
                    Kelajakdagi kasbim: ${student.career}

                    Orzum: ${student.dream}

                    Maqsadim: ${student.goal}
                </p>
            </article>

            <div class="personal-gallery">
                <h3>5. Suratlar</h3>

                <div class="personal-photo-grid">

                    ${personalPhotos.map(photo => `
                        <img class="personal-photo"
                             src="${photo}"
                             alt="${escapeAttr(student.name)} surati"
                             data-image="${photo}"
                             data-caption="${escapeAttr(student.name)}"
                             onerror="this.style.display='none'">
                    `).join("")}

                </div>
            </div>

        </div>
    `;

    showPage("profile");
}


/* =========================================================
   9. SINFDOSHLAR GALEREYASI VA ALBOMI
   ========================================================= */

/* Asosiy galereya (20 ta surat) */
function showClassmatesGallery() {
    const gallery = document.getElementById("classmatesGallery");

    if (!gallery) return;

    gallery.innerHTML = classmates.map(item => {
        const title = escapeAttr(item.title);
        const base = item.photo.replace(/\.[^.]+$/, ""); // sinf1.png -> sinf1

        return `
            <button class="memory-item"
                    data-album="${base}"
                    data-title="${title}">

                <img src="${item.photo}"
                     alt="${title}"
                     onerror="this.parentElement.style.display='none'">

                <span class="memory-caption">${title}</span>

            </button>
        `;
    }).join("");
}

/* Albom sahifasi (sinf1a.png, sinf1b.png ...) */
function openAlbum(base, title) {
    const count = albumCounts[base] ?? DEFAULT_ALBUM_COUNT;
    const safeTitle = escapeAttr(title);

    document.getElementById("albumTitle").textContent = title;

    document.getElementById("albumGrid").innerHTML = Array.from(
        { length: count },
        (_, index) => {
            const photo = `${base}${LETTERS[index]}.png`;
            const caption = `${safeTitle} — ${index + 1}`;

            return `
                <button class="memory-item"
                        data-image="${photo}"
                        data-caption="${caption}">

                    <img src="${photo}"
                         alt="${caption}"
                         onerror="this.parentElement.style.display='none'">

                    <span class="memory-caption">${caption}</span>

                </button>
            `;
        }
    ).join("");

    showPage("classmatesAlbum");

    // Menyuda "Sinfdoshlar bilan" belgilangan holda qolsin
    const navButton = document.querySelector('.nav-link[data-page="classmates"]');
    if (navButton) navButton.classList.add("active");
}


/* =========================================================
   10. MUALLIMLAR
   ========================================================= */

function showTeachers() {
    const container = document.getElementById("teacherList");

    container.innerHTML = teachers.map(teacher => `
        <article class="teacher-card">

            <img src="${teacher.image}"
                 alt="${escapeAttr(teacher.name)}">

            <div class="teacher-info">
                <span>${teacher.role}</span>
                <h2>${teacher.name}</h2>
            </div>

        </article>
    `).join("");
}


/* =========================================================
   11. SURATNI KATTALASHTIRISH (LIGHTBOX)
   ========================================================= */

function openLightbox(src, caption) {
    document.getElementById("lightboxImage").src = src;
    document.getElementById("lightboxCaption").textContent = caption;
    document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("open");
}


/* =========================================================
   12. TUGMALAR (bitta umumiy click tinglovchi)
   ========================================================= */

document.addEventListener("click", function (event) {

    const pageButton    = event.target.closest("[data-page]");
    const goButton      = event.target.closest("[data-go]");
    const studentButton = event.target.closest("[data-student-id]");
    const albumButton   = event.target.closest("[data-album]");
    const imageButton   = event.target.closest("[data-image]");

    if (pageButton) {
        showPage(pageButton.dataset.page);
    }

    if (goButton) {
        event.preventDefault();
        showPage(goButton.dataset.go);
    }

    if (studentButton) {
        openProfile(studentButton.dataset.studentId);
    }

    if (albumButton) {
        openAlbum(albumButton.dataset.album, albumButton.dataset.title);
    }

    if (imageButton) {
        openLightbox(
            imageButton.dataset.image,
            imageButton.dataset.caption
        );
    }
});


/* Telefon menyusi */

document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("open");
});


/* Lightbox yopish */

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);

document.getElementById("lightbox").addEventListener("click", function (event) {
    if (event.target.id === "lightbox") {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});


/* =========================================================
   13. DIZAYNNI ALMASHTIRISH (ko'k  <->  qorong'u)
   Saytga kirganda doim ko'k dizayn ochiladi.
   ========================================================= */

document.getElementById("themeToggle").addEventListener("click", function () {
    const blue = document.getElementById("themeBlue");
    const dark = document.getElementById("themeDark");

    const goDark = dark.media === "not all"; // hozir ko'k bo'lsa, qorong'uga o'tamiz

    dark.media = goDark ? "all" : "not all";
    blue.media = goDark ? "not all" : "all";

    this.textContent = goDark ? "Ko‘k dizayn" : "Qorong‘u dizayn";
});


/* =========================================================
   14. SAYTNI ISHGA TUSHIRISH
   ========================================================= */

createStudentCards();
showClassmatesGallery();
showTeachers();

document.getElementById("year").textContent = "2027";
