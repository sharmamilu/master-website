import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  Home,
  Users,
  Briefcase,
  Images,
  Phone,
  ChevronDown,
  ChevronRight,
  Building,
  Heart,
  Globe,
  Target,
  Award,
  Calendar,
  Coffee,
} from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Helper to check if a navigation item is active
  const isNavActive = (item) => {
    if (item.type === "link") {
      return location.pathname === item.path;
    }
    if (item.type === "dropdown") {
      return item.items.some((subItem) => location.pathname === subItem.path);
    }
    return false;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Main navigation items with icons
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} />,
      type: "link",
    },
    {
      name: "Who We Are",
      type: "dropdown",
      icon: <Users size={18} />,
      items: [
        {
          name: "About Us",
          path: "/about",
          icon: <Building size={16} />,
          description: "Our story and mission",
        },
        {
          name: "Life @ Company",
          path: "/life",
          icon: <Heart size={16} />,
          description: "Our culture and team",
        },
        {
          name: "Our Values",
          path: "/values",
          icon: <Target size={16} />,
          description: "What drives us forward",
        },
        {
          name: "Leadership",
          path: "/leadership",
          icon: <Award size={16} />,
          description: "Meet our leaders",
        },
      ],
    },
    {
      name: "What We Offer",
      type: "dropdown",
      icon: <Briefcase size={18} />,
      items: [
        {
          name: "Services",
          path: "/services",
          icon: <Globe size={16} />,
          description: "Our core offerings",
        },
        {
          name: "Solutions",
          path: "/solutions",
          icon: <Target size={16} />,
          description: "Tailored solutions",
        },
        {
          name: "Industries",
          path: "/industries",
          icon: <Briefcase size={16} />,
          description: "Sectors we serve",
        },
        // {
        //   name: "Case Studies",
        //   path: "/case-studies",
        //   icon: <Award size={16} />,
        //   description: "Success stories",
        // },
      ],
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <Images size={18} />,
      type: "link",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Phone size={18} />,
      type: "link",
    },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (item) => {
    if (item.type === "link") {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <div className="logo-icon">
              <div className="logo-dot logo-dot-primary"></div>
              <div className="logo-dot logo-dot-secondary"></div>
              <div className="logo-dot logo-dot-accent"></div>
            </div>
            <div className="logo-text">
              <span className="logo-main">Master</span>
              <span className="logo-sub">Project</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center" ref={dropdownRef}>
          <div className="navbar-links">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`nav-item ${item.type === "dropdown" ? "has-dropdown" : ""}`}
              >
                {item.type === "link" ? (
                  <Link
                    to={item.path}
                    className={`nav-link ${isNavActive(item) ? "active" : ""}`}
                    onClick={() => handleNavClick(item)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                  </Link>
                ) : (
                  <>
                    <button
                      className={`nav-link dropdown-trigger ${isNavActive(item) ? "active" : ""}`}
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-text">{item.name}</span>
                      <span className="dropdown-arrow">
                        {activeDropdown === item.name ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </span>
                    </button>

                    {activeDropdown === item.name && (
                      <div className="dropdown-menu">
                        <div className="dropdown-header">
                          <div className="dropdown-icon">{item.icon}</div>
                          <div>
                            <h3 className="dropdown-title">{item.name}</h3>
                            <p className="dropdown-subtitle">
                              Explore our {item.name.toLowerCase()}
                            </p>
                          </div>
                        </div>
                        <div className="dropdown-items">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`dropdown-item ${location.pathname === subItem.path ? "active" : ""}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <div className="dropdown-item-icon">
                                {subItem.icon}
                              </div>
                              <div className="dropdown-item-content">
                                <span className="dropdown-item-title">
                                  {subItem.name}
                                </span>
                                <span className="dropdown-item-desc">
                                  {subItem.description}
                                </span>
                              </div>
                              <ChevronRight
                                size={16}
                                className="dropdown-item-arrow"
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            data-tooltip={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="theme-icon" size={20} />
            ) : (
              <Sun className="theme-icon" size={20} />
            )}
          </button>

          {/* CTA Button */}
          <a href="/contact" className="cta-button">
            <span>Get Started</span>
            <ChevronRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="menu-icon" />
            ) : (
              <Menu size={24} className="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="mobile-menu-overlay active"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header"></div>

              <div className="mobile-menu-content">
                <div className="mobile-menu-items">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className={`mobile-nav-item ${isNavActive(item) ? "active" : ""}`}
                    >
                      {item.type === "link" ? (
                        <Link
                          to={item.path}
                          className={`mobile-nav-link ${isNavActive(item) ? "active" : ""}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="mobile-nav-icon">{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <div
                          className={`mobile-dropdown ${
                            activeDropdown === `mobile-${item.name}`
                              ? "is-active"
                              : ""
                          } ${isNavActive(item) ? "active" : ""}`}
                        >
                          <button
                            className={`mobile-dropdown-trigger ${isNavActive(item) ? "active" : ""}`}
                            onClick={() =>
                              toggleDropdown(`mobile-${item.name}`)
                            }
                          >
                            <span className="mobile-nav-icon">{item.icon}</span>
                            <span>{item.name}</span>
                            <ChevronDown
                              size={16}
                              className={`mobile-dropdown-arrow ${
                                activeDropdown === `mobile-${item.name}`
                                  ? "rotated"
                                  : ""
                              }`}
                            />
                          </button>

                          {activeDropdown === `mobile-${item.name}` && (
                            <div className="mobile-dropdown-content">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={`mobile-submenu-link ${location.pathname === subItem.path ? "active" : ""}`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <span className="mobile-submenu-icon">
                                    {subItem.icon}
                                  </span>
                                  <div className="mobile-submenu-content">
                                    <span className="mobile-submenu-title">
                                      {subItem.name}
                                    </span>
                                    <span className="mobile-submenu-desc">
                                      {subItem.description}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

// Add missing imports
const Moon = ({ size }) => <span>🌙</span>;
const Sun = ({ size }) => <span>☀️</span>;
const Menu = ({ size }) => <span>☰</span>;
const X = ({ size }) => <span>✕</span>;
