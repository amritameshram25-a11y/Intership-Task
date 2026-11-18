function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=88"
        alt="Model in a sculptural black outfit"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">THE NEW SEASON — 2026</p>
        <h1>Make room<br />for <em>more you.</em></h1>
        <p className="hero-description">
          Thoughtful pieces. Beautifully made. A new point of view on everyday dressing.
        </p>
        <a className="button button-light" href="#products">
          Shop now <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p className="hero-caption">SPRING / SUMMER 2026 <span>—</span> 01</p>
    </section>
  );
}

export default Hero;
