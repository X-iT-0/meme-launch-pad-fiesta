
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockLeaderboard } from "@/data/mockData";
import TokenDisplay from "../shared/TokenDisplay";
import { ArrowRight, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LeaderboardPreview = () => {
  // Get top 5 entries for the preview
  const topEntries = mockLeaderboard.slice(0, 5);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Leaderboard</h2>
            <p className="text-muted-foreground">
              The top meme token ideas ranked by community votes
            </p>
          </div>
          <Link to="/leaderboard" className="mt-4 md:mt-0">
            <Button className="text-theme-purple hover:text-theme-purple/80">
              View Full Leaderboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
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
                    Prize
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {topEntries.map((entry, index) => (
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
                            {entry.ranking}
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
      </div>
    </section>
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

export default LeaderboardPreview;
