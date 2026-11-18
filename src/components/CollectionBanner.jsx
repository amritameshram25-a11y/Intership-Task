function CollectionBanner() {
  return (
    <section className="collection-banner" id="collection">
      <div className="collection-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85"
          alt="Model wearing a minimal tailored look"
          loading="lazy"
        />
      </div>
      <div className="collection-content">
        <p className="eyebrow">A STUDY IN SIMPLICITY</p>
        <h2>New season.<br /><em>New perspective.</em></h2>
        <p>
          The pieces you reach for, made with a little more intention. Meet
          the GAZU Spring / Summer collection.
        </p>
        <a className="button button-dark" href="#products">
          Discover the collection <span aria-hidden="true">↗</span>
        </a>
        <span className="collection-index">COLLECTION Nº 06</span>
      </div>
    </section>
  );
}

export default CollectionBanner;
