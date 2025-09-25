"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
};

export default function FadeIn({ children, delay = 0.2 }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} // s’anime quand visible
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
