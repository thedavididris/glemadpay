import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="flex items-center justify-center py-4">
      <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
      <span className="ml-2">Loading exchange rate...</span>
    </div>
  );
}