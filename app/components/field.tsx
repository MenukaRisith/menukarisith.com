import React from 'react';

const Timeline = () => {
  return (
    <div className="ml-60 mt-10 mb-20">
      <ol className="relative border-l border-gray-300 dark:border-gray-700 list-none list-inside">
      <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">2019</time>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started learning Web Designing using the youtube & W3School</p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">2020</time>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started First Youtube Channel</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started learning NodeJs using the online playground</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started Experiments with VPS(Azure/AWS/ORACLE)</p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">2021</time>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started Learning Python using the online playground</p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">2022</time>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started Part-time job as a Developer in GenixPlay Studio</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started Part-time job as a Web Developer in AxeFlame Records</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started writting artiles in TheSriCom</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-800">Started Learning Flutter & Firebase</p>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
