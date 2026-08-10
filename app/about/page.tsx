import { options as defineOptions } from 'solidstep/utils/options';

export const options = defineOptions({ render: 'static' });

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'About · Hamza Varvani',
    },
});

export default function About() {
    return (
        <section>
            <h1 class="section-title">About</h1>
            <div class="about-body">
                <p>
                    I'm Hamza Varvani, a full-stack software engineer with 10 years
                    of professional experience. I'm currently CTO at Zown, in
                    Toronto — I joined in January 2026 as Head of Engineering and
                    was promoted to CTO within months.
                </p>
                <p>
                    At Zown I've recreated and consolidated the company's tech
                    stack into a single mobile app covering a user's end-to-end
                    home-ownership journey, lead a team of 7 engineers plus a
                    product team, and built AI-assisted tooling that lets the
                    marketing team ship their own edits safely, with guardrails
                    for security and bugs.
                </p>
                <p>
                    I'm also the creator of{' '}
                    <a
                        href="https://github.com/HamzaKV/solidstep"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        solidstep
                    </a>
                    , a SolidJS meta-framework I built and maintain — this site
                    runs on it — along with a handful of other open-source tools
                    (see{' '}
                    <a href="/projects">Projects</a>).
                </p>
                <p>
                    I hold a Bachelor of Engineering in Computer Engineering from
                    Ryerson University (2015–2020).
                </p>
            </div>
        </section>
    );
}
