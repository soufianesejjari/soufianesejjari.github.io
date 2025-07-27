import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Award, Languages, Zap } from "lucide-react";

export const Contact = () => {
  const { language, t } = useLanguage();
  const { personalInfo, certifications, languages: langs, strengths } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {t('contact')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">{t('getInTouch')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-foreground hover:text-primary transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex space-x-4">
                    {personalInfo.social.map((social) => (
                      <Button key={social.name} variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          {social.name === 'LinkedIn' && <Linkedin className="w-4 h-4 mr-2" />}
                          {social.name === 'GitHub' && <Github className="w-4 h-4 mr-2" />}
                          {social.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Languages className="w-5 h-5 mr-2 text-primary" />
                  {t('languages')}
                </h3>
                <div className="space-y-3">
                  {langs.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground">{lang.name[language]}</span>
                      <Badge variant="secondary">{lang.level[language]}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-6">
            {/* Certifications */}
            <Card className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  {t('certifications')}
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-sm">
                      {cert.url ? (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors flex items-center space-x-2"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span>{cert.name}</span>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-foreground">{cert.name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Strengths */}
            <Card className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-primary" />
                  {t('strengths')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {strengths[language].map((strength, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};