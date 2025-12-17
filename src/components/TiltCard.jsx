import {useRef} from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 40, damping: 15 }
    }
};

export default function TiltCard({ item, onClick }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);


    const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "200%"]);
    const shineOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.4]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={cardVariants}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative break-inside-avoid cursor-pointer group perspective-1000"
        >
            <motion.div
                className="relative overflow-hidden rounded-xl bg-[var(--bg-card)] border border-[var(--glass-border)] group-hover:border-[var(--accent-cyan)] transition-colors duration-500 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
            >

                <div className="relative overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />


                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 group-hover:animate-scan shadow-[0_0_10px_var(--accent-cyan)] pointer-events-none" />
                </div>


                <motion.div
                    className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-tr from-transparent via-white to-transparent"
                    style={{
                        opacity: shineOpacity,
                        x: shineX,
                        rotate: "45deg",
                        width: "200%",
                    }}
                />


                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[var(--accent-cyan)] font-mono text-[10px] tracking-widest uppercase mb-1">
                            {item.tag} // ID: {item.id.toString().padStart(4, '0')}
                        </p>
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {item.title}
                        </h3>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}