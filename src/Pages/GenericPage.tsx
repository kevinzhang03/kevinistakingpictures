import React from 'react';

interface GenericPageProps {
  children: React.ReactNode;
}

function GenericPage({ children }: GenericPageProps) {
  return (
    <div className="w-full md:w-md lg:w-lg xl:w-xl 2xl:w-2xl mx-auto p-8
    ">
      {children}
    </div>
  );
}

export default GenericPage;