# Our Little Corner 💕

A private, romantic memory website — a password-protected journey through a love letter, your relationship counter, a flip-card memory gallery, a shared playlist, and a "how well do you know us" quiz.

It's built with plain HTML, CSS, and JavaScript — no build tools, no backend, and it deploys straight to GitHub Pages for free.

## What's in this folder

```
romantic-memory-website/
├── index.html      → the page structure
├── style.css       → all styling (colors, fonts, layout, animations)
├── script.js       → all behavior + the CUSTOMIZE section at the top
├── README.md        → this file
└── images/
    ├── memory1.jpg … memory5.jpg   → placeholder memory photos
    ├── song1.jpg … song4.jpg       → placeholder song covers
    └── placeholder.jpg             → fallback shown if any image fails to load
```

## 1. Running it locally

You don't need to install anything. Two easy options:

**Option A — just open it**
Double-click `index.html` and it will open in your browser. This works, but some browsers restrict certain features for files opened directly from disk, so Option B is more reliable.

**Option B — a tiny local server (recommended)**
If you have Python installed, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. Press `Ctrl+C` in the terminal to stop the server when you're done.

## 2. Deploying to GitHub Pages

1. **Create a repository.** Go to [github.com/new](https://github.com/new), give it a name (e.g. `our-little-corner`), and choose **Public** (GitHub Pages on a free account requires the repo to be public — remember the password screen is a fun lock, not real security).
2. **Upload the files.** On the new repo's page, click **"uploading an existing file"** and drag in `index.html`, `style.css`, `script.js`, and the whole `images` folder. Commit the changes.
   - Or, if you're comfortable with git:
     ```bash
     cd romantic-memory-website
     git init
     git add .
     git commit -m "Our little corner"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
     git push -u origin main
     ```
3. **Turn on Pages.** In the repository, go to **Settings → Pages**. Under "Build and deployment," set **Source** to **Deploy from a branch**, choose the **main** branch and the **/ (root)** folder, then click **Save**.
4. **Wait a minute or two.** GitHub will give you a live URL that looks like:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   That's the link you can share.

## 3. Customizing everything

Open `script.js` and look for this block near the top:

```js
// ================= CUSTOMIZE YOUR WEBSITE HERE =================
```

Everything you're likely to want to change lives there:

- **`SECRET_PASSWORD`** — the word visitors type to unlock the site. It's not case-sensitive.
- **`PASSWORD_HINT`** — an optional hint shown under the password field. Set it to `""` to hide it.
- **`PROFILE_PHOTO`** — a profile photo shown above the password field, like a login-screen avatar (a circular photo with a small heart badge). Point it at any photo in `images/`, e.g. `"images/our-photo-together.jpg"`. Set it to `""` to hide the avatar entirely.
- **`loveLetterText`** — the typewriter message. Use `\n\n` in the text to start a new paragraph.
- **`relationshipStartDate`** — the date (and optionally time) you first met, in `"YYYY-MM-DDTHH:MM:SS"` format. This powers the live counter.
- **`memories`** — an array of memory objects. Add or remove entries freely; the card, the "1 / 5" indicator, and the Previous/Next buttons all update automatically. Each entry needs:
  - `image` — path to a photo in the `images` folder
  - `title` — a short label (used for the image's alt text)
  - `message` — the romantic line shown on the back of the card
- **`playlist`** — an array of songs. Each needs a `title`, `artist`, and `cover` image (leave `cover` blank to use the pink placeholder). Tapping a song now plays it right there on the page — no tab-switching. For playback, give either:
  - `audioSrc` — a path to your own audio file (drop an mp3 into `images/`, or make an `audio/` folder), for instant, full-track playback with a real built-in player, or
  - `link` — a Spotify or YouTube URL, which opens a small official player inline on the page. Spotify links preview 30 seconds unless the visitor is logged into Spotify Premium in that browser; YouTube links play the full track/video inline.

  You can set both — `audioSrc` takes priority when present.
- **`quizQuestions`** — exactly two options per question, with `correctAnswer` set to `0` or `1`, plus a sweet `correctMessage` and a playful `wrongMessage`.
- **`QUIZ_PERFECT_MESSAGE`** and **`QUIZ_IMPERFECT_MESSAGE`** — the final result screens. `{score}` in the imperfect message is replaced automatically with the visitor's score.

### Replacing the photos

Swap the files in `images/` with your own — just keep the same filenames (`memory1.jpg`, `song1.jpg`, etc.), or update the `image` / `cover` paths in `script.js` to point at whatever filenames you use. Photos are shown as squares (`object-fit: cover`), so photos that are already roughly square will look best; anything else will be automatically cropped to fit.

### Changing the colors

All colors are defined as CSS variables at the very top of `style.css`:

```css
:root {
  --color-cream: #fff8f3;
  --color-blush: #fdebf1;
  --color-pastel-pink: #f6c9d8;
  --color-rose: #dd7fa0;
  --color-rose-deep: #c85b83;
  --color-dark-rose: #7a3348;
  ...
}
```

Change any of these hex values and the whole site updates, since every component references these variables rather than hardcoded colors.

The floating background hearts are drawn in JavaScript, near the top of `script.js` in `initAmbientLayer()` — look for the `el.style.color` line if you want to adjust their red, and the `fontSize` line to adjust their size.

### Fonts & text size

Arabic text uses **El Messiri**, an elegant, modern Google Font with clean Arabic letterforms, paired with Cairo as a fallback. The base text size across the whole site is set once, in `style.css`, via `html { font-size: 17.5px; }` (slightly smaller on small phones) — everything else is sized relative to that, so nudging that one number up or down resizes all the text proportionally.

## 4. A note on the "password"

Since this is a static site with no server, the password check happens in the visitor's browser. Anyone who opens developer tools could technically read `SECRET_PASSWORD` in `script.js`. That's expected and fine for a fun surprise — just don't rely on it to protect anything truly private.

Enjoy 💕
