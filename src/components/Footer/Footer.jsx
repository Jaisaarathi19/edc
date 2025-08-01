import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowRight,
  FaHeart,
  FaRocket
} from 'react-icons/fa';
import Button from '../Button/Button';
import logoSvg from '../../assets/images/edc-logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Centre & Labs', href: '#centre-labs' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const resources = [
    { name: 'Startup Resources', href: '#' },
    { name: 'Mentorship Program', href: '#' },
    { name: 'Funding Opportunities', href: '#' },
    { name: 'Workshops', href: '#' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <FaFacebook />, 
      href: '#',
      color: '#1877f2'
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram />, 
      href: '#',
      color: '#e4405f'
    },
    { 
      name: 'Twitter', 
      icon: <FaTwitter />, 
      href: '#',
      color: '#1da1f2'
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      href: '#',
      color: '#0077b5'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.footerContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Tagline */}
          <motion.div className={styles.footerBrand} variants={itemVariants}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <img 
                  src={logoSvg} 
                  alt="EDC Logo" 
                  className={styles.footerLogo}
                />
              </div>
              <p className={styles.tagline}>
                Empowering student entrepreneurs with mentorship and real-world exposure 
                to build sustainable startups and drive impactful innovation.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={resource.href} className={styles.footerLink}>
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Stay Connected</h4>
            <p className={styles.newsletterText}>
              Subscribe to our newsletter for the latest updates on events, 
              opportunities, and startup resources.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <div className={styles.inputGroup}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="medium"
                icon={<FaArrowRight />}
                className={styles.subscribeBtn}
              >
                Subscribe
              </Button>
            </form>

            {subscribed && (
              <motion.div 
                className={styles.subscriptionSuccess}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Thanks for subscribing!
              </motion.div>
            )}

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h5 className={styles.socialTitle}>Connect With Us</h5>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    style={{ '--social-color': social.color }}
                    whileHover={{ 
                      scale: 1.2,
                      y: -3
                    }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 E-Cell Rajalakshmi Engineering College. All rights reserved.
            </p>
            <p className={styles.madeWith}>
              Made with <FaHeart className={styles.heartIcon} /> by E-Cell REC Team
            </p>
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <motion.div 
            className={styles.bgElement}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
