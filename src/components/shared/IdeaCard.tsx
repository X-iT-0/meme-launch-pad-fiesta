
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TokenIdea } from "@/lib/types";
import TokenDisplay from "./TokenDisplay";
import { formatDistanceToNow } from "date-fns";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

interface IdeaCardProps {
  idea: TokenIdea;
  compact?: boolean;
}

const IdeaCard = ({ idea, compact = false }: IdeaCardProps) => {
  const [voted, setVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(idea.votes);
  
  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!voted) {
      setVoteCount(prev => prev + 1);
      setVoted(true);
      toast.success("Vote registered! 🚀");
    } else {
      setVoteCount(prev => prev - 1);
      setVoted(false);
      toast("Vote removed");
    }
  };

  return (
    <Card className="card-hover overflow-hidden">
      <Link to={`/ideas/${idea.id}`}>
        {idea.imageUrl && !compact && (
          <div className="w-full h-40 overflow-hidden">
            <img
              src={idea.imageUrl}
              alt={idea.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-foreground">{idea.name}</h3>
              <TokenDisplay ticker={idea.ticker} />
            </div>
            <div className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(idea.createdAt), { addSuffix: true })}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {compact ? (
            <p className="text-sm text-muted-foreground line-clamp-1">{idea.description}</p>
          ) : (
            <p className="text-sm text-muted-foreground line-clamp-3">{idea.description}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between pt-0">
          <div className="text-sm text-muted-foreground">
            <span className="font-mono">by {idea.createdBy.substring(0, 6)}...{idea.createdBy.substring(38)}</span>
          </div>
          <Button
            size="sm"
            variant={voted ? "default" : "outline"}
            className={`rounded-full ${voted ? "bg-theme-purple" : "border-theme-purple text-theme-purple"}`}
            onClick={handleVote}
          >
            <ArrowUp className="mr-1 h-4 w-4" />
            <span>{voteCount}</span>
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default IdeaCard;
