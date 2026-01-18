import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        This is a demo site. Design by <a href="https://launchsmile.com" target="_blank" rel="noopener noreferrer">LaunchSmile</a>
      </div>

      {/* Navigation */}
      <nav>
        <Link href="/" className="logo">Sunnyside <span>Dental</span></Link>
        <div className="nav-links">
          <a href="/#services" className="nav-link">Services</a>
          <Link href="/about" className="nav-link">About Dr. Chen</Link>
          <a href="/#contact" className="nav-link">Contact</a>
          <a href="/#contact" className="nav-cta">Book Now</a>
        </div>
      </nav>

      {/* Profile Hero */}
      <section className="profile-hero">
        <div className="profile-hero-inner">
          <div className="profile-image">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
              alt="Dr. Sarah Chen"
            />
          </div>
          <div className="profile-content">
            <span className="hero-tag">Meet Your Dentist</span>
            <h1>Dr. Sarah Chen, DDS</h1>
            <p className="profile-tagline">Creating beautiful, healthy smiles for Austin families since 2009.</p>
            <div className="profile-credentials">
              <div className="credential">
                <span className="credential-number">15+</span>
                <span className="credential-label">Years Experience</span>
              </div>
              <div className="credential">
                <span className="credential-number">5,000+</span>
                <span className="credential-label">Happy Patients</span>
              </div>
              <div className="credential">
                <span className="credential-number">4.9</span>
                <span className="credential-label">Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="bio-inner">
          <h2>My Story</h2>
          <p>Growing up, I was always fascinated by the power of a smile. After completing my Doctor of Dental Surgery degree at the University of Texas Health Science Center, I knew I wanted to create a practice that felt different—one where patients actually looked forward to their visits.</p>
          <p>I founded Sunnyside Family Dental with a simple mission: to provide exceptional dental care in a warm, welcoming environment. Whether it&apos;s a child&apos;s first dental visit or helping a grandparent restore their smile, I believe everyone deserves personalized attention and gentle care.</p>
          <p>When I&apos;m not in the office, you&apos;ll find me hiking the trails around Austin with my family, trying new restaurants, or volunteering at local community health events.</p>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="education-section">
        <div className="education-inner">
          <h2>Education & Credentials</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>Education</h3>
              <ul>
                <li>Doctor of Dental Surgery (DDS) - UT Health San Antonio</li>
                <li>Bachelor of Science, Biology - University of Texas at Austin</li>
                <li>Advanced Training in Cosmetic Dentistry</li>
              </ul>
            </div>
            <div className="education-card">
              <div className="education-icon">🏆</div>
              <h3>Memberships</h3>
              <ul>
                <li>American Dental Association</li>
                <li>Texas Dental Association</li>
                <li>Academy of General Dentistry</li>
              </ul>
            </div>
            <div className="education-card">
              <div className="education-icon">💝</div>
              <h3>Specialties</h3>
              <ul>
                <li>Family & Pediatric Dentistry</li>
                <li>Cosmetic Smile Makeovers</li>
                <li>Anxiety-Free Dental Care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section">
        <div className="philosophy-inner">
          <h2>My Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Patient-First Care</h3>
              <p>Your comfort and well-being always come first. I take the time to listen, explain, and ensure you feel confident about your treatment.</p>
            </div>
            <div className="philosophy-item">
              <h3>Gentle Approach</h3>
              <p>Dental anxiety is real, and I get it. My team and I are trained to provide a calm, stress-free experience for even the most nervous patients.</p>
            </div>
            <div className="philosophy-item">
              <h3>Lifelong Relationships</h3>
              <p>I&apos;m not just here for a single appointment—I want to be your family&apos;s dental partner for years to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to meet in person?</h2>
        <p>I&apos;d love to welcome you and your family to Sunnyside Dental.</p>
        <a href="/#contact" className="btn-primary">
          Schedule Your Visit
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Footer */}
      <footer>
        <Link href="/" className="footer-logo">Sunnyside <span>Dental</span></Link>
        <div className="footer-links">
          <a href="/#services">Services</a>
          <Link href="/about">About Dr. Chen</Link>
          <a href="/#contact">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Sunnyside Family Dental. All rights reserved.</p>
      </footer>
    </>
  )
}
