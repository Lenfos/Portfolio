"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type AnimatedLinkProps = {
    href: string;
    children: ReactNode;
    delay?: number;
};

export default function AnimatedLink({ children, delay = 0 }: AnimatedLinkProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
        >
            <motion.div
                whileHover={{ scale: 1.05}} // léger zoom + couleur (bleu-500)
                whileTap={{ scale: 0.95 }} // petit "press" au clic
                transition={{ type: "spring", stiffness: 300 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
