'use client';

import { useState, useRef, useEffect } from 'react';
import { Box } from '@mantine/core';
import classes from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt = 'Before and after comparison' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    // Clamp between 0 and 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <Box
      ref={containerRef}
      className={classes.container}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (bottom layer) */}
      <Box className={classes.imageWrapper}>
        <img
          src={afterImage}
          alt={`${alt} - after`}
          className={classes.image}
        />
        <Box className={classes.label} style={{ right: '1rem' }}>
          After
        </Box>
      </Box>

      {/* Before Image (top layer with clip) */}
      <Box
        className={classes.beforeImageWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - before`}
          className={classes.image}
        />
        <Box className={classes.label} style={{ left: '1rem' }}>
          Before
        </Box>
      </Box>

      {/* Slider Handle */}
      <Box
        className={classes.slider}
        style={{ left: `${sliderPosition}%` }}
      >
        <Box className={classes.sliderLine} />
        <Box className={classes.sliderHandle}>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8l-6 8 6 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 8l6 8-6 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>
        <Box className={classes.sliderLine} />
      </Box>
    </Box>
  );
}
