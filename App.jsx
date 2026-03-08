import React from 'react';
import './App.css';
import FamilyForm from './component/FamilyForm.jsx';
import FamilyTree from './component/FamilyTree/FamilyTree.jsx';
import Header from './component/Header/Header.jsx';
import HeroSection from './component/Hero/HeroSection.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {

   return (
    <>
      <Header />
      <HeroSection />
      <div className="container">
        <FamilyTree  />
        <div>
          <FamilyForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
