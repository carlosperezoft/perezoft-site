import { useEffect, useRef } from 'react';

export default function useInView(visibleClass, threshold = 0.1) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) ref.current?.classList.add(visibleClass);
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [visibleClass, threshold]);

    return ref;
}
