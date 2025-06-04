import React from "react";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <section id="Blog" className="blog-section">
      <div className="blog-container">
        <div className="section-header">
          <h2 className="section-heading">
            <i className="section-icon fas fa-book"></i>
            Technical Blog
          </h2>
          <div className="coming-soon-badge">
            <span>Coming Soon</span>
          </div>
        </div>
        
        <p className="section-description">
          Technical articles and insights about cloud technologies and DevOps engineering coming soon.
        </p>

        <div className="coming-soon-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="coming-soon-card">
              <div className="coming-soon-image">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <div className="coming-soon-content">
                <div className="pulse-dot"></div>
                <h3 className="coming-soon-title">Article Coming Soon</h3>
                <div className="coming-soon-line"></div>
                <div className="coming-soon-line short"></div>
                <div className="coming-soon-line medium"></div>
                <button className="notify-button">
                  <i className="fas fa-bell"></i> Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="subscribe-container">
          <p>Want to be notified when new articles are published?</p>
          <div className="subscribe-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}