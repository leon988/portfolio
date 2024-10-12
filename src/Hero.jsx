export default function Hero() {
  return (
    <section className="hero">
      <img src="/path-to-your-image.jpg" alt="Hero Image" className="hero-image" />
      <h1>Hello!</h1>
      <p>I’m Gueri, a software engineer passionate about creating innovative solutions and solving problems with code.</p>
      <div className="hero-buttons">
        <a href="/path-to-cv.pdf" download>
          <button>CV</button>
        </a>
        <button onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}>
          Contact Me
        </button>
      </div>
    </section>
  );
}