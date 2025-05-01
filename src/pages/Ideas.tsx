
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { mockIdeas } from "@/data/mockData";
import IdeaCard from "@/components/shared/IdeaCard";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Clock, Star } from "lucide-react";

const Ideas = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  // Filter ideas based on search query
  const filteredIdeas = mockIdeas.filter((idea) => {
    const matchesSearch = 
      idea.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Sort ideas based on selected filter
  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    switch (filterOption) {
      case "trending":
        return b.votes - a.votes;
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "oldest":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      default:
        return b.votes - a.votes;
    }
  });

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Browse Meme Token Ideas</h1>
            <p className="text-muted-foreground mb-8">
              Discover and vote on the latest meme token submissions from the community.
            </p>

            <div className="mb-8">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <TabsList>
                    <TabsTrigger value="all">All Ideas</TabsTrigger>
                    <TabsTrigger value="trending">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Trending
                    </TabsTrigger>
                    <TabsTrigger value="newest">
                      <Clock className="mr-2 h-4 w-4" />
                      Newest
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex w-full md:w-auto gap-2">
                    <div className="relative flex-grow md:w-64">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search ideas..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    
                    <Select 
                      value={filterOption} 
                      onValueChange={setFilterOption}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trending">Most Votes</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedIdeas.length > 0 ? (
                      sortedIdeas.map((idea) => (
                        <IdeaCard key={idea.id} idea={idea} />
                      ))
                    ) : (
                      <div className="col-span-3 py-12 text-center">
                        <Star className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                        <h3 className="text-xl font-medium mb-2">No ideas found</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your search or filter criteria
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="trending" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...filteredIdeas]
                      .sort((a, b) => b.votes - a.votes)
                      .map((idea) => (
                        <IdeaCard key={idea.id} idea={idea} />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="newest" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...filteredIdeas]
                      .sort((a, b) => 
                        new Date(b.createdAt).getTime() - 
                        new Date(a.createdAt).getTime()
                      )
                      .map((idea) => (
                        <IdeaCard key={idea.id} idea={idea} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ideas;
