import React from 'react';

const SocialStats = () => {
  return (
    <div className="bg-blue-500 dark:bg-blue-600 p-2 rounded-lg shadow-lg w-24">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">3500+</div>
        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">LinkedIn</div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">400+</div>
        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">Twitter</div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">90+</div>
        <div className="text-xs font-normal text-gray-500 dark:text-gray-400">GitHub</div>
      </div>
    </div>
  );
};

export default SocialStats;
