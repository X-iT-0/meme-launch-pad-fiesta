
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { mockIdeas, mockUserProfile } from "@/data/mockData";
import IdeaCard from "@/components/shared/IdeaCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Copy, Wallet, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const navigate = useNavigate();
  
  // Filter ideas based on user profile
  const submittedIdeas = mockIdeas.filter(idea => 
    mockUserProfile.submittedIdeas.includes(idea.id)
  );
  
  const votedIdeas = mockIdeas.filter(idea => 
    mockUserProfile.votedIdeas.includes(idea.id)
  );

  const connectWallet = () => {
    setTimeout(() => {
      setIsWalletConnected(true);
      toast.success("Wallet connected successfully!");
    }, 800);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(mockUserProfile.address);
    toast.success("Address copied to clipboard!");
  };

  if (!isWalletConnected) {
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-16 min-h-screen bg-muted/20">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Connect Your Wallet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Connect your wallet to view your profile, submitted ideas, and voting history.
                </p>
                <Button
                  className="btn-glow bg-gradient-to-r from-theme-purple to-theme-blue text-white w-full"
                  onClick={connectWallet}
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
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
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <CardTitle className="text-2xl mb-2">My Profile</CardTitle>
                    <div className="flex items-center">
                      <span className="font-mono text-muted-foreground">
                        {mockUserProfile.address}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2"
                        onClick={copyAddress}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
                    <div className="bg-theme-purple/10 px-4 py-2 rounded-md">
                      <div className="text-sm text-muted-foreground">Total Rewards</div>
                      <div className="text-2xl font-bold text-theme-purple">
                        {mockUserProfile.rewards} ETH
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Tabs defaultValue="submitted">
              <TabsList className="mb-6">
                <TabsTrigger value="submitted">
                  My Submissions ({submittedIdeas.length})
                </TabsTrigger>
                <TabsTrigger value="voted">
                  My Votes ({votedIdeas.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="submitted">
                {submittedIdeas.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {submittedIdeas.map((idea) => (
                        <IdeaCard key={idea.id} idea={idea} />
                      ))}
                      <Card className="flex items-center justify-center min-h-[320px] cursor-pointer hover:bg-muted/20 transition-colors"
                        onClick={() => navigate("/submit")}
                      >
                        <div className="text-center">
                          <div className="mb-4 mx-auto bg-theme-purple/10 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                            <Plus className="h-8 w-8 text-theme-purple" />
                          </div>
                          <h3 className="text-xl font-medium mb-2">Submit New Idea</h3>
                          <p className="text-muted-foreground">
                            Create a new meme token idea
                          </p>
                        </div>
                      </Card>
                    </div>
                  </>
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <div className="mx-auto bg-theme-purple/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Plus className="h-8 w-8 text-theme-purple" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">No Submissions Yet</h3>
                      <p className="text-muted-foreground mb-6">
                        You haven't submitted any token ideas yet. Start by creating your first idea!
                      </p>
                      <Button 
                        onClick={() => navigate("/submit")}
                        className="bg-theme-purple hover:bg-theme-purple/90"
                      >
                        Submit an Idea
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="voted">
                {votedIdeas.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {votedIdeas.map((idea) => (
                      <IdeaCard key={idea.id} idea={idea} />
                    ))}
                  </div>
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <h3 className="text-xl font-medium mb-2">No Voted Ideas Yet</h3>
                      <p className="text-muted-foreground mb-6">
                        You haven't voted for any token ideas yet. Browse the ideas and start voting!
                      </p>
                      <Button 
                        onClick={() => navigate("/ideas")}
                        className="bg-theme-blue hover:bg-theme-blue/90 text-white"
                      >
                        Browse Ideas
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
