import { useEffect, useState } from 'react';


export class Parallax {

    // useMountAnimation
    static useMountAnimation(delay = 0) {
        const [visible, setVisible] = useState(false);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setVisible(true);
            }, delay);
            return () => clearTimeout(timeout);
        }, [delay]);

        return visible;
    }

    // scroll triger
    static useScrollTrigger(threshold: number, delay = 0) {
        const [triggered, setTriggered] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                const scrollY = window.scrollY;
                if (scrollY > threshold && !triggered) {
                    const timeout = setTimeout(() => {
                        setTriggered(true);
                    }, delay)

                    return () => clearTimeout(timeout);
                } else if (scrollY <= threshold && triggered) {
                    setTriggered(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [threshold, triggered]);

        return triggered;
    }

}
