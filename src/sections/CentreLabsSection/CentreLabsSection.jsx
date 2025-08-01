import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaLightbulb, 
  FaPencilRuler, 
  FaCogs, 
  FaWifi, 
  FaShieldAlt, 
  FaClock, 
  FaTools,
  FaArrowRight
} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import styles from './CentreLabsSection.module.css';

const CentreLabsSection = () => {
  const incubationFeatures = [
    { icon: <FaClock />, text: '24/7 Access' },
    { icon: <FaWifi />, text: 'High-speed Internet' },
    { icon: <FaTools />, text: 'Prototyping Facilities' },
    { icon: <FaShieldAlt />, text: 'Legal & Financial Advisory' }
  ];

  const labsData = [
    {
      id: 1,
      title: 'Innovation Lab',
      description: 'A specialized space equipped with cutting-edge technology for rapid prototyping, AI/ML research, and emerging technology exploration. Our Innovation Lab provides students with access to the latest tools and technologies to bring their ideas to life.',
      icon: <FaLightbulb />,
      features: ['AI/ML Workstations', '3D Printers', 'IoT Development Kits', 'VR/AR Equipment']
    },
    {
      id: 2,
      title: 'Design Thinking Space',
      description: 'A collaborative environment designed to foster creative problem-solving and human-centered design approaches. This space encourages ideation, brainstorming, and the development of innovative solutions to real-world challenges.',
      icon: <FaPencilRuler />,
      features: ['Flexible Workspaces', 'Digital Whiteboards', 'Design Thinking Tools', 'Collaboration Areas']
    },
    {
      id: 3,
      title: 'Maker Space',
      description: 'A hands-on workshop where entrepreneurs can build, test, and refine their product prototypes. Equipped with professional-grade tools and machinery for woodworking, electronics, and mechanical engineering projects.',
      icon: <FaCogs />,
      features: ['Workshop Tools', 'Electronics Lab', 'CNC Machines', 'Safety Equipment']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="centre-labs" className={styles.centreLabsSection}>
      <div className={styles.container}>
        <Fade direction="up" triggerOnce>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Centre and Labs</h2>
            <p className={styles.sectionSubtitle}>
              State-of-the-art facilities designed to nurture innovation and provide 
              entrepreneurs with the resources they need to transform ideas into reality.
            </p>
          </div>
        </Fade>

        {/* Startup Incubation Centre */}
        <Slide direction="up" triggerOnce>
          <div className={styles.incubationSection}>
            <div className={styles.incubationContent}>
              <div className={styles.incubationText}>
                <div className={styles.incubationHeader}>
                  <div className={styles.headerIcon}>
                    <FaRocket />
                  </div>
                  <div>
                    <h3>Startup Incubation Centre</h3>
                    <span className={styles.subtitle}>Nurturing Tomorrow's Unicorns</span>
                  </div>
                </div>
                
                <p className={styles.incubationDescription}>
                  Our state-of-the-art incubation center provides a comprehensive ecosystem 
                  for startups to thrive. From ideation to scaling, we offer mentorship, 
                  resources, and infrastructure to help entrepreneurs build sustainable 
                  and impactful ventures.
                </p>

                <motion.div 
                  className={styles.featuresGrid}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {incubationFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={styles.featureItem}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={styles.featureIcon}>{feature.icon}</div>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <Button 
                  variant="primary" 
                  size="medium"
                  icon={<FaArrowRight />}
                  className={styles.learnMoreBtn}
                >
                  Learn More
                </Button>
              </div>

              <div className={styles.incubationVisual}>
                <div className={styles.visualContainer}>
                  <div className={styles.incubationImage}>
                    <div className={styles.imagePlaceholder}>
                      <FaRocket className={styles.placeholderIcon} />
                      <span>Incubation Centre</span>
                    </div>
                  </div>
                  <div className={styles.visualAccents}>
                    <motion.div 
                      className={styles.accent1}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    <motion.div 
                      className={styles.accent2}
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Labs Grid */}
        <motion.div 
          className={styles.labsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {labsData.map((lab, index) => (
            <motion.div
              key={lab.id}
              className={styles.labCard}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.labHeader}>
                <div className={styles.labIcon}>{lab.icon}</div>
                <h3 className={styles.labTitle}>{lab.title}</h3>
              </div>
              
              <p className={styles.labDescription}>{lab.description}</p>
              
              <div className={styles.labFeatures}>
                <h4>Key Features:</h4>
                <ul>
                  {lab.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.labFooter}>
                <Button 
                  variant="ghost" 
                  size="small"
                  icon={<FaArrowRight />}
                  className={styles.labLearnMore}
                >
                  Learn more →
                </Button>
              </div>
              
              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <Fade direction="up" triggerOnce>
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>Ready to Start Your Journey?</h3>
              <p>
                Our facilities are designed to support entrepreneurs at every stage of their journey. 
                From initial ideation to product development and scaling, we provide the infrastructure 
                and support you need to succeed.
              </p>
              <div className={styles.ctaButtons}>
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book a Tour
                </Button>
                <Button 
                  variant="secondary" 
                  size="large"
                  onClick={() => console.log('Apply for incubation')}
                >
                  Apply for Incubation
                </Button>
              </div>
            </div>
          </div>
        </Fade>

        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <motion.div 
            className={styles.bgShape1}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className={styles.bgShape2}
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default CentreLabsSection;
