'use client';

import { Container, Title, Text, SimpleGrid, Card, Badge, Box, Stack } from '@mantine/core';
import classes from './Gallery.module.css';

const projects = [
  {
    id: 1,
    title: 'Garden Transformation',
    description: 'Complete overhaul from overgrown to pristine',
    badge: 'Before & After',
  },
  {
    id: 2,
    title: 'Lawn Restoration',
    description: 'Professional lawn care and maintenance',
    badge: 'Before & After',
  },
  {
    id: 3,
    title: 'Hedge Trimming',
    description: 'Precise hedge shaping and maintenance',
    badge: 'Before & After',
  },
];

export function Gallery() {
  return (
    <Box className={classes.section}>
      <Container size="lg">
        <Stack gap="xl">
          <Box className={classes.header}>
            <Title order={2} className={classes.title}>
              My Work
            </Title>
            <Text size="lg" c="dimmed" className={classes.subtitle}>
              See the transformations I've achieved for satisfied customers across Norwich
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {projects.map((project) => (
              <Card
                key={project.id}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                className={classes.card}
              >
                <Card.Section className={classes.imageSection}>
                  <Box className={classes.imagePlaceholder}>
                    <Text size="sm" c="dimmed">
                      {project.title}
                    </Text>
                  </Box>
                </Card.Section>

                <Stack gap="sm" mt="md">
                  <Badge color="green.9" variant="light">
                    {project.badge}
                  </Badge>
                  <Text fw={600} size="lg">
                    {project.title}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {project.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
