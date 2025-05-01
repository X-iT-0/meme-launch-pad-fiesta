
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ConnectWalletButton from "../shared/ConnectWalletButton";
import { ArrowRight, TrendingUp, Trophy } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="relative overflow-hidden bg-grid py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-theme-purple/20 rounded-full blur-3xl animate-pulse-light"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-theme-blue/20 rounded-full blur-3xl animate-pulse-light"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex items-center mb-6 animate-float">
            <div className="bg-theme-purple rounded-full p-2 mr-3">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-theme-purple font-bold text-2xl">M</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text">
              MemeLaunch
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-foreground">
            Launch Your Meme Token Idea to the Moon 🚀
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Submit your meme token idea. Let the community vote.
            Win crypto prizes and watch your token come to life.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <ConnectWalletButton />
            
            <Button 
              variant="outline" 
              className="border-theme-blue text-theme-blue hover:bg-theme-blue/10"
              onClick={() => navigate('/ideas')}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              View Ideas
            </Button>
            
            <Button
              variant="outline"
              className="border-theme-orange text-theme-orange hover:bg-theme-orange/10"
              onClick={() => navigate('/leaderboard')}
            >
              <Trophy className="mr-2 h-4 w-4" />
              Leaderboard
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="bg-card rounded-lg p-6 shadow-md border border-border/50">
              <div className="mb-3 bg-theme-purple/20 w-10 h-10 rounded-full flex items-center justify-center">
                <Wallet className="text-theme-purple h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Connect Wallet</h3>
              <p className="text-muted-foreground text-sm">
                Link your crypto wallet to start submitting ideas and voting.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md border border-border/50">
              <div className="mb-3 bg-theme-blue/20 w-10 h-10 rounded-full flex items-center justify-center">
                <PencilPaper className="text-theme-blue h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Submit Your Idea</h3>
              <p className="text-muted-foreground text-sm">
                Create your meme token with a name, ticker, and description.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md border border-border/50">
              <div className="mb-3 bg-theme-orange/20 w-10 h-10 rounded-full flex items-center justify-center">
                <Trophy className="text-theme-orange h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Win Prizes</h3>
              <p className="text-muted-foreground text-sm">
                Get votes from the community and earn crypto rewards.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button
              onClick={() => navigate('/submit')}
              size="lg"
              className="btn-glow bg-gradient-to-r from-theme-purple to-theme-blue text-white"
            >
              Submit an Idea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom icon components
const Wallet = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12V7H5C3.89543 7 3 6.10457 3 5V19C3 20.1046 3.89543 21 5 21H21V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 16H21V12H18C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 5L21 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PencilPaper = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19L19 12L22 15L15 22L12 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 2L9 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSection;
