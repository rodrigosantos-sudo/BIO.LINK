import { PlatformType, ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Rodrigo Santos",
  role: "Videomaker & FullStack Dev",
  tagline: "Tecnologia, vídeo e narrativa para transformar ideias em produtos digitais.",
  // Usando a API de Thumbnail do Google Drive que é mais permissiva para hotlinking
  // sz=s1000 garante alta resolução
  avatarUrl: "https://drive.google.com/thumbnail?id=1QW22LaOahq-odrHe9oa9XipNr-GymB7l&sz=s1000", 
  
  links: [
    {
      id: '1',
      title: 'Falar sobre um projeto',
      url: 'https://wa.me/5562981233507',
      type: PlatformType.WHATSAPP,
      highlight: true, // Destaque para o botão principal
    },
    {
      id: '2',
      title: 'Ver portfólio',
      url: '#', // Adicione seu link de portfólio aqui
      type: PlatformType.PORTFOLIO,
    },
    {
      id: '3',
      title: 'Apps, Sites & SaaS',
      url: '#', // Adicione seu link de projetos aqui
      type: PlatformType.WEBSITE,
    },
    {
      id: '4',
      title: 'Conteúdo no Instagram',
      url: 'https://instagram.com/rodrigofsantoos',
      type: PlatformType.INSTAGRAM,
    },
    {
      id: '5',
      title: 'LinkedIn Profissional',
      url: 'https://www.linkedin.com/in/rodrigofsantoos',
      type: PlatformType.LINKEDIN,
    }
  ],
  footerText: "Goiânia • Projetos sob demanda"
};