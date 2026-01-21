import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-dark-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-glow"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-dark">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-sm font-semibold">
          {project.role}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-dark p-4 rounded-lg mb-4 border border-primary/10">
          <div className="text-primary font-semibold text-sm mb-1">Impact</div>
          <div className="text-white font-medium">{project.impact}</div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-center rounded-lg transition-colors duration-300 font-medium"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white text-center rounded-lg transition-all duration-300 font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
