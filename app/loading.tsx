import { Container, Loader, Stack, Text } from '@mantine/core'

export default function Loading() {
  return (
    <Container
      size="lg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align="center" gap="md">
        <Loader size="lg" color="green.9" />
        <Text size="lg" c="dimmed">
          Loading MyGardenerMel...
        </Text>
      </Stack>
    </Container>
  )
}
