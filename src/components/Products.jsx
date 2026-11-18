import { useState } from "react";
import products from "../data/products";

function ProductCard({ product }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-label">{product.label}</span>
        <button
          className={`wishlist-button${isSaved ? " is-saved" : ""}`}
          type="button"
          aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={isSaved}
          onClick={() => setIsSaved(!isSaved)}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>
      <div className="product-info">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <strong>₹{product.price.toLocaleString("en-IN")}</strong>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section className="section-padding products-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE PIECES YOU’LL LIVE IN</p>
          <h2>Best of GAZU.</h2>
        </div>
        <a className="text-link" href="#categories">Shop all <span aria-hidden="true">↗</span></a>
      </div>
      <div className="product-grid">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}

export default Products;
