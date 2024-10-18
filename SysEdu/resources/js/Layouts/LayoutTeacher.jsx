import React from 'react';
import Sidebar from '../Components/AppTeacher/Sidebar';
import Header from '../Components/AppTeacher/Header';
import Footer from '../Components/AppTeacher/Footer';

function Layout({ children }) {
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

export default Layout;


