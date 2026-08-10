import { Link } from 'solidstep/link';
import { navigationPending } from 'solidstep/router';

const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' },
] as const;

export default function Nav() {
    return (
        <>
            {/* Always rendered, visibility toggled via classList — a top-level
                <Show> here would remove/re-add the whole node and desync the
                hydration walk (see solidstep's troubleshooting doc). */}
            <div class="nav-progress" classList={{ 'nav-progress--hidden': !navigationPending() }} />
            <nav class="site-nav">
                {links.map((link) => (
                    <Link href={link.href}>{link.label}</Link>
                ))}
            </nav>
        </>
    );
}
