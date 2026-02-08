import React from 'react';
import { motion } from 'framer-motion';
import { fadeVariants, slideVariants, scaleVariants, defaultViewport } from '../../utils/animations';

/**
 * FadeIn Component - Industry standard fade animation
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} props.direction - 'up', 'down', 'left', 'right', or null
 * @param {number} props.delay - Delay in seconds
 * @param {number} props.duration - Duration in seconds
 * @param {number} props.distance - Distance in pixels
 * @param {boolean} props.viewport - Enable viewport/scroll trigger
 * @param {Object} props.viewportOptions - Custom viewport options
 */
export const FadeIn = ({
  children,
  direction = null,
  delay = 0,
  duration = 0.6,
  distance = 40,
  viewport = true,
  viewportOptions = defaultViewport,
  className = '',
  ...props
}) => {
  const variants = fadeVariants(direction, delay, duration, distance);

  return (
    <motion.div
      initial="hidden"
      animate={!viewport ? "visible" : undefined}
      whileInView={viewport ? "visible" : undefined}
      exit="exit"
      viewport={viewport ? viewportOptions : undefined}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * SlideIn Component - Slide animation with spring physics
 */
export const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  distance = 100,
  viewport = true,
  viewportOptions = defaultViewport,
  className = '',
  ...props
}) => {
  const variants = slideVariants(direction, delay, duration, distance);

  return (
    <motion.div
      initial="hidden"
      animate={!viewport ? "visible" : undefined}
      whileInView={viewport ? "visible" : undefined}
      exit="exit"
      viewport={viewport ? viewportOptions : undefined}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScaleIn Component - Scale/zoom animation
 */
export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  viewport = true,
  viewportOptions = defaultViewport,
  className = '',
  ...props
}) => {
  const variants = scaleVariants(delay, duration);

  return (
    <motion.div
      initial="hidden"
      animate={!viewport ? "visible" : undefined}
      whileInView={viewport ? "visible" : undefined}
      exit="exit"
      viewport={viewport ? viewportOptions : undefined}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Backwards compatible Fade component (matches react-reveal API)
 * Maps old props to new FadeIn component
 */
export const Fade = ({
  children,
  bottom,
  top,
  left,
  right,
  duration = 1000, // react-reveal used milliseconds
  distance = "40px",
  delay = 0,
  ...props
}) => {
  // Convert direction from boolean flags to string
  const direction = 
    bottom ? 'up' :
    top ? 'down' :
    left ? 'right' :
    right ? 'left' : null;

  // Convert milliseconds to seconds and pixels
  const durationSec = duration / 1000;
  const distancePx = parseInt(distance) || 40;
  const delaySec = delay / 1000;

  return (
    <FadeIn
      direction={direction}
      duration={durationSec}
      distance={distancePx}
      delay={delaySec}
      {...props}
    >
      {children}
    </FadeIn>
  );
};

/**
 * Backwards compatible Slide component
 */
export const Slide = ({
  children,
  bottom,
  top,
  left,
  right,
  duration = 2000,
  distance = "40px",
  delay = 0,
  ...props
}) => {
  const direction = 
    bottom ? 'up' :
    top ? 'down' :
    left ? 'right' :
    right ? 'left' : 'left';

  const durationSec = duration / 1000;
  const distancePx = parseInt(distance) || 100;
  const delaySec = delay / 1000;

  return (
    <SlideIn
      direction={direction}
      duration={durationSec}
      distance={distancePx}
      delay={delaySec}
      {...props}
    >
      {children}
    </SlideIn>
  );
};
