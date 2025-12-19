'use client'

import { useEffect } from 'react'
import { Container, Title, Text, Button, Stack } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <Container
      size="sm"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack align="center" gap="xl" style={{ width: '100%' }}>
        <IconAlertCircle size={64} color="#e03131" />
        <Title order={1} ta="center">
          Something went wrong!
        </Title>
        <Text size="lg" c="dimmed" ta="center">
          We're sorry, but something unexpected happened. Please try again.
        </Text>
        <Button size="lg" color="green.9" onClick={() => reset()}>
          Try again
        </Button>
      </Stack>
    </Container>
  )
}
