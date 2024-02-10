import { GitHubIcon, LinkedInIcon } from '@/components/icons';

type WritingEntry = {
  title: string;
  tags: string[];
  description: string;
  link: {
    label: string;
    href: string;
  };
};

export const RESUME_DATA = {
  name: 'Grant Matejka',
  initials: 'GM',
  location: 'Boston, MA',
  about:
    'Full-stack engineer who loves to build in fast paced/startup environments',
  summary:
    "As an engineer, I've built product verticals end users love and rely on. Building real things and shipping true value is what I love. With a Master's in CS and expertise in TypeScript, React, WebAssembly and Node, I've delivered production systems across a variety of contexts (e.g. microservices, api's, compilers, etc).",
  avatarUrl: undefined,
  contact: {
    email: 'grantmatejka1@gmail.com',
    resume: 'GrantMatejkaResume.pdf',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/grantmatejka',
        icon: GitHubIcon
      },
      {
        name: 'Professional GitHub',
        url: 'https://github.com/gmatejka-tulip',
        icon: GitHubIcon
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/grantmatejka/',
        icon: LinkedInIcon
      }
    ]
  },
  education: [
    {
      school: 'California Polytechnic State University, San Luis Obispo',
      degree: "Master's Degree in Computer Science",
      start: '2021',
      end: '2022'
    },
    {
      school: 'California Polytechnic State University, San Luis Obispo',
      degree: "Bachelor's Degree in Software Engineering",
      start: '2017',
      end: '2021'
    }
  ],
  work: [
    {
      company: 'Tulip Interfaces',
      link: 'https://tulip.co',
      badges: ['Hybrid'],
      title: 'Software Engineer',
      start: '2022',
      end: undefined,
      description:
        'Member of small team of engineers responsible with scoping and building of automated workflow product. Scoped, developed and tested flowchart/no-code editor for building said workflows. Built compiler and runtime to compile custom no-code AST to JavaScript, to be run in a sandboxed WebAssembly environment (QuickJS). Designed, standardized and built out public API’s across the engineering org'
    },
    {
      company: 'iFixit',
      link: 'https://ifixit.com',
      badges: ['Hybrid'],
      title: 'Software Engineering Apprentice',
      start: 'Nov. 2020',
      end: 'Jan. 2022',
      description:
        'Responsible for maintenance of legacy codebase, with active conversion to modern systems. Did full stack development across highly structured/OOP, PHP backend and JS/React/NextJs frontend. Contributed heavily to conversion of custom built ecommerce engine to Shopify. Utilized Agile management across hybrid team with thorough quality assurance and code review practices. Wrote unit/integration/functional tests for continuous integration and deployment pipelines'
    },
    {
      company: 'The Parable Group',
      link: 'https://parablegroup.com',
      badges: ['Onsite'],
      title: 'Software Engineer Intern',
      start: 'Jan. 2020',
      end: 'Dec. 2020',
      description:
        'Full stack SPA development using ASP.NET Core 3, the Blazor framework and Azure. Was responsible for the development of production website features and continuous research. Built an entire product offering from concept, to prototype, to launch'
    }
  ],
  skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'WebAssembly'],
  projects: [
    {
      title: 'Rasm',
      techStack: ["Master's Thesis", 'JavaScript', 'Scheme', 'WebAssembly'],
      description: 'A Racket to WebAssembly compiler',
      link: {
        label: 'github.com/grantmatejka/rasm',
        href: 'https://github.com/grantmatejka/rasm'
      }
    },
    {
      title: 'Advent of Code',
      techStack: ['Side Project', 'Python', 'Algorithms', 'Data Structures'],
      description: 'Basic wasm program I wrote by hand in learning wasm',
      link: {
        label: 'github.com/grantmatejka/AdventOfCode',
        href: 'https://github.com/grantmatejka/AdventOfCode'
      }
    }
  ],
  writings: [] as WritingEntry[]
  // [
  //   {
  //     title: 'Rasm',
  //     tags: [],
  //     description: 'A Racket to WebAssembly compiler',
  //     link: {
  //       label: 'grantmatejka.com',
  //       href: 'https://grantmatejka.com/writing/rasm'
  //     }
  //   },
  //   {
  //     title: 'WASM Game of Life',
  //     tags: ['Side Project', 'TypeScript', 'Next.js', 'WebAssembly'],
  //     description: 'Basic wasm program I wrote by hand in learning wasm',
  //     link: {
  //       label: 'grantmatejka.com',
  //       href: 'https://grantmatejka.com/project/game-of-life'
  //     }
  //   }
  // ]
} as const;
