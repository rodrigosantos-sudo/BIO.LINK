import { LucideIcon } from 'lucide-react';

export enum PlatformType {
  INSTAGRAM = 'Instagram',
  LINKEDIN = 'LinkedIn',
  WHATSAPP = 'WhatsApp',
  WEBSITE = 'Website',
  YOUTUBE = 'YouTube',
  TWITTER = 'Twitter/X',
  EMAIL = 'Email',
  CALENDAR = 'Calendar',
  PORTFOLIO = 'Portfolio',
  OTHER = 'Other'
}

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  type: PlatformType;
  highlight?: boolean; // If true, applies a distinct style
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  avatarUrl: string; // URL to image
  links: SocialLink[];
  footerText: string;
}