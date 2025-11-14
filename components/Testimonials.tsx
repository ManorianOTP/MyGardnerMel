'use client';

import { Container, Title, Text, Card, Group, Avatar, Stack, Box, Rating } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';
import classes from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rose',
    rating: 5,
    text: 'Myron transformed our overgrown garden into a beautiful space we can actually enjoy. His attention to detail and professionalism are outstanding. Highly recommend!',
    avatar: 'R',
  },
  {
    name: 'Andrew',
    rating: 5,
    text: 'Reliable, punctual, and does an excellent job every time. Our lawn has never looked better. Great value for money and a pleasure to work with.',
    avatar: 'A',
  },
];

export function Testimonials() {
  return (
    <Box className={classes.section}>
      <Container size="lg">
        <Stack gap="xl">
          <Box className={classes.header}>
            <Title order={2} className={classes.title}>
              What My Customers Say
            </Title>
            <Text size="lg" c="dimmed" className={classes.subtitle}>
              Don't just take my word for it
            </Text>
          </Box>

          <Group grow align="stretch" gap="lg">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                shadow="md"
                padding="xl"
                radius="md"
                className={classes.card}
              >
                <Stack gap="md">
                  <IconQuote size={40} className={classes.quoteIcon} />

                  <Text size="md" className={classes.text}>
                    "{testimonial.text}"
                  </Text>

                  <Box>
                    <Rating value={testimonial.rating} readOnly color="green.9" />
                  </Box>

                  <Group gap="sm">
                    <Avatar color="green.9" radius="xl" size="lg">
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Text fw={600} size="sm">
                        {testimonial.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        Verified Customer
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>
            ))}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
