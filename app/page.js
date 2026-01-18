import Link from 'next/link'

export default function Home() {
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
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="nav-cta">Book Now</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-tag">Family Dentistry in Austin</span>
            <h1>Where healthy smiles grow.</h1>
            <p>We provide gentle, personalized dental care for your whole family in a warm and welcoming environment. From first teeth to golden years.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Schedule a Visit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="tel:+15125551234" className="btn-secondary">Call (512) 555-1234</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1596977345251-40919c69ded2?w=800&q=80"
              alt="Family facing camera and smiling"
            />
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="welcome" id="about">
        <div className="welcome-inner">
          <div className="welcome-image">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80"
              alt="Modern dental office"
            />
          </div>
          <div className="welcome-content">
            <h2>Your family&apos;s smile is our passion</h2>
            <p>At Sunnyside Family Dental, we believe everyone deserves a healthy, beautiful smile. Dr. Sarah Chen and our caring team have been serving Austin families for over 15 years, building lasting relationships based on trust and exceptional care.</p>
            <ul className="welcome-list">
              <li><span className="check">✓</span> Accepting new patients of all ages</li>
              <li><span className="check">✓</span> Same-day emergency appointments</li>
              <li><span className="check">✓</span> Most insurance plans accepted</li>
              <li><span className="check">✓</span> Flexible payment options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive dental care for every stage of life</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🦷</div>
            <h3>General Dentistry</h3>
            <p>Cleanings, exams, fillings, and preventive care to keep your smile healthy year-round.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Cosmetic Dentistry</h3>
            <p>Whitening, veneers, and smile makeovers to help you feel confident.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👶</div>
            <h3>Pediatric Dentistry</h3>
            <p>Gentle, fun dental visits that help kids develop healthy habits early.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Restorative Care</h3>
            <p>Crowns, bridges, implants, and dentures to restore function and beauty.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">😴</div>
            <h3>Sedation Dentistry</h3>
            <p>Relaxation options for anxious patients to ensure a stress-free experience.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚨</div>
            <h3>Emergency Care</h3>
            <p>Same-day appointments available when you need urgent dental care.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Patients Say</h2>
          <p>Real stories from real families</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">&ldquo;Dr. Chen and her team made my daughter&apos;s first dental visit so easy! She actually asks when she can go back. Highly recommend for families.&rdquo;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JM</div>
              <div className="testimonial-info">
                <h4>Jessica M.</h4>
                <p>Patient since 2019</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">&ldquo;I used to dread going to the dentist. Sunnyside completely changed that. The staff is so friendly and the office is beautiful.&rdquo;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">RT</div>
              <div className="testimonial-info">
                <h4>Robert T.</h4>
                <p>Patient since 2021</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">&ldquo;Our whole family goes here—grandparents, parents, and kids. It&apos;s rare to find a practice that&apos;s great with all ages.&rdquo;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">LP</div>
              <div className="testimonial-info">
                <h4>Linda P.</h4>
                <p>Patient since 2017</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to join the Sunnyside family?</h2>
        <p>New patients welcome! Schedule your first visit today and see why Austin families trust us with their smiles.</p>
        <a href="#contact" className="btn-primary">
          Book Your Appointment
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We&apos;d love to hear from you. Reach out to schedule an appointment or ask any questions.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>4521 Sunny Lane, Suite 200<br />Austin, TX 78745</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-text">
                  <h4>Phone</h4>
                  <p>(512) 555-1234</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div className="contact-item-text">
                  <h4>Hours</h4>
                  <p>Mon–Fri: 8am–5pm<br />Sat: 9am–2pm</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="(512) 555-1234" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="cleaning">Cleaning & Exam</option>
                <option value="cosmetic">Cosmetic Dentistry</option>
                <option value="pediatric">Pediatric Dentistry</option>
                <option value="emergency">Emergency Care</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us how we can help..."></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Link href="/" className="footer-logo">Sunnyside <span>Dental</span></Link>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Sunnyside Family Dental. All rights reserved.</p>
      </footer>
    </>
  )
}
