'use client';

import { Container, Title, Text, Button, Box, Stack, BackgroundImage } from '@mantine/core';
import { IconPhone, IconMail } from '@tabler/icons-react';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Box className={classes.hero}>
      <Container size="lg">
        <Stack gap="xl" className={classes.content}>
          <Title className={classes.title}>
            Your Friendly Local Gardener!
          </Title>

          <Text size="xl" className={classes.subtitle}>
            Professional garden maintenance and landscaping services in Norwich, England
          </Text>

          <Text size="lg" className={classes.description}>
            Transform your outdoor space with experienced, reliable gardening services.
            From regular maintenance to complete garden makeovers, I bring passion and
            expertise to every project.
          </Text>

          <Box className={classes.buttons}>
            <Button
              size="lg"
              variant="white"
              leftSection={<IconMail size={20} />}
              component="a"
              href="#contact"
              className={classes.quoteButton}
              styles={{
                root: {
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="filled"
              color="gold.9"
              leftSection={<IconPhone size={20} />}
              component="a"
              href="tel:+447927491042"
              className={classes.callButton}
              styles={{
                root: {
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              Call Now
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
