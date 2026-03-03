
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light rounded-t-6xl pt-24 pb-12 px-8 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Logo & Status */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <h2 className="text-4xl font-bold tracking-tighter">
                            Braddan<span className="text-secondary">BPO</span>
                        </h2>
                        <p className="text-light/70 text-balance">
                            Transformando el rigor financiero en tranquilidad operativa para tu directorio.
                        </p>

                        <div className="flex items-center gap-3 mt-4 bg-light/5 px-4 py-2 rounded-full w-fit border border-light/10">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                            </span>
                            <span className="text-sm font-mono tracking-wide text-light/90">
                                Operación Continua / Compliance Activo
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg mb-2">Servicios</h3>
                            <a href="#" className="text-light/70 hover:text-secondary hover:translate-x-1 transition-all">Gestión Contable</a>
                            <a href="#" className="text-light/70 hover:text-secondary hover:translate-x-1 transition-all">Cumplimiento Tributario</a>
                            <a href="#" className="text-light/70 hover:text-secondary hover:translate-x-1 transition-all">Soporte ERP</a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-lg mb-2">Contacto</h3>
                            <a href="mailto:hola@braddanbpo.cl" className="text-light/70 hover:text-secondary flex items-center gap-2 group transition-colors">
                                <Mail size={16} />
                                <span>hola@braddanbpo.cl</span>
                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </a>
                            <span className="text-light/70 flex items-center gap-2">
                                <Phone size={16} />
                                +56 9 1234 5678
                            </span>
                            <span className="text-light/70 flex items-center gap-2">
                                <MapPin size={16} />
                                Santiago, Chile
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-light/50 font-mono">
                    <p>© {new Date().getFullYear()} Braddan BPO. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-light transition-colors">Normativa CMF</a>
                        <a href="#" className="hover:text-light transition-colors">Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
