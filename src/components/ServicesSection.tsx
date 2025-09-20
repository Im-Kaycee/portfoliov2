import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Blocks, Zap, Globe, Cpu } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const ServiceCard = ({ icon, title, description, features, delay }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="card-portfolio p-8 rounded-2xl text-center h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="text-primary mb-6 flex justify-center">
        <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      description: "I create responsive and scalable websites using modern technologies like Django, React, and Tailwind CSS.",
      features: ["Custom Web Applications", "Backend Development", "Frontend Integration", "API Development"],
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "I design user-friendly interfaces and experiences using tools like Figma and modern design principles.",
      features: ["Wireframing & Prototyping", "Visual Design", "Interaction Design", "User Research"],
    },
    {
      icon: <Blocks size={32} />,
      title: "Blockchain Development",
      description: "I develop decentralized applications (dApps) and smart contracts using Solidity and blockchain technologies.",
      features: ["Smart Contract Development", "dApp Integration", "Blockchain Consulting", "Web3 Solutions"],
    },
    {
      icon: <Zap size={32} />,
      title: "No-Code Solutions",
      description: "I build and fix no-code websites for businesses using Framer, ensuring fast delivery and functionality.",
      features: ["Business Websites", "Landing Pages", "Custom No-Code Solutions", "Rapid Prototyping"],
    },
    {
      icon: <Globe size={32} />,
      title: "API Development",
      description: "I build robust APIs to power your applications and integrate third-party services seamlessly.",
      features: ["RESTful APIs", "Third-Party Integrations", "Custom API Solutions", "Documentation"],
    },
    {
      icon: <Cpu size={32} />,
      title: "Full-Stack Solutions",
      description: "End-to-end development services from database design to deployment and maintenance.",
      features: ["Database Design", "Cloud Deployment", "Performance Optimization", "Maintenance & Support"],
    },
  ];

  return (
    <section id="services" className="py-20">
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
            My{" "}
            <span className="hero-gradient">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's work together to create something amazing.
            </p>
            <motion.a
              href="#contact"
              className="btn-hero text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;