import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import CompliancePage from './pages/CompliancePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  // Synchronize with URL hash on mount and hashchange
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'services') {
        setCurrentView('services');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'why-us' || hash === 'why') {
        setCurrentView('why-us');
      } else if (hash === 'compliance' || hash === 'faq') {
        setCurrentView('compliance');
      } else if (hash === 'contact' || hash === 'locate') {
        setCurrentView('contact');
      } else if (hash.startsWith('service-')) {
        setCurrentView('services');
        setSelectedServiceId(hash.replace('service-', ''));
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (view: string, serviceId?: string) => {
    setCurrentView(view);
    setSelectedServiceId(serviceId);
    window.location.hash = serviceId ? `service-${serviceId}` : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-gold-500 selection:text-white">
      {/* Executive Header / Navbar */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenConsultation={() => navigateTo('contact')}
      />

      {/* Main Page Body with Distinct Purposed Views */}
      <main className="flex-1 w-full" id="main-content">
        <div key={currentView} className="page-enter">
          {currentView === 'home' && (
            <HomePage
              onNavigate={navigateTo}
              onOpenConsultation={() => navigateTo('contact')}
            />
          )}
          {currentView === 'services' && (
            <ServicesPage
              onNavigate={navigateTo}
              selectedServiceId={selectedServiceId}
            />
          )}
          {currentView === 'about' && (
            <AboutPage onNavigate={navigateTo} />
          )}
          {currentView === 'why-us' && (
            <WhyUsPage onNavigate={navigateTo} />
          )}
          {currentView === 'compliance' && (
            <CompliancePage onNavigate={navigateTo} />
          )}
          {currentView === 'contact' && (
            <ContactPage />
          )}
        </div>
      </main>

      {/* Authoritative Regulatory Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky Bar & Desktop Floating WhatsApp Action */}
      <FloatingActions onNavigate={navigateTo} currentView={currentView} />
    </div>
  );
}
