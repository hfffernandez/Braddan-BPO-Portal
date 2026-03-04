import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="bg-light w-full py-32 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest font-bold">
                        El Sistema
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-dark text-balance">
                        Instrumentos de precisión para el directorio.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    <FeatureBalance />
                    <FeatureTelemetry />
                    <FeatureProtocol />
                </div>
            </div>
        </section>
    );
};

// Feature 1: Cierre Contable Estructurado (Alternating Cards)
const FeatureBalance = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a seamless infinite loop of cards flying up
            const tl = gsap.timeline({ repeat: -1 });

            cardsRef.current.forEach((card, index) => {
                // Initial setup for cards
                gsap.set(card, {
                    y: index === 0 ? 0 : 40,
                    scale: index === 0 ? 1 : 0.95,
                    opacity: index === 0 ? 1 : 0,
                    zIndex: 3 - index
                });

                // Animation sequence for each card moving to the front
                tl.to(card, {
                    y: -20,
                    opacity: 0,
                    scale: 1.05,
                    duration: 1,
                    ease: "power2.in",
                    delay: 2 // Wait 2s before flying off
                })
                    // As it flies off, bring the next one up
                    .to(cardsRef.current[(index + 1) % 3], {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.8,
                        ease: "back.out(1.5)"
                    }, "<0.2") // Start slightly after current card starts flying off
                    // Reset the current card to the bottom of the stack
                    .set(card, {
                        y: 60,
                        scale: 0.9,
                        zIndex: -1
                    });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const labels = [
        "Balance mensual",
        "Trazabilidad total",
        "Cero dependencia manual"
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold tracking-tight">Especialización.</h4>
                <p className="text-dark/70 text-balance leading-relaxed">
                    Empresa especializada en la externalización total del proceso contable para el segmento mediano en Chile.
                </p>
            </div>

            <div ref={containerRef} className="relative h-64 w-full bg-light/50 rounded-4xl border border-dark/10 flex items-center justify-center p-8 overflow-hidden shadow-inner">
                {labels.map((label, i) => (
                    <div
                        key={i}
                        ref={el => { cardsRef.current[i] = el; }}
                        className="absolute w-64 bg-white p-6 rounded-3xl shadow-xl shadow-dark/5 border border-dark/5 flex items-center justify-center"
                    >
                        <span className="font-mono font-bold text-sm text-primary tracking-wide">
                            {label}
                        </span>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-3xl opacity-20"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Feature 2: Telemetría en vivo (Typing Text)
const FeatureTelemetry = () => {
    const [text, setText] = useState("");
    const messages = [
        "Consolidando transacciones...",
        "Generando Estado de Resultados...",
        "Anticipando riesgos regulatorios..."
    ];

    useEffect(() => {
        let currentMsgIdx = 0;
        let currentCharIdx = 0;
        let isDeleting = false;
        let typingSpeed = 50;

        const timeout = setTimeout(function type() {
            const currentMsg = messages[currentMsgIdx];

            if (isDeleting) {
                setText(currentMsg.substring(0, currentCharIdx - 1));
                currentCharIdx--;
                typingSpeed = 30; // Faster delete
            } else {
                setText(currentMsg.substring(0, currentCharIdx + 1));
                currentCharIdx++;
                typingSpeed = 80; // Normal type
                // Add random variation to typing
                typingSpeed += Math.random() * 40 - 20;
            }

            if (!isDeleting && currentCharIdx === currentMsg.length) {
                // Pause at end
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentCharIdx === 0) {
                isDeleting = false;
                currentMsgIdx = (currentMsgIdx + 1) % messages.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold tracking-tight">Operación Integral.</h4>
                <p className="text-dark/70 text-balance leading-relaxed">
                    Proveemos el ERP, lo configuramos a la medida y operamos tanto la contabilidad diaria como el cierre mensual.
                </p>
            </div>

            <div className="relative h-64 w-full bg-dark rounded-4xl flex items-center p-8 shadow-2xl overflow-hidden border border-white/5">
                {/* Radar Grid Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B7E5B_1px,transparent_1px),linear-gradient(to_bottom,#8B7E5B_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                </div>

                {/* Horizontal Scan line */}
                <div className="absolute w-full h-[1px] bg-secondary/30 top-0 left-0 animate-scan"></div>

                {/* Pulsing indicator */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    <span className="text-[10px] font-mono text-secondary/70 uppercase tracking-widest">In Live Link</span>
                </div>

                <div className="font-mono text-sm md:text-base text-light/90 w-full mt-4 relative z-10">
                    <span className="text-secondary/50 mr-2">{'>'}</span>
                    {text}
                    <span className="ml-[2px] inline-block w-2 bg-secondary animate-pulse h-4 align-middle"></span>
                </div>
            </div>
        </div>
    );
};


// Feature 3: Agenda / Protocolo (Auto Cursor)
const FeatureProtocol = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const dayRef = useRef<HTMLDivElement>(null);
    const reportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Reset
            tl.set(cursorRef.current, { x: 200, y: 200, opacity: 0, scale: 1 })
                .set(dayRef.current, { backgroundColor: 'transparent', color: '#1D1D1D' })

                // Enter
                .to(cursorRef.current, { opacity: 1, duration: 0.5 })

                // Move to Day 5
                .to(cursorRef.current, {
                    x: () => {
                        if (!dayRef.current) return 0;
                        return dayRef.current.offsetLeft + dayRef.current.offsetWidth / 2 - 12;
                    },
                    y: () => {
                        if (!dayRef.current) return 0;
                        return dayRef.current.offsetTop + dayRef.current.offsetHeight / 2 - 12;
                    },
                    duration: 1.2,
                    ease: "power2.inOut"
                })

                // Click Day 5
                .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
                .set(dayRef.current, { backgroundColor: '#6D414E', color: '#FFFFFF' })
                .to(cursorRef.current, { scale: 1, duration: 0.1 })

                // Move to Report Event
                .to(cursorRef.current, {
                    x: () => {
                        if (!reportRef.current) return 0;
                        return reportRef.current.offsetLeft + 20;
                    },
                    y: () => {
                        if (!reportRef.current) return 0;
                        return reportRef.current.offsetTop + 10;
                    },
                    duration: 1,
                    ease: "power2.inOut",
                    delay: 0.3
                })

                // Hover event slightly
                .to(reportRef.current, { x: 5, backgroundColor: 'rgba(139, 126, 91, 0.1)', duration: 0.3 })

                // Exit
                .to(cursorRef.current, { opacity: 0, duration: 0.5, delay: 0.5 })
                .to(reportRef.current, { x: 0, backgroundColor: 'transparent', duration: 0.3 }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    const dates = Array.from({ length: 14 }, (_, i) => i + 1);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-bold tracking-tight">Rigor Técnico.</h4>
                <p className="text-dark/70 text-balance leading-relaxed">
                    Operamos bajo exigentes estándares de corporación internacional, garantizando rigor técnico y cumplimiento normativo absoluto.
                </p>
            </div>

            <div ref={containerRef} className="relative h-64 w-full border border-dark/10 bg-white rounded-4xl p-6 overflow-hidden flex flex-col justify-between shadow-sm">

                {/* Calendar Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {days.map(d => (
                            <div key={d} className="text-center text-[10px] font-bold text-dark/40">{d}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {dates.map(date => (
                            <div
                                key={date}
                                ref={date === 5 ? dayRef : null}
                                className="aspect-square flex items-center justify-center text-xs font-mono font-bold rounded-lg transition-colors"
                            >
                                {date}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Event item */}
                <div ref={reportRef} className="w-full rounded-xl border border-dark/5 p-3 flex items-center gap-3 mt-4">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-xs font-bold text-dark">Entregar Reporte Directorio</span>
                </div>

                {/* Fake Cursor (Lucide Icon absolute positioned) */}
                <div
                    ref={cursorRef}
                    className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-md text-dark"
                >
                    <MousePointer2 size={24} fill="#1D1D1D" />
                </div>
            </div>
        </div>
    );
};

export default Features;
