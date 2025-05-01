
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import TokenDisplay from "@/components/shared/TokenDisplay";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Upload, AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Submit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    description: "",
    totalSupply: "",
    distribution: "",
    utility: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isWalletConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    if (!formData.name || !formData.ticker || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      toast.success("Your token idea has been submitted successfully!");
      setIsSubmitting(false);
      navigate("/ideas");
    }, 1500);
  };

  // For demo purposes, let's simulate wallet connection
  const connectWallet = () => {
    // In a real app, this would connect to MetaMask
    setTimeout(() => {
      setIsWalletConnected(true);
      toast.success("Wallet connected successfully!");
    }, 800);
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Submit Your Meme Token Idea</h1>
            <p className="text-muted-foreground mb-8">
              Fill out the form below to submit your meme token idea to the community.
            </p>

            {!isWalletConnected ? (
              <Card>
                <CardHeader>
                  <CardTitle>Connect Your Wallet</CardTitle>
                  <CardDescription>
                    You need to connect your wallet to submit a token idea.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={connectWallet}
                    className="btn-glow bg-gradient-to-r from-theme-purple to-theme-blue text-white"
                  >
                    Connect Wallet
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>Token Details</CardTitle>
                    <CardDescription>
                      Provide the basic information about your meme token.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Token Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Token Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g., Doge Party"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Ticker Symbol */}
                    <div className="space-y-2">
                      <Label htmlFor="ticker">Ticker Symbol *</Label>
                      <div>
                        <Input
                          id="ticker"
                          name="ticker"
                          placeholder="e.g., DPARTY"
                          value={formData.ticker}
                          onChange={handleChange}
                          required
                          maxLength={6}
                          className="mb-2"
                        />
                        {formData.ticker && (
                          <div className="mt-1">
                            <span className="text-sm text-muted-foreground mr-2">Preview:</span>
                            <TokenDisplay ticker={formData.ticker} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Describe what your token is all about. What makes it unique?"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                      <Label>Token Image (Optional)</Label>
                      <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
                        {imagePreview ? (
                          <div className="space-y-2">
                            <img
                              src={imagePreview}
                              alt="Token preview"
                              className="max-h-48 mx-auto rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => setImagePreview(null)}
                            >
                              Remove Image
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Drag and drop an image, or{" "}
                              <label className="text-theme-purple cursor-pointer">
                                browse
                                <input
                                  type="file"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                />
                              </label>
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              PNG, JPG or GIF (max 2MB)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <Separator />

                    {/* Tokenomics Section (Optional) */}
                    <div>
                      <div className="flex items-center mb-4">
                        <h3 className="text-lg font-medium">Tokenomics Details (Optional)</h3>
                        <Info className="h-4 w-4 text-muted-foreground ml-2" />
                      </div>

                      {/* Total Supply */}
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="totalSupply">Total Supply</Label>
                        <Input
                          id="totalSupply"
                          name="totalSupply"
                          placeholder="e.g., 1,000,000,000"
                          value={formData.totalSupply}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Initial Distribution */}
                      <div className="space-y-2 mb-4">
                        <Label htmlFor="distribution">Initial Distribution</Label>
                        <Textarea
                          id="distribution"
                          name="distribution"
                          placeholder="e.g., 40% presale, 30% liquidity, 20% team, 10% marketing"
                          value={formData.distribution}
                          onChange={handleChange}
                          rows={2}
                        />
                      </div>

                      {/* Utility */}
                      <div className="space-y-2">
                        <Label htmlFor="utility">Token Utility</Label>
                        <Textarea
                          id="utility"
                          name="utility"
                          placeholder="What utility does your token provide?"
                          value={formData.utility}
                          onChange={handleChange}
                          rows={2}
                        />
                      </div>
                    </div>
                    
                    <Alert className="bg-muted border-muted-foreground/20">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important Note</AlertTitle>
                      <AlertDescription className="text-sm text-muted-foreground">
                        By submitting your idea, you agree that it can be voted on by the community.
                        The top ideas each week will be eligible for prizes.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate("/")}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-theme-purple hover:bg-theme-purple/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Token Idea"}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
