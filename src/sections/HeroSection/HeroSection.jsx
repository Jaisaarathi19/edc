import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import logoSvg from '../../assets/images/edc-logo.svg';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <motion.div 
              className={styles.logoContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src={logoSvg} 
                alt="EDC Logo" 
                className={styles.heroLogo}
              />
            </motion.div>
            
            <motion.h1 
              className={styles.headline}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Empowering <span className={styles.accent}>Innovators</span>,<br />
              Igniting <span className={styles.accent}>Startups</span>
            </motion.h1>
            
            <motion.p 
              className={styles.subheadline}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              We empower student entrepreneurs with mentorship, and real-world exposure 
              to build sustainable startups and drive impactful innovation.
            </motion.p>
            
            <motion.div 
              className={styles.buttonGroup}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <Button 
                variant="primary" 
                size="large"
                icon={<FaArrowRight />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                icon={<FaPlay />}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Know More
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className={styles.videoContent}
            variants={videoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=example&autoplay=0&mute=0&controls=1&showinfo=0&rel=0"
                title="E-Cell Rajalakshmi Engineering College - Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
              <div className={styles.videoGlow}></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className={styles.scrollLine}></div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.redCircle}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className={styles.gridPattern}
          animate={{ 
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
