import * as React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-gray-900 text-white p-6 rounded-2xl shadow-lg ${className}`}>{children}</div>;
};

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};

export { Card, CardContent };
