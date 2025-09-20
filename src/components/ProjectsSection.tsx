import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import tatacadImg from "@/assets/tatacad.png";
import securetestImg from "@/assets/securetest.png";
import blurImg from "@/assets/blur.jpg";
import verityImg from "@/assets/verity.png";
import nftImg from "@/assets/nft.jpeg";
import havenImg from "@/assets/haven.jpeg";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay: number;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, delay }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="card-portfolio rounded-2xl overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              View Live
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Repository
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Verity Voting Platform",
      description: "A secure voting platform ensuring anonymous voting with full transparency and tamper-proof integrity, empowering users to shape the future.",
      image: verityImg,
      technologies: ["Django", "Python", "Tailwind", "PostgreSQL"],
      githubUrl: "https://github.com/Im-Kaycee/Verity",
    },
    {
      title: "NFT Marketplace",
      description: "Frontend project of a mock NFT sales website with functional marketplace and buy buttons. Modern design with smooth user interactions.",
      image: nftImg,
      technologies: ["HTML", "JavaScript", "Tailwind", "CSS"],
      liveUrl: "https://nft-ebon-chi.vercel.app/",
      githubUrl: "https://github.com/Im-Kaycee/NFT",
    },
    {
      title: "Anonymous Chat Site (BLUR)",
      description: "Web application that allows users to chat anonymously with other users in group chats or private messages with real-time functionality.",
      image: blurImg,
      technologies: ["Django", "WebSockets", "Tailwind", "Python"],
      githubUrl: "https://github.com/Im-Kaycee/Blur",
    },
    {
      title: "TAT Academy",
      description: "A fully responsive trading course platform with sleek UI and seamless UX allowing users to purchase trading courses and bots.",
      image: tatacadImg,
      technologies: ["Django", "HTML", "JavaScript", "Tailwind"],
      liveUrl: "https://tatacademy.trade",
      githubUrl: "https://github.com/Im-Kaycee/tatacad",
    },
    {
      title: "SecureTest Platform",
      description: "Secure examination platform that allows secure access to examinations via biometric authentication and student eligibility verification.",
      image: securetestImg,
      technologies: ["Django", "Python", "Tailwind", "Biometrics"],
      githubUrl: "https://github.com/Im-Kaycee/securetest",
    },
    {
      title: "Hope Haven",
      description: "Charity website providing a safe and nurturing home for orphaned children, giving them love, education, and opportunities they deserve.",
      image: havenImg,
      technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Featured{" "}
            <span className="hero-gradient">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="https://www.behance.net/kelechuamadi-k"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on Behance
            </motion.a>
            <motion.a
              href="https://github.com/Im-Kaycee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="mr-2" />
              View GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;