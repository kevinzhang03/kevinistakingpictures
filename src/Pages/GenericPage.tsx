import React from 'react';

interface GenericPageProps {
  children: React.ReactNode;
}

function GenericPage({ children }: GenericPageProps) {
  return (
    <div className="w-full p-8">
      {children}
    </div>
  );
}

export default GenericPage;