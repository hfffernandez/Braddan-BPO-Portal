import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manifiesto = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLParagraphElement>(null);
    const text2Ref = useRef<HTMLParagraphElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Split text reveal effect (Simulated with simple opacity/y transform for now, 
            // can be enhanced with SplitText plugin if available, but doing it with CSS/GSAP standard here)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%", // Start when top of section hits 60% of viewport
                    end: "top 20%",
                    scrub: 1, // Smooth scrubbing
                }
            });

            tl.fromTo(text1Ref.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            )
                .fromTo(text2Ref.current,
                    { opacity: 0, y: 50, color: '#1D1D1D' },
                    { opacity: 1, y: 0, color: '#FFFFFF', duration: 1 },
                    "+=0.2"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[100dvh] bg-dark flex items-center justify-center overflow-hidden px-8"
        >
            {/* Background Image Parallax layer */}
            <div
                ref={bgRef}
                className="absolute top-[-20%] left-0 w-full h-[140%] bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1974&auto=format&fit=crop")',
                }}
            />

            {/* Texture overlay matching global noise but slightly stronger for dark mode */}
            <div className="absolute inset-0 bg-dark/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 text-center md:text-left">
                <p
                    ref={text1Ref}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-light/40 text-balance leading-snug"
                >
                    Lo normal es preguntar: <br />¿qué falló en el cierre contable?
                </p>

                <p
                    ref={text2Ref}
                    className="text-4xl md:text-7xl font-bold tracking-tighter text-light text-balance leading-none"
                >
                    Nosotros preguntamos: <br />
                    <span className="text-primary italic">¿cómo eliminamos tu riesgo regulatorio?</span>
                </p>
            </div>
        </section>
    );
};

export default Manifiesto;
