export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];  
  export const myProjects = [
    {
      title: 'DDNet Custom Game Server Development',
      desc: 'I contribute to the open-source game DDnet in my free time. Additionally, I manage a custom game server with a unique game mode, collaborating with a small team of developers, hosted on a cloud server using Docker.',
      subdesc:
        'Developed in C++ with custom server code, providing a unique experience within DDnet.',
      href: 'https://awb-clan.com',
      texture: '',
      logo: '/assets/ddneticon.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'C++',
          path: '/assets/cp.png',
        },
        {
          id: 2,
          name: 'Docker',
          path: 'assets/docker.webp',
        }
      ],
    },
    {
      title: 'C++ Real-Time Chat Application',
      desc: 'A simple yet effective real-time chatting application developed in C++ using web sockets and a server-client architecture. It enables multiple clients to communicate simultaneously with a central server.',
      subdesc:
        'Features multi-threading for concurrent client management, vector-based client handling for scalability, and echo server functionality to demonstrate real-time communication capabilities.',
      href: 'https://github.com/TylerStocks1/Chat_App',
      texture: '',
      logo: '/assets/chat.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'cpp',
          path: '/assets/cp.png',
        },
      ],
    }
  ];

  export const RecentProject = [
    {
      title: 'Developing a 2D Adventure Game in Unreal Engine',
      desc: 'Crafting an engaging 2D game using Unreal Engine and C++, combining intricate animations, mechanics, and gameplay features.',
      subdesc:
        'This project is a deep dive into Unreal Engines capabilities, leveraging C++ for game logic, custom animations, and various built-in tools to create an immersive 2D gaming experience.',
      href: '',
      texture: '',
      logo: '/assets/EU.webp',
      logoStyle: {
        backgroundColor: '#2e302e',
        border: '0.2px solid ##2e302f',
        boxShadow: '0px 0px 60px 0px #4e4f4e',
      },
      spotlight: '/assets/spotlight3.png',
    },
  ];

  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Self-Employed / Freelance Developer',
      pos: 'Game Developer',
      duration: '2022 - Present',
      title: "Freelance Software & Game Development Services",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
  ];