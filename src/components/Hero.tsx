import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLHeadingElement>(null);
    const line2Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.5 }
            )
                .fromTo(
                    line1Ref.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.5'
                )
                .fromTo(
                    line2Ref.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100dvh] bg-dark flex items-end pb-24 px-8 overflow-hidden opacity-0"
        >
            {/* Background Image with Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")',
                }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-primary/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-dark/90 via-dark/50 to-transparent" />

            {/* Content */}
            <div ref={textRef} className="relative z-20 max-w-7xl w-full mx-auto flex flex-col gap-2">
                <h1 ref={line1Ref} className="text-light text-5xl md:text-7xl font-bold tracking-tight opacity-0 translate-y-12">
                    El rigor es el
                </h1>
                <h2 ref={line2Ref} className="text-light text-7xl md:text-[8rem] leading-none font-bold tracking-tighter opacity-0 translate-y-12">
                    Estándar.
                </h2>
            </div>
        </section>
    );
};

export default Hero;
