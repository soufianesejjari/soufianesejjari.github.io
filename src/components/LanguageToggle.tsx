import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-smooth"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};