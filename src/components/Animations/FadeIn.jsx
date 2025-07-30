import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 12,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
