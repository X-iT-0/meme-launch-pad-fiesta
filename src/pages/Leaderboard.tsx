
import Navbar from "@/components/layout/Navbar";
import TokenDisplay from "@/components/shared/TokenDisplay";
import { mockLeaderboard, mockRounds } from "@/data/mockData";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, ArrowRight } from "lucide-react";

const Leaderboard = () => {
  const currentRound = mockRounds[0];
  const pastRounds = mockRounds.slice(1);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
            <p className="text-muted-foreground mb-8">
              Track the top-performing meme token ideas and past winners.
            </p>

            <Tabs defaultValue="current" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="current">Current Round</TabsTrigger>
                {pastRounds.map((round) => (
                  <TabsTrigger key={round.id} value={round.id}>
                    {round.name}
                  </TabsTrigger>
                ))}
                <TabsTrigger value="all">All-Time Winners</TabsTrigger>
              </TabsList>

              <TabsContent value="current">
                <CurrentRoundView round={currentRound} />
              </TabsContent>

              {pastRounds.map((round) => (
                <TabsContent key={round.id} value={round.id}>
                  <PastRoundView round={round} />
                </TabsContent>
              ))}

              <TabsContent value="all">
                <AllTimeLeaderboard />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

const CurrentRoundView = ({ round }: { round: typeof mockRounds[0] }) => {
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
            {round.name}
          </CardTitle>
          <CardDescription className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {format(new Date(round.startDate), "MMM d")} -{" "}
            {format(new Date(round.endDate), "MMM d, yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <p className="text-muted-foreground">
                Vote for your favorite token ideas to help them win this round's prizes!
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <Badge variant="outline" className="bg-card border-theme-purple text-theme-purple">
                {round.prizePool} ETH Prize Pool
              </Badge>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Token
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Votes
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Potential Prize
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {round.winners.map((entry, index) => (
                    <tr key={entry.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {index < 3 ? (
                            <div className="mr-2">
                              <Trophy className={`h-5 w-5 ${
                                index === 0 ? "text-yellow-500" :
                                index === 1 ? "text-gray-400" :
                                "text-amber-700"
                              }`} />
                            </div>
                          ) : (
                            <span className="font-medium text-muted-foreground mr-2">
                              {index + 1}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground">
                            {entry.name}
                          </span>
                          <TokenDisplay ticker={entry.ticker} size="sm" />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {entry.votes.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={entry.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">
                        {entry.prizeAmount ? `${entry.prizeAmount} ETH` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/30 rounded-lg p-6 text-center">
        <h3 className="text-lg font-medium mb-2">How Prizes Work</h3>
        <p className="text-muted-foreground mb-4">
          The top three ideas at the end of each weekly round share the prize pool based on their final ranking.
          Winners can also opt for incubation support to launch their token.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-card p-4 rounded-lg border border-border flex items-center">
            <Trophy className="h-10 w-10 text-yellow-500 mr-3" />
            <div className="text-left">
              <p className="font-medium">1st Place</p>
              <p className="text-theme-purple">50% of Prize Pool</p>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border flex items-center">
            <Trophy className="h-10 w-10 text-gray-400 mr-3" />
            <div className="text-left">
              <p className="font-medium">2nd Place</p>
              <p className="text-theme-purple">30% of Prize Pool</p>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border flex items-center">
            <Trophy className="h-10 w-10 text-amber-700 mr-3" />
            <div className="text-left">
              <p className="font-medium">3rd Place</p>
              <p className="text-theme-purple">20% of Prize Pool</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PastRoundView = ({ round }: { round: typeof mockRounds[0] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
          {round.name} - Completed
        </CardTitle>
        <CardDescription className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {format(new Date(round.startDate), "MMM d")} -{" "}
          {format(new Date(round.endDate), "MMM d, yyyy")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <p className="text-muted-foreground">
              Final results from this completed round.
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <Badge variant="outline" className="bg-card border-theme-purple text-theme-purple">
              {round.prizePool} ETH Total Prize
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {round.winners.slice(0, 3).map((winner, index) => (
            <Card key={winner.id} className="relative overflow-hidden border-2">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-theme-purple/10 rounded-full"></div>
              <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-theme-blue/10 rounded-full"></div>
              
              <div className={`absolute top-0 left-0 w-full h-2 ${
                index === 0 ? "bg-yellow-500" :
                index === 1 ? "bg-gray-400" :
                "bg-amber-700"
              }`}></div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="flex items-center">
                    <Trophy className={`h-5 w-5 mr-2 ${
                      index === 0 ? "text-yellow-500" :
                      index === 1 ? "text-gray-400" :
                      "text-amber-700"
                    }`} />
                    {index === 0 ? "1st Place" : index === 1 ? "2nd Place" : "3rd Place"}
                  </CardTitle>
                  <TokenDisplay ticker={winner.ticker} />
                </div>
              </CardHeader>
              
              <CardContent>
                <h3 className="font-bold text-xl mb-2">{winner.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Votes:</span>
                    <span className="font-medium">{winner.votes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prize:</span>
                    <span className="font-medium">{winner.prizeAmount} ETH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status:</span>
                    <StatusBadge status={winner.status} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AllTimeLeaderboard = () => {
  // Combine all winners and sort by votes
  const allWinners = mockLeaderboard.sort((a, b) => b.votes - a.votes);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
          All-Time Top Performers
        </CardTitle>
        <CardDescription>
          The most successful token ideas across all past rounds
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Token
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Votes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Prize
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {allWinners.map((entry, index) => (
                  <tr key={entry.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {index < 3 ? (
                          <div className="mr-2">
                            <Trophy className={`h-5 w-5 ${
                              index === 0 ? "text-yellow-500" :
                              index === 1 ? "text-gray-400" :
                              "text-amber-700"
                            }`} />
                          </div>
                        ) : (
                          <span className="font-medium text-muted-foreground mr-2">
                            {index + 1}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {entry.name}
                        </span>
                        <TokenDisplay ticker={entry.ticker} size="sm" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                      {entry.votes.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={entry.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {entry.prizeAmount ? `${entry.prizeAmount} ETH` : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ArrowRight className="h-4 w-4 text-theme-purple" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "active":
      return <Badge className="bg-blue-500 hover:bg-blue-600">Active</Badge>;
    case "winner":
      return <Badge className="bg-green-500 hover:bg-green-600">Winner</Badge>;
    case "paid":
      return <Badge className="bg-theme-purple hover:bg-theme-purple/90">Paid</Badge>;
    case "incubated":
      return <Badge className="bg-amber-500 hover:bg-amber-600">Incubated</Badge>;
    case "development":
      return <Badge className="bg-theme-orange hover:bg-theme-orange/90">In Development</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default Leaderboard;
