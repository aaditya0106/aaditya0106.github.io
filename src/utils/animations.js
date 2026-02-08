// Framer Motion animation variants - Industry Standard
// Centralized animation configurations for consistent motion design

/**
 * Fade animation variants
 * @param {string} direction - Direction of fade: 'up', 'down', 'left', 'right', or null for no direction
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Duration of animation (in seconds)
 * @param {number} distance - Distance to travel in pixels
 */
export const fadeVariants = (direction = null, delay = 0, duration = 0.6, distance = 40) => {
  const axis = ['left', 'right'].includes(direction) ? 'x' : 'y';
  const directionValue = 
    direction === 'up' || direction === 'left' ? -distance :
    direction === 'down' || direction === 'right' ? distance : 0;

  return {
    hidden: {
      opacity: 0,
      ...(direction && { [axis]: directionValue })
    },
    visible: {
      opacity: 1,
      ...(direction && { [axis]: 0 }),
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad
      }
    },
    exit: {
      opacity: 0,
      ...(direction && { [axis]: -directionValue }),
      transition: {
        duration: duration * 0.5,
        ease: [0.55, 0.085, 0.68, 0.53] // easeInQuad
      }
    }
  };
};

/**
 * Slide animation variants
 * @param {string} direction - Direction: 'up', 'down', 'left', 'right'
 * @param {number} delay - Delay before animation starts
 * @param {number} duration - Duration of animation
 * @param {number} distance - Distance to travel
 */
export const slideVariants = (direction = 'left', delay = 0, duration = 0.6, distance = 100) => {
  const axis = ['left', 'right'].includes(direction) ? 'x' : 'y';
  const directionValue = 
    direction === 'up' || direction === 'left' ? -distance :
    distance;

  return {
    hidden: {
      [axis]: directionValue
    },
    visible: {
      [axis]: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay
      }
    },
    exit: {
      [axis]: -directionValue,
      transition: {
        duration: duration * 0.5,
        ease: 'easeInOut'
      }
    }
  };
};

/**
 * Scale animation variants (zoom in/out)
 */
export const scaleVariants = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: duration * 0.5
    }
  }
});

/**
 * Stagger children animation - for lists/grids
 */
export const containerVariants = (staggerDelay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2
    }
  }
});

/**
 * Item variants for staggered animations
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

/**
 * Viewport configuration for scroll-triggered animations
 */
export const defaultViewport = {
  once: true, // Animate only once
  amount: 0.3, // Trigger when 30% visible
  margin: "-50px" // Trigger 50px before entering viewport
};

/**
 * Common spring configuration
 */
export const springConfig = {
  type: 'spring',
  damping: 25,
  stiffness: 120
};
