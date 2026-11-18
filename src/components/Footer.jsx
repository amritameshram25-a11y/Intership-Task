function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home">GAZU</a>
          <p>Good clothes for real life. Made with intention, worn your way.</p>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <a href="#collection">Our story</a>
          <a href="#categories">The collections</a>
          <a href="#products">Journal</a>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:hello@gazu.in">hello@gazu.in</a>
          <a href="tel:+911800123456">1800 123 456</a>
          <span>Monday–Saturday, 10am–6pm</span>
        </div>
        <div className="footer-column">
          <h3>Follow along</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 GAZU. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
