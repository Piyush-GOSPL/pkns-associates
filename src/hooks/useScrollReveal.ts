import { useEffect, useRef, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook that adds a CSS class when the element scrolls into view.
 * Returns a ref to attach to the container element.
 * Children with `data-reveal` attribute will animate with stagger.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe the element itself
    if (el.classList.contains('reveal-on-scroll')) {
      observer.observe(el);
    }

    // Observe all children with data-reveal
    const children = el.querySelectorAll('[data-reveal]');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Hook for staggered children reveal.
 * Apply to parent container, children with `data-reveal-child` will stagger in.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -30px 0px', once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = container.querySelectorAll('[data-reveal-child]');
            children.forEach((child, index) => {
              const el = child as HTMLElement;
              el.style.transitionDelay = `${index * 100}ms`;
              el.classList.add('revealed');
            });
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Simple hook to detect when element enters viewport
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.2, rootMargin = '0px', once = true } = options;
  const ref = useRef<T>(null);
  const hasBeenVisible = useRef(false);

  const setVisible = useCallback(() => {
    if (ref.current) {
      ref.current.setAttribute('data-in-view', 'true');
    }
    hasBeenVisible.current = true;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible();
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            el.removeAttribute('data-in-view');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, setVisible]);

  return ref;
}
