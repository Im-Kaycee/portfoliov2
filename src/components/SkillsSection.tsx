import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillProgressProps {
  name: string;
  percentage: number;
  delay: number;
}

const SkillProgress = ({ name, percentage, delay }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="progress-bar h-2"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, delay: delay / 1000 }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const designSkills = [
    { name: "UI/UX Design", percentage: 95 },
    { name: "Figma", percentage: 85 },
    { name: "Photoshop", percentage: 90 },
    { name: "Illustration", percentage: 80 },
  ];

  const developmentSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "Python", percentage: 85 },
    { name: "Django", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
  ];

  const skillPills = [
    "Color Theory", "Typography", "Wireframing", "Prototyping",
    "Responsive Design", "Git", "FastAPI", "SEO", "React", "JavaScript"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            My Core{" "}
            <span className="hero-gradient">Skills</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Design Skills */}
            <motion.div 
              variants={itemVariants}
              className="card-portfolio p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary">Design</h3>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </motion.div>

            {/* Development Skills */}
            <motion.div 
              variants={itemVariants}
              className="card-portfolio p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-8 text-primary">Development</h3>
              <div className="space-y-6">
                {developmentSkills.map((skill, index) => (
                  <SkillProgress
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skill Pills */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
              Technologies & Expertise
            </h3>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {skillPills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-pill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;