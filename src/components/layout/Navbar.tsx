
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ConnectWalletButton from "../shared/ConnectWalletButton";
import { Menu, X, Info } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-theme-purple rounded-full p-1.5 mr-2">
              <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-theme-purple font-bold text-lg">M</span>
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">MemeLaunch</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/ideas"
            className="text-foreground hover:text-theme-purple transition-colors"
          >
            Browse Ideas
          </Link>
          <Link
            to="/submit"
            className="text-foreground hover:text-theme-purple transition-colors"
          >
            Submit Idea
          </Link>
          <Link
            to="/leaderboard"
            className="text-foreground hover:text-theme-purple transition-colors"
          >
            Leaderboard
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-theme-purple transition-colors flex items-center"
          >
            <Info className="h-4 w-4 mr-1" />
            About
          </Link>
          <Link
            to="/me"
            className="text-foreground hover:text-theme-purple transition-colors"
          >
            My Profile
          </Link>
        </nav>

        <div className="hidden md:block">
          <ConnectWalletButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/ideas"
              className="text-foreground hover:text-theme-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Ideas
            </Link>
            <Link
              to="/submit"
              className="text-foreground hover:text-theme-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit Idea
            </Link>
            <Link
              to="/leaderboard"
              className="text-foreground hover:text-theme-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-theme-purple transition-colors py-2 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Info className="h-4 w-4 mr-1" />
              About
            </Link>
            <Link
              to="/me"
              className="text-foreground hover:text-theme-purple transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Profile
            </Link>
            <div className="pt-2">
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
