import { options as defineOptions } from 'solidstep/utils/options';
import TypingHeadline from '../lib/components/TypingHeadline';
import SocialIcon from '../lib/components/SocialIcon';
import { socialLinks } from '../lib/data/social-links';

export const options = defineOptions({ render: 'static' });

export const generateMeta = () => ({
    title: {
        type: 'title',
        attributes: {},
        content: 'Hamza Varvani',
    },
});

export default function Home() {
    return (
        <section class="hero">
            <img class="headshot" src="/images/headshot.png" alt="Hamza Varvani" />
            <div class="hero-copy">
                <p class="name">Hamza Varvani</p>
                <TypingHeadline
                    class="tagline"
                    strings={[
                        'Adaptable',
                        'Flexible',
                        'Creative',
                        'Innovative',
                        'Imaginative',
                    ]}
                />
                <p class="role">Full Stack Software Engineer</p>
                <div class="social-row">
                    {socialLinks.map((link) => (
                        <SocialIcon {...link} />
                    ))}
                </div>
            </div>
        </section>
    );
}
