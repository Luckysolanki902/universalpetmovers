'use client';

import { motion } from 'framer-motion';
import { 
  Home, 
  Car, 
  Stethoscope, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import styles from './Services.module.css';

const Services = () => {  const services = [
  {
    icon: <MapPin size={32} />,
    title: 'Out Destination Transport',
    description: 'Specialized transportation services for long-distance pet relocations across cities and states.',
    features: ['Inter-city transport', 'State-to-state relocations', 'Customized travel plans', 'Pet comfort priority'],
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
          className={styles.header}          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
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
              className={styles.serviceCard}              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1.0],
                delay: index * 0.1 
              }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.serviceImage}>
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={300}
                  height={200}
                />
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
          className={styles.consultationBanner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.consultationContent}>
            <div className={styles.consultationInfo}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Need Help Choosing the Right Transport?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Our experts will help you select the best transportation mode based on your pet&apos;s needs and destination
              </motion.p>
              <motion.button
                className={styles.consultationButton}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Get Transport Consultation Now
              </motion.button>
            </div>
            <div className={styles.consultationImage}>
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
