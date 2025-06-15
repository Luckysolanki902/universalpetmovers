'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Shield, Heart, Truck } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Safe & Secure',
      description: 'Professional care for your beloved pets'
    },
    {
      icon: <Heart size={24} />,
      title: 'Pet Lovers',
      description: 'Run by passionate pet enthusiasts'
    },
    {
      icon: <Truck size={24} />,
      title: 'Pan India',
      description: 'Transportation services across India'
    }
  ];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Safe & Loving Pet Transportation
              <span className={styles.accent}> Across India</span>
            </motion.h1>
            
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted partner for professional pet transportation services. 
              We ensure your furry friends travel safely and comfortably to their destination.
            </motion.p>

            <motion.div
              className={styles.features}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className={styles.ctaButton}
              onClick={scrollToContact}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src="/dogs-playing.jpg" alt="Happy dogs playing" className={styles.heroImage} />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
