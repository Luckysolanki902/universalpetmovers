'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  User, 
  Calendar, 
  MapPin, 
  MessageCircle,
  Mail,
  Clock,
  Loader,
  CheckCircle,
  AlertCircle,
  Phone
} from 'lucide-react';
import styles from './Contact.module.css';

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    petType: '',
    petAge: '',
    transportDate: '',
    transportMode: '',
    dropLocation: '',
    comments: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const petTypes = ['Dog', 'Cat', 'Bird'];
  const transportModes = ['Air', 'Road', 'Ship'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! Your request has been submitted successfully. We will contact you soon.'
        });
        setFormData({
          name: '',
          phoneNumber: '',
          petType: '',
          petAge: '',
          transportDate: '',
          transportMode: '',
          dropLocation: '',
          comments: ''
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again or call us directly.'
      });
    }
  };
  const contactInfo = [
    {
      icon: <WhatsAppIcon size={24} />,
      title: 'WhatsApp Us',
      value: '+91 7836928654',
      action: 'https://wa.me/917836928654'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      value: 'universalpetmovers7@gmail.com',
      action: 'mailto:universalpetmovers7@gmail.com'
    },
    {
      icon: <Clock size={24} />,
      title: 'Service Hours',
      value: '24/7 Available',
      action: null
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Get Your Pet Transport Quote</h2>
          <p className={styles.subtitle}>
            Fill out the form below and our pet transport experts will get back to you with a personalized quote
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.infoHeader}>
              <h3>Contact Information</h3>
              <p>Get in touch with us for immediate assistance</p>
            </div>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={styles.infoItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.infoIcon}>
                    {info.icon}
                  </div>
                  <div className={styles.infoContent}>
                    <h4>{info.title}</h4>
                    {info.action ? (
                      <a href={info.action} className={styles.infoValue}>
                        {info.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.trustBadge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className={styles.badgeContent}>
                <CheckCircle size={32} />
                <div>
                  <h4>Trusted by 1000+ Pet Parents</h4>
                  <p>Safe and reliable pet transportation since 2020</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  <User size={16} />
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber" className={styles.label}>
                  <Phone size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10,15}"
                  title="Please enter a valid phone number (10-15 digits)"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="petType" className={styles.label}>
                    Pet Type *
                  </label>
                  <select
                    id="petType"
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="">Select pet type</option>
                    {petTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="petAge" className={styles.label}>
                    Pet Age (in years) *
                  </label>
                  <input
                    type="number"
                    id="petAge"
                    name="petAge"
                    value={formData.petAge}
                    onChange={handleChange}
                    required
                    min="0"
                    max="30"
                    className={styles.input}
                    placeholder="Age in years"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="transportDate" className={styles.label}>
                  <Calendar size={16} />
                  Transport Date *
                </label>
                <input
                  type="date"
                  id="transportDate"
                  name="transportDate"
                  value={formData.transportDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="transportMode" className={styles.label}>
                  Mode of Transportation *
                </label>
                <select
                  id="transportMode"
                  name="transportMode"
                  value={formData.transportMode}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select transport mode</option>
                  {transportModes.map((mode) => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="dropLocation" className={styles.label}>
                  <MapPin size={16} />
                  Drop Location *
                </label>
                <input
                  type="text"
                  id="dropLocation"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter destination city/address"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="comments" className={styles.label}>
                  <MessageCircle size={16} />
                  Additional Comments or Information
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className={styles.textarea}
                  placeholder="Any special requirements, medical conditions, or additional information about your pet..."
                />
              </div>

              {status.message && (
                <motion.div
                  className={`${styles.statusMessage} ${status.success ? styles.success : styles.error}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={status.loading}
                whileHover={{ scale: status.loading ? 1 : 1.02 }}
                whileTap={{ scale: status.loading ? 1 : 0.98 }}
              >
                {status.loading ? (
                  <>
                    <Loader size={20} className={styles.spinner} />
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Contact Us
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
