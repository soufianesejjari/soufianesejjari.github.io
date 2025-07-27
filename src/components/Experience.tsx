import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const { language, t } = useLanguage();
  const { workExperience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {t('experience')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((exp, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-elegant group">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title[language]}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period[language]}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description[language].map((desc, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
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