
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { mockIdeas } from "@/data/mockData";
import TokenDisplay from "@/components/shared/TokenDisplay";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { ArrowUp, MessageSquare, Share2, Users, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const IdeaDetails = () => {
  const { id } = useParams<{ id: string }>();
  const idea = mockIdeas.find((i) => i.id === id);
  
  const [voted, setVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(idea?.votes || 0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{text: string, author: string, createdAt: Date}[]>([
    {
      text: "This is exactly what the meme community needs right now! I love the tokenomics distribution.",
      author: "0x8e23...49Fc",
      createdAt: new Date("2025-04-29T14:32:00")
    },
    {
      text: "Good concept, but I think the total supply should be lower to create more scarcity.",
      author: "0x7a11...b3D7",
      createdAt: new Date("2025-04-30T09:15:00")
    }
  ]);

  const handleVote = () => {
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

  const handleAddComment = () => {
    if (!comment.trim()) return;
    
    const newComment = {
      text: comment,
      author: "0x71C7...976F",
      createdAt: new Date()
    };
    
    setComments([newComment, ...comments]);
    setComment("");
    toast.success("Comment added!");
  };

  if (!idea) {
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Idea Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The token idea you're looking for doesn't exist or has been removed.
              </p>
              <Link to="/ideas">
                <Button>Browse All Ideas</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link to="/ideas" className="inline-flex items-center text-muted-foreground hover:text-theme-purple">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Ideas
              </Link>
            </div>
            
            <Card className="mb-8">
              {idea.imageUrl && (
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={idea.imageUrl}
                    alt={idea.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-3xl mb-2">{idea.name}</CardTitle>
                    <div className="flex items-center gap-3 mb-2">
                      <TokenDisplay ticker={idea.ticker} size="lg" />
                      <span className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(idea.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                    <CardDescription>
                      Submitted by{" "}
                      <span className="font-mono">
                        {idea.createdBy.substring(0, 6)}...{idea.createdBy.substring(38)}
                      </span>
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <Button
                      size="lg"
                      variant={voted ? "default" : "outline"}
                      className={`rounded-full min-w-[90px] ${
                        voted ? "bg-theme-purple" : "border-theme-purple text-theme-purple"
                      }`}
                      onClick={handleVote}
                    >
                      <ArrowUp className="mr-2 h-5 w-5" />
                      <span>{voteCount}</span>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      {voted ? "You voted" : "Vote now"}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{idea.description}</p>
                </div>
                
                {idea.tokenomics && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-4">Tokenomics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {idea.tokenomics.totalSupply && (
                          <div className="bg-muted/40 p-4 rounded-lg">
                            <h4 className="text-sm text-muted-foreground mb-1">Total Supply</h4>
                            <p className="font-medium">{idea.tokenomics.totalSupply}</p>
                          </div>
                        )}
                        
                        {idea.tokenomics.initialDistribution && (
                          <div className="bg-muted/40 p-4 rounded-lg">
                            <h4 className="text-sm text-muted-foreground mb-1">Initial Distribution</h4>
                            <p className="font-medium">{idea.tokenomics.initialDistribution}</p>
                          </div>
                        )}
                        
                        {idea.tokenomics.utility && (
                          <div className="bg-muted/40 p-4 rounded-lg">
                            <h4 className="text-sm text-muted-foreground mb-1">Utility</h4>
                            <p className="font-medium">{idea.tokenomics.utility}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="text-muted-foreground">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {comments.length} Comments
                  </Button>
                  <Button variant="outline" size="sm" className="text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {voted ? voteCount : voteCount - 1} Voters
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Comments Section */}
            <Card>
              <CardHeader>
                <CardTitle>Comments ({comments.length})</CardTitle>
                <CardDescription>
                  Join the conversation about this token idea
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="space-y-2">
                  <Textarea
                    placeholder="Share your thoughts on this token idea..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                  />
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleAddComment}
                      disabled={!comment.trim()}
                      className="bg-theme-purple hover:bg-theme-purple/90"
                    >
                      Add Comment
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                {/* Comments List */}
                <div className="space-y-6">
                  {comments.length > 0 ? (
                    comments.map((comment, index) => (
                      <div key={index} className="flex gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-muted-foreground/20 text-muted-foreground">
                            {comment.author.substring(2, 4)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium font-mono">{comment.author}</span>
                            <span className="text-xs text-muted-foreground">
                              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{comment.text}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground">
                        No comments yet. Be the first to share your thoughts!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaDetails;
