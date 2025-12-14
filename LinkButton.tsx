import React from 'react';
import { SocialLink } from '../types';
import { IconMapper } from './IconMapper';
import { Share2 } from 'lucide-react';

interface LinkButtonProps {
  link: SocialLink;
  index: number;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link, index }) => {
  // Stagger animation delay based on index
  const animationDelay = `${index * 100}ms`;

  const baseClasses = "group relative w-full flex items-center justify-between px-6 py-4 rounded-xl border transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950";
  
  // Conditional styling for highlighted links (e.g., CTA) vs standard links
  const styleClasses = link.highlight
    ? "bg-white text-neutral-950 border-white hover:bg-neutral-200 focus:ring-white"
    : "bg-neutral-900/50 backdrop-blur-sm text-neutral-200 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 focus:ring-neutral-600";

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${styleClasses} animate-slide-up opacity-0`}
      style={{ animationDelay }}
      aria-label={`Visit ${link.title}`}
    >
      <div className="flex items-center gap-4">
        <span className={`p-2 rounded-lg ${link.highlight ? 'bg-neutral-100' : 'bg-neutral-800/50 group-hover:bg-neutral-700'} transition-colors`}>
          <IconMapper type={link.type} className="w-5 h-5" />
        </span>
        <span className="font-medium text-base tracking-wide">{link.title}</span>
      </div>
      
      {/* Subtle arrow or share icon on the right */}
      <div className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${link.highlight ? 'text-neutral-500' : 'text-neutral-500'}`}>
         <Share2 className="w-4 h-4" />
      </div>
    </a>
  );
};