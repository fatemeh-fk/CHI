import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, CheckCircle2, Hammer, Home, Menu, X, Phone,
  Mail, MapPin, ShieldCheck, Sparkles, Star, Upload
} from "lucide-react";
import "./styles.css";

const services = [
  { title: "Kitchen Renovation", text: "Modern, functional kitchens designed around how you live.", icon: "01" },
  { title: "Bathroom Renovation", text: "Beautiful bathroom upgrades with practical, durable finishes.", icon: "02" },
  { title: "Basement Renovation", text: "Turn unused space into comfortable, useful living areas.", icon: "03" },
  { title: "Flooring & Painting", text: "Fresh finishes that make your home feel new again.", icon: "04" },
  { title: "Decks & Fences", text: "Outdoor improvements built for everyday Canadian living.", icon: "05" },
  { title: "Home Repairs", text: "Reliable improvements and repairs, large or small.", icon: "06" }
];

const projects = [
  {
    title: "Contemporary Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Modern Bathroom",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Finished Living Space",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <header className="header">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark"><Home size={21} /></span>
          <span>CANADA <b>HOME</b><small>IMPROVEMENT</small></span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Our Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Get a Quote</a>
        </nav>
        <button className="menu-btn" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow"><span></span> QUALITY HOME IMPROVEMENT</div>
            <h1>Make your house feel <em>like home.</em></h1>
            <p>Thoughtful renovations, repairs and improvements — built with care, clear communication and attention to detail.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Get a Free Quote <ArrowRight size={18} /></a>
              <a className="btn btn-ghost" href="#projects">See Our Work</a>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 size={18} /> Quality workmanship</span>
              <span><CheckCircle2 size={18} /> Clear communication</span>
              <span><CheckCircle2 size={18} /> Professional service</span>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=90" alt="Beautiful renovated home interior" />
            <div className="hero-card">
              <strong>Ready to improve your home?</strong>
              <span>Tell us what you have in mind.</span>
            </div>
          </div>
        </section>

        <section className="intro" id="about">
          <div className="section-label">ABOUT US</div>
          <div>
            <h2>Quality improvements.<br /><span>Built around you.</span></h2>
          </div>
          <div>
            <p>Canada Home Improvement helps homeowners transform their spaces with practical, high-quality renovation and improvement services.</p>
            <p>From a single-room refresh to a larger renovation, we focus on dependable workmanship and a straightforward experience from the first conversation to the final detail.</p>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-head">
            <div><div className="section-label">WHAT WE DO</div><h2>Our <span>Services</span></h2></div>
            <p>Solutions for the spaces you use every day.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.title}>
                <div className="service-number">{s.icon}</div>
                <div className="service-icon"><Hammer size={25} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact">Request a quote <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-head">
            <div><div className="section-label">OUR WORK</div><h2>Spaces we're <span>proud of.</span></h2></div>
            <p>Use these project images as a starting gallery — we can replace them with your real project photos anytime.</p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <img src={p.image} alt={p.title} />
                <div className="project-overlay"><span>{p.category}</span><h3>{p.title}</h3></div>
              </article>
            ))}
          </div>
        </section>

        <section className="why section">
          <div className="why-image">
            <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85" alt="Renovated home detail" />
          </div>
          <div className="why-copy">
            <div className="section-label">WHY CANADA HOME IMPROVEMENT</div>
            <h2>Built on <span>trust.</span><br />Finished with care.</h2>
            <div className="feature"><ShieldCheck /><div><h3>Reliable workmanship</h3><p>We care about the details that make a finished project feel right.</p></div></div>
            <div className="feature"><Sparkles /><div><h3>Clean, thoughtful results</h3><p>We aim for a polished result that fits your home and your needs.</p></div></div>
            <div className="feature"><Phone /><div><h3>Easy communication</h3><p>Clear conversations from your first inquiry through the project.</p></div></div>
          </div>
        </section>

        <section className="quote-section" id="contact">
          <div className="quote-copy">
            <div className="section-label">GET IN TOUCH</div>
            <h2>Let's talk about<br /><span>your project.</span></h2>
            <p>Have a renovation in mind? Send us the details and we'll get back to you.</p>
            <div className="contact-details">
              <a href="mailto:farshid@canadahomeimprovement.ca"><Mail /> farshid@canadahomeimprovement.ca</a>
              <a href="tel:+14165555555"><Phone /> Call us to discuss your project</a>
              <span><MapPin /> Serving homeowners across the GTA</span>
            </div>
          </div>
          <div className="form-wrap">
            {sent ? (
              <div className="success"><CheckCircle2 size={48} /><h3>Thank you!</h3><p>Your request has been submitted. We'll be in touch shortly.</p><button className="btn btn-primary" onClick={() => setSent(false)}>Send another request</button></div>
            ) : (
              <form action="https://formsubmit.co/farshid@canadahomeimprovement.ca" method="POST" onSubmit={() => setSent(true)}>
                <input type="hidden" name="_subject" value="New website quote request — Canada Home Improvement" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://canadahomeimprovement.ca/#contact" />
                <div className="form-row"><label>Full Name *<input name="name" required placeholder="Your name" /></label><label>Phone *<input name="phone" required placeholder="(416) 000-0000" /></label></div>
                <label>Email *<input type="email" name="email" required placeholder="you@example.com" /></label>
                <label>Service Needed *
                  <select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Other / Not sure</option></select>
                </label>
                <div className="form-row"><label>Project Address<input name="address" placeholder="City / area" /></label><label>Budget Range<select name="budget" defaultValue=""><option value="">Select</option><option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$30,000</option><option>$30,000+</option><option>Not sure yet</option></select></label></div>
                <label>Tell us about your project *<textarea name="message" required rows="5" placeholder="What would you like to improve?"></textarea></label>
                <label className="upload"><Upload size={18} /> <span>Upload photos or files (optional)<input type="file" name="attachment" accept="image/*,.pdf" /></span></label>
                <button className="btn btn-primary submit" type="submit">Send Request <ArrowRight size={18} /></button>
                <small className="privacy">By submitting, you agree that we may contact you about your project.</small>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><a href="#top" className="brand"><span className="brand-mark"><Home size={19} /></span><span>CANADA <b>HOME</b><small>IMPROVEMENT</small></span></a><p>Quality home improvement and renovation services for homeowners across the GTA.</p></div>
        <div className="footer-links"><a href="#services">Services</a><a href="#projects">Our Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Canada Home Improvement. All rights reserved.</span><span>Built with care in Canada.</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);