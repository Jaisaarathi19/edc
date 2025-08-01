import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoSvg from '../../assets/images/edc-logo.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About Us' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
    { href: '#centre-labs', label: 'Centre & Labs' },
    { href: '#contact', label: 'Contact Us' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      className={`${styles.navigation} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <a href="#home" onClick={() => handleNavClick('#home')}>
            <img 
              src={logoSvg} 
              alt="EDC Logo" 
              className={styles.logoImage}
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={styles.navLink}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className={styles.mobileNavList}>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={styles.mobileNavLink}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
