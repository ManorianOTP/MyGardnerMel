'use client';

import { Container, Title, Text, Card, ThemeIcon, Stack, Box } from '@mantine/core';
import {
  IconLeaf,
  IconTools,
  IconHeart,
  IconClock,
  IconStar,
} from '@tabler/icons-react';
import classes from './Services.module.css';

const services = [
  {
    icon: IconLeaf,
    title: 'Garden Maintenance',
    description: 'Regular upkeep including lawn mowing, weeding, and general tidying to keep your garden looking its best year-round.',
  },
  {
    icon: IconTools,
    title: 'Landscaping',
    description: 'Complete garden transformations, from design to implementation. Creating beautiful outdoor spaces tailored to your vision.',
  },
  {
    icon: IconHeart,
    title: 'Passion & Care',
    description: 'Every garden receives personal attention and care. I treat your outdoor space as if it were my own.',
  },
  {
    icon: IconClock,
    title: 'Reliable Service',
    description: 'Punctual and dependable. I show up when promised and complete work to the highest standard.',
  },
  {
    icon: IconStar,
    title: 'Customer Satisfaction',
    description: '100% customer satisfaction guaranteed. I\'m not happy until you\'re delighted with your garden.',
  },
];

export function Services() {
  return (
    <Box component="section" className={classes.section} aria-labelledby="services-heading">
      <Container size="lg">
        <Stack gap="xl">
          <Box className={classes.header}>
            <Title id="services-heading" order={2} className={classes.title}>
              Why Choose My Service?
            </Title>
            <Text size="lg" c="dimmed" className={classes.subtitle}>
              Professional gardening services you can trust
            </Text>
          </Box>

          <Box className={classes.grid}>
            {services.map((service) => (
              <Card
                key={service.title}
                shadow="sm"
                padding="xl"
                radius="md"
                className={classes.card}
                component="article"
                tabIndex={0}
                role="article"
                aria-label={`${service.title}: ${service.description}`}
              >
                <Box className={classes.iconHeader}>
                  <ThemeIcon
                    size={60}
                    radius="md"
                    variant="light"
                    color="gold.6"
                    className={classes.icon}
                  >
                    <service.icon size={30} stroke={1.5} />
                  </ThemeIcon>

                  <Text fw={600} size="lg" className={classes.cardTitle}>
                    {service.title}
                  </Text>
                </Box>

                <Text size="sm" c="dimmed" mt="sm">
                  {service.description}
                </Text>
              </Card>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
