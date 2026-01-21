import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Project data - Easy to customize
const projectsData = [
  {
    title: 'Premier League xG Prediction Model',
    description:
      'Developed a machine learning model using historical match data to predict Expected Goals (xG) with 89% accuracy, helping scouts identify attacking opportunities and undervalued talent.',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'PostgreSQL', 'Tableau'],
    role: 'Lead Developer',
    impact: '89% accuracy • Identified 12 undervalued players',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Interactive Player Performance Dashboard',
    description:
      'Built a real-time dashboard visualizing player statistics across multiple leagues, enabling coaches and analysts to make data-driven decisions on formations and substitutions.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Wyscout API'],
    role: 'Full Stack Developer',
    impact: 'Tracked 500+ players • 3 client teams',
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop',
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Transfer Market Value Analyzer',
    description:
      'Created an analytics tool that identifies undervalued players in the transfer market by analyzing performance metrics, age curves, and market trends to optimize recruitment budgets.',
    technologies: ['Python', 'TensorFlow', 'Power BI', 'PostgreSQL'],
    role: 'Data Scientist',
    impact: 'Average $2M savings per transfer • 15 successful recommendations',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Match Analytics Intelligence Platform',
    description:
      'Designed a comprehensive platform for real-time match analysis, providing tactical insights, heat maps, and passing networks to support in-game strategy adjustments.',
    technologies: ['Python', 'React', 'FastAPI', 'StatsBomb', 'AWS'],
    role: 'Tech Lead',
    impact: 'Real-time insights • Used by 5 clubs',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop',
    liveDemo: '#',
    github: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mb-4"></div>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            Soccer data analytics projects showcasing machine learning, data visualization,
            and real-time analytics capabilities.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
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
              💡 To customize: Edit the <code className="text-primary">projectsData</code> array in{' '}
              <code className="text-primary">src/components/Projects.jsx</code>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
