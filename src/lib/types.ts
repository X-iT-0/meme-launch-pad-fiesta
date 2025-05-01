
export interface TokenIdea {
  id: string;
  name: string;
  ticker: string;
  description: string;
  imageUrl?: string;
  createdAt: Date;
  createdBy: string;
  votes: number;
  tokenomics?: {
    totalSupply?: string;
    initialDistribution?: string;
    utility?: string;
  };
  comments?: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: Date;
}

export interface User {
  address: string;
  submittedIdeas: string[];
  votedIdeas: string[];
  rewards: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  ticker: string;
  votes: number;
  ranking: number;
  prizeAmount?: number;
  status: 'active' | 'winner' | 'paid' | 'incubated' | 'development';
}

export interface Round {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  prizePool: number;
  winners: LeaderboardEntry[];
}
