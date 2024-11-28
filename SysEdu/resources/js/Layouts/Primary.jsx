import React from 'react';
import Header from '../Components/AppAdmin/Header';
import Footer from '../Components/AppAdmin/Footer';
import Sidebar from '../Components/AppAdmin/Sidebar';

const Primary = ({ children }) => {
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
};

export default Primary;