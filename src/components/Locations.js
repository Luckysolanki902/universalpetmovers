'use client';

import { motion } from 'framer-motion';
import { 
  Navigation, 
  Clock, 
  Phone,
  MoreHorizontal
} from 'lucide-react';
import styles from './Locations.module.css';

const Locations = () => {  const allCities = [
    'Ghaziabad', 'Noida', 'Jaipur', 'Udaipur', 'Mumbai', 'Lucknow',
    'many more...'
  ];
  return (
    <section id="locations" className={styles.locations}>
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
          <h2 className={styles.title}>Our Service Locations</h2>
          <p className={styles.subtitle}>
            Professional pet transportation services across major cities in India
          </p>
          <div className={styles.panIndiaTag}>
            <Navigation size={20} />
            <span>Pan India Coverage</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.citiesContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.citiesGrid}>
            {allCities.map((city, index) => (
              <motion.div
                key={index}
                className={styles.cityItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className={styles.cityName}>{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.serviceInfo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <Clock size={28} />
            </div>
            <h4>24/7 Service</h4>
            <p>Round-the-clock pet transportation services available</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <Phone size={28} />
            </div>
            <h4>Instant Booking</h4>
            <p>Quick and easy booking process with immediate confirmation</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <Navigation size={28} />
            </div>
            <h4>GPS Tracking</h4>
            <p>Real-time location tracking for complete peace of mind</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
