import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const { language, t } = useLanguage();
  const { personalInfo, summary } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block text-foreground">{personalInfo.name}</span>
                <span className="block bg-text-gradient bg-clip-text text-transparent">
                  {personalInfo.title[language]}
                </span>
              </h1>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {summary[language]}
            </p>

            <div className="flex items-center space-x-2 text-primary font-medium">
              <span>{t('currentlyLookingFor')}</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                {t('internshipPosition')}
              </span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 shadow-glow">
                <Download className="w-4 h-4 mr-2" />
                {t('downloadCV')}
              </Button>
              
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                <Mail className="w-4 h-4 mr-2" />
                {t('getInTouch')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {personalInfo.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                >
                  {social.name === 'LinkedIn' && <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />}
                  {social.name === 'GitHub' && <Github className="w-5 h-5 group-hover:text-primary transition-colors" />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow" />
              <motion.img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-elegant animate-float"
                animate={{ 
                  boxShadow: [
                    "0 20px 40px -12px rgba(34, 197, 94, 0.25)",
                    "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
                    "0 20px 40px -12px rgba(34, 197, 94, 0.25)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};