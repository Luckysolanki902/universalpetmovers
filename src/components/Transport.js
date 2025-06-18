'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

      duration: '2-6 hours',
      coverage: 'Major cities',
      image: '/aeroplane.jpg',
      gradient: 'linear-gradient(135deg, #4A90E2, #357ABD)'
    },
    {
      icon: <Truck size={48} />,
      title: 'Road Transport',

      duration: '4-24 hours',
      coverage: 'Pan India',
      image: '/road.jpg',
      gradient: 'linear-gradient(135deg, #2c5530, #4a7c59)'
    },
    {
      icon: <Ship size={48} />,
      title: 'Ship Transport',

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
                <Image 
                  src={mode.image} 
                  alt={mode.title}
                  width={400}
                  height={300}
                />
                <div 
                  className={styles.cardOverlay}
                  style={{ background: mode.gradient }}
                >
                  <div className={styles.transportIcon}>
                    {mode.icon}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>                <h3 className={styles.cardTitle}>{mode.title}</h3>
                
       
                

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

      </div>
    </section>
  );
};

export default Transport;
