import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaUsers, FaTrophy } from 'react-icons/fa';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const statsData = [
    { icon: <FaUsers />, number: '500+', label: 'Students Empowered' },
    { icon: <FaRocket />, number: '50+', label: 'Startups Launched' },
    { icon: <FaLightbulb />, number: '100+', label: 'Ideas Nurtured' },
    { icon: <FaTrophy />, number: '25+', label: 'Awards Won' }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Our Story Section */}
        <Fade direction="up" triggerOnce>
          <div className={styles.storySection}>
            <motion.div 
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>OUR STORY</h2>
              <p className={styles.sectionSubtitle}>
                Your Vision, Our Expertise, Your Success Gets Noticed
              </p>
            </motion.div>
            
            <div className={styles.storyContent}>
              <Slide direction="left" triggerOnce>
                <div className={styles.storyText}>
                  <h3>E-Cell Story</h3>
                  <p>
                    Founded with a vision to transform the entrepreneurial landscape at Rajalakshmi Engineering College, 
                    our E-Cell has been the cornerstone of innovation and startup culture since its inception. We believe 
                    that every student has the potential to be a game-changer, and our mission is to provide them with 
                    the platform, resources, and mentorship needed to turn their ideas into reality.
                  </p>
                  <p>
                    From hosting ideation workshops to facilitating funding connections, we've created an ecosystem 
                    where creativity meets opportunity. Our journey has been marked by countless success stories of 
                    students who dared to dream and achieved the extraordinary.
                  </p>
                </div>
              </Slide>
              
              <Slide direction="right" triggerOnce>
                <div className={styles.facultyMessage}>
                  <div className={styles.messageCard}>
                    <h4>Message from the Faculty Co-ordinator</h4>
                    <blockquote>
                      "At E-Cell REC, we don't just teach entrepreneurship - we live it. Our commitment is to nurture 
                      the entrepreneurial spirit in every student and provide them with the tools to build sustainable, 
                      impactful ventures that can change the world."
                    </blockquote>
                    <div className={styles.facultyInfo}>
                      <strong>Dr. V. Sampath Kumar</strong>
                      <span>M.Tech., Ph.D.</span>
                      <span>Director - Startup HQ</span>
                      <span>Head - Entrepreneurship Development Cell</span>
                      <span>Rajalakshmi Engineering College, Chennai</span>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </Fade>

        {/* Statistics Section */}
        <Fade direction="up" triggerOnce>
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <motion.div 
                    className={styles.statNumber}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Fade>

        {/* Mission and Vision */}
        <div className={styles.missionVisionSection}>
          <Slide direction="left" triggerOnce>
            <div className={styles.missionCard}>
              <div className={styles.cardHeader}>
                <h2>OUR MISSION</h2>
                <p>Nurturing Entrepreneurial Spirit Through Innovation And Action</p>
              </div>
              <div className={styles.cardContent}>
                <p>
                  Our mission is to foster entrepreneurial thinking and provide students with the resources, 
                  mentorship, and opportunities they need to transform innovative ideas into successful ventures. 
                  We aim to create a vibrant ecosystem that encourages risk-taking and creative problem-solving.
                </p>
              </div>
              <div className={styles.cardAccent}></div>
            </div>
          </Slide>

          <Slide direction="right" triggerOnce>
            <div className={styles.visionCard}>
              <div className={styles.cardHeader}>
                <h2>OUR VISION</h2>
                <p>From Classrooms To Unicorns, Empowering Student Visionaries</p>
              </div>
              <div className={styles.cardContent}>
                <p>
                  Our vision is for every student at Rajalakshmi Engineering College to have the opportunity 
                  to explore entrepreneurship. We strive to be the catalyst that transforms classroom knowledge 
                  into real-world business success, creating a generation of job creators rather than job seekers.
                </p>
              </div>
              <div className={styles.cardAccent}></div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
