'use client';

import { Container, Group, Button, Box, Title } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconMail } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './Header.module.css';

export function Header() {
  return (
    <Box component="header" className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" h={{ base: 60, sm: 80 }}>
          <Group gap="sm">
            <Image
              src="/images/myrons_logo-modified.png"
              alt="MyGardenerMel Logo"
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
              className={classes.logoImage}
            />
            <Title order={1} className={classes.logo}>
              MyGardenerMel
            </Title>
          </Group>

          <Group gap="xs" className={classes.buttonGroup}>
            <Button
              component="a"
              href="https://www.instagram.com/my.gardener.mel/"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              c="white"
              leftSection={<IconBrandInstagram size={20} />}
              px="sm"
              aria-label="Instagram"
              className={classes.headerButton}
            >
              <span className={classes.buttonText}>Instagram</span>
            </Button>
            <Button
              component="a"
              href="https://www.facebook.com/profile.php?id=61577685542601"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              c="white"
              leftSection={<IconBrandFacebook size={20} />}
              px="sm"
              aria-label="Facebook"
              className={classes.headerButton}
            >
              <span className={classes.buttonText}>Facebook</span>
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="white"
              leftSection={<IconMail size={20} />}
              px="sm"
              aria-label="Get in Touch"
              className={classes.headerButton}
            >
              <span className={classes.buttonText}>Get in Touch</span>
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
