import { motion } from "framer-motion";
import { Github, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Im-Kaycee",
      icon: <Github size={20} />,
    },
    {
      name: "Behance",
      url: "https://www.behance.net/kelechuamadi-k",
      icon: <ExternalLink size={20} />,
    },
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2 text-sm">
              © {currentYear} Kelechukwu Amadi-Keke. Made with
              <Heart size={16} className="text-red-500" />
              and lots of coffee.
            </p>
            <p className="text-xs mt-2">All rights reserved.</p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;