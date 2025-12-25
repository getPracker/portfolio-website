export const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]} ${className}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const LoadingCard = () => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50 animate-pulse">
      <div className="h-48 bg-muted"></div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-16 bg-muted rounded-full"></div>
          <div className="h-6 w-20 bg-muted rounded-full"></div>
          <div className="h-6 w-14 bg-muted rounded-full"></div>
        </div>
        <div className="h-6 bg-muted rounded mb-2"></div>
        <div className="h-4 bg-muted rounded mb-1"></div>
        <div className="h-4 bg-muted rounded mb-6 w-3/4"></div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="h-5 w-20 bg-muted rounded"></div>
            <div className="h-5 w-16 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};