'use client';

import { useState, useRef, useEffect } from 'react';
import { Container, Title, Text, TextInput, Textarea, Button, Group, Box, Stack, Grid, Alert, LoadingOverlay } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend, IconCheck, IconAlertCircle } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import classes from './Contact.module.css';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  const form = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: zodResolver(contactFormSchema),
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

  useEffect(() => {
    // Auto-clear success message when user starts typing again
    if (submitStatus === 'success') {
      const hasValues = form.values.name || form.values.email || form.values.phone || form.values.message;
      if (hasValues) {
        setSubmitStatus('idle');
      }
    }
  }, [form.values, submitStatus]);

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

      // Scroll to top of form to show success message on mobile
      if (window.innerWidth < 768 && formRef.current) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
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
                aria-describedby={submitStatus === 'error' ? 'form-error' : undefined}
              >
                <Stack gap="md">
                  {isSubmitting && (
                    <div role="status" aria-live="polite" className={classes['sr-only']}>
                      Sending your message, please wait...
                    </div>
                  )}
                  {submitStatus === 'success' && (
                    <Alert
                      icon={<IconCheck size={20} />}
                      color="green"
                      title="Message Sent Successfully!"
                      withCloseButton
                      onClose={() => setSubmitStatus('idle')}
                      role="status"
                      aria-live="polite"
                      className={classes.successAlert}
                      styles={{
                        root: {
                          backgroundColor: '#e8f5e9',
                          border: '2px solid #145233',
                        },
                        title: {
                          color: '#145233',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                        },
                        message: {
                          color: '#2d5a3d',
                        }
                      }}
                    >
                      <Text size="sm">
                        Thank you for reaching out! I'll review your message and get back to you within 24 hours.
                      </Text>
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert
                      id="form-error"
                      icon={<IconAlertCircle size={16} />}
                      color="red"
                      title="Error"
                      role="alert"
                      aria-live="assertive"
                    >
                      {errorMessage}
                    </Alert>
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
