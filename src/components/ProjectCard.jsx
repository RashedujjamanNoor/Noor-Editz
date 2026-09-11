import { motion } from "framer-motion";
export default function ProjectCard({ p, index, onOpen }) {
  return (
    <motion.button
      onClick={() => onOpen(p)}
      className="group relative block w-full text-left overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
    >
      <div
        className={`relative aspect-[9/16] overflow-hidden bg-gradient-to-br ${p.accent}`}
      >
        <video
          src={p.video}
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_70%_30%,white_0,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/20 bg-black/30 px-5 py-3 text-[10px] tracking-[.28em] text-white/70 backdrop-blur">
            PLAY REEL
          </span>
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] tracking-[.18em] text-white/70 backdrop-blur">
          0{index + 1}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] tracking-[.16em] text-white/60">
          <span>{p.type}</span>
          <span>{p.year}</span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-4 p-5">
        <div>
          <p className="mb-2 text-[10px] tracking-[.22em] text-white/40">
            {p.category}
          </p>
          <h3 className="text-xl font-medium">{p.title}</h3>
        </div>
        <span className="text-xl text-white/35 transition group-hover:translate-x-1 group-hover:text-white">
          ↗
        </span>
      </div>
    </motion.button>
  );
}
