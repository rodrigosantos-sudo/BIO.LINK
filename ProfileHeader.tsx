import React, { useState } from 'react';
import { ProfileData } from '../types';
import { CheckCircle2, User } from 'lucide-react';

interface ProfileHeaderProps {
  profile: ProfileData;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <header className="flex flex-col items-center text-center space-y-4 mb-8 animate-fade-in">
      <div className="relative group">
        {/* Anel de gradiente (Borda estilo Instagram/Linktree) */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] blur-[1px] opacity-100"></div>
        
        <div className="relative p-1 bg-[#0e0e0e] rounded-full">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-neutral-800 flex items-center justify-center">
              
              {!imageError ? (
                <img 
                    src={profile.avatarUrl} 
                    alt={profile.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                />
              ) : (
                // Fallback: Se a imagem quebrar, mostra um ícone elegante
                <div className="flex items-center justify-center w-full h-full text-neutral-500">
                  <User className="w-12 h-12" />
                </div>
              )}

              {/* Loading State: Enquanto carrega e não deu erro */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-500">
                   <div className="w-8 h-8 border-2 border-neutral-600 border-t-neutral-400 rounded-full animate-spin"></div>
                </div>
              )}
              
            </div>
        </div>
        
        {/* Verification badge */}
        <div className="absolute bottom-2 right-2 bg-neutral-950 rounded-full p-1 border border-neutral-800 text-blue-500 z-10">
           <CheckCircle2 className="w-5 h-5 fill-current" />
        </div>
      </div>
      
      <div className="space-y-2 max-w-xs md:max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {profile.name}
        </h1>
        <p className="text-sm md:text-base text-neutral-400 font-medium uppercase tracking-widest">
          {profile.role}
        </p>
      </div>
    </header>
  );
};