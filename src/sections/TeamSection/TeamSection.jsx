import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Joel',
      position: 'President',
      bio: 'Visionary leader with a passion for innovation and entrepreneurship. Joel has been instrumental in establishing strategic partnerships and driving the overall vision of E-Cell.',
      image: '/api/placeholder/300/300',
      skills: ['Leadership', 'Strategy', 'Public Speaking'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'joel@ecell.rec.in'
      },
      featured: true
    },
    {
      id: 2,
      name: 'Manish',
      position: 'Vice President',
      bio: 'Dynamic leader focused on operations and team coordination. Manish ensures seamless execution of events and maintains the high standards of E-Cell activities.',
      image: '/api/placeholder/300/300',
      skills: ['Operations', 'Team Management', 'Event Planning'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'manish@ecell.rec.in'
      },
      featured: true
    },
    {
      id: 3,
      name: 'Jayden',
      position: 'CEO',
      bio: 'Innovative thinker and execution expert. Jayden drives the technical initiatives and ensures that E-Cell stays at the forefront of entrepreneurial education.',
      image: '/api/placeholder/300/300',
      skills: ['Innovation', 'Technology', 'Business Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'jayden@ecell.rec.in'
      },
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className={styles.teamSection}>
      <div className={styles.container}>
        <Fade direction="up" triggerOnce>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <p className={styles.sectionSubtitle}>
              Meet the passionate individuals driving innovation and entrepreneurship at 
              Rajalakshmi Engineering College. Our diverse team brings together unique 
              perspectives and expertise to empower the next generation of entrepreneurs.
            </p>
          </div>
        </Fade>

        <motion.div 
          className={styles.teamGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`${styles.memberCard} ${member.featured ? styles.featured : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.imageContainer}>
                  <div className={styles.memberImage}>
                    <div className={styles.imagePlaceholder}>
                      <span>{member.name.charAt(0)}</span>
                    </div>
                    <div className={styles.imageOverlay}>
                      <div className={styles.socialLinks}>
                        {member.social.linkedin && (
                          <motion.a 
                            href={member.social.linkedin}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaLinkedin />
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a 
                            href={member.social.twitter}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaTwitter />
                          </motion.a>
                        )}
                        {member.social.github && (
                          <motion.a 
                            href={member.social.github}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaGithub />
                          </motion.a>
                        )}
                        {member.social.email && (
                          <motion.a 
                            href={`mailto:${member.social.email}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaEnvelope />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.positionBadge}>
                    {member.position}
                  </div>
                </div>

                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberBio}>{member.bio}</p>
                  
                  <div className={styles.skillsContainer}>
                    <h4 className={styles.skillsTitle}>Expertise</h4>
                    <div className={styles.skillsTags}>
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.cardGlow}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Fade direction="up" triggerOnce>
          <div className={styles.fullTeamSection}>
            <div className={styles.fullTeamContent}>
              <h3>Join Our Growing Team</h3>
              <p>
                We're always looking for passionate individuals who share our vision of 
                empowering student entrepreneurs. If you're ready to make a difference 
                and be part of something extraordinary, we'd love to hear from you.
              </p>
              <div className={styles.teamActions}>
                <Button 
                  variant="primary" 
                  size="large"
                  icon={<FaArrowRight />}
                  onClick={() => console.log('Meet full team')}
                >
                  Meet the Full Team
                </Button>
                <Button 
                  variant="secondary" 
                  size="large"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Team
                </Button>
              </div>
            </div>
          </div>
        </Fade>

        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <motion.div 
            className={styles.floatingCircle1}
            animate={{ 
              y: [0, -30, 0],
              x: [0, 15, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className={styles.floatingCircle2}
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
