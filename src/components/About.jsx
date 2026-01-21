import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Hello! I'm Ethan, a consultant at{' '}
                <span className="text-primary font-semibold">Avanade</span> with a deep passion
                for soccer and data analytics. I'm currently transitioning my career to combine
                these interests, helping startups and small businesses leverage data to gain
                competitive advantages in the soccer industry.
              </p>
              <p>
                My background in enterprise consulting has equipped me with strong problem-solving
                skills and the ability to translate complex data into actionable insights. Now,
                I'm focusing on applying these skills to the world of soccer analytics—from
                player performance analysis to tactical insights and transfer market intelligence.
              </p>
              <p>
                What sets me apart is my unique blend of{' '}
                <span className="text-primary font-semibold">enterprise consulting experience</span>{' '}
                and genuine passion for soccer. I understand both the technical side of data
                analysis and the nuances of the beautiful game, allowing me to deliver insights
                that are both statistically sound and tactically relevant.
              </p>
              <p>
                I specialize in working with{' '}
                <span className="text-primary font-semibold">startups and small businesses</span>{' '}
                in the soccer industry, providing accessible, high-quality analytics solutions
                that were previously only available to large clubs with massive budgets.
              </p>
            </div>

            {/* Image/Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                {/* Photo placeholder - Replace with actual photo */}
                <div className="aspect-square rounded-lg overflow-hidden border-4 border-primary shadow-glow">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                    alt="Ethan Alonso - Soccer Data Analytics Consultant"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-lg -z-10 group-hover:border-primary/60 transition-colors duration-300"></div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-dark p-4 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-400">Years in Consulting</div>
                </div>
                <div className="bg-dark p-4 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
