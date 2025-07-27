import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education = () => {
  const { language, t } = useLanguage();
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {t('education')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-elegant group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree[language]}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};