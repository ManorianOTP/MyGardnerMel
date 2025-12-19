'use client';

import { useState } from 'react';
import { Container, Title, Text, TextInput, Textarea, Button, Group, Box, Stack, Grid, Alert } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend, IconCheck, IconAlertCircle } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import classes from './Contact.module.css';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: zodResolver(contactFormSchema),
  });

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

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

      setSubmitStatus('success');
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Box component="section" className={classes.section} id="contact" aria-labelledby="contact-heading">
      <Container size="lg">
        <Grid gutter="xl">
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
                <Group gap="md">
                  <IconMapPin size={24} className={classes.icon} />
                  <Box>
                    <Text fw={600}>Service Area</Text>
                    <Text size="sm" c="dimmed">
                      Norwich and surrounding areas (20km radius)
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
                      href="tel:+447927491042"
                      className={classes.link}
                    >
                      07927 491042
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
                      href="mailto:MYGARDENERMEL@GMAIL.COM"
                      className={classes.link}
                    >
                      MYGARDENERMEL@GMAIL.COM
                    </Text>
                  </Box>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className={classes.formContainer}>
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  {submitStatus === 'success' && (
                    <Alert icon={<IconCheck size={16} />} color="green" title="Success!" role="status" aria-live="polite">
                      Your message has been sent successfully. I'll get back to you soon!
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert icon={<IconAlertCircle size={16} />} color="red" title="Error" role="alert">
                      {errorMessage}
                    </Alert>
                  )}

                  <TextInput
                    label="Your Name"
                    placeholder="John Smith"
                    required
                    size="md"
                    {...form.getInputProps('name')}
                  />

                  <TextInput
                    label="Email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    size="md"
                    {...form.getInputProps('email')}
                  />

                  <TextInput
                    label="Phone Number"
                    placeholder="+44 7XXX XXXXXX"
                    type="tel"
                    size="md"
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
                    size="md"
                    {...form.getInputProps('message')}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    leftSection={<IconSend size={20} />}
                    color="green.9"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
