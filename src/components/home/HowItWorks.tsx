
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How MemeLaunch Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch your meme token in three simple steps and let the community decide what goes to the moon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-theme-purple text-white font-bold flex items-center justify-center">
              1
            </div>
            <div className="h-40 flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1570499947566-87ab48d3b8a9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" 
                alt="Connect your wallet" 
                className="max-h-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
            <p className="text-muted-foreground">
              Link your crypto wallet to start interacting with the platform. We support MetaMask, WalletConnect, and more.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-10 w-10 text-muted-foreground" />
          </div>

          {/* Step 2 */}
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-theme-blue text-white font-bold flex items-center justify-center">
              2
            </div>
            <div className="h-40 flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" 
                alt="Submit your idea" 
                className="max-h-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Submit Your Idea</h3>
            <p className="text-muted-foreground">
              Create your meme token with a catchy name, ticker symbol, and description. Add images and tokenomics details.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="h-10 w-10 text-muted-foreground" />
          </div>

          {/* Step 3 */}
          <div className="md:col-span-1 bg-card p-6 rounded-xl shadow-sm border border-border relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-theme-orange text-white font-bold flex items-center justify-center">
              3
            </div>
            <div className="h-40 flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400" 
                alt="Win rewards" 
                className="max-h-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Win Rewards</h3>
            <p className="text-muted-foreground">
              Get votes from the community and climb the leaderboard. Winners receive crypto prizes and launch support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
