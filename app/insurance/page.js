import Link from 'next/link'

export default function Insurance() {
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
          <Link href="/insurance" className="nav-link">Insurance</Link>
          <a href="/#contact" className="nav-link">Contact</a>
          <a href="/#contact" className="nav-cta">Book Now</a>
        </div>
      </nav>

      {/* Page Header */}
      <section className="page-header">
        <h1>Insurance & Payment Options</h1>
        <p>We believe cost should never stand in the way of a healthy smile.</p>
      </section>

      {/* Insurance Intro */}
      <section className="insurance-intro">
        <div className="insurance-intro-inner">
          <h2>We Accept Most Major PPO Insurance Plans</h2>
          <p>At Sunnyside Family Dental, we work with most major PPO dental insurance providers to help maximize your benefits. Our knowledgeable team will help you understand your coverage and file claims on your behalf, making the process as seamless as possible.</p>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="insurance-providers">
        <div className="insurance-providers-inner">
          <h2>Accepted Insurance Providers</h2>
          <p className="section-subtitle">We are in-network with many major insurance carriers, including:</p>
          <div className="providers-grid">
            <div className="provider-card">Delta Dental</div>
            <div className="provider-card">Cigna</div>
            <div className="provider-card">Aetna</div>
            <div className="provider-card">MetLife</div>
            <div className="provider-card">Guardian</div>
            <div className="provider-card">United Healthcare</div>
            <div className="provider-card">Humana</div>
            <div className="provider-card">BlueCross BlueShield</div>
            <div className="provider-card">Ameritas</div>
            <div className="provider-card">Principal</div>
            <div className="provider-card">Sun Life</div>
            <div className="provider-card">And Many More...</div>
          </div>
          <p className="providers-note">Don&apos;t see your insurance listed? Give us a call! We work with many other providers and can verify your benefits before your appointment.</p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="payment-options">
        <div className="payment-options-inner">
          <h2>Flexible Payment Options</h2>
          <p className="section-subtitle">We offer several ways to make dental care affordable for every family.</p>
          <div className="options-grid">
            <div className="option-card">
              <div className="option-icon">💳</div>
              <h3>Major Credit Cards</h3>
              <p>We accept Visa, Mastercard, American Express, and Discover for your convenience.</p>
            </div>
            <div className="option-card">
              <div className="option-icon">📋</div>
              <h3>Payment Plans</h3>
              <p>Need to break up payments? We offer flexible in-house payment plans for qualifying treatments.</p>
            </div>
            <div className="option-card">
              <div className="option-icon">🏦</div>
              <h3>CareCredit Financing</h3>
              <p>Apply for CareCredit to finance your dental care with low or no-interest payment options.</p>
            </div>
            <div className="option-card">
              <div className="option-icon">💰</div>
              <h3>HSA & FSA Accepted</h3>
              <p>Use your Health Savings Account or Flexible Spending Account for dental expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* No Insurance Section */}
      <section className="no-insurance">
        <div className="no-insurance-inner">
          <h2>No Insurance? No Problem.</h2>
          <p>We believe everyone deserves quality dental care, regardless of insurance status. For patients without dental insurance, we offer:</p>
          <ul className="no-insurance-list">
            <li><span className="check">✓</span> Competitive self-pay rates</li>
            <li><span className="check">✓</span> In-house membership savings plan</li>
            <li><span className="check">✓</span> Discounts for upfront payment</li>
            <li><span className="check">✓</span> Interest-free financing options</li>
          </ul>
          <p>Ask our team about our Sunnyside Smile Savings Plan—an affordable annual membership that includes preventive care and discounts on all other treatments.</p>
        </div>
      </section>

      {/* Insurance FAQ */}
      <section className="insurance-faq">
        <div className="insurance-faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Will you file my insurance claim?</h3>
              <p>Yes! We handle all insurance claims and paperwork for you. We&apos;ll submit your claim directly to your insurance company and follow up to ensure timely processing.</p>
            </div>
            <div className="faq-item">
              <h3>How do I know what my insurance covers?</h3>
              <p>Before your appointment, we&apos;ll verify your benefits and provide an estimate of your out-of-pocket costs. Our team is always happy to explain your coverage in detail.</p>
            </div>
            <div className="faq-item">
              <h3>What if my insurance doesn&apos;t cover a procedure?</h3>
              <p>We&apos;ll discuss all your options, including payment plans and financing. We never want finances to prevent you from getting the care you need.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer a discount for paying upfront?</h3>
              <p>Yes, we offer a courtesy discount for patients who pay in full at the time of service. Ask our front desk for details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Questions about your coverage?</h2>
        <p>Our friendly team is here to help you understand your benefits and find the best payment option for your family.</p>
        <a href="/#contact" className="btn-primary">
          Contact Us
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
          <Link href="/insurance">Insurance</Link>
          <a href="/#contact">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Sunnyside Family Dental. All rights reserved.</p>
        <p className="footer-powered">Powered by <a href="https://launchsmile.com" target="_blank" rel="noopener noreferrer">LaunchSmile</a></p>
      </footer>
    </>
  )
}
