import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after initial mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div style={{backgroundColor:'rgba(0,0,0,0.8)'}} className="fixed inset-0 flex items-center justify-center   dark:bg-gray-900 z-[5000]">
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={40} className="h-10 w-10 animate-spin text-blue-500" />
        <span className="text-lg font-medium text-gray-100 dark:text-gray-200">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;