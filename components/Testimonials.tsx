'use client'

import {
  Container,
  Title,
  Text,
  Card,
  Avatar,
  Stack,
  Box,
  Rating
} from '@mantine/core'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel'
import { IconQuote } from '@tabler/icons-react'
import classes from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Rose',
    rating: 5,
    text: 'Myron transformed our overgrown garden into a beautiful space we can actually enjoy. His attention to detail and professionalism are outstanding. Highly recommend!',
    avatar: 'R'
  },
  {
    name: 'Andrew',
    rating: 5,
    text: 'Reliable, punctual, and does an excellent job every time. Our lawn has never looked better. Great value for money and a pleasure to work with.',
    avatar: 'A'
  },
  {
    name: 'Wayne',
    rating: 5,
    text: 'Myron is reliable, professional and took great care with general garden maintenance. Everything from mowing and pruning to tidying up borders. The garden looked fresh and well-kept. Highly recommend for regular upkeep, thank you 😃',
    avatar: 'W'
  }
]

export function Testimonials () {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  return (
    <Box
      component='section'
      className={classes.section}
      aria-labelledby='testimonials-heading'
    >
      <Container size='lg'>
        <Stack gap='xl'>
          <Box className={classes.header}>
            <Title
              id='testimonials-heading'
              order={2}
              className={classes.title}
            >
              What My Customers Say
            </Title>
            <Text size='lg' c='dimmed' className={classes.subtitle}>
              Don't just take my word for it
            </Text>
          </Box>

          <Carousel
            slideSize='80%'
            className={classes.carousel}
            slideGap='sm'
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            emblaOptions={{
              loop: true,
              dragFree: false,
              align: 'center'
            }}
          >
            {testimonials.map(testimonial => (
              <Carousel.Slide key={testimonial.name}>
                <Card
                  shadow='md'
                  padding='xl'
                  radius='md'
                  className={classes.card}
                  component='article'
                  role='article'
                  aria-label={`Testimonial from ${testimonial.name}`}
                  style={{ height: '100%' }}
                >
                  <Stack gap='md'>
                    <IconQuote
                      size={40}
                      className={classes.quoteIcon}
                      aria-hidden='true'
                    />

                    <Text size='md' className={classes.text}>
                      "{testimonial.text}"
                    </Text>

                    <Box>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        color='gold.6'
                      />
                    </Box>

                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}
                    >
                      <Avatar color='gold.6' radius='xl' size='lg'>
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Text fw={600} size='sm' c='gold.6'>
                          {testimonial.name}
                        </Text>
                        <Text size='xs' c='dimmed'>
                          Verified Customer
                        </Text>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Stack>
      </Container>
    </Box>
  )
}
