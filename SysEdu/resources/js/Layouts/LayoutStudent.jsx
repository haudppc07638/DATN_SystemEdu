import React from 'react';
import Sidebar from '../Components/AppStudent/Sidebar';
import Header from '../Components/AppStudent/Header';
import Footer from '../Components/AppStudent/Footer';

function LayoutStudent({ children }) {
  return (
    <div className="flex bg-whiter">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <main className="p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default LayoutStudent;


