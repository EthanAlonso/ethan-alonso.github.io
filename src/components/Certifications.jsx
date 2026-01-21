import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Certifications data - Easy to customize
const certificationsData = [
  {
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: '2023',
    badgeUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop',
    credentialUrl: '#',
  },
  {
    name: 'Microsoft Azure Data Scientist Associate',
    organization: 'Microsoft',
    date: '2022',
    badgeUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=200&h=200&fit=crop',
    credentialUrl: '#',
  },
  {
    name: 'Sports Analytics Certificate',
    organization: 'Coursera',
    date: '2024',
    badgeUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&h=200&fit=crop',
    credentialUrl: '#',
  },
  {
    name: 'Advanced Machine Learning Specialization',
    organization: 'DeepLearning.AI',
    date: '2023',
    badgeUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop',
    credentialUrl: '#',
  },
  {
    name: 'Professional Scrum Master (PSM I)',
    organization: 'Scrum.org',
    date: '2022',
    badgeUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
    credentialUrl: '#',
  },
  {
    name: 'Data Visualization with Tableau',
    organization: 'Tableau',
    date: '2023',
    badgeUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
    credentialUrl: '#',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mb-4"></div>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            Professional certifications and credentials demonstrating expertise in cloud computing,
            data science, and analytics.
          </p>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                {/* Badge/Logo */}
                <div className="bg-dark p-6 flex items-center justify-center">
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.name} badge`}
                    className="w-24 h-24 object-cover rounded-full border-4 border-primary/30"
                  />
                </div>

                {/* Certification Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{cert.organization}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

                  {/* Credential Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200 text-sm font-medium"
                  >
                    View Credential
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note for customization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              💡 To customize: Edit the <code className="text-primary">certificationsData</code> array in{' '}
              <code className="text-primary">src/components/Certifications.jsx</code>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
