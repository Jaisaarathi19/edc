import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaPaperPlane,
  FaUser,
  FaTag,
  FaComment
} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    submitted: false,
    error: null
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: [
        'Entrepreneurship Development Cell',
        'Rajalakshmi Engineering College',
        'Thandalam, Chennai - 602 105'
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['ecell@rajalakshmi.edu.in']
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+91 98765 43210']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, submitted: false, error: null });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ isSubmitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        submitted: false, 
        error: 'Something went wrong. Please try again.' 
      });
    }
  };

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
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <Fade direction="up" triggerOnce>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.sectionSubtitle}>
              Have questions or want to collaborate? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </Fade>

        <div className={styles.contactContent}>
          {/* Contact Information */}
          <Slide direction="left" triggerOnce>
            <div className={styles.contactInfo}>
              <div className={styles.infoHeader}>
                <h3>Let's Connect</h3>
                <p>
                  Ready to turn your entrepreneurial dreams into reality? 
                  We're here to support you every step of the way.
                </p>
              </div>

              <motion.div 
                className={styles.infoList}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className={styles.infoItem}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div className={styles.infoContent}>
                      <h4>{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className={styles.additionalInfo}>
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </Slide>

          {/* Contact Form */}
          <Slide direction="right" triggerOnce>
            <div className={styles.contactForm}>
              <div className={styles.formHeader}>
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <FaUser className={styles.inputIcon} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <FaEnvelope className={styles.inputIcon} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <FaTag className={styles.inputIcon} />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.isSubmitting}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <FaComment className={styles.inputIcon} />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={formStatus.isSubmitting}
                    ></textarea>
                  </div>
                </div>

                {formStatus.error && (
                  <div className={styles.errorMessage}>
                    {formStatus.error}
                  </div>
                )}

                {formStatus.submitted && (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  icon={<FaPaperPlane />}
                  disabled={formStatus.isSubmitting}
                  className={styles.submitButton}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </Slide>
        </div>

        {/* Interactive Map */}
        <Fade direction="up" triggerOnce>
          <div className={styles.mapSection}>
            <div className={styles.mapHeader}>
              <h3>Find Us on Campus</h3>
              <p>Rajalakshmi Engineering College, Thandalam, Chennai</p>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.1020891263347!2d80.00193628912014!3d13.008260603518057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528d95dee0d963%3A0xcba4fd3e7892a6cf!2sIDEA%20LAB%20and%20TBI!5e0!3m2!1sen!2sin!4v1754061669371!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajalakshmi Engineering College Location"
                className={styles.mapIframe}
              ></iframe>
              <div className={styles.mapOverlay}>
                <div className={styles.locationCard}>
                  <FaMapMarkerAlt className={styles.locationIcon} />
                  <div className={styles.locationInfo}>
                    <h4>E-Cell Office</h4>
                    <p>Idea Factory, Ground Floor</p>
                    <p>Rajalakshmi Engineering College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <motion.div 
            className={styles.bgElement1}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className={styles.bgElement2}
            animate={{ 
              y: [0, 10, 0],
              x: [0, 5, 0]
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

export default ContactSection;
