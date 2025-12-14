import React from 'react';
import { PROFILE_DATA } from './constants';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0e0e0e] flex flex-col items-center">
      
      {/* Background Image com Desfoque */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            // Imagem similar: Setup escuro com iluminação quente (Laranja/Amarelo)
            src="https://images.unsplash.com/photo-1493723843684-a63bc8419371?auto=format&fit=crop&q=80&w=2070" 
            alt="Background Workspace" 
            className="w-full h-full object-cover blur-[6px] scale-110 opacity-60"
          />
          {/* Camada escura para garantir leitura do texto */}
          <div className="absolute inset-0 bg-neutral-950/85"></div>
          {/* Gradiente extra para suavizar o topo e base */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/90"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-lg px-6 py-12 md:py-20 flex flex-col items-center min-h-screen">
        
        {/* Header Section */}
        <ProfileHeader profile={PROFILE_DATA} />

        {/* Tagline / Authority Statement */}
        <div className="mb-10 text-center animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
          <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed px-4 text-shadow-sm">
            {PROFILE_DATA.tagline}
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full flex flex-col gap-4 mb-16">
          {PROFILE_DATA.links.map((link, index) => (
            <LinkButton key={link.id} link={link} index={index} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8 border-t border-white/10 w-full text-center animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
          <p className="text-xs text-neutral-500 font-medium tracking-wider uppercase">
            {PROFILE_DATA.footerText}
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;