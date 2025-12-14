import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Globe, 
  Youtube, 
  Twitter, 
  Mail, 
  Calendar, 
  Briefcase, 
  ArrowUpRight 
} from 'lucide-react';
import { PlatformType } from '../types';

interface IconMapperProps {
  type: PlatformType;
  className?: string;
}

export const IconMapper: React.FC<IconMapperProps> = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case PlatformType.INSTAGRAM:
      return <Instagram className={className} />;
    case PlatformType.LINKEDIN:
      return <Linkedin className={className} />;
    case PlatformType.WHATSAPP:
      return <MessageCircle className={className} />;
    case PlatformType.WEBSITE:
      return <Globe className={className} />;
    case PlatformType.YOUTUBE:
      return <Youtube className={className} />;
    case PlatformType.TWITTER:
      return <Twitter className={className} />;
    case PlatformType.EMAIL:
      return <Mail className={className} />;
    case PlatformType.CALENDAR:
      return <Calendar className={className} />;
    case PlatformType.PORTFOLIO:
      return <Briefcase className={className} />;
    default:
      return <ArrowUpRight className={className} />;
  }
};