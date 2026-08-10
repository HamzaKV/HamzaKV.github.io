import { Link } from 'solidstep/link';

export default function NotFound() {
    return (
        <section>
            <h1 class="section-title">404 — Not found</h1>
            <p class="section-lede">That page doesn't exist.</p>
            <Link href="/">Go home</Link>
        </section>
    );
}
