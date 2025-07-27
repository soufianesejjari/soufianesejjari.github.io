import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Image as ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const { language, t } = useLanguage();
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {t('projects')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-elegant group overflow-hidden">
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted/10">
                    <ImageIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {typeof project.description === 'object' ? project.description[language] : project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.split(', ').map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github_url && (
                    <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10">
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t('sourceCode')}
                      </a>
                    </Button>
                  )}
                  {project.demo_url && (
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('demo')}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="border-primary/20 hover:bg-primary/10"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  {language === 'fr' ? 'Voir moins' : 'Show Less'}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  {language === 'fr' ? `Voir tous (${projects.length})` : `Show All (${projects.length})`}
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};