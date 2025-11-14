'use client';

import { Container, Group, Button, Box, Title } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconMail } from '@tabler/icons-react';
import classes from './Header.module.css';

export function Header() {
  return (
    <Box component="header" className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" h={80}>
          <Title order={1} className={classes.logo}>
            MyGardenerMel
          </Title>

          <Group gap="md">
            <Button
              component="a"
              href="https://www.instagram.com/mygardenermel"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="green.9"
              leftSection={<IconBrandInstagram size={20} />}
            >
              Instagram
            </Button>
            <Button
              component="a"
              href="https://www.facebook.com/mygardenermel"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="green.9"
              leftSection={<IconBrandFacebook size={20} />}
            >
              Facebook
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="filled"
              color="green.9"
              leftSection={<IconMail size={20} />}
            >
              Get in Touch
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
