'use client';

import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Stack, Box } from '@mantine/core';
import {
  IconLeaf,
  IconTools,
  IconHeart,
  IconClock,
  IconShieldCheck,
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
    icon: IconShieldCheck,
    title: 'Fully Insured',
    description: 'Professional service with full public liability insurance for your peace of mind.',
  },
  {
    icon: IconStar,
    title: 'Customer Satisfaction',
    description: '100% customer satisfaction guaranteed. I\'m not happy until you\'re delighted with your garden.',
  },
];

export function Services() {
  return (
    <Box className={classes.section}>
      <Container size="lg">
        <Stack gap="xl">
          <Box className={classes.header}>
            <Title order={2} className={classes.title}>
              Why Choose My Service?
            </Title>
            <Text size="lg" c="dimmed" className={classes.subtitle}>
              Professional gardening services you can trust
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {services.map((service) => (
              <Card
                key={service.title}
                shadow="sm"
                padding="xl"
                radius="md"
                className={classes.card}
              >
                <ThemeIcon
                  size={60}
                  radius="md"
                  variant="light"
                  color="green.9"
                  className={classes.icon}
                >
                  <service.icon size={30} stroke={1.5} />
                </ThemeIcon>

                <Text fw={600} size="lg" mt="md" className={classes.cardTitle}>
                  {service.title}
                </Text>

                <Text size="sm" c="dimmed" mt="sm">
                  {service.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
