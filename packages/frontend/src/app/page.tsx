import React from 'react';
import './globals.css';
import LottieHero from './components/LottieHero';
import StorySection from './sections/StorySection';

export default function Landing(){
  const lottieUrl = '/lottie/collab.json'; // placeholder, lazy loaded
  return (
    <div className="landing-root">
      <header className="hero">
        <nav className="nav">
          <div className="logo">InLink</div>
          <div className="nav-cta">Launching Soon</div>
        </nav>
        <div className="hero-content">
          <h1 className="title">InLink — Connect Brands with Verified Influencers</h1>
          <p className="subtitle">Trusted collaborations, secure escrow, AI-powered KYC — all in one place.</p>
          <div className="cta-row">
            <WaitlistForm role="brand" />
          </div>
        </div>
        <div className="hero-parallax" aria-hidden>
          <LottieHero src={lottieUrl} />
        </div>
      </header>

      <main className="sections">
        <StorySection title="The Problem">
          Brands struggle to find trusted creators and manage payments and compliance at scale.
        </StorySection>

        <StorySection title="Our Approach">
          InLink verifies creators, holds funds in escrow, and provides auction-based campaigns to match the best talent.
        </StorySection>

        <section className="features">
          <div className="feature card">
            <h4>Verified KYC</h4>
            <p>Fast AI-assisted document verification with admin oversight.</p>
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
            <WaitlistForm role="influencer" />
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} InLink — All rights reserved.</div>
        </footer>
      </main>
    </div>
  )
}
