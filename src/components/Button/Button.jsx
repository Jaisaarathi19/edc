import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const iconVariants = {
    hover: { 
      x: variant === 'primary' ? 5 : 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      <span className={styles.content}>
        {children}
        {icon && (
          <motion.span 
            className={styles.icon}
            variants={iconVariants}
          >
            {icon}
          </motion.span>
        )}
      </span>
      <div className={styles.ripple}></div>
    </motion.button>
  );
};

export default Button;
