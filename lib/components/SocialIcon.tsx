import type { SocialLink } from '../data/social-links';

export default function SocialIcon(props: SocialLink) {
    return (
        <a
            href={props.href}
            class={`social-icon${props.dark ? ' social-icon--dark' : ''}`}
            target={props.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={props.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={props.label}
        >
            <img src={props.icon} alt="" />
        </a>
    );
}
