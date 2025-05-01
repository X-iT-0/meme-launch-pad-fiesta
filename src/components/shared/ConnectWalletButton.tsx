
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = () => {
    // In a real app, this would connect to MetaMask or other wallets
    // For now, we'll simulate a connection
    if (!isConnected) {
      // Simulate connection delay
      setTimeout(() => {
        const mockAddress = "0x71C7...976F";
        setAddress(mockAddress);
        setIsConnected(true);
        toast.success("Wallet connected successfully!");
      }, 800);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress("");
    toast("Wallet disconnected");
  };

  return (
    <>
      {!isConnected ? (
        <Button 
          onClick={connectWallet} 
          className="btn-glow bg-gradient-to-r from-theme-purple to-theme-blue text-white font-medium"
        >
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      ) : (
        <Button 
          onClick={disconnectWallet} 
          variant="outline" 
          className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
        >
          <span className="mr-2 font-mono text-sm">
            {address}
          </span>
          Disconnect
        </Button>
      )}
    </>
  );
};

export default ConnectWalletButton;
