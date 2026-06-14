import './style.css'
import heroImage from './assets/images/hero-placeholder.png'
import coachImage from './assets/images/coach-placeholder.png'

document.querySelector('#app').innerHTML = `
  <main class="page">
    <header class="hero">
      <div class="hero__content">
        <p class="eyebrow">Fitness Club</p>
        <h1>Responsive Landing Page Starter</h1>
        <p class="lead">
          Blank Vite HTML + CSS template with mobile, tablet, and desktop layouts.
          Replace text, colors, and images to make it yours.
        </p>
        <a class="button" href="#">Get Started</a>
      </div>
      <img
        class="hero__image"
        src="${heroImage}"
        alt="Placeholder hero image"
        width="900"
        height="600"
      />
    </header>

    <section class="section">
      <h2>Built-In Responsive Breakpoints</h2>
      <div class="cards">
        <article class="card">
          <h3>Mobile</h3>
          <p>Optimized for small screens starting at 320px.</p>
        </article>
        <article class="card">
          <h3>Tablet</h3>
          <p>Adapted for medium screens from 768px.</p>
        </article>
        <article class="card">
          <h3>Desktop</h3>
          <p>Expanded layout from 1024px and above.</p>
        </article>
      </div>
    </section>

    <section class="section section--split">
      <img
        class="split__image"
        src="${coachImage}"
        alt="Placeholder content image"
        width="720"
        height="480"
      />
      <div>
        <h2>Ready For Your PNG Assets</h2>
        <p>
          Add your own photos in <code>src/assets/images</code> and update image
          imports in <code>src/main.js</code>.
        </p>
      </div>
    </section>
  </main>
`
