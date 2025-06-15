'use client';

import { motion } from 'framer-motion';
import { 
  Home, 
  Car, 
  Stethoscope, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {  const services = [
  {
    icon: <Home size={32} />,
    title: 'Pet House Services',
    description: 'Temporary accommodation for your pets with full care, feeding, and attention from our trained staff.',
    features: ['24/7 pet care', 'Comfortable lodging', 'Regular feeding', 'Play & exercise time'],
    image: '/pet house.jpg'
  },
    {
      icon: <Car size={32} />,
      title: 'Boarding Pickup & Drop',
      description: 'Door-to-door pickup and drop services for your pets. Safe, comfortable, and timely transportation.',
      features: ['Door-to-door service', 'Professional drivers', 'Climate-controlled vehicles', 'Real-time tracking'],
      image: '/pet-boarding.jpg'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Vet Visit Services',
      description: 'Professional transportation to veterinary appointments with specialized care during transit.',
      features: ['Vet appointment coordination', 'Medical transport equipment', 'Trained medical handlers', 'Emergency support'],
      image: '/vet.jpg'
    },

  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Our Premium Services</h2>
          <p className={styles.subtitle}>
            Comprehensive pet care and transportation solutions designed with your pet&apos;s comfort and safety in mind
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
              </div>
              
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <ul className={styles.featureList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.feature}>
                      <ArrowRight size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.servicesCta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.ctaContent}>
            <h3>Need a Custom Service?</h3>
            <p>We provide tailored pet transportation solutions to meet your specific needs</p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us for Custom Solutions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
