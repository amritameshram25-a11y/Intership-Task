import { useState } from "react";

const links = ["Men", "Women", "Kids", "Beauty"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    setSearchOpen(false);
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="site-header">
      <div className="announcement">
        Complimentary delivery on orders over ₹2,500
      </div>
      <div className="navbar">
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-icon" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <a className="logo" href="#home" aria-label="GAZU home">
          GAZU
        </a>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link} href="#categories" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="nav-action search-action"
            type="button"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
            <span>Search</span>
          </button>
          <a className="nav-action login-action" href="#contact">Login</a>
          <a className="nav-action icon-link" href="#products" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.2-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.7a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z" /></svg>
          </a>
          <a className="nav-action cart-action" href="#products">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="9.5" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
            <span>Bag <span className="cart-count">0</span></span>
          </a>
        </div>

        {searchOpen && (
          <form className="search-panel" role="search" onSubmit={handleSearch}>
            <label className="visually-hidden" htmlFor="site-search">Search GAZU</label>
            <input id="site-search" type="search" placeholder="What are you looking for?" autoFocus />
            <button type="submit">Search <span aria-hidden="true">↗</span></button>
          </form>
        )}
      </div>
    </header>
  );
}

export default Navbar;
