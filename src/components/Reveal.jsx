import { motion } from "motion/react";

const spring = { type: "spring", stiffness: 55, damping: 14 };

const variants = {
  up:    { hidden: { opacity: 0, y: 28 },       visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -28 },      visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  style,
  margin = "-64px 0px -8% 0px",
  amount = 0.12,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin, amount }}
      variants={variants[direction]}
      transition={{ ...spring, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
