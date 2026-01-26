import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopNavbar from '../app/components/TopNavbar';
import IconRail from '../app/components/IconRail';
import Sidebar from '../app/components/Sidebar';
import MainContent from '../app/components/MainContent';
import { useUiStore } from '../store';
import { useScrollToTop } from '../shared/hooks/useScrollToTop';

const AppLayout = () => {
  useScrollToTop();
  const { 
    isDesktopSidebarOpen, 
    toggleDesktopSidebar, 
    setMobileSidebarOpen,
    toggleMobileSidebar 
  } = useUiStore();

  const location = useLocation();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname, setMobileSidebarOpen]);

  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Level 1: Global Context */}
      <TopNavbar 
        onMobileMenuClick={toggleMobileSidebar} 
      />

      {/* Level 2-4: Workspace Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Level 2: Primary Navigation (Hidden on Mobile) */}
        <IconRail />

        {/* Level 3: Context Navigation */}
        <Sidebar />
        
        {/* Helper: Desktop Sidebar Toggle Trigger (Visible on Desktop only) */}
        <button 
          onClick={toggleDesktopSidebar}
          className="hidden md:flex absolute bottom-4 left-20 z-40 p-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors border border-primary/20"
          title="Toggle Sidebar"
          style={{ 
            left: isDesktopSidebarOpen ? '17rem' : '4.5rem',
            transition: 'left 300ms ease-in-out' 
          }}
        >
          {isDesktopSidebarOpen ? '«' : '»'}
        </button>

        {/* Level 4: Main Canvas */}
        <MainContent />
      </div>
    </div>
  );
};

export default AppLayout;
