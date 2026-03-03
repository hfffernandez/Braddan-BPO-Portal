import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scan, Activity, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Archivo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the container so cards stack on top of each other
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: `+=${window.innerHeight * 3}`, // 3 cards
                pin: true,
            });

            // Animate cards as user scrolls
            cardsRef.current.forEach((card, index) => {
                if (index === cardsRef.current.length - 1) return; // Don't animate the last card out

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: 'blur(20px)',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `top+=${index * window.innerHeight} top`,
                        end: `top+=${(index + 1) * window.innerHeight} top`,
                        scrub: true,
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="archivo" ref={containerRef} className="relative w-full h-[100dvh] bg-dark overflow-hidden">

            {/* Card 1: Doble hélice (Procesamiento continuo) */}
            <Card
                ref={el => { cardsRef.current[0] = el; }}
                zIndex={10}
                bgColor="bg-light"
                textColor="text-dark"
                title="Procesamiento continuo"
                subtitle="Doble Hélice"
                description="Nuestro motor contable funciona como un engranaje perfecto. Ingerimos tus datos transaccionales diariamente para que el cierre fiscal sea un mero trámite, no un proyecto de fin de mes."
                visual={<DoubleHelix />}
            />

            {/* Card 2: Rejilla láser (Compliance) */}
            <Card
                ref={el => { cardsRef.current[1] = el; }}
                zIndex={20}
                bgColor="bg-[#F8F9FA]" // Slightly different white/gray
                textColor="text-dark"
                title="Auditoría preventiva"
                subtitle="Rejilla de Compliance"
                description="Escaneamos cada registro contra la normativa vigente de la CMF y el SII. Detectamos anomalías antes de que se conviertan en contingencias fiscales."
                visual={<LaserGrid />}
            />

            {/* Card 3: Línea EKG (Salud Financiera) */}
            <Card
                ref={el => { cardsRef.current[2] = el; }}
                zIndex={30}
                bgColor="bg-primary"
                textColor="text-light"
                title="Salud operativa en tiempo real"
                subtitle="Telemetría EKG"
                description="No leas el pasado. Visualiza el pulso actual de tu operación y anticípate a los quiebres de flujo. Somos el monitor vital de tu empresa."
                visual={<PulseLine />}
            />

        </section>
    );
};

// Reusable Card Component
const Card = React.forwardRef<HTMLDivElement, {
    zIndex: number;
    bgColor: string;
    textColor: string;
    title: string;
    subtitle: string;
    description: string;
    visual: React.ReactNode;
}>(({ zIndex, bgColor, textColor, title, subtitle, description, visual }, ref) => {
    return (
        <div
            ref={ref}
            style={{ zIndex }}
            className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-24 origin-top ${bgColor} ${textColor} rounded-none md:rounded-b-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
        >
            <div className="flex-1 flex flex-col justify-center max-w-2xl gap-8 pr-0 md:pr-12">
                <div className="flex flex-col gap-2">
                    <span className={`font-mono text-sm tracking-widest uppercase font-bold ${textColor === 'text-light' ? 'text-secondary/80' : 'text-primary'}`}>
                        {subtitle}
                    </span>
                    <h2 className={`text-5xl md:text-7xl font-bold tracking-tighter text-balance`}>
                        {title}
                    </h2>
                </div>
                <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-xl ${textColor === 'text-light' ? 'text-light/80' : 'text-dark/70'}`}>
                    {description}
                </p>
            </div>

            <div className="flex-1 flex justify-center items-center w-full mt-12 md:mt-0">
                <div className="relative w-full aspect-square max-w-md bg-dark/5 rounded-[3rem] border border-current/10 flex items-center justify-center overflow-hidden">
                    {visual}
                </div>
            </div>
        </div>
    );
});

// Animations
const DoubleHelix = () => {
    const iconRef = useRef(null);
    useEffect(() => {
        gsap.to(iconRef.current, { rotation: 360, duration: 8, repeat: -1, ease: "linear" });
    }, []);
    return <RefreshCw ref={iconRef} size={120} strokeWidth={1} className="text-primary opacity-50" />;
};

const LaserGrid = () => {
    const laserRef = useRef(null);
    useEffect(() => {
        gsap.to(laserRef.current, { y: 200, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
    }, []);
    return (
        <div className="relative w-64 h-64 border border-dark/20 grid grid-cols-4 grid-rows-4 opacity-50">
            {Array.from({ length: 16 }).map((_, i) => <div key={i} className="border border-dark/10" />)}
            <div ref={laserRef} className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#6D414E] z-10" />
            <Scan size={48} strokeWidth={1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
        </div>
    );
};

const PulseLine = () => {
    const pulseRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(pulseRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 1.5, repeat: -1, ease: "power2.out", transformOrigin: "left center" }
        );
    }, []);
    return (
        <div className="relative w-64 flex items-center opacity-80">
            <Activity size={120} strokeWidth={1} className="text-light" />
            <div ref={pulseRef} className="absolute top-1/2 left-1/2 w-full h-[1px] bg-secondary" />
        </div>
    );
};

export default Archivo;
