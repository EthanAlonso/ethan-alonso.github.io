import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Replace with your Formspree form ID
    // Sign up at https://formspree.io and create a form
    const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  // Social links - Easy to customize
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ethanalonso',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ethanalonso',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ethanalonso',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:ethan.alonso@example.com',
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mb-4 mx-auto"></div>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto text-center">
            Interested in soccer data analytics? Let's discuss how I can help your startup or
            business gain competitive advantages through data-driven insights.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-glow hover:shadow-glow-hover transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully! 🎉</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-center">
                    Failed to send message. Please try again or email directly.
                  </p>
                )}
              </form>

              {/* Formspree Setup Note */}
              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong className="text-primary">📝 Setup Note:</strong> To enable the contact form,
                  sign up at{' '}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light underline"
                  >
                    formspree.io
                  </a>
                  , create a form, and replace <code className="text-primary">YOUR_FORMSPREE_ID</code> in{' '}
                  <code className="text-primary">Contact.jsx</code> with your form ID.
                </p>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-dark rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  I'm always interested in discussing new projects, creative ideas, or opportunities
                  to be part of your team.
                </p>

                {/* Quick Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Remote / Open to Relocation</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:ethan.alonso@example.com" className="hover:text-primary transition-colors">
                      ethan.alonso@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-dark rounded-lg p-8 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300 border border-primary/30 hover:border-primary transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Download My Resume</h3>
                <p className="text-white/90 mb-6">
                  Get a detailed overview of my experience and qualifications.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Note for customization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              💡 To customize: Update social links and email in{' '}
              <code className="text-primary">src/components/Contact.jsx</code>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
