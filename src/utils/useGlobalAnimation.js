import { useEffect } from 'react';
import { globalAnimationObserver } from './globalAnimationObserver';

// React hook to ensure global animations work
export function useGlobalAnimation() {
    useEffect(() => {
        // Initialize global animation observer
        globalAnimationObserver.init();
        
        // Force a refresh of animations after component mounts
        setTimeout(() => {
            const h2Elements = document.querySelectorAll('h2');
            h2Elements.forEach((h2) => {
                if (!h2.classList.contains('animate-blur-3d')) {
                    h2.classList.add('animate-blur-3d');
                }
            });
        }, 100);
        
        return () => {
            // Cleanup if needed
        };
    }, []);
}

// Alternative hook for manual animation control
export function useManualAnimation(ref, animationClass = 'animate-blur-3d') {
    useEffect(() => {
        if (ref.current) {
            // Add animation class
            ref.current.classList.add(animationClass);
            
            // Create observer for this specific element
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, 200);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: '-20px 0px 0px 0px'
                }
            );
            
            observer.observe(ref.current);
            
            return () => {
                observer.disconnect();
            };
        }
    }, [ref, animationClass]);
} 