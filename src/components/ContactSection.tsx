import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Let's Work{" "}
            <span className="hero-gradient">Together</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to bring your next project to life? I'd love to hear about your ideas 
            and discuss how we can create something amazing together.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {/* Email */}
            <motion.div
              className="card-portfolio p-6 rounded-2xl text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = 'mailto:favourkaycee23@gmail.com'}
            >
              <div className="text-primary mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email Me</h3>
              <p className="text-sm text-muted-foreground">favourkaycee23@gmail.com</p>
            </motion.div>

            {/* Message */}
            <motion.div
              className="card-portfolio p-6 rounded-2xl text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = 'mailto:favourkaycee23@gmail.com?subject=Project Inquiry'}
            >
              <div className="text-primary mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle size={24} />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Send Message</h3>
              <p className="text-sm text-muted-foreground">Quick project inquiry</p>
            </motion.div>

            {/* Schedule */}
            <motion.div
              className="card-portfolio p-6 rounded-2xl text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = 'mailto:favourkaycee23@gmail.com?subject=Schedule Meeting'}
            >
              <div className="text-primary mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Calendar size={24} />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Schedule Call</h3>
              <p className="text-sm text-muted-foreground">Let's discuss your project</p>
            </motion.div>
          </motion.div>

          {/* Main CTA */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="mailto:favourkaycee23@gmail.com?subject=Project Collaboration"
              className="inline-flex items-center gap-3 btn-hero text-white text-lg px-12 py-5"
              whileHover={{ scale: 1.05, gap: "16px" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-border/20"
          >
            <p className="text-muted-foreground">
              Currently available for freelance projects and collaborations.
              <br />
              Response time: Usually within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;