import React from "react";
import {
  Target,
  Users,
  Award,
  Heart,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Star,
  ChevronRight,
  Quote,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart,
  PieChart,
  Users as TeamIcon,
  Building,
  Compass,
  Eye,
  HandHeart,
} from "lucide-react";
import "./About.css";

const About = () => {
  // Company Overview Data
  const companyData = {
    name: "MasterProject",
    tagline: "Innovating Tomorrow, Today",
    founded: "2015",
    headquarters: "San Francisco, CA",
    teamSize: "50+",
    clients: "250+",
    countries: "15+",
    projects: "500+",

    mission:
      "To empower businesses with cutting-edge digital solutions that drive growth, innovation, and sustainable success in the modern world.",
    vision:
      "To become the world's most trusted digital transformation partner, recognized for excellence, innovation, and measurable impact.",
  };

  // Our Story Data
  const storyData = {
    title: "Our Journey",
    milestones: [
      {
        year: "2015",
        title: "Founding",
        description:
          "Started with a vision to revolutionize digital experiences",
        icon: "🚀",
      },
      {
        year: "2017",
        title: "Expansion",
        description:
          "Expanded to international markets with first Fortune 500 client",
        icon: "🌍",
      },
      {
        year: "2019",
        title: "Innovation",
        description: "Launched AI-powered solutions division",
        icon: "🤖",
      },
      {
        year: "2021",
        title: "Growth",
        description: "Reached 100+ team members and opened 3 new offices",
        icon: "📈",
      },
      {
        year: "2023",
        title: "Recognition",
        description: "Awarded 'Best Digital Agency' by Tech Excellence Awards",
        icon: "🏆",
      },
    ],
  };

  // Values Data
  const valuesData = {
    title: "Our Core Values",
    values: [
      {
        icon: <Target size={32} />,
        title: "Excellence",
        description:
          "We pursue perfection in everything we do, delivering exceptional quality and attention to detail.",
        color: "blue",
      },
      {
        icon: <Heart size={32} />,
        title: "Integrity",
        description:
          "We maintain the highest ethical standards, building trust through transparency and honesty.",
        color: "red",
      },
      {
        icon: <Users size={32} />,
        title: "Collaboration",
        description:
          "We believe in the power of teamwork, both internally and with our clients.",
        color: "green",
      },
      {
        icon: <Zap size={32} />,
        title: "Innovation",
        description:
          "We continuously explore new technologies and approaches to solve complex challenges.",
        color: "yellow",
      },
      {
        icon: <Shield size={32} />,
        title: "Accountability",
        description:
          "We take ownership of our work and stand behind our commitments to clients.",
        color: "purple",
      },
      {
        icon: <Globe size={32} />,
        title: "Sustainability",
        description:
          "We build solutions that are sustainable, scalable, and environmentally conscious.",
        color: "teal",
      },
    ],
  };

  // Team Data
  const teamData = {
    title: "Leadership Team",
    description:
      "Meet the visionary leaders driving our success and innovation.",
    members: [
      {
        name: "Alex Johnson",
        role: "CEO & Founder",
        bio: "Serial entrepreneur with 15+ years in tech innovation and digital transformation.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        social: {
          linkedin: "#",
          twitter: "#",
        },
        stats: ["15+ Years", "50+ Projects", "Tech Visionary"],
      },
      {
        name: "Sarah Chen",
        role: "CTO",
        bio: "Former Google engineer passionate about scalable architecture and AI integration.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        social: {
          linkedin: "#",
          twitter: "#",
        },
        stats: ["12+ Years", "AI Expert", "Scalability"],
      },
      {
        name: "Michael Rodriguez",
        role: "Head of Design",
        bio: "Award-winning designer focused on creating intuitive and beautiful user experiences.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        social: {
          linkedin: "#",
          twitter: "#",
        },
        stats: ["10+ Years", "UI/UX Expert", "Design Systems"],
      },
      {
        name: "Emma Wilson",
        role: "Head of Growth",
        bio: "Marketing strategist with expertise in scaling startups and enterprise solutions.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        social: {
          linkedin: "#",
          twitter: "#",
        },
        stats: ["8+ Years", "Growth Hacker", "Market Strategy"],
      },
    ],
  };

  // Stats Data
  const statsData = [
    {
      value: companyData.projects,
      label: "Projects Completed",
      icon: <CheckCircle size={24} />,
    },
    {
      value: companyData.clients,
      label: "Happy Clients",
      icon: <Heart size={24} />,
    },
    {
      value: companyData.teamSize,
      label: "Team Members",
      icon: <TeamIcon size={24} />,
    },
    {
      value: companyData.countries,
      label: "Countries Served",
      icon: <Globe size={24} />,
    },
    {
      value: "99.9%",
      label: "Client Retention",
      icon: <TrendingUp size={24} />,
    },
    { value: "24/7", label: "Support", icon: <Clock size={24} /> },
  ];

  // Office Locations
  const officesData = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Street",
      image: "🌉",
      team: "Headquarters",
      specialties: ["R&D", "AI Labs", "Strategy"],
    },
    {
      city: "London",
      country: "UK",
      address: "45 Tech Square",
      image: "🇬🇧",
      team: "EMEA Hub",
      specialties: ["FinTech", "Consulting", "UX Research"],
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Digital Avenue",
      image: "🇸🇬",
      team: "APAC Center",
      specialties: ["E-commerce", "Mobile Apps", "Cloud Solutions"],
    },
  ];

  // Culture Data
  const cultureData = {
    title: "Our Culture",
    aspects: [
      {
        title: "Innovation First",
        description:
          "We allocate 20% of time for research and experimental projects",
        icon: "💡",
      },
      {
        title: "Work-Life Balance",
        description: "Flexible hours, remote options, and unlimited PTO",
        icon: "⚖️",
      },
      {
        title: "Continuous Learning",
        description: "Annual learning budget and regular tech workshops",
        icon: "📚",
      },
      {
        title: "Community Impact",
        description: "Quarterly volunteer days and pro-bono projects",
        icon: "🤝",
      },
    ],
  };

  // Testimonials
  const testimonialsData = [
    {
      quote:
        "Working with MasterProject transformed our digital infrastructure. Their expertise and dedication are unmatched.",
      author: "James Wilson",
      company: "TechForward Inc.",
      role: "CEO",
    },
    {
      quote:
        "The team's attention to detail and innovative approach exceeded all our expectations.",
      author: "Lisa Chang",
      company: "GlobalCommerce",
      role: "CTO",
    },
    {
      quote:
        "True partners in every sense. They understand our business and deliver solutions that drive real results.",
      author: "Robert Davis",
      company: "HealthFirst Systems",
      role: "Head of Digital",
    },
  ];

  // CTA Data
  const ctaData = {
    title: "Join Our Journey",
    subtitle: "Let's build something amazing together",
    description:
      "Whether you're looking to transform your business or join our talented team, we'd love to connect.",
    buttons: [
      { text: "Careers", link: "/careers", icon: <Users size={20} /> },
      { text: "Contact Us", link: "/contact", icon: <Mail size={20} /> },
      { text: "Our Work", link: "/portfolio", icon: <Eye size={20} /> },
    ],
  };

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="gradient-mesh"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient-text">Who We Are</span>
                <br />
                Pioneering Digital Excellence
              </h1>
              <p className="hero-subtitle">
                We're more than just a digital agency. We're your strategic
                partner in innovation, combining technical expertise with
                creative vision to build solutions that matter.
              </p>

              <div className="hero-stats">
                {statsData.slice(0, 4).map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="card-header">
                  <div className="company-logo">
                    <div className="logo-dot dot-1"></div>
                    <div className="logo-dot dot-2"></div>
                    <div className="logo-dot dot-3"></div>
                  </div>
                  <div className="company-info">
                    <h3>{companyData.name}</h3>
                    <p>{companyData.tagline}</p>
                  </div>
                </div>
                <div className="card-content">
                  <div className="info-grid">
                    <div className="info-item">
                      <Calendar size={18} />
                      <div>
                        <span className="info-label">Founded</span>
                        <span className="info-value">
                          {companyData.founded}
                        </span>
                      </div>
                    </div>
                    <div className="info-item">
                      <MapPin size={18} />
                      <div>
                        <span className="info-label">Headquarters</span>
                        <span className="info-value">
                          {companyData.headquarters}
                        </span>
                      </div>
                    </div>
                    <div className="info-item">
                      <TeamIcon size={18} />
                      <div>
                        <span className="info-label">Team Size</span>
                        <span className="info-value">
                          {companyData.teamSize}
                        </span>
                      </div>
                    </div>
                    <div className="info-item">
                      <Globe size={18} />
                      <div>
                        <span className="info-label">Global Reach</span>
                        <span className="info-value">
                          {companyData.countries} countries
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card mission">
              <div className="card-icon">🎯</div>
              <h2 className="card-title">Our Mission</h2>
              <p className="card-description">{companyData.mission}</p>
            </div>

            <div className="mission-card vision">
              <div className="card-icon">🔭</div>
              <h2 className="card-title">Our Vision</h2>
              <p className="card-description">{companyData.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{storyData.title}</h2>
            <p className="section-subtitle">
              From humble beginnings to industry leaders
            </p>
          </div>

          <div className="timeline">
            {storyData.milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-year">{milestone.year}</div>
                  <div className="marker-icon">{milestone.icon}</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">
                    {milestone.description}
                  </p>
                </div>
                {index < storyData.milestones.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{valuesData.title}</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            {valuesData.values.map((value, index) => (
              <div key={index} className={`value-card value-${value.color}`}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{teamData.title}</h2>
            <p className="section-subtitle">{teamData.description}</p>
          </div>

          <div className="team-grid">
            {teamData.members.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay">
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-link">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.social.twitter} className="social-link">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>

                  <div className="team-stats">
                    {member.stats.map((stat, statIndex) => (
                      <span key={statIndex} className="stat-badge">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="offices-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Global Presence</h2>
            <p className="section-subtitle">
              Serving clients worldwide from strategic locations
            </p>
          </div>

          <div className="offices-grid">
            {officesData.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-header">
                  <div className="office-flag">{office.image}</div>
                  <div className="office-location">
                    <h3 className="office-city">{office.city}</h3>
                    <p className="office-country">{office.country}</p>
                  </div>
                </div>

                <div className="office-body">
                  <p className="office-address">{office.address}</p>
                  <div className="office-team">{office.team}</div>

                  <div className="office-specialties">
                    {office.specialties.map((specialty, sIndex) => (
                      <span key={sIndex} className="specialty-badge">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="culture-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{cultureData.title}</h2>
            <p className="section-subtitle">
              What makes MasterProject a great place to work and partner with
            </p>
          </div>

          <div className="culture-grid">
            {cultureData.aspects.map((aspect, index) => (
              <div key={index} className="culture-card">
                <div className="culture-icon">{aspect.icon}</div>
                <h3 className="culture-title">{aspect.title}</h3>
                <p className="culture-description">{aspect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              Hear from businesses we've helped transform
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Quote size={24} className="quote-icon" />
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-details">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
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
              <h2 className="cta-title">{ctaData.title}</h2>
              <p className="cta-subtitle">{ctaData.subtitle}</p>
              <p className="cta-description">{ctaData.description}</p>

              <div className="cta-buttons">
                {ctaData.buttons.map((button, index) => (
                  <a key={index} href={button.link} className="btn btn-primary">
                    {button.icon}
                    <span>{button.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="cta-visual">
              <div className="animated-illustration">
                <div className="illustration-dot dot-1"></div>
                <div className="illustration-dot dot-2"></div>
                <div className="illustration-dot dot-3"></div>
                <div className="illustration-center">
                  <Users size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
