'use client';

import { useState, useRef, useEffect } from 'react';
import { Container, Title, Text, TextInput, Textarea, Button, Group, Box, Stack, Grid, LoadingOverlay } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { zod4Resolver } from 'mantine-form-zod-resolver';
import { notifications } from '@mantine/notifications';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import classes from './Contact.module.css';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const form = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: zod4Resolver(contactFormSchema),
  });

  useEffect(() => {
    // Check if URL has #contact hash for mobile scroll
    if (window.location.hash === '#contact' && formRef.current) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      notifications.show({
        title: 'Message Sent Successfully!',
        message: "Thank you for reaching out! I'll review your message and get back to you within 24 hours.",
        color: 'green',
        autoClose: 5000,
      });

      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error instanceof Error ? error.message : 'Failed to send message',
        color: 'red',
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Box component="section" className={classes.section} id="contact" aria-labelledby="contact-heading" ref={formRef}>
      <Container size="lg">
        <Grid gutter={{ base: 'md', sm: 'lg', md: 'xl' }}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Box>
                <Title id="contact-heading" order={2} className={classes.title}>
                  Get in Touch
                </Title>
                <Text size="lg" c="dimmed" mt="sm">
                  Ready to transform your garden? Contact me for a free, no-obligation quote.
                </Text>
              </Box>

              <Stack gap="md">
                <Group gap="md" wrap="nowrap" align="flex-start">
                  <IconMapPin size={24} className={classes.icon} />
                  <Box style={{ flex: 1 }}>
                    <Text fw={600} c="green.9">Service Area</Text>
                    <Text size="sm" c="dimmed">
                      Norwich and surrounding areas (20km radius)
                    </Text>
                  </Box>
                </Group>

                <Group gap="md" wrap="nowrap" align="flex-start">
                  <IconPhone size={24} className={classes.icon} />
                  <Box style={{ flex: 1 }}>
                    <Text fw={600} c="green.9">Phone</Text>
                    <Text
                      size="sm"
                      c="dimmed"
                      component="a"
                      href="tel:+447927491042"
                      className={classes.link}
                    >
                      07927 491042
                    </Text>
                  </Box>
                </Group>

                <Group gap="md" wrap="nowrap" align="flex-start">
                  <IconMail size={24} className={classes.icon} />
                  <Box style={{ flex: 1 }}>
                    <Text fw={600} c="green.9">Email</Text>
                    <Text
                      size="sm"
                      c="dimmed"
                      component="a"
                      href="mailto:MyGardenerMel@gmail.com"
                      className={classes.link}
                    >
                      MyGardenerMel@gmail.com
                    </Text>
                  </Box>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className={classes.formContainer} style={{ position: 'relative' }}>
              <LoadingOverlay
                visible={isSubmitting}
                zIndex={1000}
                overlayProps={{
                  radius: 'sm',
                  blur: 2,
                  color: '#fcfbf0',
                  opacity: 0.7
                }}
                loaderProps={{
                  color: 'green.9',
                  size: 'lg',
                  type: 'dots'
                }}
              />
              <form
                onSubmit={form.onSubmit(handleSubmit)}
                aria-busy={isSubmitting}
              >
                <Stack gap="md">
                  {isSubmitting && (
                    <div role="status" aria-live="polite" className={classes['sr-only']}>
                      Sending your message, please wait...
                    </div>
                  )}

                  <TextInput
                    label="Your Name"
                    placeholder="John Smith"
                    required
                    size="lg"
                    styles={{
                      input: { fontSize: '16px', minHeight: '48px' }
                    }}
                    {...form.getInputProps('name')}
                  />

                  <TextInput
                    label="Email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    size="lg"
                    styles={{
                      input: { fontSize: '16px', minHeight: '48px' }
                    }}
                    {...form.getInputProps('email')}
                  />

                  <TextInput
                    label="Phone Number"
                    placeholder="+44 7XXX XXXXXX"
                    type="tel"
                    size="lg"
                    styles={{
                      input: { fontSize: '16px', minHeight: '48px' }
                    }}
                    {...form.getInputProps('phone')}
                  />

                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell me about your garden project..."
                    required
                    minRows={4}
                    size="lg"
                    styles={{
                      input: { fontSize: '16px' }
                    }}
                    {...form.getInputProps('message')}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    leftSection={isSubmitting ? null : <IconSend size={20} />}
                    color="green.9"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className={classes.submitButton}
                  >
                    {isSubmitting ? 'Sending your message...' : 'Send Message'}
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
