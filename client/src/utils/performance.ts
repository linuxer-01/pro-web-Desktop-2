// Performance optimization utilities

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Preload critical assets
export const preloadCriticalAssets = async (): Promise<void> => {
  const criticalImages = [
    '/figmaAssets/logo.png',
    '/figmaAssets/person1.png',
    '/figmaAssets/person2.png',
    '/figmaAssets/person3.png',
    '/figmaAssets/person4.png',
    '/figmaAssets/fivestar.svg',
    '/figmaAssets/gmp.png',
    '/figmaAssets/iso.png',
    '/figmaAssets/fssai.png',
  ];

  try {
    await Promise.all(criticalImages.map(preloadImage));
  } catch (error) {
    console.warn('Failed to preload some critical assets:', error);
  }
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Optimize carousel performance
export const optimizeCarousel = () => {
  // Disable smooth scrolling temporarily for better performance
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  
  return () => {
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
  };
};

// Reduce motion for users who prefer it
export const respectReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize images for different screen sizes
export const getOptimizedImageSize = (baseWidth: number, baseHeight: number) => {
  const devicePixelRatio = window.devicePixelRatio || 1;
  const screenWidth = window.innerWidth;
  
  // Adjust size based on screen width and pixel ratio
  let multiplier = 1;
  if (screenWidth <= 768) multiplier = 0.75; // Mobile
  else if (screenWidth <= 1024) multiplier = 0.9; // Tablet
  
  return {
    width: Math.round(baseWidth * multiplier * devicePixelRatio),
    height: Math.round(baseHeight * multiplier * devicePixelRatio)
  };
};