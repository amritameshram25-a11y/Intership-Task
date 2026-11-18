const benefits = [
  { icon: "↗", title: "Fast delivery", detail: "At your door in 2–5 days" },
  { icon: "↺", title: "Easy returns", detail: "A simple 14-day return window" },
  { icon: "✳", title: "Quality assured", detail: "Made to wear, made to last" },
  { icon: "⌑", title: "Secure payment", detail: "Checkout with confidence" },
];

function Benefits() {
  return (
    <section className="benefits" aria-label="Shopping benefits">
      {benefits.map((benefit) => (
        <div className="benefit-item" key={benefit.title}>
          <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
          <div>
            <h3>{benefit.title}</h3>
            <p>{benefit.detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
