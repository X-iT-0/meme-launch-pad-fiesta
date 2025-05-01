
import { TokenIdea, LeaderboardEntry, Round } from "../lib/types";

export const mockIdeas: TokenIdea[] = [
  {
    id: "1",
    name: "Doge Party",
    ticker: "DPARTY",
    description: "The ultimate token for Doge lovers! Join the party and earn rewards for sharing doge memes.",
    imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
    createdAt: new Date("2025-04-20"),
    createdBy: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    votes: 943,
    tokenomics: {
      totalSupply: "100,000,000",
      initialDistribution: "40% presale, 30% liquidity, 20% team, 10% marketing",
      utility: "Exclusive access to Doge Party events and NFT drops"
    }
  },
  {
    id: "2",
    name: "Moon Lambo",
    ticker: "LAMBO",
    description: "The first token that will literally send a Lambo to the moon! Each transaction funds our lunar Lambo mission.",
    imageUrl: "https://images.unsplash.com/photo-1566023967555-39a60883e47a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
    createdAt: new Date("2025-04-28"),
    createdBy: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    votes: 782,
    tokenomics: {
      totalSupply: "1,000,000,000",
      initialDistribution: "50% liquidity, 25% marketing, 15% team, 10% development",
      utility: "Vote on which Lambo model goes to the moon"
    }
  },
  {
    id: "3",
    name: "Pepe Finance",
    ticker: "PEPFI",
    description: "Bringing DeFi to the Pepe community with yield farming, staking, and NFT marketplace for rare Pepes.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
    createdAt: new Date("2025-04-25"),
    createdBy: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    votes: 651,
    tokenomics: {
      totalSupply: "420,690,000",
      initialDistribution: "30% liquidity, 25% staking rewards, 20% team, 15% marketing, 10% development",
      utility: "Governance, staking rewards, and rare Pepe NFT marketplace access"
    }
  },
  {
    id: "4",
    name: "Cat Coin",
    ticker: "KITTY",
    description: "Because dogs have had their day! The first meme token dedicated to supporting cat shelters worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
    createdAt: new Date("2025-04-29"),
    createdBy: "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    votes: 529,
    tokenomics: {
      totalSupply: "9,000,000,000",
      initialDistribution: "45% liquidity, 20% charity wallet, 20% marketing, 15% team",
      utility: "2% of all transactions donated to cat shelters"
    }
  },
  {
    id: "5",
    name: "Wen Token",
    ticker: "WEN",
    description: "The token that answers crypto's most important question: 'Wen moon?' 'Wen Lambo?' Now!",
    imageUrl: "https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
    createdAt: new Date("2025-04-27"),
    createdBy: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    votes: 476,
    tokenomics: {
      totalSupply: "1,000,000,000,000",
      initialDistribution: "40% liquidity, 30% marketing, 20% development, 10% team",
      utility: "Stake to earn predictions about 'wen' things will happen"
    }
  },
  {
    id: "6",
    name: "Rocket Fuel",
    ticker: "FUEL",
    description: "Powering the next generation of meme rockets to the moon and beyond!",
    imageUrl: "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
    createdAt: new Date("2025-04-26"),
    createdBy: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    votes: 412,
    tokenomics: {
      totalSupply: "100,000,000,000",
      initialDistribution: "50% presale, 30% liquidity, 10% marketing, 10% team",
      utility: "Boost other meme tokens by adding FUEL to their liquidity pools"
    }
  }
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: "1",
    name: "Doge Party",
    ticker: "DPARTY",
    votes: 943,
    ranking: 1,
    prizeAmount: 5,
    status: "active"
  },
  {
    id: "2",
    name: "Moon Lambo",
    ticker: "LAMBO",
    votes: 782,
    ranking: 2,
    prizeAmount: 3,
    status: "active"
  },
  {
    id: "3",
    name: "Pepe Finance",
    ticker: "PEPFI",
    votes: 651,
    ranking: 3,
    prizeAmount: 2,
    status: "active"
  },
  {
    id: "7",
    name: "FrogCoin",
    ticker: "FROG",
    votes: 1203,
    ranking: 1,
    prizeAmount: 8,
    status: "paid"
  },
  {
    id: "8",
    name: "SharkFin",
    ticker: "SHARK",
    votes: 932,
    ranking: 2,
    prizeAmount: 4,
    status: "incubated"
  },
  {
    id: "9",
    name: "PizzaDAO",
    ticker: "PIZZA",
    votes: 845,
    ranking: 3,
    prizeAmount: 2,
    status: "development"
  }
];

export const mockRounds: Round[] = [
  {
    id: "current",
    name: "Week 17: Meme Madness",
    startDate: new Date("2025-04-25"),
    endDate: new Date("2025-05-02"),
    prizePool: 10,
    winners: mockLeaderboard.slice(0, 3)
  },
  {
    id: "past1",
    name: "Week 16: Animal Kingdom",
    startDate: new Date("2025-04-18"),
    endDate: new Date("2025-04-25"),
    prizePool: 14,
    winners: mockLeaderboard.slice(3, 6)
  }
];

export const mockUserProfile = {
  address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  submittedIdeas: ["2", "5"],
  votedIdeas: ["1", "3", "6"],
  rewards: 3
};
