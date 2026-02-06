import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="home-hero-content">
          <h1>
            Empowering Your <span className="highlight">Business</span> for{" "}
            <br />
            Outstanding Success
          </h1>

          <p className="hero-description">
            We provide innovative solutions designed to drive growth and achieve
            outstanding results for businesses of all sizes.
          </p>

          <div className="hero-actions">
            <button className="btn primary">
              <span>Get Started</span>
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16675 10H15.8334"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8334 5L15.8334 10L10.8334 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn secondary">
              <span>Learn More</span>
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 5V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 10L10 15L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>Trusted by 100+ clients</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>Easy to use</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          {/* <div className="visual-background">
            <div className="gradient-blur gradient-1"></div>
            <div className="gradient-blur gradient-2"></div>
            <div className="main-visual-element">
              <div className="visual-glow"></div>
            </div>
          </div> */}

          <div className="visual-background">
            {/* <svg
              className="light-svg"
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="softGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="40%" stopColor="#8ab4ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8ab4ff" stopOpacity="0" />
                </radialGradient>

                <filter id="blur">
                  <feGaussianBlur stdDeviation="25" />
                </filter>
              </defs>

              <circle
                cx="360"
                cy="300"
                r="180"
                fill="url(#softGlow)"
                filter="url(#blur)"
              />

              <path
                d="M360 200
       c-55 0 -100 40 -100 90
       0 35 20 65 45 85
       v35
       h110
       v-35
       c25 -20 45 -50 45 -85
       0 -50 -45 -90 -100 -90z"
                fill="none"
                stroke="#ffffff"
                strokeWidth="6"
                opacity="0.6"
              />

              <g stroke="#ffffff" strokeWidth="4" opacity="0.5">
                <line x1="360" y1="80" x2="360" y2="130" />
                <line x1="360" y1="470" x2="360" y2="520" />
                <line x1="140" y1="300" x2="190" y2="300" />
                <line x1="530" y1="300" x2="580" y2="300" />
              </g>
            </svg> */}
            {/* <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neonGlow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M360 200
       c-55 0 -100 40 -100 90
       0 35 20 65 45 85
       v35
       h110
       v-35
       c25 -20 45 -50 45 -85
       0 -50 -45 -90 -100 -90z"
                fill="none"
                stroke="#8ab4ff"
                strokeWidth="5"
                filter="url(#neonGlow)"
              />
            </svg> */}
            {/* <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="techGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="100%" stopColor="#2979ff" />
                </linearGradient>

                <filter id="techGlow">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <polygon
                points="300,180 380,230 380,330 300,380 220,330 220,230"
                fill="none"
                stroke="url(#techGrad)"
                strokeWidth="6"
                filter="url(#techGlow)"
              />

              <g stroke="#8ab4ff" strokeWidth="3" opacity="0.7">
                <line x1="300" y1="120" x2="300" y2="180" />
                <line x1="430" y1="300" x2="380" y2="300" />
                <line x1="300" y1="420" x2="300" y2="380" />
                <line x1="170" y1="300" x2="220" y2="300" />
              </g>
            </svg> */}
            {/* <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="eduGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffecb3" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="300" cy="300" r="160" fill="url(#eduGlow)" />

              <path
                d="M200 220
       q100 -40 200 0
       v160
       q-100 -40 -200 0
       z"
                fill="none"
                stroke="#5d4037"
                strokeWidth="5"
              />

              <line
                x1="300"
                y1="220"
                x2="300"
                y2="380"
                stroke="#5d4037"
                strokeWidth="4"
              />
            </svg> */}
            {/* <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="spiritAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e1bee7" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#e1bee7" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="300" cy="300" r="180" fill="url(#spiritAura)">
                <animate
                  attributeName="r"
                  values="170;190;170"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>

              <g fill="none" stroke="#ab47bc" strokeWidth="4" opacity="0.8">
                <path d="M300 200 q-40 60 0 120 q40 -60 0 -120z" />
                <path d="M240 230 q-30 60 20 120 q30 -60 -20 -120z" />
                <path d="M360 230 q30 60 -20 120 q-30 -60 20 -120z" />
              </g>
            </svg> */}
            {/* <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="evGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="100%" stopColor="#00c853" />
                </linearGradient>

                <filter id="evGlow">
                  <feGaussianBlur stdDeviation="10" />
                </filter>
              </defs>

              <circle
                cx="300"
                cy="300"
                r="170"
                fill="none"
                stroke="url(#evGrad)"
                strokeWidth="6"
                filter="url(#evGlow)"
              />

              <circle
                cx="300"
                cy="300"
                r="90"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                opacity="0.8"
              />

              <g stroke="#ffffff" strokeWidth="4" opacity="0.7">
                <line x1="300" y1="210" x2="300" y2="390" />
                <line x1="210" y1="300" x2="390" y2="300" />
                <line x1="240" y1="240" x2="360" y2="360" />
                <line x1="360" y1="240" x2="240" y2="360" />
              </g>
            </svg> */}
            <svg
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              className="ai-svg"
            >
              <defs>
                {/* Soft AI glow */}
                <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8ab4ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8ab4ff" stopOpacity="0" />
                </radialGradient>

                <filter id="aiBlur">
                  <feGaussianBlur stdDeviation="18" />
                </filter>
              </defs>

              {/* Background glow */}
              <circle
                cx="300"
                cy="300"
                r="180"
                fill="url(#aiGlow)"
                filter="url(#aiBlur)"
              />

              {/* Neural nodes */}
              <g fill="#ffffff" opacity="0.85">
                <circle cx="300" cy="230" r="6" />
                <circle cx="240" cy="270" r="6" />
                <circle cx="360" cy="270" r="6" />
                <circle cx="220" cy="340" r="6" />
                <circle cx="300" cy="360" r="6" />
                <circle cx="380" cy="340" r="6" />
              </g>

              {/* Neural connections */}
              <g stroke="#ffffff" strokeWidth="2" opacity="0.45">
                <line x1="300" y1="230" x2="240" y2="270" />
                <line x1="300" y1="230" x2="360" y2="270" />
                <line x1="240" y1="270" x2="220" y2="340" />
                <line x1="240" y1="270" x2="300" y2="360" />
                <line x1="360" y1="270" x2="380" y2="340" />
                <line x1="360" y1="270" x2="300" y2="360" />
              </g>

              {/* AI core */}
              <circle
                cx="300"
                cy="300"
                r="38"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                opacity="0.8"
              />

              <circle cx="300" cy="300" r="18" fill="#ffffff" opacity="0.9" />
            </svg>
          </div>

          {/* Floating Cards */}
          <div className="feature-card top">
            <div className="card-icon-wrapper">
              <span className="icon">📈</span>
            </div>
            <div className="hero-card-content">
              <h4>Results Driven</h4>
              <p>Effective Strategies</p>
            </div>
          </div>

          <div className="feature-card middle">
            <div className="card-icon-wrapper">
              <span className="icon">🛡️</span>
            </div>
            <div className="hero-card-content">
              <h4>Secure & Reliable</h4>
              <p>Trusted Solutions</p>
            </div>
          </div>

          <div className="feature-card bottom">
            <div className="card-icon-wrapper">
              <span className="icon">⚡</span>
            </div>
            <div className="hero-card-content">
              <h4>Innovative Solutions</h4>
              <p>Cutting-Edge Services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="home-hero-stats">
        <div className="stats-divider"></div>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-content">
              <h3>600+</h3>
              <p>Completed Projects</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <h3>300+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
