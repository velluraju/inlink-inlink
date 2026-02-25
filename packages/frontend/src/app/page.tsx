import React from 'react';
import './globals.css';

export default function Landing() {
  return (
    <div className="landing-root">
      <header className="hero">
        <nav className="nav">
          <div className="logo">InLink</div>
          <div className="nav-cta">Launching Soon</div>
        </nav>
        <div className="hero-content">
          <h1 className="title">InLink — Connect Brands with Verified Influencers</h1>
          <p className="subtitle">Trusted deals, escrowed payments, AI KYC & fraud protection — all in one platform.</p>
          <div className="cta-row">
            <input className="email-input" placeholder="Enter your email for early access" />
            <button className="btn-primary">Notify Me</button>
          </div>
        </div>
        <div className="hero-parallax" aria-hidden />
      </header>

      <main className="sections">
        <section className="glass card">
          <h3>Why InLink?</h3>
          <p>Built for brands and influencers to collaborate with trust — KYC-verified profiles, escrow payments, and AI-assisted verification.</p>
        </section>

        <section className="features">
          <div className="feature card">
            <h4>Verified KYC</h4>
            <p>Fast, AI-assisted document verification with admin oversight.</p>
          </div>
          <div className="feature card">
            <h4>Secure Escrow</h4>
            <p>Fund deals securely and release payments after approval.</p>
          </div>
          <div className="feature card">
            <h4>Campaigns & Auctions</h4>
            <p>Post briefs, receive bids, and pick the best match.</p>
          </div>
        </section>

        <section className="cta-large">
          <h2>Launching Soon — Join the Waitlist</h2>
          <p>Be among the first to try InLink. Early users get special benefits.</p>
          <div className="cta-row">
            <input className="email-input" placeholder="Your email address" />
            <button className="btn-primary">Get Early Access</button>
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} InLink — All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}
