
import React, { useState, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Films } from './pages/Films';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Booking } from './pages/Booking';
import { Blog } from './pages/Blog';
import { ClientPortal } from './pages/ClientPortal';
import { Reviews } from './pages/Reviews';
import { Support } from './pages/Support';
import { ShutterLoader } from './components/ShutterLoader';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LeadPopup } from './components/LeadPopup';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'films': return <Films />;
      case 'services': return <Services />;
      case 'about': return <About />;
      case 'booking': return <Booking />;
      case 'blog': return <Blog />;
      case 'portal': return <ClientPortal />;
      case 'reviews': return <Reviews />;
      case 'support': return <Support />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-royalGreen text-ivory font-sans selection:bg-antiqueGold selection:text-royalGreen antialiased">
      {isInitialLoad && (
        <ShutterLoader onComplete={() => setIsInitialLoad(false)} />
      )}

      {!isInitialLoad && (
        <>
          <Navbar 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
          />
          
          <main className="pt-0">
            <Suspense fallback={<div className="h-screen bg-royalGreen" />}>
              {renderPage()}
            </Suspense>
          </main>

          <Footer onNavigate={handleNavigate} />
          
          <WhatsAppButton />
          <LeadPopup />
          
          {/* Global Aesthetic Overlays - Performance Optimized */}
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-antiqueGold/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-antiqueGold/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
