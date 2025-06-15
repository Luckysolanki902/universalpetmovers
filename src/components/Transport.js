'use client';

import { motion } from 'framer-motion';
import { 
  Plane, 
  Truck, 
  Ship,
  Clock,
  Shield,
  MapPin,
  Thermometer
} from 'lucide-react';
import styles from './Transport.module.css';

const Transport = () => {  const transportModes = [
    {
      icon: <Plane size={48} />,
      title: 'Air Transport',
      description: 'Fast and secure air transportation for urgent pet relocations across the country.',
      features: [
        'Fastest delivery option',
        'Climate-controlled cargo',
        'IATA certified containers',
        'Airport pickup & drop',
        'Real-time flight tracking',
        'Professional handling crew'
      ],
      duration: '2-6 hours',
      coverage: 'Major cities',
      image: '/aeroplane.jpg',
      gradient: 'linear-gradient(135deg, #4A90E2, #357ABD)'
    },
    {
      icon: <Truck size={48} />,
      title: 'Road Transport',
      description: 'Comfortable ground transportation with specially designed pet-friendly vehicles.',
      features: [
        'Door-to-door service',
        'Pet-friendly vehicles',
        'AC & ventilation systems',
        'Regular rest stops',
        'GPS tracking',
        'Experienced drivers'
      ],
      duration: '4-24 hours',
      coverage: 'Pan India',
      image: '/road.jpg',
      gradient: 'linear-gradient(135deg, #2c5530, #4a7c59)'
    },
    {
      icon: <Ship size={48} />,
      title: 'Ship Transport',
      description: 'Specialized marine transportation for coastal and island destinations.',
      features: [
        'Coastal destinations',
        'Island connectivity',
        'Marine-grade containers',
        'Port handling expertise',
        'Weather monitoring',
        'Special care protocols'
      ],
      duration: '1-5 days',
      coverage: 'Coastal areas',
      image: '/sea.jpg',
      gradient: 'linear-gradient(135deg, #1E88E5, #1565C0)'
    }
  ];

  const safetyFeatures = [
    {
      icon: <Shield size={24} />,
      title: 'Safety First',
      description: 'All transport modes follow strict safety protocols'
    },
    {
      icon: <Thermometer size={24} />,
      title: 'Climate Control',
      description: 'Temperature and humidity controlled environments'
    },
    {
      icon: <Clock size={24} />,
      title: 'Time Efficient',
      description: 'Optimized routes for quickest delivery times'
    },
    {
      icon: <MapPin size={24} />,
      title: 'GPS Tracking',
      description: 'Real-time location updates throughout the journey'
    }
  ];

  return (
    <section id="transport" className={styles.transport}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Transport Modes</h2>
          <p className={styles.subtitle}>
            Choose from our specialized transportation options designed for your pet&apos;s comfort and safety
          </p>
        </motion.div>

        <div className={styles.transportModes}>
          {transportModes.map((mode, index) => (
            <motion.div
              key={index}
              className={styles.transportCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.cardImage}>
                <img src={mode.image} alt={mode.title} />
                <div 
                  className={styles.cardOverlay}
                  style={{ background: mode.gradient }}
                >
                  <div className={styles.transportIcon}>
                    {mode.icon}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{mode.title}</h3>
                <p className={styles.cardDescription}>{mode.description}</p>
                
                <div className={styles.cardStats}>
                  <div className={styles.statItem}>
                    <Clock size={16} />
                    <span>{mode.duration}</span>
                  </div>
                  <div className={styles.statItem}>
                    <MapPin size={16} />
                    <span>{mode.coverage}</span>
                  </div>
                </div>
                
                <div className={styles.featuresList}>
                  {mode.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className={styles.featureItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    >
                      <div className={styles.featureDot}></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.safetySection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className={styles.safetyTitle}>Why Choose Our Transport Services?</h3>
          <div className={styles.safetyFeatures}>
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.safetyFeature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.safetyIcon}>
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.transportCta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h3>Need Help Choosing the Right Transport?</h3>
            <p>Our experts will help you select the best transportation mode based on your pet&apos;s needs and destination</p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Transport Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transport;
