'use client';

import { Container, Title, Text, TextInput, Textarea, Button, Group, Box, Stack, Grid } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <Box className={classes.section} id="contact">
      <Container size="lg">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Box>
                <Title order={2} className={classes.title}>
                  Get in Touch
                </Title>
                <Text size="lg" c="dimmed" mt="sm">
                  Ready to transform your garden? Contact me for a free, no-obligation quote.
                </Text>
              </Box>

              <Stack gap="md">
                <Group gap="md">
                  <IconMapPin size={24} className={classes.icon} />
                  <Box>
                    <Text fw={600}>Service Area</Text>
                    <Text size="sm" c="dimmed">
                      Norwich and surrounding areas (40km radius)
                    </Text>
                  </Box>
                </Group>

                <Group gap="md">
                  <IconPhone size={24} className={classes.icon} />
                  <Box>
                    <Text fw={600}>Phone</Text>
                    <Text
                      size="sm"
                      c="dimmed"
                      component="a"
                      href="tel:+44"
                      className={classes.link}
                    >
                      Call for consultation
                    </Text>
                  </Box>
                </Group>

                <Group gap="md">
                  <IconMail size={24} className={classes.icon} />
                  <Box>
                    <Text fw={600}>Email</Text>
                    <Text
                      size="sm"
                      c="dimmed"
                      component="a"
                      href="mailto:contact@mygardenermel.com"
                      className={classes.link}
                    >
                      contact@mygardenermel.com
                    </Text>
                  </Box>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className={classes.formContainer}>
              <form>
                <Stack gap="md">
                  <TextInput
                    label="Your Name"
                    placeholder="John Smith"
                    required
                    size="md"
                  />

                  <TextInput
                    label="Email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    size="md"
                  />

                  <TextInput
                    label="Phone Number"
                    placeholder="+44 7XXX XXXXXX"
                    type="tel"
                    size="md"
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell me about your garden project..."
                    required
                    minRows={4}
                    size="md"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    leftSection={<IconSend size={20} />}
                    color="green.9"
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
