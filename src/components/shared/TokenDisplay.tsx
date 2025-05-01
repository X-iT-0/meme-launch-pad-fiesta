
import { cn } from "@/lib/utils";

interface TokenDisplayProps {
  ticker: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TokenDisplay = ({ ticker, className, size = 'md' }: TokenDisplayProps) => {
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  };

  return (
    <span 
      className={cn(
        'token-tag font-mono', 
        sizeClasses[size],
        className
      )}
    >
      ${ticker}
    </span>
  );
};

export default TokenDisplay;
