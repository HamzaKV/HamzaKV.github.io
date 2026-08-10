export interface Project {
    name: string;
    description: string;
    skills: string[];
    image?: string;
    link?: string;
    linkLabel?: string;
}

export const flagshipProjects: Project[] = [
    {
        name: 'solidstep',
        description:
            "My own SSR meta-framework for SolidJS — routing, data loading, SSR/SSG/ISR/PPR rendering strategies, server actions, and caching, inspired by Next.js and Remix. This site runs on it.",
        skills: ['TypeScript', 'Solid.js', 'Vinxi', 'Nitro'],
        link: 'https://github.com/HamzaKV/solidstep',
        linkLabel: 'GitHub',
    },
    {
        name: 'CanPR',
        description:
            'Built from the ground up and scaled to 2M+ users and 200K MAU. A mobile app helping people navigate the Canadian permanent residency process.',
        skills: [
            'TypeScript',
            'React Native',
            'Expo',
            'Supabase',
            'Stripe',
            'Firebase',
        ],
        link: 'https://canpr.io',
        linkLabel: 'canpr.io',
    },
    {
        name: 'Zown',
        description:
            "CTO. Recreated and consolidated the tech stack into a single mobile app covering a user's end-to-end home-ownership journey. Lead a team of 7 engineers plus a product team, and built AI-assisted tooling that lets the marketing team make edits directly, with guardrails for security and bugs.",
        skills: ['TypeScript', 'Next.js', 'Turborepo', 'SST', 'AWS'],
    },
];

export const openSourceProjects: Project[] = [
    {
        name: 'ai-sdk',
        description:
            'A minimal, type-safe toolkit for building multi-model AI applications with standardized, composable interfaces. Runtime-, framework-, and model-agnostic, with Anthropic and OpenAI provider packages and a dataset regression evals package.',
        skills: ['TypeScript'],
        link: 'https://github.com/HamzaKV/ai-sdk',
        linkLabel: 'GitHub',
    },
    {
        name: 'axis',
        description:
            'An application for managing a contractor business — also built on solidstep.',
        skills: ['TypeScript', 'Solid.js', 'Supabase', 'Stripe'],
        link: 'https://axisdb.tech',
        linkLabel: 'axisdb.tech',
    },
    {
        name: 'anchor',
        description:
            'A lightweight CLI to enforce and validate release checklists in development workflows, ensuring non-code changes — especially environment-specific config — are explicitly reviewed before release.',
        skills: ['TypeScript', 'Node.js'],
        link: 'https://github.com/HamzaKV/anchor',
        linkLabel: 'GitHub',
    },
    {
        name: 'monorun',
        description:
            'A fast, extensible monorepo task runner: dependency-graph task execution, git-diff-aware filtering, local caching, and Docker-optimized pruning.',
        skills: ['TypeScript', 'Node.js'],
        link: 'https://github.com/HamzaKV/monorun',
        linkLabel: 'GitHub',
    },
];

export const supportingProjects: Project[] = [
    {
        name: 'Realme',
        description:
            'RealMe is a platform that provides micro-investors access to real estate investments.',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Remix',
            'Node.js',
            'Express',
            'Postgres',
            'Docker',
            'Kubernetes',
            'AWS',
            'Polygon',
            'Solidity',
        ],
        image: '/images/realme-web.png',
    },
    {
        name: 'HiRide',
        description:
            'HiRide is a carpooling app for long distance travel, with the mission to improve the interaction between riders and drivers.',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node.js',
            'Express',
            'Postgres',
            'Docker',
            'Kubernetes',
            'AWS',
        ],
        image: '/images/hiride-web.png',
    },
    {
        name: 'Predict Technologies',
        description:
            'Predict Technologies provides Patient Health Integrated Electronic Records (PHIER), designed to assist and improve the diagnostic process for practicing physicians using electronic health record systems.',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node.js',
            'Express',
            'Postgres',
            'AWS',
        ],
        image: '/images/predict-technologies-web.png',
    },
    {
        name: 'TechGuilds',
        description:
            "A proudly Canadian company specializing in digital customer experiences, with a heritage in Sitecore and a vision spanning SaaS-based, headless CMS and microservice architecture. Projects included Peek WebXR (a VR/AR plug-in for Sitecore) and Kajoo (an AI-powered design-to-code tool).",
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node.js',
            'Express',
            'Postgres',
            'Azure',
        ],
        image: '/images/techguilds-web.png',
    },
    {
        name: "St. Michael's Hospital",
        description:
            "Worked with Dr. Flora Matheson, Scientist at St. Michael's Hospital, to develop a multi-platform mobile personal therapy app. Dr. Matheson was one of the first researchers in Canada to investigate the relationship between problem gambling and homelessness, co-developing the first gambling-addiction program for people who are homeless.",
        skills: ['JavaScript', 'React Native'],
    },
    {
        name: 'Islamic Institute of Toronto',
        description:
            'A premier Islamic educational institution in Toronto offering post-secondary courses in Arabic Language, Islamic Jurisprudence, Ethics and Spirituality, and Islamic History and Civilization.',
        skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
        image: '/images/iit-web.png',
    },
    {
        name: 'Qubic Labs',
        description:
            'A startup dedicated to using wearable technology to improve physical fitness.',
        skills: ['C#', 'C', 'C++', 'EagleCAD'],
    },
];

export const allProjects: Project[] = [
    ...flagshipProjects,
    ...openSourceProjects,
    ...supportingProjects,
];

export const skillsUnion: string[] = Array.from(
    new Set(allProjects.flatMap((p) => p.skills)),
).sort((a, b) => a.localeCompare(b));
