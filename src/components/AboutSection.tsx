import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="about" className="py-20 bg-secondary/20">
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
            About{" "}
            <span className="hero-gradient">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-portfolio-violet/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <img
                  src="https://pbs.twimg.com/profile_images/1884959362126401536/joCR-ZTB_400x400.jpg"
                  alt="Kelechukwu Amadi-Keke"
                  className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Design & Development Professional
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate web developer skilled in UI/UX design, Python, and modern web technologies. 
                I blend creativity with technical skill to create user-centric, visually appealing, 
                and seamless digital solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With my major focus being on backend development, I have a strong foundation in Python and Django, 
                allowing me to build robust and scalable web applications that deliver exceptional user experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With 2+ years of experience in the industry, I've collaborated with clients across various sectors 
                to bring their ideas to life through intuitive interfaces, compelling visuals, and clean code.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="skill-pill">UI/UX Design</span>
                <span className="skill-pill">Web Development</span>
                <span className="skill-pill">Python/Django</span>
                <span className="skill-pill">Full-Stack</span>
              </div>

              <motion.a
                href="/resume.pdf"
                download="Kelechukwu_Resume.pdf"
                className="inline-flex items-center gap-2 btn-ghost mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;