import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="bg-light w-full py-32 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">
                <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest font-bold">
                        Modelo Operativo
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-dark text-balance">
                        Asumimos el control contable total para garantizar trazabilidad y continuidad.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                    <FeatureTomaControl />
                    <FeatureEntregables />
                    <FeatureContinuidad />
                    <FeatureAuditoria />
                    <FeatureCumplimiento />
                </div>
            </div>
        </section>
    );
};

// Feature 1: Toma de Control
const FeatureTomaControl = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(boxRef.current,
                { scale: 0.9, opacity: 0.5 },
                { scale: 1, opacity: 1, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold tracking-tight text-primary">Toma de Control</h4>
                <p className="text-dark/70 text-sm leading-relaxed">
                    Asumimos el proceso completo: desde proveer el ERP y configurarlo a medida, hasta la operación diaria y cierres estructurados.
                </p>
            </div>
            <div ref={containerRef} className="h-48 w-full bg-dark/5 rounded-3xl border border-dark/10 flex items-center justify-center p-6 mt-2 relative overflow-hidden">
                <div ref={boxRef} className="w-24 h-24 border-2 border-primary rounded-2xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl animate-pulse"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(109,65,78,0.05)_100%)]"></div>
            </div>
        </div>
    );
};

// Feature 2: Entregables
const FeatureEntregables = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold tracking-tight text-primary">Entregables</h4>
                <p className="text-dark/70 text-sm leading-relaxed">
                    Balance, Estado de Resultados y Flujo de Efectivo listos para ser revisados por el directorio y los auditores externos.
                </p>
            </div>
            <div className="h-48 w-full bg-dark/5 rounded-3xl border border-dark/10 flex flex-col gap-3 p-6 mt-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-8 w-full bg-white rounded-lg border border-dark/5 flex items-center px-4 gap-3 shadow-sm">
                        <Check size={12} className="text-secondary" />
                        <div className={`h-2 rounded-full bg-dark/10 ${i === 1 ? 'w-24' : i === 2 ? 'w-32' : 'w-20'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Feature 3: Continuidad Operativa
const FeatureContinuidad = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold tracking-tight text-primary">Continuidad Operativa</h4>
                <p className="text-dark/70 text-sm leading-relaxed">
                    Funcionamiento ininterrumpido que elimina la dependencia de personas clave. Tu contabilidad no se detiene nunca.
                </p>
            </div>
            <div className="h-48 w-full bg-primary rounded-3xl flex items-center justify-center p-6 mt-2 relative overflow-hidden shadow-xl shadow-primary/20">
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" style={{ animationDelay: `${i * 0.5}s` }}></span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-mono text-light/50 uppercase tracking-widest italic">Always-on engine</span>
                </div>
            </div>
        </div>
    );
};

// Feature 4: Auditoría y Evidencia
const FeatureAuditoria = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold tracking-tight text-primary">Auditoría y Evidencia</h4>
                <p className="text-dark/70 text-sm leading-relaxed">
                    Todo tiene trazabilidad y respaldo documental. Cada registro contable está blindado con su evidencia correspondiente.
                </p>
            </div>
            <div className="h-48 w-full bg-dark rounded-3xl flex items-center p-8 mt-2 overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B7E5B_1px,transparent_1px),linear-gradient(to_bottom,#8B7E5B_1px,transparent_1px)] bg-[size:15px_15px]"></div>
                </div>
                <div className="font-mono text-[10px] text-secondary/80 w-full overflow-hidden whitespace-nowrap opacity-60">
                    {`UUID: ${Math.random().toString(36).substr(2, 9)}...`} <br />
                    {`HASH: sha256-${Math.random().toString(36).substr(2, 12)}`} <br />
                    {`STATUS: DOCUMENTED_AND_VERIFIED`}
                </div>
            </div>
        </div>
    );
};

// Feature 5: Cumplimiento Normativo
const FeatureCumplimiento = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold tracking-tight text-primary">Cumplimiento Normativo</h4>
                <p className="text-dark/70 text-sm leading-relaxed">
                    Anticipación proactiva de riesgos y cumplimiento riguroso ante el SII. Mitigamos tu exposición fiscal antes de que ocurra.
                </p>
            </div>
            <div className="h-48 w-full bg-light border border-primary/20 rounded-3xl flex items-center justify-center p-6 mt-2 shadow-inner">
                <div className="relative">
                    <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center">
                        <Check size={32} className="text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-secondary text-primary text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                        SII Sync
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
