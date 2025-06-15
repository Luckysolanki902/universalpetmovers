'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Heart,
  Shield,
  Clock,
  Navigation,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import styles from './Footer.module.css';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
  </svg>
);

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Transport', href: '#transport' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Boarding Pickup & Drop',
    'Pet House Services',
    'Vet Visit Transport',
    'Air Transport Services',
    'Road Transport Services',
    'Ship Transport Services'
  ];

  const locations = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 
    'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.brand}>
              <h2>Universal Pet Movers</h2>
              <p className={styles.brandDescription}>
                Your trusted partner for pet transportation. We ensure your furry friends travel safely and comfortably across India.
              </p>
              <a href="https://wa.me/+911234567890" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                Chat on WhatsApp
              </a>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.footerTitle}>Quick Links</h3>            <div className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  className={styles.link}
                  onClick={() => scrollToSection(link.href)}                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10,
                    delay: 0.2 + (index * 0.1)
                  }}
                >
                  <ChevronRight size={18} />
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.footerTitle}>Our Services</h3>
            <div className={styles.servicesList}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <ArrowRight size={14} />
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={16} />
                </div>
                <div className={styles.contactText}>
                  <span>Our Address</span>
                  123 Pet Street, New Delhi - 110001
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={16} />
                </div>
                <div className={styles.contactText}>
                  <span>Phone Number</span>
                  <a href="tel:+911234567890">+91 885 949 1269</a>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={16} />
                </div>
                <div className={styles.contactText}>
                  <span>Email Address</span>
                  <a href="mailto:akhandanandtripathi143@gmail.com">akhandanandtripathi143@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Universal Pet Movers. All rights reserved.
          </div>
          
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
