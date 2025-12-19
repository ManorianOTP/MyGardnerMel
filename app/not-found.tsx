import { Container, Title, Text, Button, Stack, Anchor } from '@mantine/core'
import { IconError404 } from '@tabler/icons-react'
import Link from 'next/link'

export default function NotFound() {
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
        <IconError404 size={64} style={{ color: '#145233' }} />
        <Title order={1} ta="center">
          Page Not Found
        </Title>
        <Text size="lg" c="dimmed" ta="center">
          Sorry, we couldn't find the page you're looking for.
        </Text>
        <Button component="a" href="/" size="lg" color="green.9">
          Go back home
        </Button>
      </Stack>
    </Container>
  )
}
