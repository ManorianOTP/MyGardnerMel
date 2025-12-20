'use client';

import { Container, Title, Text, SimpleGrid, Card, Badge, Box, Stack } from '@mantine/core';
import classes from './Gallery.module.css';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const projects = [
  {
    id: 1,
    title: 'Garden Transformation',
    description: 'Garden restoration to oversimplify the overgrown and restore outdoor spaces to a manageable state.\n\nWhether its brambles befuddling your beds or nettles becoming a nuisance I have the tools required to get the job done.',
    badge: 'Before & After',
  },
  {
    id: 2,
    title: 'Lawn Restoration',
    description: 'Is your lawn looking tired, patchy, or overrun with weeds?\n\nMy professional lawn restoration service is designed to revive your grass and restore a healthy, lush finish that you can be proud of.',
    badge: 'Before & After',
  },
  {
    id: 3,
    title: 'Hedge Trimming',
    description: 'Whether you\'re looking for a sharp, formal finish or a more natural shape, I will work carefully and efficiently to achieve the outcome you desire.\n\nAll cuttings will be cleared away, leaving your garden tidy and your hedges looking their best.',
    badge: 'Before & After',
  },
];

export function Gallery() {
  return (
    <Box component="section" className={classes.section} aria-labelledby="gallery-heading">
      <Container size="lg">
        <Stack gap="xl">
          <Box className={classes.header}>
            <Title id="gallery-heading" order={2} className={classes.title}>
              My Work
            </Title>
            <Text size="lg" c="dimmed" className={classes.subtitle}>
              Use the sliders to see the transformations I've achieved for satisfied customers across Norwich
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" role="list">
            {projects.map((project) => (
              <Card
                key={project.id}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                className={classes.card}
                component="article"
                tabIndex={0}
                role="listitem"
                aria-label={`${project.title}: ${project.description}`}
              >
                <Card.Section className={classes.imageSection}>
                  {project.id === 1 ? (
                    <BeforeAfterSlider
                      beforeImage="/images/Bushes before.jpg"
                      afterImage="/images/Bushes after.jpg"
                      afterImagePosition="center 37%"
                      alt={project.title}
                    />
                  ) : project.id === 2 ? (
                    <BeforeAfterSlider
                      beforeImage="/images/Garden before.png"
                      afterImage="/images/Garden after.png"
                      afterImagePosition="70% center"
                      afterImageScale={1.2}
                      alt={project.title}
                    />
                  ) : project.id === 3 ? (
                    <BeforeAfterSlider
                      beforeImage="/images/Before shed.png"
                      afterImage="/images/After shed.png"
                      beforeImagePosition="100% 20%"
                      afterImagePosition="33% 38%"
                      beforeImageScale={1.3}
                      afterImageScale={1.3}
                      alt={project.title}
                    />
                  ) : (
                    <Box className={classes.imagePlaceholder}>
                      <Text size="sm" c="dimmed">
                        {project.title}
                      </Text>
                    </Box>
                  )}
                </Card.Section>

                <Stack gap="sm" mt="md">
                  <Badge color="green.9" variant="light">
                    {project.badge}
                  </Badge>
                  <Text fw={600} size="lg" c="green.9">
                    {project.title}
                  </Text>
                  <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-line' }}>
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
