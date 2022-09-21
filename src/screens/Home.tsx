import type { Component } from 'src/lib/types/component';
import {
    Container,
    Image,
    MainTemplate,
    Text,
    BreakPoint,
    TextProps,
    Link,
} from 'src/lib/components';
import images from 'src/lib/constants/images';
import { useState, useEffect } from 'react';

const Home: Component = () => {
    return (
        <MainTemplate>
            <Container
                style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    overflowX: 'hidden',
                }}
            >
                <BreakPoint minType='lg'>
                    <Image
                        src={images.headShot}
                        alt='HeadShot'
                        height={500}
                        width='auto'
                        style={{ borderRadius: 32 }}
                    />
                </BreakPoint>
                <BreakPoint maxType='md'>
                    <Image
                        src={images.headShot}
                        alt='HeadShot'
                        height={300}
                        width='auto'
                        style={{ borderRadius: 32 }}
                    />
                </BreakPoint>
                <Container style={{ alignItems: 'center' }}>
                    <Text type='t7' style={{ color: 'white' }}>
                        Hamza Varvani
                    </Text>
                    <BreakPoint minType='lg'>
                        <TypingText
                            strings={[
                                'Adaptable',
                                'Flexible',
                                'Creative',
                                'Innovative',
                                'Imaginative',
                            ]}
                            type='t1'
                            style={{
                                color: 'white',
                                fontSize: '5rem',
                                fontWeight: '500',
                            }}
                        />
                    </BreakPoint>
                    <BreakPoint maxType='md'>
                        <TypingText
                            strings={[
                                'Adaptable',
                                'Flexible',
                                'Creative',
                                'Innovative',
                                'Imaginative',
                            ]}
                            type='t3'
                            style={{
                                color: 'white',
                                fontWeight: '500',
                            }}
                        />
                    </BreakPoint>
                    <Text
                        type='t6'
                        style={{ color: 'white', textAlign: 'center' }}
                    >
                        Full Stack Software Engineer
                    </Text>
                    <Container
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 15,
                            flexWrap: 'wrap',
                            paddingTop: 15,
                            justifyContent: 'center',
                        }}
                    >
                        <SocialMediaLink link='https://www.linkedin.com/in/hamza-varvani-214252a9/' src={images.linkedinIcon} />
                        <SocialMediaLink link='https://github.com/HamzaKV' src={images.githubIcon} style={{ backgroundColor: 'black' }} />
                        <SocialMediaLink link='https://www.instagram.com/hamzakv3/' src={images.instagramIcon} />
                        <SocialMediaLink link='https://twitter.com/hvarvani' src={images.twitterIcon} />
                        <SocialMediaLink link='https://www.facebook.com/Hamzakvarvani' src={images.facebookIcon} />
                        <SocialMediaLink link='mailto:hamza.k.varvani@gmail.com' src={images.emailIcon} />
                    </Container>
                </Container>
            </Container>
        </MainTemplate>
    );
};

const SocialMediaLink: Component<{ link: string; src: string }> = ({
    link,
    src,
    style,
}) => {
    return (
        <Link
            link={link}
            containerStyle={{
                height: 50,
                width: 50,
                borderRadius: '50%',
            }}
            backgroundColor='white'
        >
            <Image
                src={src}
                alt='Social Media Link'
                height='auto'
                width='30px'
                style={{
                    margin: 8,
                    borderRadius: 'inherit',
                    ...style,
                }}
            />
        </Link>
    );
};

const TypingText: Component<{
    strings: string[];
    speed?: number;
    type: TextProps['type'];
}> = ({ strings, speed = 200, type, style }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isDeleting) {
                setSubIndex((prev) => prev - 1);
                if (subIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => {
                        if (strings.length === 1) return prev;
                        if (prev === strings.length - 1) return 0;
                        return prev + 1;
                    });
                }
            } else {
                setSubIndex((prev) => prev + 1);
                if (subIndex === strings[index].length) {
                    setIsDeleting(true);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [index, subIndex, isDeleting, strings, speed]);

    return (
        <Text type={type} style={style}>
            {strings[index].substring(0, subIndex)}
            <span
                style={{
                    color: 'inherit',
                    opacity: isDeleting ? 0.5 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            >
                |
            </span>
        </Text>
    );
};

export default Home;
