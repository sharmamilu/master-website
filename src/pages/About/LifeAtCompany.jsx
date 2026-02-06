import React, { useState } from "react";
import {
  Heart,
  Coffee,
  Trophy,
  GraduationCap,
  Calendar,
  Users,
  Globe,
  Home,
  DollarSign,
  Sun,
  Moon,
  Zap,
  Award,
  Gift,
  Shield,
  Briefcase,
  Star,
  Camera,
  Utensils,
  Gamepad,
  Music,
  BookOpen,
  TrendingUp,
  Smile,
  ThumbsUp,
  MessageSquare,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Clock,
  Video,
  Play,
  ChevronRight,
  ChevronLeft,
  X,
  Filter,
  Search,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import "./LifeAtCompany.css";

const LifeAtCompany = () => {
  const [activeTab, setActiveTab] = useState("culture");
  const [selectedImage, setSelectedImage] = useState(null);

  // Company Culture Data
  const cultureData = {
    title: "Our Vibrant Culture",
    description:
      "At MasterProject, we believe that a great culture breeds great work. We've built an environment where creativity thrives, collaboration flourishes, and everyone feels valued.",
    pillars: [
      {
        title: "Innovation First",
        description:
          "We encourage experimentation and provide time for passion projects.",
        icon: <Zap size={24} />,
        color: "blue",
      },
      {
        title: "Work-Life Harmony",
        description:
          "Flexible hours, remote options, and unlimited PTO to balance work and life.",
        icon: <Sun size={24} />,
        color: "green",
      },
      {
        title: "Continuous Growth",
        description:
          "Annual learning budgets, mentorship programs, and career development paths.",
        icon: <TrendingUp size={24} />,
        color: "purple",
      },
      {
        title: "Community Focus",
        description:
          "Regular team-building events, volunteer days, and community initiatives.",
        icon: <Heart size={24} />,
        color: "red",
      },
    ],
    values: [
      "Transparency in everything we do",
      "Empathy towards teammates and clients",
      "Ownership of projects and outcomes",
      "Excellence as our standard",
      "Collaboration over competition",
    ],
  };

  // Team Activities Data
  const activitiesData = {
    weekly: [
      {
        title: "Monday Kickoff",
        time: "9:30 AM",
        description: "Team breakfast and weekly planning session",
        icon: "☕",
      },
      {
        title: "Tech Talks",
        time: "Wednesday 4 PM",
        description: "Knowledge sharing sessions on latest tech trends",
        icon: "💻",
      },
      {
        title: "Friday Socials",
        time: "5:00 PM",
        description: "End-of-week celebrations and team bonding",
        icon: "🎉",
      },
    ],
    monthly: [
      {
        title: "Team Building",
        description: "Outdoor adventures, escape rooms, cooking classes",
        frequency: "Monthly",
        icon: "🤝",
      },
      {
        title: "Learning Workshops",
        description: "Professional development and skill-building sessions",
        frequency: "Bi-weekly",
        icon: "📚",
      },
      {
        title: "Community Service",
        description: "Volunteer days at local charities and organizations",
        frequency: "Quarterly",
        icon: "❤️",
      },
    ],
    events: [
      {
        title: "Annual Hackathon",
        description: "48-hour innovation challenge with exciting prizes",
        icon: "⚡",
        participants: "100+",
      },
      {
        title: "Summer Retreat",
        description: "Company-wide retreat for team bonding and planning",
        icon: "🏖️",
        participants: "All Team",
      },
      {
        title: "Tech Conferences",
        description: "Sponsored attendance at leading industry events",
        icon: "🎤",
        participants: "50+",
      },
    ],
  };

  // Benefits Data
  const benefitsData = {
    categories: [
      {
        title: "Health & Wellness",
        icon: <Heart size={24} />,
        items: [
          "Comprehensive health insurance",
          "Mental health support programs",
          "Gym membership reimbursement",
          "Wellness stipend ($500/year)",
          "On-site yoga and meditation",
        ],
      },
      {
        title: "Learning & Development",
        icon: <GraduationCap size={24} />,
        items: [
          "$2,000 annual learning budget",
          "Certification sponsorship",
          "Conference attendance",
          "Mentorship program",
          "Internal training sessions",
        ],
      },
      {
        title: "Work Environment",
        icon: <Home size={24} />,
        items: [
          "Flexible remote work options",
          "Modern office with ergonomic setup",
          "Unlimited PTO policy",
          "Parental leave (16 weeks)",
          "Home office equipment stipend",
        ],
      },
      {
        title: "Financial Benefits",
        icon: <DollarSign size={24} />,
        items: [
          "Competitive salary packages",
          "Annual performance bonuses",
          "Stock options program",
          "Retirement planning (401k matching)",
          "Profit sharing",
        ],
      },
    ],
    perks: [
      {
        title: "Unlimited Snacks",
        icon: "🍕",
        description: "Fully stocked kitchen with healthy options",
      },
      {
        title: "Team Events",
        icon: "🎮",
        description: "Monthly team outings and game nights",
      },
      {
        title: "Birthday Celebrations",
        icon: "🎂",
        description: "Paid day off on your birthday",
      },
      {
        title: "Pet Friendly",
        icon: "🐶",
        description: "Bring your furry friends to work",
      },
    ],
  };

  // Team Stories
  const storiesData = [
    {
      name: "Alex Johnson",
      role: "Senior Developer",
      tenure: "4 years",
      quote:
        "The growth opportunities here are incredible. I started as a junior dev and now lead a team of 10.",
      achievements: [
        "Promoted 3 times",
        "Built 15+ projects",
        "Mentored 8 junior devs",
      ],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex2",
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      tenure: "3 years",
      quote:
        "The creative freedom and supportive environment helped me develop my design skills exponentially.",
      achievements: [
        "Designed 50+ interfaces",
        "Led design system",
        "Won design awards",
      ],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2",
    },
    {
      name: "Michael Brown",
      role: "Product Manager",
      tenure: "2 years",
      quote:
        "The collaborative culture means everyone's voice is heard. Best team I've ever worked with.",
      achievements: [
        "Launched 8 products",
        "Improved user satisfaction",
        "Cross-team leadership",
      ],
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael2",
    },
  ];

  // Office Gallery
  const galleryData = [
    {
      category: "Workspace",
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
          title: "Open Workspace",
          caption: "Collaborative environment with standing desks",
        },
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w-800&auto=format&fit=crop",
          title: "Meeting Rooms",
          caption: "Modern meeting spaces for brainstorming",
        },
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1517502166878-35c93a0072f3?w=800&auto=format&fit=crop",
          title: "Creative Zone",
          caption: "Relaxed area for creative thinking",
        },
      ],
    },
    {
      category: "Team Events",
      images: [
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
          title: "Hackathon",
          caption: "Annual 48-hour innovation challenge",
        },
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&auto=format&fit=crop",
          title: "Team Building",
          caption: "Quarterly team adventure activities",
        },
        {
          id: 6,
          src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
          title: "Celebrations",
          caption: "Birthdays and milestone celebrations",
        },
      ],
    },
    {
      category: "Facilities",
      images: [
        {
          id: 7,
          src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop",
          title: "Kitchen & Cafe",
          caption: "Fully stocked with healthy snacks and drinks",
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
          title: "Game Room",
          caption: "Recreation area for breaks and bonding",
        },
        {
          id: 9,
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
          title: "Wellness Room",
          caption: "Quiet space for meditation and relaxation",
        },
      ],
    },
  ];

  // Social Media Feed
  const socialData = [
    {
      platform: "Instagram",
      handle: "@lifeatmasterproject",
      posts: 234,
      followers: "5.2K",
      icon: <Instagram size={20} />,
      color: "#E4405F",
      recent: [
        "Team lunch at new rooftop restaurant 🍽️",
        "Friday game night champions! 🏆",
        "Behind the scenes of our latest product launch 📱",
      ],
    },
    {
      platform: "LinkedIn",
      handle: "MasterProject",
      posts: 156,
      followers: "12K",
      icon: <Linkedin size={20} />,
      color: "#0A66C2",
      recent: [
        "Meet our new team members! 👋",
        "Industry insights from our tech leads 💡",
        "Company culture feature in Tech Magazine 📰",
      ],
    },
    {
      platform: "Twitter",
      handle: "@MasterProjectHQ",
      posts: 892,
      followers: "8.7K",
      icon: <Twitter size={20} />,
      color: "#1DA1F2",
      recent: [
        "Live from our annual hackathon! ⚡",
        "Tech tips from our engineering team 🛠️",
        "Join our virtual meetup next week 🌐",
      ],
    },
  ];

  // Job Openings
  const openingsData = [
    {
      department: "Engineering",
      positions: [
        {
          title: "Senior Frontend Developer",
          location: "Remote",
          type: "Full-time",
          experience: "5+ years",
        },
        {
          title: "Backend Engineer",
          location: "San Francisco",
          type: "Full-time",
          experience: "3+ years",
        },
        {
          title: "DevOps Engineer",
          location: "Hybrid",
          type: "Full-time",
          experience: "4+ years",
        },
      ],
    },
    {
      department: "Design",
      positions: [
        {
          title: "Product Designer",
          location: "Remote",
          type: "Full-time",
          experience: "3+ years",
        },
        {
          title: "UX Researcher",
          location: "San Francisco",
          type: "Full-time",
          experience: "2+ years",
        },
      ],
    },
    {
      department: "Marketing",
      positions: [
        {
          title: "Growth Marketer",
          location: "Remote",
          type: "Full-time",
          experience: "4+ years",
        },
        {
          title: "Content Strategist",
          location: "Hybrid",
          type: "Full-time",
          experience: "2+ years",
        },
      ],
    },
  ];

  return (
    <div className="life-page">
      {/* Hero Section */}
      <section className="life-hero">
        <div className="hero-background">
          <div className="floating-people">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="person"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  left: `${(i * 8) % 90}%`,
                  top: `${20 + ((i * 6) % 60)}%`,
                }}
              >
                {["👩‍💻", "👨‍💻", "👩‍🎨", "👨‍🎨", "👩‍🔬", "👨‍🔬"][i % 6]}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Life at <span className="gradient-text">MasterProject</span>
            </h1>
            <p className="hero-subtitle">
              Where passion meets purpose, and work feels like home.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">4.8</div>
                <div className="stat-label">Employee Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-value">94%</div>
                <div className="stat-label">Retention Rate</div>
              </div>
              <div className="stat">
                <div className="stat-value">#1</div>
                <div className="stat-label">Best Place to Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="life-tabs">
        <div className="container">
          <div className="tab-list">
            {[
              { id: "culture", label: "Our Culture", icon: "💫" },
              { id: "benefits", label: "Benefits", icon: "🎁" },
              { id: "activities", label: "Activities", icon: "🎉" },
              { id: "team", label: "Team Stories", icon: "👥" },
              { id: "gallery", label: "Gallery", icon: "📸" },
              { id: "careers", label: "Careers", icon: "💼" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Culture Section */}
      {activeTab === "culture" && (
        <section className="culture-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{cultureData.title}</h2>
              <p className="section-description">{cultureData.description}</p>
            </div>

            <div className="culture-pillars">
              {cultureData.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`pillar-card pillar-${pillar.color}`}
                >
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="culture-values">
              <h3 className="values-title">Our Cultural Values</h3>
              <div className="values-list">
                {cultureData.values.map((value, index) => (
                  <div key={index} className="value-item">
                    <div className="value-check">✓</div>
                    <span className="value-text">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {activeTab === "benefits" && (
        <section className="benefits-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Exceptional Benefits & Perks</h2>
              <p className="section-description">
                We invest in our team's well-being, growth, and success with
                comprehensive benefits.
              </p>
            </div>

            <div className="benefits-grid">
              {benefitsData.categories.map((category, index) => (
                <div key={index} className="benefit-category">
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-title">{category.title}</h3>
                  </div>

                  <ul className="benefits-list">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="benefit-item">
                        <div className="benefit-check">
                          <CheckCircle size={16} />
                        </div>
                        <span className="benefit-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="perks-section">
              <h3 className="perks-title">And That's Not All!</h3>
              <p className="perks-subtitle">
                Additional perks that make every day special
              </p>

              <div className="perks-grid">
                {benefitsData.perks.map((perk, index) => (
                  <div key={index} className="perk-card">
                    <div className="perk-icon">{perk.icon}</div>
                    <h4 className="perk-title">{perk.title}</h4>
                    <p className="perk-description">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Activities Section */}
      {activeTab === "activities" && (
        <section className="activities-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Team Activities & Events</h2>
              <p className="section-description">
                We believe in working hard and having fun. Here's what keeps our
                team energized.
              </p>
            </div>

            <div className="activities-grid">
              <div className="activity-group">
                <h3 className="group-title">Weekly Rituals</h3>
                <div className="activity-list">
                  {activitiesData.weekly.map((activity, index) => (
                    <div key={index} className="activity-card">
                      <div className="activity-icon">{activity.icon}</div>
                      <div className="activity-content">
                        <h4 className="activity-name">{activity.title}</h4>
                        <p className="activity-time">{activity.time}</p>
                        <p className="activity-description">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="activity-group">
                <h3 className="group-title">Monthly Activities</h3>
                <div className="activity-list">
                  {activitiesData.monthly.map((activity, index) => (
                    <div key={index} className="activity-card">
                      <div className="activity-icon">{activity.icon}</div>
                      <div className="activity-content">
                        <h4 className="activity-name">{activity.title}</h4>
                        <p className="activity-frequency">
                          {activity.frequency}
                        </p>
                        <p className="activity-description">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="activity-group full-width">
                <h3 className="group-title">Special Events</h3>
                <div className="events-grid">
                  {activitiesData.events.map((event, index) => (
                    <div key={index} className="event-card">
                      <div className="event-icon">{event.icon}</div>
                      <div className="event-content">
                        <h4 className="event-title">{event.title}</h4>
                        <p className="event-description">{event.description}</p>
                        <div className="event-participants">
                          <Users size={16} />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Stories Section */}
      {activeTab === "team" && (
        <section className="stories-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Hear From Our Team</h2>
              <p className="section-description">
                Real stories from the people who make MasterProject special.
              </p>
            </div>

            <div className="stories-grid">
              {storiesData.map((story, index) => (
                <div key={index} className="story-card">
                  <div className="story-header">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="story-avatar"
                    />
                    <div className="story-info">
                      <h3 className="story-name">{story.name}</h3>
                      <p className="story-role">{story.role}</p>
                      <p className="story-tenure">
                        {story.tenure} at MasterProject
                      </p>
                    </div>
                  </div>

                  <blockquote className="story-quote">
                    "{story.quote}"
                  </blockquote>

                  <div className="story-achievements">
                    {story.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="achievement">
                        <Trophy size={16} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeTab === "gallery" && (
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Inside Our World</h2>
              <p className="section-description">
                A glimpse into our offices, events, and daily life.
              </p>
            </div>

            {galleryData.map((category, catIndex) => (
              <div key={catIndex} className="gallery-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="gallery-grid">
                  {category.images.map((image) => (
                    <div
                      key={image.id}
                      className="gallery-item"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="image-container">
                        <div className="image-placeholder">
                          <div className="image-overlay">
                            <Eye size={24} />
                            <span>View</span>
                          </div>
                        </div>
                        <div className="image-info">
                          <h4 className="image-title">{image.title}</h4>
                          <p className="image-caption">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="social-feed">
              <h3 className="social-title">Follow Our Journey</h3>
              <div className="social-grid">
                {socialData.map((platform, index) => (
                  <div key={index} className="social-card">
                    <div
                      className="social-header"
                      style={{ backgroundColor: platform.color }}
                    >
                      <div className="social-icon">{platform.icon}</div>
                      <div className="social-info">
                        <h4 className="platform-name">{platform.platform}</h4>
                        <p className="platform-handle">{platform.handle}</p>
                      </div>
                    </div>

                    <div className="social-stats">
                      <div className="stat">
                        <div className="stat-value">{platform.posts}</div>
                        <div className="stat-label">Posts</div>
                      </div>
                      <div className="stat">
                        <div className="stat-value">{platform.followers}</div>
                        <div className="stat-label">Followers</div>
                      </div>
                    </div>

                    <div className="social-recent">
                      <h5>Recent Posts:</h5>
                      <ul className="recent-list">
                        {platform.recent.map((post, pIndex) => (
                          <li key={pIndex} className="recent-item">
                            <MessageSquare size={14} />
                            <span>{post}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#"
                      className="social-link"
                      style={{ color: platform.color }}
                    >
                      Follow Us
                      <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Careers Section */}
      {activeTab === "careers" && (
        <section className="careers-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Join Our Team</h2>
              <p className="section-description">
                Be part of something extraordinary. Explore opportunities to
                grow with us.
              </p>
            </div>

            <div className="careers-grid">
              {openingsData.map((department, deptIndex) => (
                <div key={deptIndex} className="department-card">
                  <div className="department-header">
                    <Briefcase size={24} />
                    <h3 className="department-title">
                      {department.department}
                    </h3>
                  </div>

                  <div className="positions-list">
                    {department.positions.map((position, posIndex) => (
                      <div key={posIndex} className="position-card">
                        <div className="position-info">
                          <h4 className="position-title">{position.title}</h4>
                          <div className="position-details">
                            <span className="detail">
                              <MapPin size={16} />
                              {position.location}
                            </span>
                            <span className="detail">
                              <Clock size={16} />
                              {position.type}
                            </span>
                            <span className="detail">
                              <Award size={16} />
                              {position.experience}
                            </span>
                          </div>
                        </div>

                        <button className="apply-button">
                          Apply Now
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="application-cta">
              <div className="cta-content">
                <h3 className="cta-title">Don't See Your Perfect Role?</h3>
                <p className="cta-description">
                  We're always looking for talented people. Send us your resume
                  and tell us how you can contribute.
                </p>

                <div className="cta-actions">
                  <button className="btn btn-primary">
                    <Mail size={20} />
                    <span>Send Your Resume</span>
                  </button>
                  <button className="btn btn-secondary">
                    <Phone size={20} />
                    <span>Schedule a Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            className="modal-close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <div className="image-placeholder-large">
                {/* In production, replace with actual image */}
                <div className="placeholder-text">
                  Image: {selectedImage.title}
                </div>
              </div>
            </div>
            <div className="modal-info">
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-caption">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for check mark
const CheckCircle = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default LifeAtCompany;
