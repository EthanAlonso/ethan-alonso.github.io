import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Ethan Alonso. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm mt-4 md:mt-0"
          >
            Built with React, Vite, Tailwind CSS & Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
