'use client';

import { Container, SimpleGrid, Text, Box, ThemeIcon, Stack } from '@mantine/core';
import { IconThumbUp, IconClock, IconMapPin } from '@tabler/icons-react';
import classes from './Stats.module.css';

const stats = [
  {
    icon: IconThumbUp,
    value: '100%',
    label: 'Customer Satisfaction',
  },
  {
    icon: IconClock,
    value: '100+',
    label: 'Hours Experience',
  },
  {
    icon: IconMapPin,
    value: '20km',
    label: 'Service Area',
  },
];

export function Stats() {
  return (
    <Box component="section" className={classes.section} aria-label="Key statistics">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          {stats.map((stat) => (
            <Box key={stat.label} className={classes.stat}>
              <Stack align="center" gap="md">
                <ThemeIcon
                  size={80}
                  radius="md"
                  variant="light"
                  color="white"
                  className={classes.icon}
                  aria-hidden="true"
                >
                  <stat.icon size={40} stroke={1.5} />
                </ThemeIcon>

                <Text className={classes.value}>{stat.value}</Text>

                <Text className={classes.label}>{stat.label}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
