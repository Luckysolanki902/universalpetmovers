'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Drawer, Box } from '@mui/material';
import styles from './Navigation.module.css';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
  </svg>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Transport', href: '#transport' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={() => scrollToSection('#home')}
        >
          <h1>Universal Pet Movers</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              className={styles.navLink}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
            </motion.button>
          ))}
          
          <a href="https://wa.me/+911234567890" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} />
            Chat Now
          </a>
          
          <motion.button
            className={styles.contactButton}
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Phone size={16} /> Call Us
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.08, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Menu size={24} />
          <span className={styles.menuButtonRipple}></span>
        </motion.button>
          {/* MUI Drawer for Mobile */}
        <Drawer
          anchor="top"
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              height: '80%',
              borderRadius: '0 0 24px 24px',
              boxShadow: '0px 10px 30px rgba(44, 85, 48, 0.3)',
              background: 'linear-gradient(135deg, rgba(244, 244, 244, 0.92), rgba(220, 247, 225, 0.92))',
              borderTop: '5px solid #2c5530',
              padding: '1.25rem',
              overflow: 'hidden',
             

            },
            '@keyframes gradient': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            }
          }}
        >
          <Box className={styles.muiDrawerContainer}>
            <div className={styles.mobileNavHeader}>
              <div className={styles.logo}>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Universal Pet Movers
                </motion.h1>
              </div>
              <motion.button
                onClick={() => setIsMenuOpen(false)}                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05, rotate: 90 }}
                className={styles.closeButton}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 15,
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <Box className={styles.drawerContent}>
              <motion.div 
                className={styles.mobileNavLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className={styles.mobileNavLink}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.95)", y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400, 
                      damping: 17,
                      delay: 0.1 + index * 0.08 
                    }}
                  >
                    {item.name}
                    {index === 0 && <span className={styles.currentPageIndicator}>Current</span>}
                  </motion.button>
                ))}
              </motion.div>

              <motion.div 
                className={styles.mobileContact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className={styles.contactDivider}>
                  <span>Get in touch</span>
                </div>
                
                <div className={styles.mobileContactButtons}>
                  <motion.a 
                    href="https://wa.me/918859491269" 
                    className={`${styles.mobileContactButton} ${styles.whatsappButton}`} 
                    target="_blank" 
                    rel="noopener noreferrer"                
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.5 }}
                  >
                    <WhatsAppIcon size={20} />
                    <span>Chat on WhatsApp</span>
                  </motion.a>
                  
                  <motion.button
                    className={`${styles.mobileContactButton} ${styles.callButton}`}
                    onClick={() => {
                      scrollToSection('#contact');
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}                
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.6 }}
                  >
                    <Phone size={18} />
                    <span>Call Us</span>
                  </motion.button>
                </div>
                
                <motion.div 
                  className={styles.mobileFooter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <p>Universal Pet Movers — Caring transport for your furry friends</p>
                </motion.div>
              </motion.div>
            </Box>
          </Box>
        </Drawer>
      </div>
    </motion.nav>
  );
};

export default Navigation;
