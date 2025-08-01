import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaUsers, FaTrophy, FaLightbulb, FaMap, FaTimes } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import styles from './EventsSection.module.css';

const EventsSection = () => {
  const [selectedMap, setSelectedMap] = useState(null);

  const eventsData = [
    {
      id: 1,
      title: 'Entrepreneurship Workshop with Mr. Sivasankaran',
      description: 'A hands-on session with industry veteran Mr. Sivasankaran, focusing on real-world entrepreneurship challenges, startup strategies, and building sustainable business models.',
      date: 'June 15, 2023',
      location: 'Main Auditorium',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8478!2d80.0522!3d12.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d94c8c8c8c8%3A0x8b8b8b8b8b8b8b8b!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890',
      icon: <FaUsers />,
      category: 'Workshop',
      featured: true
    },
    {
      id: 2,
      title: 'EDII - Bootcamp',
      description: 'An intensive bootcamp program designed to accelerate your entrepreneurial journey with practical sessions on ideation, validation, and business planning.',
      date: 'July 22, 2023',
      location: 'Innovation Lab',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8478!2d80.0522!3d12.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d94c8c8c8c8%3A0x8b8b8b8b8b8b8b8b!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890',
      icon: <FaLightbulb />,
      category: 'Bootcamp',
      featured: false
    },
    {
      id: 3,
      title: 'Innovation Summit',
      description: 'A grand summit bringing together innovators, investors, and industry leaders to showcase cutting-edge technologies and breakthrough innovations.',
      date: 'August 10, 2023',
      location: 'Convention Center',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2!2d80.2!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d94c8c8c8c8%3A0x8b8b8b8b8b8b8b8b!2sChennai%20Convention%20Center!5e0!3m2!1sen!2sin!4v1234567890',
      icon: <FaTrophy />,
      category: 'Summit',
      featured: true
    },
    {
      id: 4,
      title: 'Startup Spark - Grand Hackathon',
      description: 'A 48-hour intensive hackathon where teams compete to solve real-world problems with innovative solutions and cutting-edge technology.',
      date: 'September 5, 2023',
      location: 'Tech Hub',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8478!2d80.0522!3d12.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d94c8c8c8c8%3A0x8b8b8b8b8b8b8b8b!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890',
      icon: <FaLightbulb />,
      category: 'Hackathon',
      featured: false
    },
    {
      id: 5,
      title: 'Tech Business Hub Conference',
      description: 'A comprehensive conference focusing on the intersection of technology and business, featuring keynotes from successful entrepreneurs and tech leaders.',
      date: 'October 18, 2023',
      location: 'Business Center',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d80.15!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d94c8c8c8c8%3A0x8b8b8b8b8b8b8b8b!2sBusiness%20Center%20Chennai!5e0!3m2!1sen!2sin!4v1234567890',
      icon: <FaUsers />,
      category: 'Conference',
      featured: false
    },
    {
      id: 6,
      title: 'Pitch Perfect - Startup Showcase',
      description: 'An exclusive platform for startups to pitch their ideas to potential investors, mentors, and industry experts in a competitive environment.',
      date: 'November 12, 2023',
      location: 'Presentation Hall',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8478!2d80.0522!3d12.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d94c8c8c8c8%3A0x8b8b8b8b8b8b8b8b!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890',
      icon: <FaTrophy />,
      category: 'Showcase',
      featured: false
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="events" className={styles.eventsSection}>
      <div className={styles.container}>
        <Fade direction="up" triggerOnce>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Events</h2>
            <p className={styles.sectionSubtitle}>
              Discover our exciting lineup of events designed to inspire, educate, and connect 
              the entrepreneurial community at Rajalakshmi Engineering College.
            </p>
          </div>
        </Fade>

        <motion.div 
          className={styles.eventsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              className={`${styles.eventCard} ${event.featured ? styles.featured : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                rotateX: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.eventIcon}>
                  {event.icon}
                </div>
                <span className={styles.eventCategory}>{event.category}</span>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                
                <div className={styles.eventDetails}>
                  <div className={styles.eventDate}>
                    <FaCalendarAlt />
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.eventLocation}>
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.cardFooter}>
                <Button 
                  variant="ghost" 
                  size="medium"
                  icon={<FaArrowRight />}
                  className={styles.learnMoreBtn}
                >
                  Learn More
                </Button>
              </div>
              
              {event.featured && (
                <div className={styles.featuredBadge}>
                  <span>Featured</span>
                </div>
              )}
              
              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </motion.div>

        <Fade direction="up" triggerOnce>
          <div className={styles.viewMoreSection}>
            <Button 
              variant="primary" 
              size="large"
              icon={<FaArrowRight />}
              onClick={() => console.log('View more events')}
            >
              View More Events
            </Button>
            <p className={styles.moreEventsText}>
              Stay tuned for more exciting events and workshops throughout the year!
            </p>
          </div>
        </Fade>

        {/* Background Decorations */}
        <div className={styles.backgroundDecorations}>
          <motion.div 
            className={styles.floatingShape1}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className={styles.floatingShape2}
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
