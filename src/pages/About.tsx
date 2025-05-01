
import Navbar from "@/components/layout/Navbar";
import { FileText, Vote, Award, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 gradient-text">About MemeLaunch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn about how our token launch platform works and how you can participate.
          </p>

          <Card className="mb-10 border-theme-purple/20">
            <CardHeader className="bg-gradient-to-r from-theme-purple/10 to-theme-blue/10">
              <CardTitle className="text-2xl">Overview</CardTitle>
              <CardDescription>Platform mechanics and rewards</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                This is Token launch idea post platform where users post their idea about memecoin.
                The competitions are happened by Admin.
                Users must pay $IDEA token when post idea.
                Users can vote on other's post.
                To vote users must hold token or pay token (Optional).
                After competition, the champions are rewarded with $IDEA token.
                The rest tokens are distributed to the users who are passionate in voting.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-theme-purple" />}
              title="Submit Your Ideas"
              description="Share your meme token concept with our community by paying a small amount of $IDEA tokens."
            />
            <FeatureCard 
              icon={<Vote className="h-8 w-8 text-theme-blue" />}
              title="Community Voting"
              description="Vote on your favorite ideas. Voting requires holding or paying $IDEA tokens."
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-theme-orange" />}
              title="Win Rewards"
              description="Top ideas win $IDEA tokens as rewards based on community votes and admin selection."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-green-500" />}
              title="Voter Incentives"
              description="Active voters share a portion of tokens, incentivizing participation in the ecosystem."
            />
          </div>

          <Separator className="my-10" />

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Token Utilities</h2>
            <Card className="border-theme-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 mr-2 text-theme-purple" />
                  $IDEA Token
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-theme-purple/20 text-theme-purple rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span>Pay to submit meme token ideas to the platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-theme-purple/20 text-theme-purple rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span>Required to vote on submitted ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-theme-purple/20 text-theme-purple rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span>Win as rewards for top-rated ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-theme-purple/20 text-theme-purple rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                    <span>Earn by actively participating in voting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="border-muted">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4">{icon}</div>
          <div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
