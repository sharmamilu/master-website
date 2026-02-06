import React, { useState } from "react";
import {
  Target,
  Heart,
  Users,
  Shield,
  Zap,
  Globe,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
  Lightbulb,
  HandHeart,
  Scale,
  TrendingUp,
  RefreshCw,
  Eye,
  Lock,
  MessageSquare,
  BookOpen,
  Compass,
  Leaf,
  Puzzle,
  Rocket,
  Sparkles,
  Crown,
  Medal,
  Trophy,
  Flag,
  Coffee,
  Briefcase,
  Home,
  School,
  Building,
  Hospital,
  Store,
  Factory,
  Car,
  Plane,
  Ship,
  Camera,
  Music,
  Palette,
  Code,
  //   Flask,
  Microscope,
  Wrench,
  PenTool,
} from "lucide-react";
import "./Values.css";

const Values = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [industry, setIndustry] = useState("tech"); // Default industry

  // Industry-specific configurations
  const industries = {
    tech: {
      name: "Technology",
      icon: <Code size={24} />,
      color: "blue",
      examples: ["Innovation", "Agility", "Security", "Scalability"],
    },
    healthcare: {
      name: "Healthcare",
      icon: <Hospital size={24} />,
      color: "green",
      examples: ["Compassion", "Excellence", "Trust", "Care"],
    },
    education: {
      name: "Education",
      icon: <School size={24} />,
      color: "purple",
      examples: ["Knowledge", "Growth", "Integrity", "Community"],
    },
    finance: {
      name: "Finance",
      icon: <Briefcase size={24} />,
      color: "yellow",
      examples: ["Trust", "Security", "Transparency", "Reliability"],
    },
    retail: {
      name: "Retail",
      icon: <Store size={24} />,
      color: "red",
      examples: ["Service", "Quality", "Value", "Convenience"],
    },
    creative: {
      name: "Creative",
      icon: <Palette size={24} />,
      color: "pink",
      examples: ["Creativity", "Innovation", "Expression", "Collaboration"],
    },
    manufacturing: {
      name: "Manufacturing",
      icon: <Factory size={24} />,
      color: "orange",
      examples: ["Quality", "Efficiency", "Safety", "Precision"],
    },
    hospitality: {
      name: "Hospitality",
      icon: <Coffee size={24} />,
      color: "teal",
      examples: ["Service", "Warmth", "Attention", "Experience"],
    },
  };

  // Core Values Data - Universal but customizable per industry
  const valuesData = {
    title: "Our Guiding Principles",
    subtitle: "The values that define who we are and how we work",
    description:
      "These principles are the foundation of our culture, guiding every decision we make and every action we take. They represent our commitment to excellence, integrity, and making a positive impact.",

    values: [
      {
        id: 1,
        title: "Integrity",
        description:
          "We uphold the highest ethical standards in all our actions, building trust through honesty and transparency.",
        icon: <Shield size={32} />,
        color: "primary",
        industryExamples: {
          tech: "Transparent data practices and ethical AI development",
          healthcare: "Patient confidentiality and honest communication",
          education: "Academic honesty and fair assessment",
          finance: "Transparent fees and honest financial advice",
          retail: "Accurate product information and fair pricing",
          creative: "Original work and proper attribution",
          manufacturing: "Quality control and safety compliance",
          hospitality: "Honest advertising and fair service",
        },
        practices: [
          "Always tell the truth, even when it's difficult",
          "Take responsibility for our actions and decisions",
          "Respect confidentiality and privacy",
          "Follow through on our commitments",
        ],
        quote:
          "Integrity is doing the right thing, even when no one is watching.",
      },
      {
        id: 2,
        title: "Excellence",
        description:
          "We pursue perfection in everything we do, delivering exceptional quality and exceeding expectations.",
        icon: <Award size={32} />,
        color: "secondary",
        industryExamples: {
          tech: "Cutting-edge solutions with impeccable quality",
          healthcare: "World-class medical care and patient outcomes",
          education: "Outstanding academic programs and student success",
          finance: "Precision in calculations and reporting",
          retail: "Premium products and exceptional customer service",
          creative: "Award-winning designs and innovative concepts",
          manufacturing: "Precision engineering and quality craftsmanship",
          hospitality: "Five-star service and memorable experiences",
        },
        practices: [
          "Set high standards and consistently meet them",
          "Continuously improve our processes and skills",
          "Pay attention to every detail",
          "Learn from both successes and failures",
        ],
        quote: "Excellence is not a skill, it's an attitude.",
      },
      {
        id: 3,
        title: "Collaboration",
        description:
          "We believe in the power of teamwork, fostering an environment where diverse perspectives unite to achieve common goals.",
        icon: <Users size={32} />,
        color: "accent",
        industryExamples: {
          tech: "Cross-functional teams and open-source contributions",
          healthcare: "Multidisciplinary care teams and research partnerships",
          education: "Faculty collaboration and student teamwork",
          finance: "Interdepartmental coordination and client partnerships",
          retail: "Supplier relationships and team-based service",
          creative: "Creative partnerships and collaborative projects",
          manufacturing: "Supply chain coordination and team problem-solving",
          hospitality: "Seamless team coordination for guest satisfaction",
        },
        practices: [
          "Listen actively and value diverse perspectives",
          "Share knowledge and resources freely",
          "Support and uplift team members",
          "Celebrate collective achievements",
        ],
        quote: "Alone we can do so little; together we can do so much.",
      },
      {
        id: 4,
        title: "Innovation",
        description:
          "We embrace change and creativity, constantly seeking new and better ways to solve challenges and create value.",
        icon: <Zap size={32} />,
        color: "green",
        industryExamples: {
          tech: "Pioneering new technologies and solutions",
          healthcare: "Medical breakthroughs and treatment innovations",
          education: "Modern teaching methods and learning technologies",
          finance: "Digital banking solutions and fintech innovations",
          retail: "E-commerce advancements and customer experience innovations",
          creative: "Artistic innovations and creative expression",
          manufacturing: "Process innovations and sustainable production",
          hospitality: "Service innovations and unique guest experiences",
        },
        practices: [
          "Encourage creative thinking and experimentation",
          "Embrace calculated risks and learn from failures",
          "Stay curious and continuously learn",
          "Adapt quickly to changing environments",
        ],
        quote: "Innovation distinguishes between a leader and a follower.",
      },
      {
        id: 5,
        title: "Respect",
        description:
          "We value every individual, treating others with dignity, empathy, and consideration in all interactions.",
        icon: <Heart size={32} />,
        color: "pink",
        industryExamples: {
          tech: "Inclusive work environments and accessible design",
          healthcare: "Patient dignity and cultural sensitivity",
          education: "Inclusive classrooms and diverse perspectives",
          finance: "Client respect and fair treatment",
          retail: "Customer respect and inclusive shopping experiences",
          creative: "Respect for artistic expression and cultural differences",
          manufacturing: "Worker dignity and safe work environments",
          hospitality: "Cultural sensitivity and personalized service",
        },
        practices: [
          "Treat everyone with kindness and consideration",
          "Value diversity and different perspectives",
          "Practice active listening and empathy",
          "Create an inclusive environment for all",
        ],
        quote:
          "Respect for ourselves guides our morals, respect for others guides our manners.",
      },
      {
        id: 6,
        title: "Responsibility",
        description:
          "We take ownership of our actions and their impact on our community, environment, and stakeholders.",
        icon: <Globe size={32} />,
        color: "teal",
        industryExamples: {
          tech: "Sustainable tech and responsible data use",
          healthcare: "Community health initiatives and ethical practices",
          education: "Student development and community engagement",
          finance: "Ethical investing and corporate responsibility",
          retail: "Sustainable sourcing and community support",
          creative: "Socially responsible art and community projects",
          manufacturing: "Environmental responsibility and ethical production",
          hospitality: "Sustainable operations and community involvement",
        },
        practices: [
          "Consider the broader impact of our decisions",
          "Take initiative and follow through",
          "Be accountable for our results",
          "Contribute positively to our community",
        ],
        quote: "With great power comes great responsibility.",
      },
    ],

    // How we live our values
    implementation: {
      title: "Living Our Values",
      areas: [
        {
          title: "In Our Work",
          description:
            "How we apply our values in daily operations and decision-making",
          icon: <Briefcase size={24} />,
          examples: [
            "Ethical decision-making frameworks",
            "Quality assurance processes",
            "Team collaboration tools and practices",
            "Innovation incubators and R&D",
            "Respectful communication protocols",
            "Sustainability initiatives",
          ],
        },
        {
          title: "With Our Team",
          description:
            "How we cultivate our values within our organization and culture",
          icon: <Users size={24} />,
          examples: [
            "Inclusive hiring practices",
            "Continuous learning programs",
            "Recognition and reward systems",
            "Mentorship and coaching",
            "Diversity and inclusion initiatives",
            "Work-life balance support",
          ],
        },
        {
          title: "For Our Community",
          description:
            "How we extend our values to make a positive impact beyond our walls",
          icon: <HandHeart size={24} />,
          examples: [
            "Community service programs",
            "Pro bono work and donations",
            "Environmental conservation efforts",
            "Educational partnerships",
            "Local business support",
            "Volunteer time off policies",
          ],
        },
      ],
    },

    // Testimonials
    testimonials: [
      {
        text: "These values aren't just words on a wall - they're lived every day by every team member.",
        author: "Team Member",
        role: "Employee of 3 years",
      },
      {
        text: "Working with a company that truly lives its values makes all the difference.",
        author: "Client Partner",
        role: "Partner of 2 years",
      },
      {
        text: "The commitment to these principles is evident in every interaction and outcome.",
        author: "Community Leader",
        role: "Partner Organization",
      },
    ],

    // Call to Action
    cta: {
      title: "Share Your Values With Us",
      description:
        "We believe great partnerships are built on shared values. Tell us what matters most to you.",
      actions: [
        { text: "Join Our Team", link: "/careers", icon: <Users size={20} /> },
        {
          text: "Partner With Us",
          link: "/contact",
          icon: <HandHeart size={20} />,
        },
        { text: "Learn More", link: "/about", icon: <BookOpen size={20} /> },
      ],
    },
  };

  const activeValueData = valuesData.values[activeValue];
  const industryConfig = industries[industry];

  return (
    <div className="values-page">
      {/* Hero Section */}
      <section className="values-hero">
        <div className="hero-background">
          <div className="floating-values">
            {["✨", "💫", "🌟", "⭐", "🎯", "❤️", "🤝", "🌱", "⚡", "🛡️"].map(
              (emoji, index) => (
                <div
                  key={index}
                  className="floating-emoji"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    left: `${(index * 10) % 90}%`,
                    top: `${20 + ((index * 7) % 60)}%`,
                    fontSize: `${24 + (index % 3) * 8}px`,
                  }}
                >
                  {emoji}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Our <span className="gradient-text">Values</span>
              </h1>
              <p className="hero-subtitle">{valuesData.subtitle}</p>
              <p className="hero-description">{valuesData.description}</p>

              {/* Industry Selector */}
              <div className="industry-selector">
                <div className="selector-label">See values in action for:</div>
                <div className="industry-tags">
                  {Object.entries(industries).map(([key, config]) => (
                    <button
                      key={key}
                      className={`industry-tag ${industry === key ? "active" : ""}`}
                      onClick={() => setIndustry(key)}
                      style={{
                        "--industry-color": `var(--${config.color}-color, var(--primary-color))`,
                      }}
                    >
                      <span className="industry-icon">{config.icon}</span>
                      <span className="industry-name">{config.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="values-compass">
                <div className="compass-circle">
                  <div className="compass-center">
                    <Target size={48} />
                  </div>
                  {valuesData.values.map((value, index) => (
                    <div
                      key={value.id}
                      className={`compass-point ${activeValue === index ? "active" : ""}`}
                      style={{ "--angle": `${index * 60}deg` }}
                      onClick={() => setActiveValue(index)}
                    >
                      <div className="point-icon">{value.icon}</div>
                      <div className="point-label">{value.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Value Detail */}
      <section className="value-detail-section">
        <div className="container">
          <div className="value-detail-card">
            <div className="value-header">
              <div
                className={`value-icon-wrapper value-${activeValueData.color}`}
              >
                {activeValueData.icon}
              </div>
              <div className="value-title-group">
                <h2 className="value-title">{activeValueData.title}</h2>
                <p className="value-description">
                  {activeValueData.description}
                </p>
              </div>
            </div>

            <div className="value-content">
              <div className="value-example">
                <h3 className="example-title">
                  <span className="industry-icon">{industryConfig.icon}</span>
                  In {industryConfig.name}
                </h3>
                <p className="example-text">
                  {activeValueData.industryExamples[industry]}
                </p>
              </div>

              <div className="value-practices">
                <h3 className="practices-title">How We Practice This Value</h3>
                <div className="practices-grid">
                  {activeValueData.practices.map((practice, index) => (
                    <div key={index} className="practice-item">
                      <div className="practice-check">
                        <CheckCircle size={18} />
                      </div>
                      <span className="practice-text">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="value-quote">
                <Quote size={24} />
                <blockquote className="quote-text">
                  {activeValueData.quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Values Grid */}
      <section className="all-values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              Six principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            {valuesData.values.map((value, index) => (
              <div
                key={value.id}
                className={`value-card ${activeValue === index ? "active" : ""}`}
                onClick={() => setActiveValue(index)}
              >
                <div className={`card-icon value-${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="card-title">{value.title}</h3>
                <p className="card-description">{value.description}</p>
                <button className="card-link">
                  Explore
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="implementation-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{valuesData.implementation.title}</h2>
            <p className="section-subtitle">
              Putting our values into practice across all aspects of our work
            </p>
          </div>

          <div className="implementation-grid">
            {valuesData.implementation.areas.map((area, index) => (
              <div key={index} className="implementation-card">
                <div className="area-header">
                  <div className="area-icon">{area.icon}</div>
                  <h3 className="area-title">{area.title}</h3>
                </div>
                <p className="area-description">{area.description}</p>

                <div className="examples-list">
                  {area.examples.map((example, exIndex) => (
                    <div key={exIndex} className="example-item">
                      <div className="example-bullet"></div>
                      <span className="example-text">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Metrics */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">🎯</div>
              <div className="metric-value">100%</div>
              <div className="metric-label">Value Alignment in Hiring</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">📈</div>
              <div className="metric-value">95%</div>
              <div className="metric-label">Employee Value Satisfaction</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🏆</div>
              <div className="metric-value">50+</div>
              <div className="metric-label">Values-Based Awards</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🤝</div>
              <div className="metric-value">200+</div>
              <div className="metric-label">Community Initiatives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Values in Action</h2>
            <p className="section-subtitle">
              Hear what others say about living our values
            </p>
          </div>

          <div className="testimonials-grid">
            {valuesData.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <Quote size={24} className="quote-icon" />
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">{valuesData.cta.title}</h2>
              <p className="cta-description">{valuesData.cta.description}</p>

              <div className="cta-actions">
                {valuesData.cta.actions.map((action, index) => (
                  <a key={index} href={action.link} className="btn btn-primary">
                    {action.icon}
                    <span>{action.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="cta-visual">
              <div className="values-illustration">
                <div className="illustration-dots">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="illustration-dot"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        transform: `rotate(${i * 60}deg) translateX(80px) rotate(-${i * 60}deg)`,
                      }}
                    >
                      {valuesData.values[i].icon}
                    </div>
                  ))}
                </div>
                <div className="illustration-center">
                  <Heart size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Pledge */}
      <section className="pledge-section">
        <div className="container">
          <div className="pledge-card">
            <div className="pledge-header">
              <Target size={32} />
              <h3 className="pledge-title">Our Values Pledge</h3>
            </div>
            <p className="pledge-text">
              We pledge to uphold these values in every decision we make, every
              action we take, and every relationship we build. They are our
              compass, guiding us toward excellence, integrity, and positive
              impact.
            </p>
            <div className="pledge-signature">
              <div className="signature-line"></div>
              <span className="signature-label">The Entire Team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
