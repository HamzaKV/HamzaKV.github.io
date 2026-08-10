export interface SocialLink {
    label: string;
    href: string;
    icon: string;
    dark?: boolean;
}

export const socialLinks: SocialLink[] = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/hamzav/',
        icon: '/images/linkedin-icon.svg',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/HamzaKV',
        icon: '/images/github-icon.svg',
        dark: true,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/hamzakv3/',
        icon: '/images/instagram-icon.svg',
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/hvarvani',
        icon: '/images/twitter-icon.svg',
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/Hamzakvarvani',
        icon: '/images/facebook-icon.svg',
    },
    {
        label: 'Email',
        href: 'mailto:hamza.k.varvani@gmail.com',
        icon: '/images/email-icon.svg',
    },
];
