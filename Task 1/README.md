# 🤖 NEXUS — Cyborg & Cybernetic Augmentation Landing Page

A responsive, high-performance landing page themed around cybernetic enhancement and human-machine convergence. Built with an editorial SaaS aesthetic — combining dark surfaces, electric indigo accents, warm amber highlights, and interactive canvas graphics without relying on cliché AI tropes or bulky external frameworks.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-6c63ff?style=flat)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-success?style=flat)

---

## ✨ Features

- **Interactive Canvas Mesh**: Dynamic, lightweight particle grid with proximity connections and reactive node movement.
- **Thoughtful Color System**: Refined palette using Deep Charcoal (`#0c0c0f`), Electric Indigo (`#6c63ff`), and Signal Amber (`#f59e0b`).
- **Telemetry System Widget**: Realistic hardware diagnostic HUD tracking neural sync, optical acuity, and shield status.
- **Custom Circuit Vector Graphic**: Hand-crafted inline SVG circuit board with animated power pulses.
- **Infinite Marquee**: Hardware module ticker with auto-duplicating loop and pause-on-hover interaction.
- **Scroll-Triggered Metrics**: Interactive counters that smoothly ease into target values via `IntersectionObserver`.
- **Dynamic Pricing Calculator**: Instant switcher between monthly and discounted annual billing schedules.
- **Interactive Waitlist Form**: Client-side email validation with custom feedback states.
- **Fluid & Fully Responsive**: Tailored layout reflows across mobile, tablet, and desktop screens with custom hamburger navigation.

---

## 📁 Project Structure

```
├── index.html        # Clean, semantic HTML5 structure with ARIA landmarks
├── style.css         # CSS design tokens, typography, grid/flexbox layouts, animations
├── script.js         # Canvas engine, DOM animations, pricing toggle & form validation
└── README.md         # Documentation and setup instructions
```

---

## 🛠️ Tech Stack

- **Markup**: Pure HTML5 (semantic tags, accessible ARIA attributes)
- **Styling**: Vanilla CSS3 (Custom properties / CSS variables, Grid, Flexbox, media queries)
- **Scripting**: Vanilla ES6+ JavaScript (HTML5 Canvas API, IntersectionObserver API, requestAnimationFrame)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Space Mono](https://fonts.google.com/specimen/Space+Mono) via Google Fonts

---

## 🚀 Getting Started

No node modules, build tools, or bundlers required.

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
cd REPOSITORY_NAME
```

### 2. Run locally
Simply open `index.html` in your favorite web browser:
- **Directly**: Double-click `index.html`
- **Via VS Code**: Right-click `index.html` and select **"Open with Live Server"**
- **Via Python local server**:
  ```bash
  python -m http.server 3000
  ```
  Visit `http://localhost:3000` in your browser.

---

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In your GitHub repo, go to **Settings** > **Pages** (under the "Code and automation" tab on the left).
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. In a few seconds, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/REPOSITORY_NAME/
   ```

---

## 🎨 Palette Customization

You can effortlessly retheme the landing page by adjusting the CSS variables in [`style.css`](style.css):

```css
:root {
  --bg:        #0c0c0f; /* Main background */
  --surface:   #131318; /* Card surface */
  --indigo:    #6c63ff; /* Primary accent */
  --amber:     #f59e0b; /* Secondary warm accent */
  --fg:        #f1f0ff; /* Primary text */
  --fg-muted:  #8b8a9e; /* Secondary text */
}
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
