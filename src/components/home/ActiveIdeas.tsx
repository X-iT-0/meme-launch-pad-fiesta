
import { Button } from "@/components/ui/button";
import IdeaCard from "../shared/IdeaCard";
import { mockIdeas } from "@/data/mockData";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ActiveIdeas = () => {
  // Display only the top 3 ideas by votes
  const topIdeas = [...mockIdeas].sort((a, b) => b.votes - a.votes).slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Trending Ideas</h2>
          <Link to="/ideas">
            <Button variant="ghost" className="text-theme-purple hover:text-theme-purple/80">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveIdeas;
