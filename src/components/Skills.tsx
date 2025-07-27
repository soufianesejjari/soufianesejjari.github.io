import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const { language, t } = useLanguage();
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {t('skills')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-elegant group">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skillCategory.category[language]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.tools.map((tool, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};