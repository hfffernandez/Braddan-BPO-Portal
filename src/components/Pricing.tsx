import { useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';

const Pricing = () => {
    return (
        <section id="pricing" className="bg-light w-full py-32 px-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-sm font-mono text-primary uppercase tracking-widest font-bold">
                        Compromiso
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-dark text-balance max-w-2xl">
                        Soluciones estructuradas para distintas etapas de escala.
                    </h3>
                    <p className="text-lg text-dark/60 mt-4 max-w-xl">
                        No cobramos por hora. Cobramos por la certidumbre de que tu empresa opera bajo control total y normado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">

                    {/* Plan 1 */}
                    <PricingCard
                        title="Gestión Contable"
                        description="La base sólida que todo negocio necesita para operar."
                        features={[
                            "Conciliación bancaria diaria",
                            "Emisión de libro diario y mayor",
                            "Cálculo y pago de imposiciones",
                            "Preparación de F29 mensual",
                            "Soporte por correo en 24h"
                        ]}
                    />

                    {/* Plan 2: Destacado */}
                    <PricingCard
                        title="Cumplimiento Tributario"
                        description="Para empresas que no pueden permitirse un solo error frente al SII."
                        isPopular
                        features={[
                            "Todo lo de Gestión Contable",
                            "Planeación tributaria anual",
                            "Declaraciones Juradas (DDJJ)",
                            "Auditoría preventiva semestral",
                            "Representación ante el SII",
                            "Reporte ejecutivo a directorio"
                        ]}
                    />

                    {/* Plan 3 */}
                    <PricingCard
                        title="Soporte ERP BPO"
                        description="Nuestro ecosistema completo. Tu departamento financiero externalizado."
                        features={[
                            "Todo lo de Cumplimiento",
                            "Acceso full a plataforma Braddan",
                            "Telemetría en tiempo real",
                            "Flujo de caja proyectado",
                            "Integraciones API con bancos",
                            "Consultoría financiera mensual"
                        ]}
                    />

                </div>
            </div>
        </section>
    );
};

const PricingCard = ({
    title,
    description,
    features,
    isPopular = false
}: {
    title: string,
    description: string,
    features: string[],
    isPopular?: boolean
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => {
        gsap.to(cardRef.current, {
            y: -12,
            scale: isPopular ? 1.07 : 1.02,
            duration: 0.6,
            ease: "elastic.out(1, 0.75)"
        });
    };

    const onMouseLeave = () => {
        gsap.to(cardRef.current, {
            y: 0,
            scale: isPopular ? 1.05 : 1,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-shadow duration-300 ${isPopular
                ? 'bg-primary text-light border-primary shadow-2xl z-10 scale-105'
                : 'bg-white text-dark border-dark/10 shadow-lg'
                }`}>

            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary font-bold text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                    Recomendado
                </div>
            )}

            <div className="flex flex-col gap-2 mb-8">
                <h4 className={`text-2xl font-bold tracking-tight ${isPopular ? 'text-light' : 'text-primary'}`}>
                    {title}
                </h4>
                <p className={`text-sm md:text-base ${isPopular ? 'text-light/80' : 'text-dark/60'}`}>
                    {description}
                </p>
            </div>

            <div className="flex-1">
                <ul className="flex flex-col gap-4">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <div className={`mt-1 rounded-full p-[2px] ${isPopular ? 'bg-secondary/20 text-secondary' : 'bg-primary/10 text-primary'}`}>
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <span className={`text-sm md:text-base font-medium ${isPopular ? 'text-light/90' : 'text-dark/80'}`}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className={`mt-10 w-full py-4 rounded-full font-bold transition-all duration-300 active:scale-[0.98] overflow-hidden relative group ${isPopular
                ? 'bg-secondary text-primary shadow-lg shadow-secondary/20'
                : 'bg-dark text-light hover:bg-primary'
                }`}>
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block font-mono text-xs uppercase tracking-widest">Agendar evaluación</span>

                {/* Shine effect for popular button */}
                {isPopular && (
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-40 group-hover:animate-shine"></div>
                )}

                {/* Hover slide effect */}
                <div className="absolute inset-0 h-full w-full bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>

        </div>
    );
};

export default Pricing;
