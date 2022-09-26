import type { Component } from 'src/lib/types/component';
import {
    MainTemplate,
    Container,
    Text,
    Button,
    Image,
    BreakPoint,
} from 'src/lib/components';
import projects from 'src/lib/constants/projects';
import { useMemo, useState } from 'react';
import type { ProjectKeys } from 'src/lib/constants/projects';

const Projects: Component = () => {
    const [state, setState] = useState<ProjectKeys>('realme');

    const selectedProject = useMemo(() => projects[state], [state]);

    const entries = useMemo(() => Object.entries(projects).reverse(), []);

    return (
        <MainTemplate>
            <BreakPoint minType='md'>
                <Container
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    <Container style={{ flex: 1, alignItems: 'end' }}>
                        {entries.map(([key, project], index) => (
                            <Button
                                key={index}
                                size='lg'
                                style={{ alignItems: 'end', margin: '12px 0' }}
                                onClick={() => setState(key as ProjectKeys)}
                                backgroundColor='transparent'
                            >
                                <Text
                                    type='t7'
                                    style={{ textAlign: 'end' }}
                                    color='white'
                                >
                                    {project.name}
                                </Text>
                            </Button>
                        ))}
                    </Container>
                    <Container style={{ flex: 2, padding: '0 25px' }}>
                        {selectedProject.images.length > 0 && <Image
                            src={selectedProject.images[0]}
                            alt={selectedProject.name}
                            width='100%'
                            height='auto'
                        />}
                        <Text
                            type='t6'
                            color='white'
                            style={{ margin: '10px 0' }}
                        >
                            Name: {selectedProject.name}
                        </Text>
                        <Text
                            type='t7'
                            color='white'
                            style={{ marginBottom: 10 }}
                        >
                            Description: {selectedProject.description}
                        </Text>
                        <Text type='t7' color='white'>
                            Skills: {selectedProject.skills.join(', ')}
                        </Text>
                    </Container>
                </Container>
            </BreakPoint>
            <BreakPoint maxType='md'>
                <Container
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}
                >
                    <Container style={{ flex: 2, padding: '0 25px' }}>
                        {selectedProject.images.length > 0 && <Image
                            src={selectedProject.images[0]}
                            alt={selectedProject.name}
                            width='100%'
                            height='auto'
                        />}
                        <Text
                            type='t6'
                            color='white'
                            style={{ margin: '10px 0' }}
                        >
                            Name: {selectedProject.name}
                        </Text>
                        <Text
                            type='t7'
                            color='white'
                            style={{ marginBottom: 10 }}
                        >
                            Description: {selectedProject.description}
                        </Text>
                        <Text type='t7' color='white'>
                            Skills: {selectedProject.skills.join(', ')}
                        </Text>
                    </Container>
                    <Container
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 15,
                            marginTop: 30,
                        }}
                    >
                        {entries.map(([key, project], index) => (
                            <Button
                                key={index}
                                size='sm'
                                style={{
                                    alignItems: 'center',
                                    margin: '12px 0',
                                }}
                                onClick={() => setState(key as ProjectKeys)}
                                backgroundColor='transparent'
                            >
                                <Text
                                    type='t9'
                                    style={{ textAlign: 'center' }}
                                    color='white'
                                >
                                    {project.name}
                                </Text>
                            </Button>
                        ))}
                    </Container>
                </Container>
            </BreakPoint>
        </MainTemplate>
    );
};

export default Projects;
