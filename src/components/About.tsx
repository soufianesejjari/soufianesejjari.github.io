import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Target } from "lucide-react";

export const About = () => {
  const { language, t } = useLanguage();
  const { interests } = portfolioData;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            {t('about')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border/50 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-elegant group">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Passionate About Innovation
                  </h3>
                  <p className="text-muted-foreground">Continuous Learning & Technology Exploration</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {interests[language]}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">Exploring cutting-edge AI technologies and their applications</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">System Architecture</h4>
                  <p className="text-sm text-muted-foreground">Optimizing architectures for scalability and performance</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Open Source</h4>
                  <p className="text-sm text-muted-foreground">Contributing to open-source projects and communities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};