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

type ReadingEntry = {
  title: string;
  author: string;
  tags: string[];
  review: string;
  rating: number;
  link?: {
    label?: string;
    href: string;
  };
};

export const RESUME_DATA = {
  name: 'Grant Matejka',
  initials: 'GM',
  location: 'Boston, MA',
  about:
    "Product-minded software engineer with a Master's in Computer Science",
  summary:
    'Product-minded software engineer with experience building and scaling B2B and B2C products across AI, workflow automation, and small business software. Strong full-stack background spanning TypeScript, React, Node.js, Python/FastAPI, distributed systems, and agentic AI systems. Experienced leading cross-functional initiatives from architecture through launch in high-growth startup environments.',
  avatarUrl: undefined,
  contact: {
    email: 'grantmatejka1@gmail.com',
    resume: 'GrantMatejka_Resume.pdf',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/grantmatejka',
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
      degree: "Master's Degree in Computer Science (with Distinction)",
      start: '2021',
      end: '2022'
    },
    {
      school: 'California Polytechnic State University, San Luis Obispo',
      degree: "Bachelor's Degree in Software Engineering (Summa Cum Laude)",
      start: '2017',
      end: '2021'
    }
  ],
  work: [
    {
      company: 'Andesite AI',
      link: 'https://andesite.ai',
      badges: ['Remote'],
      title: 'Senior Software Engineer',
      start: 'Jul 2024',
      end: undefined,
      description:
        "Led roadmap planning, technical architecture, and cross-functional engineering delivery; team delivered 85% of projects on or ahead of schedule. Designed and built the core multi-agent framework using proprietary infrastructure and LangChain, with extensive evaluation suites. Productionized an internal FastAPI proof-of-concept into a scalable platform with auth/authz, async job processing, and generated type-safe API clients. Shipped full-stack product features across React, TypeScript, Python, FastAPI, Postgres, and AWS while mentoring engineers."
    },
    {
      company: 'Tulip Interfaces',
      link: 'https://tulip.co',
      badges: ['Hybrid'],
      title: 'Software Engineer',
      start: 'July 2022',
      end: 'July 2024',
      description:
        'Built, launched, and maintained a core customer-facing no-code workflow editor using TypeScript, Node, React, Redux, and D3, informed by user and A/B testing. Built and maintained a compiler/runtime that compiles a custom AST to JavaScript for execution in a sandboxed WebAssembly environment (QuickJS) in an event-driven RabbitMQ ecosystem. Authored specs and architecture for scheduled workflows while rolling out microservice patterns (dynamic sharding, outbox) and public REST APIs.'
    },
    {
      company: 'iFixit',
      link: 'https://ifixit.com',
      badges: ['Hybrid'],
      title: 'Part Time Software Developer',
      start: 'Nov. 2020',
      end: 'Jan. 2022',
      description:
        'Maintained a large legacy codebase while helping modernize systems supporting 10+ million MAU. Delivered full-stack features across an OOP-heavy PHP backend and JS/React/Next.js frontend. Worked in an agile hybrid team with strong QA and code review practices.'
    },
    {
      company: 'The Parable Group',
      link: 'https://parablegroup.com',
      badges: ['Onsite'],
      title: 'Part Time Software Developer',
      start: 'Jan 2020',
      end: 'Dec. 2020',
      description:
        'Built full-stack SPAs using C#, ASP.NET Core 3, Blazor, and Azure. Independently took a product offering from concept to prototype to launch, including Azure CI/CD.'
    }
  ],
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Postgres',
    'Node.js',
    'Full Stack',
    'REST API',
    'Microservices',
    'Distributed Systems',
    'Agentic AI',
    'Python',
    'FastAPI'
  ],
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
      description: 'Fun annual event of various programming challenges',
      link: {
        label: 'github.com/grantmatejka/AdventOfCode',
        href: 'https://github.com/grantmatejka/AdventOfCode'
      }
    }
  ],
  readings: [
    {
      title: 'Code',
      author: 'Charles Petzold',
      tags: ['Computers', 'Engineering', 'Education'],
      review:
        'Walking from braille to assembly; one of the greatest computer programming books ever written',
      rating: 5,
      link: {
        href: 'https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0137909101'
      }
    },
    {
      title: 'Zero to One',
      author: 'Peter Thiel',
      tags: ['Startups', 'Engineering', 'Education'],
      review:
        'Short and sweet collection of lectures challenging the status quo of startups and the industry of innovation',
      rating: 4.5,
      link: {
        href: 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/080413929'
      }
    },
    {
      title: 'The War of Art',
      author: 'Steven Pressfield',
      tags: ['Philosophy', 'Creative'],
      review: 'Short and inspiring read for pursuing creative ventures',
      rating: 4,
      link: {
        href: 'https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026'
      }
    },
    {
      title: 'Where the Wizards Stay Up Late',
      author: 'Katie Hafner & Matthew Lyon',
      tags: ['Internet', 'History', 'Engineering'],
      review:
        'Engaging historical account of the birth and adoption of the ARPANET',
      rating: 4,
      link: {
        href: 'https://www.amazon.com/Where-Wizards-Stay-Up-Late/dp/0684832674/'
      }
    },
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      tags: ['HCI', 'Design', 'Philosphy', 'Classic'],
      review:
        "An all time classic of design and humans' interactions with the world",
      rating: 4.5,
      link: {
        href: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654'
      }
    }
  ] satisfies ReadingEntry[],
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
