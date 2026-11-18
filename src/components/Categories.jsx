const categories = [
  {
    name: "Women",
    note: "Quiet confidence, every day.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    alt: "Two women browsing a thoughtfully styled wardrobe",
  },
  {
    name: "Men",
    note: "An easier kind of classic.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    alt: "Model wearing a relaxed modern outfit",
  },
  {
    name: "Kids",
    note: "Made for little big days.",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85",
    alt: "Children laughing together outdoors",
  },
];

function Categories() {
  return (
    <section className="section-padding categories-section" id="categories">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A GOOD PLACE TO START</p>
          <h2>Find your kind of GAZU.</h2>
        </div>
        <p>Considered style for every version of you.</p>
      </div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <a className="category-card" href="#products" key={category.name}>
            <img src={category.image} alt={category.alt} loading="lazy" />
            <span className="category-number">0{index + 1}</span>
            <div className="category-copy">
              <p>{category.note}</p>
              <h3>{category.name}<span aria-hidden="true">↗</span></h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
