import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">ToDo Application</h1>
      <p className="text-lg mb-4">
        This is a simple ToDo application page built with Next.js, TypeScript and TailwindCSS.
      </p>
      <p className="text-lg">
        Start by adding your first ToDo item on the ToDo page, or learn more about this application on the About page.
      </p>
    </main>
  );
};

export default HomePage;
