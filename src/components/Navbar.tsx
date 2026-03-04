import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Navbar inner animations on load if we want to add any
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-6xl transition-all duration-500 ease-in-out px-8 py-4 flex justify-between items-center ${isScrolled
                ? 'bg-light/80 backdrop-blur-md border border-light/50 text-primary shadow-lg'
                : 'bg-transparent text-light'
                }`}
        >
            <div className="text-xl font-bold tracking-tighter">
                Braddan<span className={isScrolled ? 'text-secondary' : 'text-secondary/80'}>BPO</span>
            </div>

            <div className="hidden md:flex gap-8 items-center font-medium">
                <a href="#proposito" className="hover:text-secondary transition-colors text-sm uppercase tracking-wider">Propósito</a>
                <a href="#features" className="hover:text-secondary transition-colors text-sm uppercase tracking-wider">Trazabilidad</a>
                <a href="#archivo" className="hover:text-secondary transition-colors text-sm uppercase tracking-wider">Nosotros</a>
            </div>

            <button className={`hidden md:block px-6 py-2 rounded-6xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${isScrolled
                ? 'bg-primary text-light hover:bg-primary/90'
                : 'bg-light text-primary hover:bg-white/90'
                }`}>
                Agenda Consultoría
            </button>
        </nav>
    );
};

export default Navbar;
