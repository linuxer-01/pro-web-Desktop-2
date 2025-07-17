import React, { Suspense } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface LazySectionProps {
  children: React.ReactNode
  fallback: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = '100px',
  className = ''
}) => {
  const { targetRef, hasBeenIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  return (
    <div ref={targetRef} className={className}>
      {hasBeenIntersecting ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  )
}