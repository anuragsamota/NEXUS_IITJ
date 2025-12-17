import {useRef} from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Lightbox({ item, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={onClose}
        >
            <motion.div
                layoutId={`card-${item.id}`}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-6xl max-h-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-[var(--bg-darker)] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
            >
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    aria-label="Close"
                    className="
                        absolute top-4 right-4 z-50
                        p-2 rounded-full
                        bg-black/60 backdrop-blur
                        hover:bg-white/10
                        transition-colors
                    "
                >
                    <svg
                        className="w-7 h-7 text-white/70 hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="md:col-span-2 relative bg-black flex items-center justify-center p-4">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                    />
                    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/30">
                        RES: HD // {item.source}
                    </div>
                </div>


                <div className="md:col-span-1 p-8 md:p-10 flex flex-col bg-[var(--bg-card)] border-t md:border-t-0 md:border-l border-[var(--border-subtle)] relative overflow-hidden">

                    <div className="absolute top-0 right-0 p-32 bg-[var(--accent-cyan)] opacity-5 blur-[100px] pointer-events-none" />

                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                            <span className="font-mono text-[10px] text-[var(--accent-cyan)] tracking-widest uppercase">
                                System Data
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2 leading-none">{item.title}</h2>
                        <div className="w-12 h-1 bg-[var(--accent-cyan)] mt-4 mb-6 rounded-full opacity-50" />

                        <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </div>

                    <div className="mt-auto space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[var(--text-gray)]">
                            <div className="p-3 rounded border border-[var(--border-subtle)] bg-white/5">
                                <div className="uppercase opacity-50 mb-1">Source</div>
                                <div className="text-white">{item.source}</div>
                            </div>
                            <div className="p-3 rounded border border-[var(--border-subtle)] bg-white/5">
                                <div className="uppercase opacity-50 mb-1">Category</div>
                                <div className="text-[var(--accent-cyan)]">{item.tag}</div>
                            </div>
                        </div>

                        <a
                            href={item.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full py-4 bg-white text-black font-bold text-center uppercase tracking-widest text-xs hover:bg-[var(--accent-cyan)] transition-colors duration-300"
                        >
                            Download High-Res
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}