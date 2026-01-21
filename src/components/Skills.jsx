import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Skills data organized by category
const skillsData = [
  {
    category: 'Data Analysis & ML',
    skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'TensorFlow'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Visualization',
    skills: ['Tableau', 'Power BI', 'D3.js', 'Matplotlib', 'Plotly'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Web Development',
    skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'FastAPI'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Consulting',
    skills: ['Avanade', 'Enterprise Solutions', 'Agile', 'Client Management'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Sports Analytics',
    skills: ['StatsBomb', 'Wyscout', 'Opta data', 'Expected Goals (xG)'],
    color: 'from-red-500 to-pink-500',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mb-4"></div>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            A comprehensive toolkit spanning data science, web development, and soccer analytics.
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark rounded-lg p-6 border border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${category.color} mr-3`}></div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 bg-primary/10 text-gray-300 text-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
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
              💡 To customize: Edit the <code className="text-primary">skillsData</code> array in{' '}
              <code className="text-primary">src/components/Skills.jsx</code>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
