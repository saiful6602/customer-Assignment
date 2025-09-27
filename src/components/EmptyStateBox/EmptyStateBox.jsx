import React from "react";

const EmptyStateBox = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg shadow-inner text-center text-gray-500 border border-dashed border-gray-300 h-32 w-full mt-3">
      <p className="text-lg font-medium">
        {message}
      </p>
    </div>
  );
};

export default EmptyStateBox;