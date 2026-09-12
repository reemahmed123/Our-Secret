/* =========================================================
   OUR LITTLE CORNER — Romantic Memory Website
   -----------------------------------------------------------
   This is a static, client-side site. Everything below runs
   entirely in the visitor's browser — there is no server and
   no database.

   IMPORTANT ABOUT THE PASSWORD:
   Because this is a static site with no backend, the password
   check happens in this JavaScript file, which anyone can open
   with their browser's "View Source" or developer tools. This
   is a fun little lock for a private surprise, not real
   security — please don't use it to protect anything sensitive.
   ========================================================= */


/* =================================================================
   CUSTOMIZE YOUR WEBSITE HERE
   -----------------------------------------------------------------
   Everything you're likely to want to change lives in this one
   block. You do not need to understand the rest of the file to
   personalize the site — just edit the values below.
   ================================================================= */

// 1) The secret word visitors must type to unlock the site.
//    Keep it simple and easy for the two of you to remember.
const SECRET_PASSWORD = "بحبك";

// 2) An optional hint shown under the password field. Leave it as
//    an empty string ("") if you don't want to show a hint at all.
const PASSWORD_HINT = "كلمة من 4 حروف 💗";

// 2b) A profile photo shown above the password field, like a login
//     screen avatar. Point this at any photo in the images/ folder.
//     Leave it as "" to hide the avatar and just show the heart emoji.
const PROFILE_PHOTO = "images/edited-wedding-image.jpg";

// 3) The love letter, typed out on the next screen. Use \n\n for a
//    paragraph break.
const loveLetterText =
  "عايزاك تعرف اني بحبك اوي . \n\n" +
  "و مالقيتش أحلى من الفكرة دي أعملها , \n\n "+
  "و نجمع كل صورنا و ذكرياتنا مع بعض \n\n"+
  "و ربنا يخليك ليا يا حبيبي \n\n"+"♥️♥️♥️♥️♥️♥️♥️♥️";

// 4) The date you two first met, in YYYY-MM-DD format, 24-hour time.
//    If you don't know the exact time, midnight ("00:00:00") is fine.
const relationshipStartDate = "2025-10-17T00:00:00";

// 5) Your memories. Add, remove, or edit as many as you like — the
//    card navigation updates automatically. Replace the images in
//    the /images folder with your own photos and keep the same
//    filenames, or point "image" at a different file.
const memories = [
  {
    image: "images/first-meet-with-him.jpg",
    title: "أول لقاء",
    message: "المكان اللي اول مره اتقابلنا فيه و كان يوم جمعة و الجو كان فيه نسمة هواء تحفة ♥️"
  },
  {
    image: "images/first-chat.jpg",
    title: "أول محادثة",
    message: "اول شات ما بينا بعد المقابلة بكام يوم\n\n كان شات غريب لما رجعت قريته دلوقتي 😂😂😂♥️♥️"
  },
  {
    image: "images/engagement.jpg",
    title: "خطوبتنا",
    message: "beginning of our story bgd ♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
   {
    image: "images/dance.jpg",
    title: "رقصة",
    message: "random image i love it ♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/engagement-dance.mp4",
    title: "رقصة الخطوبة",
    message: "love these momments so much \n\n♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/engagement-video.mp4",
    title: "فيديو الخطوبة",
    message: "love these momments so much \n\n♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
    {
    image: "images/our-photo-together.jpg",
    title: "صورتنا معًا",
    message: "could be us♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/our-hands.jpg",
    title: "أيدينا",
    message: "♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/edited-wedding-image.jpg",
    title: "صورة من الفرح",
    message: "كان فرح بعد اول فاينال عندي و اتبسطت جدا اني شوفتك اليوم ده و كنت جامد كالعادة يا باشا ♥️"
  },
  {
    image: "images/abla-wedding-1.jpg",
    title: "فرح عبلة",
    message: "بحب الصور اللي معاك دي اوي ♥️"
  },
  {
    image: "images/abla-wedding-2.jpg",
    title: "فرح عبلة ٢",
    message: "bmooot feek 3ashan enta my comfortzone bgd b2a \n\n♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
    {
    image: "images/my-birthday.jpg",
    title: "عيد ميلادي",
    message: "♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
    {
    image: "images/random-video.mp4",
    title: "لحظة عشوائية",
    message: " random video at the end of day \n\n♥️♥️♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/polling-day-2.jpg",
    title: "يوم الانتخابات ٢",
    message: "كان يوم تحفة بس اتعلم عليا في البولينج جامد \n\n بس مقبولة منك يا قلبي 😂😂♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/ahmed-playing-boxing.mp4",
    title: "أحمد يلعب الملاكمة",
    message: "كده انا اتأكدت ان ضهرنا اتحمى \n\n هعمل مششاكل و انت تصلح يا روح قلبي 😂😂♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/hockey-game.mp4",
    title: "مباراة الهوكي",
    message: "best momments ♥️♥️♥️♥️♥️♥️♥️"
  },
    {
    image: "images/surprise-when-he-arrived.mp4",
    title: "المفاجأة",
    message: "اتفاجئت و فرحت جدا لماا جيت 🥹♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/graduation-laugh.jpg",
    title: "ضحكة التخرج",
    message: "شكرا لانك خليت اليوم ده ذكر مميزة ليا\n\n  بحبك اوي بجد🥹♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/graduation-logo.jpg",
    title: "يوم التخرج",
    message: "🥹♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/he-wore-me-a-cap.jpg",
    title: "القبعة",
    message: "unforgettable momment 🥹♥️♥️♥️♥️♥️♥️♥️"
  },
  {
    image: "images/funny-look-together.jpg",
    title: "نظرة مضحكة",
    message: "favourite funny image 😂😂😂♥️♥️♥️♥️♥️♥️♥️"
  },  
  {
  image: "images/eid-moment.jpg",
  title: "لحظة عيد",
  message: "صلينا العيد مع بعض ♥️♥️♥️♥️♥️♥️♥️"
},
{
  image: "images/eid-fire.mp4",
  title: "نار العيد",
  message: "كانت فكرة تحفة زيك 😂😂😂♥️♥️♥️♥️♥️♥️♥️"
},
  {
    image: "images/why-you-look-at-me.jpg",
    title: "لماذا تنظر إليّ هكذا",
    message: "طب قولي دي بصة حب و لا ندم بس ؟ 😔😂😂😂♥️♥️"
  },
  {
    image: "images/his-family-1.jpg",
    title: "عائلتك",
    message: "اللمة التحفة و بنا يديمها نعمة "
  },
  {
    image: "images/his-family-2.jpg",
    title: "عائلتك ٢",
    message: "happy eid with your family "
  },
  {
    image: "images/dream-park.jpg",
    title: "دريم بارك",
    message: "يوم مفضل برو ماكس , بحبك يعم قولنا بقى و بحب اي حاجة بعملها معاك ♥️"
  },
   {
    image: "images/sooty-shabah-deek.mp4",
    title: "ذكرى مضحكة",
    message: "اليوم اللي شبهت صوتي بصوت الديك يا رخم😂😂😭😒"
  },
  {
    image: "images/ibn-elsham.jpg",
    title: "ابن الشام",
    message: "كل يوم بتزيد غلاوتك عندي بجد يا احمد 🥹♥️♥️♥️♥️♥️"
  },
  {
    image: "images/he-taught-me-to-drive.jpg",
    title: "درس القيادة",
    message: "قدوتي في السواقة بحبك للمرة المليون يا باشا 🫡♥️♥️♥️♥️♥️♥️♥️"
  }
];

// 6) Your playlist. Tapping a song now plays it right here on the
//    page instead of sending visitors away to another app.
//
//    Each song needs a "title", "artist", and "cover" image. If you
//    leave "cover" blank, a soft pink placeholder is used instead.
//
//    For playback, give EITHER:
//      - "audioSrc": a path to your own audio file (e.g. an mp3 you've
//        placed in the images/ folder or a new "audio/" folder) — this
//        plays instantly with a real built-in player, OR
//      - "link": a Spotify or YouTube URL — this opens a small official
//        Spotify/YouTube player inline on the page (still without
//        leaving the site). Spotify links only preview 30 seconds
//        unless the visitor is logged into Spotify Premium in their
//        browser; a YouTube link plays the full track/video inline.
//
//    You can provide both — "audioSrc" will be used first.
const playlist = [
  {
    title: "We Meen Ekhtar",
    artist: "Sherine",
    cover: "images/song1.jpg",
    audioSrc: "",
    link: "https://open.spotify.com/track/6kWZ678CujB8vZnPf1eg4k?si=8649f0e740914478"
  },
  {
    title: "Be My Baby",
    artist: "The Ronettes",
    cover: "images/song1.jpg",
    audioSrc: "",
    link: "https://open.spotify.com/track/1WN4uNclrDuczTO3bCr8s1?si=9156cfd23aa84926"
  },
  {
    title: "Sweater Weather",
    artist: "The neighbourhood",
    cover: "images/song1.jpg",
    audioSrc: "",
    link: "https://open.spotify.com/track/2QjOHCTQ1Jl3zawyYOpxh6?si=7c3edfcc800b41da"
  },
  {
    title: "cinamon girl",
    artist: "lana del ray",
    cover: "images/song1.jpg",
    audioSrc: "",
    link: "https://open.spotify.com/track/2mdEsXPu8ZmkHRRtAdC09e?si=54dc93d0f5c9478c"
  }
];

// 7) Your quiz. Exactly two options per question. "correctAnswer" is
//    the index (0 for the first option, 1 for the second).
const quizQuestions = [
  {
    question: "أول يوم اتقابلنا فيه كان امتى؟",
    options: ["17 october ","9 october"],
    correctAnswer: 0,
    correctMessage: "برافو عليك , ايه الشطارة دي كلها بس \n\n بحبك موووووت",
    wrongMessage: "مش مهم يا بيبي لسه قدامك فرصة "
  },
  {
    question: "مين هو شخصك المفضل؟",
    options: ["رونالدو","انا" ],
    correctAnswer: 1,
    correctMessage: "برافو عليك , ايه الشطارة دي كلها بس \n\n بحبك موووووت",
    wrongMessage: "كنت عارفاك هتعملها والله ما انت رخم اقول ايه بس "
  },
  {
    question: "ايه هو مشروبي المفضل ؟",
    options: ["شاي", "قهوة"],
    correctAnswer: 0,
    correctMessage: "برافو عليك , ايه الشطارة دي كلها بس \n\n بحبك موووووت",
    wrongMessage: "بتهزر يا استاذ انت 😠😠😠😠"
  }
];

// 8) The final quiz results. {score} is replaced automatically.
const QUIZ_PERFECT_MESSAGE =
  "3/3! 🥹❤️\n good boy💕";

const QUIZ_IMPERFECT_MESSAGE ="ما انت لو مهتم كنت عرفت 😠😠😠😠";


/* =================================================================
   Below this line is the site logic. You shouldn't need to edit
   anything past here to customize your content.
   ================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initAmbientLayer();
  initPasswordScreen();
  initSideNav();
  initRevealOnScroll();
  initBeginningCounter();
  initMemories();
  initPlaylist();
  initQuiz();
});


/* ---------------------------------------------------------
   Ambient floating hearts & sparkles (decorative background)
   --------------------------------------------------------- */
function initAmbientLayer() {
  const layer = document.getElementById("ambientLayer");
  if (!layer) return;

  const symbols = ["♥", "♡", "✦", "✧"];
  // Slightly more hearts than before for a cozier, fuller background.
  const count = window.innerWidth < 600 ? 13 : 20;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const isSparkle = Math.random() > 0.6;
    el.className = "ambient-item" + (isSparkle ? " sparkle" : " heart");
    el.textContent = symbols[isSparkle ? 2 + Math.floor(Math.random() * 2) : Math.floor(Math.random() * 2)];
    el.style.left = Math.random() * 100 + "%";
    // Hearts are a bit larger than before; sparkles stay small and light.
    el.style.fontSize = (isSparkle ? 11 + Math.random() * 11 : 20 + Math.random() * 26) + "px";
    // Hearts: a darker, richer red. Sparkles: a warm soft pink.
    el.style.color = isSparkle ? "#f0a8c2" : "#b3123f";
    el.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    el.style.animationDuration = 14 + Math.random() * 14 + "s";
    el.style.animationDelay = Math.random() * 16 + "s";
    layer.appendChild(el);
  }
}


/* ---------------------------------------------------------
   Section 1 — Password screen
   --------------------------------------------------------- */
function initPasswordScreen() {
  const form = document.getElementById("passwordForm");
  const input = document.getElementById("passwordInput");
  const errorEl = document.getElementById("passwordError");
  const hintEl = document.getElementById("passwordHint");
  const card = document.querySelector(".password-card");
  const passwordScreen = document.getElementById("password-screen");
  const mainContent = document.getElementById("mainContent");

  if (hintEl) hintEl.textContent = PASSWORD_HINT || "";

  // Show the profile photo above the form, like a login screen avatar.
  const avatarWrap = document.getElementById("passwordAvatar");
  const avatarImg = document.getElementById("passwordAvatarImg");
  if (avatarWrap && avatarImg) {
    if (PROFILE_PHOTO) {
      avatarImg.src = PROFILE_PHOTO;
      avatarImg.onerror = () => {
        avatarWrap.style.display = "none";
      };
    } else {
      avatarWrap.style.display = "none";
    }
  }

  // If they already unlocked it earlier in this browser session,
  // skip straight to the content on refresh.
  if (sessionStorage.getItem("ourSiteUnlocked") === "true") {
    unlockSite({ animate: false });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    attemptUnlock();
  });

  function attemptUnlock() {
    const value = input.value.trim().toLowerCase();
    const correct = SECRET_PASSWORD.trim().toLowerCase();

    if (value.length > 0 && value === correct) {
      errorEl.textContent = "";
      sessionStorage.setItem("ourSiteUnlocked", "true");
      unlockSite({ animate: true });
    } else {
      errorEl.textContent = "Hmm... that's not our secret word 👀💕";
      card.classList.remove("shake");
      // restart the shake animation even on repeated wrong guesses
      void card.offsetWidth;
      card.classList.add("shake");
      input.focus();
      input.select();
    }
  }

  function unlockSite({ animate }) {
    if (animate) {
      card.classList.add("unlocking");
      setTimeout(() => {
        passwordScreen.style.display = "none";
        revealMainContent();
      }, 650);
    } else {
      passwordScreen.style.display = "none";
      revealMainContent();
    }
  }

  function revealMainContent() {
    mainContent.classList.remove("locked");
    document.getElementById("sideNav").classList.add("active-nav");
    startTypewriter();
    // give the browser a frame to paint the unlocked content before
    // scrolling / running reveal checks
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      checkRevealElements();
      updateSideNav();
    });
  }
}


/* ---------------------------------------------------------
   Section 2 — Typewriter love letter
   --------------------------------------------------------- */
function startTypewriter() {
  const textEl = document.getElementById("typewriterText");
  const cursorEl = document.getElementById("typewriterCursor");
  const nextBtn = document.getElementById("letterNextBtn");

  if (!textEl || textEl.dataset.started === "true") return;
  textEl.dataset.started = "true";

  const fullText = loveLetterText;
  let i = 0;
  const speed = 28; // ms per character

  function typeNext() {
    if (i < fullText.length) {
      textEl.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeNext, speed);
    } else {
      cursorEl.style.display = "none";
      nextBtn.disabled = false;
      nextBtn.classList.add("btn-ready");
    }
  }

  setTimeout(typeNext, 400);

  nextBtn.addEventListener("click", () => {
    document.getElementById("beginning").scrollIntoView({ behavior: "smooth" });
  });
}


/* ---------------------------------------------------------
   Section 3 — بدايتنا / live relationship counter
   --------------------------------------------------------- */
function initBeginningCounter() {
  const startDateDisplay = document.getElementById("startDateDisplay");
  const startDate = new Date(relationshipStartDate);

  if (isNaN(startDate.getTime())) {
    console.error("relationshipStartDate is not a valid date. Please check the format in script.js.");
    return;
  }

  startDateDisplay.textContent = startDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const yearsEl = document.getElementById("countYears");
  const monthsEl = document.getElementById("countMonths");
  const daysEl = document.getElementById("countDays");
  const hoursEl = document.getElementById("countHours");
  const minutesEl = document.getElementById("countMinutes");
  const secondsEl = document.getElementById("countSeconds");

  function getCalendarDiff(start, now) {
    if (now < start) {
      return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      // Borrow days from the month that just ended, relative to "now"
      const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += daysInPrevMonth;
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  function render() {
    const now = new Date();
    const diff = getCalendarDiff(startDate, now);
    yearsEl.textContent = diff.years;
    monthsEl.textContent = diff.months;
    daysEl.textContent = diff.days;
    hoursEl.textContent = String(diff.hours).padStart(2, "0");
    minutesEl.textContent = String(diff.minutes).padStart(2, "0");
    secondsEl.textContent = String(diff.seconds).padStart(2, "0");
  }

  render();
  setInterval(render, 1000);
}


/* ---------------------------------------------------------
   Section 4 — Memories flip card carousel
   --------------------------------------------------------- */
function initMemories() {
  const card = document.getElementById("memoryCard");
  const wrap = card.closest(".memory-card-wrap");
  const imageEl = document.getElementById("memoryImage");
  const videoEl = document.getElementById("memoryVideo");
  const badgeEl = document.getElementById("memoryBadge");
  const messageEl = document.getElementById("memoryMessage");
  const indicatorEl = document.getElementById("memoryIndicator");
  const prevBtn = document.getElementById("memoryPrev");
  const nextBtn = document.getElementById("memoryNext");

  let index = 0;

  function isVideoFile(path) {
    return /\.(mp4|webm|mov)$/i.test(path);
  }

  function renderMemory() {
    const memory = memories[index];

    if (isVideoFile(memory.image)) {
      // Show the video clip, muted and looping like a silent preview.
      imageEl.classList.remove("is-active");
      imageEl.removeAttribute("src");
      videoEl.pause();
      videoEl.src = memory.image;
      videoEl.classList.add("is-active");
      videoEl.load();
      videoEl.play().catch(() => {
        /* Autoplay can be blocked by the browser; that's fine, the
           visitor can flip the card to see the caption regardless. */
      });
      videoEl.onerror = () => {
        videoEl.classList.remove("is-active");
      };
    } else {
      // Show a regular photo.
      videoEl.classList.remove("is-active");
      videoEl.removeAttribute("src");
      imageEl.src = memory.image;
      imageEl.alt = memory.title || `Memory ${index + 1}`;
      imageEl.classList.add("is-active");
      imageEl.onerror = () => {
        imageEl.onerror = null;
        imageEl.src = "images/placeholder.jpg";
      };
    }

    badgeEl.textContent = index + 1;
    messageEl.textContent = memory.message;
    indicatorEl.textContent = `${index + 1} / ${memories.length}`;
  }

  function goTo(newIndex, { flipBack = true } = {}) {
    // navigating swaps the face instantly (no flip transition) so the
    // visitor always lands on the front image of the new memory
    if (flipBack && card.classList.contains("flipped")) {
      wrap.classList.add("switching");
      card.classList.remove("flipped");
    }

    index = (newIndex + memories.length) % memories.length;
    renderMemory();

    if (flipBack) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => wrap.classList.remove("switching"));
      });
    }
  }

  function flipCard() {
    card.classList.toggle("flipped");
  }

  card.addEventListener("click", flipCard);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flipCard();
    }
  });

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  renderMemory();
}


/* ---------------------------------------------------------
   Section 5 — Playlist
   --------------------------------------------------------- */
function initPlaylist() {
  const list = document.getElementById("playlistList");
  list.innerHTML = "";

  // Tracks whichever song card is currently expanded, so opening a
  // new one closes the previous player (and stops its audio).
  let openItem = null;

  playlist.forEach((song, i) => {
    const li = document.createElement("li");
    li.className = "playlist-item";

    const cover = song.cover || "images/placeholder.jpg";
    const embed = getEmbedPlayer(song.link);

    li.innerHTML = `
      <button type="button" class="playlist-row" aria-expanded="false" aria-label="Play ${escapeHtml(song.title)} by ${escapeHtml(song.artist)}">
        <span class="playlist-index">${i + 1}</span>
        <img class="playlist-cover" src="${cover}" alt="" onerror="this.onerror=null;this.src='images/placeholder.jpg';" />
        <span class="playlist-meta">
          <span class="playlist-title">${escapeHtml(song.title)}</span>
          <span class="playlist-artist">${escapeHtml(song.artist)}</span>
        </span>
        <span class="playlist-play" aria-hidden="true">▶</span>
      </button>
      <div class="playlist-player" hidden></div>
    `;

    const row = li.querySelector(".playlist-row");
    const playerWrap = li.querySelector(".playlist-player");
    const playIcon = li.querySelector(".playlist-play");

    const closeThis = () => {
      playerWrap.hidden = true;
      playerWrap.innerHTML = ""; // removing the node stops audio/video playback
      row.setAttribute("aria-expanded", "false");
      li.classList.remove("is-open");
      playIcon.textContent = "▶";
    };

    const openThis = () => {
      if (openItem && openItem !== li) openItem.close();

      if (song.audioSrc) {
        playerWrap.innerHTML = `<audio class="playlist-audio" controls autoplay src="${escapeHtml(song.audioSrc)}"></audio>`;
      } else if (embed) {
        playerWrap.innerHTML = `
          <iframe
            class="playlist-embed"
            src="${embed.src}"
            width="100%"
            height="${embed.height}"
            frameborder="0"
            allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture"
            loading="lazy"
            title="${escapeHtml(song.title)} player"
          ></iframe>`;
      } else {
        playerWrap.innerHTML = `<p class="playlist-no-source">Add an audio file or a Spotify/YouTube link for this song in script.js to enable playback here.</p>`;
      }

      playerWrap.hidden = false;
      row.setAttribute("aria-expanded", "true");
      li.classList.add("is-open");
      playIcon.textContent = "⏸";
      openItem = li;
    };

    li.close = closeThis;

    row.addEventListener("click", () => {
      const isOpen = !playerWrap.hidden;
      if (isOpen) {
        closeThis();
        openItem = null;
      } else {
        openThis();
      }
    });

    list.appendChild(li);
  });
}

// Turns a Spotify or YouTube share link into an embeddable player URL
// that can play right on the page instead of opening a new tab.
function getEmbedPlayer(link) {
  if (!link) return null;

  let url;
  try {
    url = new URL(link);
  } catch (e) {
    return null;
  }

  if (url.hostname.includes("spotify.com")) {
    const match = url.pathname.match(/\/(track|album|playlist)\/([a-zA-Z0-9]+)/);
    if (match) {
      return { src: `https://open.spotify.com/embed/${match[1]}/${match[2]}`, height: 152 };
    }
  }

  if (url.hostname.includes("youtube.com") || url.hostname.includes("youtu.be")) {
    let videoId = null;
    if (url.hostname.includes("youtu.be")) {
      videoId = url.pathname.slice(1);
    } else if (url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    }
    if (videoId) {
      return { src: `https://www.youtube.com/embed/${videoId}`, height: 200 };
    }
  }

  return null;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}


/* ---------------------------------------------------------
   Section 6/7 — Quiz + final result
   --------------------------------------------------------- */
function initQuiz() {
  const progressEl = document.getElementById("quizProgress");
  const questionEl = document.getElementById("quizQuestionText");
  const optionAEl = document.getElementById("quizOptionA");
  const optionBEl = document.getElementById("quizOptionB");
  const feedbackEl = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("quizNextBtn");
  const questionView = document.getElementById("quizQuestionView");
  const resultView = document.getElementById("quizResultView");
  const scoreEl = document.getElementById("quizResultScore");
  const messageEl = document.getElementById("quizResultMessage");
  const retryBtn = document.getElementById("quizRetryBtn");

  let currentIndex = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    answered = false;
    feedbackEl.textContent = "";
    nextBtn.disabled = true;

    const q = quizQuestions[currentIndex];
    progressEl.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
    questionEl.textContent = q.question;

    [optionAEl, optionBEl].forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.disabled = false;
      btn.classList.remove("selected-correct", "selected-wrong", "reveal-correct");
    });
  }

  function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const q = quizQuestions[currentIndex];
    const buttons = [optionAEl, optionBEl];
    const isCorrect = selectedIndex === q.correctAnswer;

    if (isCorrect) score++;

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === selectedIndex) {
        btn.classList.add(isCorrect ? "selected-correct" : "selected-wrong");
      }
      if (i === q.correctAnswer && !isCorrect) {
        btn.classList.add("reveal-correct");
      }
    });

    feedbackEl.textContent = isCorrect ? q.correctMessage : q.wrongMessage;
    nextBtn.disabled = false;
  }

  function goNext() {
    if (currentIndex < quizQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionView.classList.add("hidden");
    resultView.classList.remove("hidden");

    scoreEl.textContent = `${score} / ${quizQuestions.length}`;

    if (score === quizQuestions.length) {
      messageEl.textContent = QUIZ_PERFECT_MESSAGE;
      celebrate();
    } else {
      messageEl.textContent = QUIZ_IMPERFECT_MESSAGE.replace("{score}", score);
    }
  }

  function resetQuiz() {
    currentIndex = 0;
    score = 0;
    questionView.classList.remove("hidden");
    resultView.classList.add("hidden");
    renderQuestion();
  }

  optionAEl.addEventListener("click", () => selectAnswer(0));
  optionBEl.addEventListener("click", () => selectAnswer(1));
  nextBtn.addEventListener("click", goNext);
  retryBtn.addEventListener("click", resetQuiz);

  renderQuestion();
}


/* ---------------------------------------------------------
   Celebration confetti (only triggered on a perfect quiz score)
   --------------------------------------------------------- */
function celebrate() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";

  const colors = ["#e38aa6", "#f6c9d8", "#c85b83", "#ffffff", "#7a3348", "#c69a5c"];
  const pieces = [];
  const count = window.innerWidth < 600 ? 60 : 110;

  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.5,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: 2 + Math.random() * 3,
      speedX: -1.5 + Math.random() * 3,
      rotation: Math.random() * 360,
      rotationSpeed: -6 + Math.random() * 12,
      isHeart: Math.random() > 0.6
    });
  }

  let frame = 0;
  const maxFrames = 260;

  function drawHeart(x, y, size, rotation, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.fillStyle = color;
    ctx.beginPath();
    const s = size / 14;
    ctx.moveTo(0, 4 * s);
    ctx.bezierCurveTo(0, 2 * s, -6 * s, -4 * s, 0, -6 * s);
    ctx.bezierCurveTo(6 * s, -4 * s, 0, 2 * s, 0, 4 * s);
    ctx.fill();
    ctx.restore();
  }

  function tick() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      if (p.isHeart) {
        drawHeart(p.x, p.y, p.size, p.rotation, p.color);
      } else {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (frame < maxFrames) {
      requestAnimationFrame(tick);
    } else {
      canvas.style.display = "none";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  tick();
}


/* ---------------------------------------------------------
   Reveal-on-scroll for section fade-ins
   --------------------------------------------------------- */
let revealObserver;

function initRevealOnScroll() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

function checkRevealElements() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add("is-visible");
    }
  });
}


/* ---------------------------------------------------------
   Floating side navigation
   --------------------------------------------------------- */
function initSideNav() {
  const dots = document.querySelectorAll(".side-nav-dot");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetId = dot.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
    });
  });

  window.addEventListener("scroll", throttle(updateSideNav, 150));
}

function updateSideNav() {
  const dots = document.querySelectorAll(".side-nav-dot");
  const sections = ["letter", "beginning", "memories", "playlist", "quiz"].map((id) =>
    document.getElementById(id)
  );

  let activeIndex = 0;
  let closestDistance = Infinity;

  sections.forEach((section, i) => {
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top);
    if (rect.top < window.innerHeight * 0.6 && distance < closestDistance) {
      closestDistance = distance;
      activeIndex = i;
    }
  });

  dots.forEach((dot, i) => dot.classList.toggle("active", i === activeIndex));
}

function throttle(fn, wait) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= wait) {
      lastCall = now;
      fn(...args);
    }
  };
}
