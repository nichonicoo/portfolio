# threadsfolio

A **Threads-inspired portfolio website** built using HTML, CSS, and JavaScript.
Instead of presenting information like a traditional portfolio, this project tells a story through a social-media-inspired feed where visitors simply scroll through posts and threads.

## ✨ Inspiration

- Threads
- Apple
- Linear
- Vercel

## 🎯 Goal

Create a portfolio that recruiters can read naturally, just like browsing a Threads feed.

**Instead of:**
- Home → About → Experience → Projects → Contact

**The portfolio becomes:**
- 👤 Nicholas posted... → 👤 Nicholas posted... → 🧵 Continue this thread → Project Story → Experience Story → Contact

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GSAP (Animation)
- Lenis (Smooth Scroll)
- Lucide Icons

## 📁 Folder Structure

```
threadsfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── theme.js
│   ├── typing.js
│   └── data.js
├── assets/
│   ├── avatar.svg
│   ├── projects/
│   ├── certificates/
│   └── icons/
└── README.md
```

## 🚀 Features

- Threads-inspired feed layout
- Continue Thread navigation between sections
- Reply chains
- Smooth scrolling (Lenis)
- Scroll progress bar
- Dark / Light mode toggle
- Responsive design (mobile-first breakpoints)
- Typewriter effect in hero
- Timeline (Education)
- Skills chips
- Project story cards
- Experience thread chain
- Resume download link
- Contact section with social links
- GSAP scroll-triggered animations
- Like button interaction

## 📖 Website Flow

1. **Hero** — Profile card with typing animation
2. **About** — Intro post
3. **Experience** — Threaded work history
4. **Continue Thread** — Navigate to next section
5. **Projects** — Project showcase cards
6. **Skills** — Categorized skill chips
7. **Education** — Timeline view
8. **Certificates** — Credential cards
9. **Contact** — Links & reply chain

## 🚀 Getting Started

1. Replace `assets/avatar.svg` with your own photo (rename to `avatar.jpg` or update the reference).
2. Update content in `js/data.js` with your personal information.
3. Open `index.html` in your browser — no build step required!

### Or serve locally:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve .
```

## 📅 Development Roadmap

### Phase 1 — Core
- [x] Hero
- [x] Feed Layout
- [x] Thread Components
- [x] Navigation

### Phase 2 — Content
- [x] Experience Threads
- [x] Project Threads
- [x] Skills
- [x] Timeline

### Phase 3 — Polish
- [x] Animations (GSAP)
- [x] Dark Mode
- [x] Smooth Scroll (Lenis)
- [x] Mobile Responsive

### Phase 4 — Launch
- [x] Performance Optimization
- [ ] SEO
- [ ] Final Polish

## 📄 License

MIT
