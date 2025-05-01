
import HeroSection from "@/components/hero/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ActiveIdeas from "@/components/home/ActiveIdeas";
import LeaderboardPreview from "@/components/home/LeaderboardPreview";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <ActiveIdeas />
        <LeaderboardPreview />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-theme-purple to-theme-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Meme Token?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the community and submit your idea today. The next big meme token could be yours!
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/submit')}
              className="bg-white text-theme-purple hover:bg-white/90 btn-glow"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Submit Your Idea
            </Button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-10 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-theme-purple rounded-full p-1 mr-2">
                  <div className="h-5 w-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-theme-purple font-bold text-xs">M</span>
                  </div>
                </div>
                <span className="text-lg font-bold gradient-text">MemeLaunch</span>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-theme-purple">
                  Terms
                </a>
                <a href="#" className="text-muted-foreground hover:text-theme-purple">
                  Privacy
                </a>
                <a href="#" className="text-muted-foreground hover:text-theme-purple">
                  FAQ
                </a>
                <a href="#" className="text-muted-foreground hover:text-theme-purple">
                  Contact
                </a>
              </div>
              
              <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
                &copy; 2025 MemeLaunch. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;
