import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./components/Reveal";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

const services = [
  "Short-form editing",
  "YouTube editing",
  "Video ads & promos",
  "Motion graphics",
  "Color & sound design",
  "Content repurposing",
];

function App() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const filters = [
    { label: "All", value: "all" },
    { label: "Short Form", value: "short-form" },
    // { label: "YouTube", value: "youtube" },
    // { label: "Ad Creative", value: "ad-creative" },
    { label: "Commercial", value: "commercial" },
  ];

  const shown =
    filter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category
              ?.toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/_/g, "-") === filter,
        );
  return (
    <div className="noise min-h-screen overflow-x-hidden bg-[#080808]">
      <header className="fixed left-1/2 top-4 z-40 flex w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          NOOR<span className="text-white/30">.EDIT</span>
        </a>
        <nav className="hidden items-center gap-7 text-xs text-white/50 md:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/85"
        >
          Let's talk
        </a>
      </header>

      <main id="top">
        <section className="relative flex min-h-[92vh] items-end px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="pointer-events-none absolute right-[-10%] top-[8%] h-[480px] w-[480px] rounded-full bg-violet-500/15 blur-[130px]" />
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <Reveal>
                <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.3em] text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for select projects
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[.82] tracking-[-.07em]">
                  Videos that
                  <br />
                  <span className="text-white/30">hold attention.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-9 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
                  I turn raw footage into sharp, story-driven edits for
                  creators, coaches and brands — built for the way people watch
                  today.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                  >
                    View selected work
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
                  >
                    Start a project ↗
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="lg:pb-2 hidden">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-violet-500/10 to-black shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
                    ▶
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 text-[10px] tracking-[.25em] text-white/40">
                  SHOWREEL / 2026
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-[9px] tracking-[.2em] text-white/40">
                  00:42
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="work" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] tracking-[.28em] text-white/35">
                    SELECTED WORK
                  </p>
                  <h2 className="mt-4 text-4xl font-medium tracking-[-.04em] sm:text-6xl">
                    A few cuts.
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-white/40">
                  A mix of short-form, long-form and commercial work. Click any
                  project to explore the edit.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-9 flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFilter(f.value)}
                    className={`rounded-full border px-4 py-2 text-xs transition ${
                      filter === f.value
                        ? "border-white bg-white text-black"
                        : "border-white/10 text-white/45 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {shown.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <ProjectCard p={p} index={i} onOpen={setSelected} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="border-y border-white/10 px-5 py-24 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[10px] tracking-[.28em] text-white/35">
                WHAT I DO
              </p>
              <div className="mt-8 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
                <h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">
                  Editing is more
                  <br />
                  <span className="text-white/30">than cutting clips.</span>
                </h2>
                <div className="grid sm:grid-cols-2">
                  {services.map((s, i) => (
                    <div
                      key={s}
                      className="border-t border-white/10 py-5 text-lg text-white/75"
                    >
                      <span className="mr-4 text-[10px] text-white/25">
                        0{i + 1}
                      </span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <p className="text-[10px] tracking-[.28em] text-white/35">
                    THE PROCESS
                  </p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-.04em] sm:text-6xl">
                    Raw footage in.
                    <br />
                    <span className="text-white/30">Content out.</span>
                  </h2>
                </div>
                <p className="self-end text-sm leading-7 text-white/40">
                  Every cut has a purpose: stronger hooks, cleaner stories,
                  better rhythm and a finish that feels native to the platform.
                </p>
              </div>
            </Reveal>
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Discover", "Understand the audience, goal and style."],
                [
                  "02",
                  "Structure",
                  "Find the story and build the strongest flow.",
                ],
                ["03", "Edit", "Cuts, B-roll, captions, motion and sound."],
                ["04", "Polish", "Color, audio, pacing and final delivery."],
              ].map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 0.05}>
                  <div className="h-full bg-[#0b0b0b] p-7">
                    <span className="text-[10px] tracking-[.2em] text-white/25">
                      {n}
                    </span>
                    <h3 className="mt-16 text-xl">{t}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/40">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-white px-5 py-24 text-black sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[1fr_.65fr]">
                <div>
                  <p className="text-[10px] tracking-[.28em] text-black/40">
                    ABOUT
                  </p>
                  <div className="flex justify-start items-end ">
                    <div className="flex justify-center items-center mr-2">
                      <img
                        src="/me.png"
                        alt=""
                        className="rounded-full w-12 h-12  md:w-18 md:h-18"
                      />
                    </div>
                    <h2 className="mt-6 text-5xl font-medium tracking-[-.05em] sm:text-7xl">
                      Hi, I'm Noor.
                    </h2>
                  </div>
                  <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
                    A video editor and content creator focused on turning ideas
                    into content people actually want to finish. I care about
                    story, pacing and the small details that make an edit feel
                    premium.
                  </p>
                </div>
                <div className="self-end border-t border-black/15 pt-5 text-sm text-black/55">
                  <p>Based in Bangladesh</p>
                  <p className="mt-2">Working worldwide</p>
                  <p className="mt-2">React developer + editor</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[10px] tracking-[.28em] text-white/35">
                LET'S WORK
              </p>
              <h2 className="mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[.88] tracking-[-.07em]">
                Got footage?
                <br />
                <span className="text-white/30">Let's make it move.</span>
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:mdrashedujjaman912@gmail.com"
                  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black"
                >
                  Email me ↗
                </a>
                <a
                  href="#top"
                  className="rounded-full border border-white/15 px-7 py-3 text-sm text-white/60"
                >
                  Back to top ↑
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-[10px] tracking-[.18em] text-white/25 sm:flex-row">
          <span>© 2026 NOOR.EDIT</span>
          <span>VIDEO EDITOR / CONTENT CREATOR</span>
        </div>
      </footer>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#101010]"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-black">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 z-20 h-9 w-9 rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                >
                  ×
                </button>

                {selected.video ? (
                  <video
                    src={selected.video}
                    controls
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/[0.02]">
                    <span className="rounded-full bg-white px-5 py-3 text-xs font-semibold text-black">
                      VIDEO NOT AVAILABLE
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[10px] tracking-[.22em] text-white/35">
                  {selected.category} / {selected.year}
                </p>
                <h3 className="mt-2 text-3xl font-medium">{selected.title}</h3>
                <p className="mt-3 text-sm text-white/40">
                  {selected.label}. Replace this preview with your actual
                  project video, case study, client brief and results.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ========================================
    FLOATING CONTACT BUTTONS
======================================== */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* ================= WHATSAPP ================= */}

        <a
          href="https://wa.me/8801765966912"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="
      group
      relative
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-[#25D366]
      text-white
      whatsapp-glow
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-[0_0_35px_rgba(37,211,102,0.7)]
    "
        >
          {/* Expanding Glow Ring */}
          <span
            className="
        contact-ring
        absolute
        inset-0
        rounded-full
        border
        border-[#25D366]/60
      "
          />

          {/* Inner Glow */}
          <span
            className="
        absolute
        inset-1
        rounded-full
        bg-[#25D366]/20
        blur-md
      "
          />

          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="
        relative
        z-10
        h-7
        w-7
        transition-transform
        duration-300
        group-hover:rotate-6
      "
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.478-8.416" />
          </svg>

          {/* Tooltip */}
          <span
            className="
        pointer-events-none
        absolute
        right-16
        whitespace-nowrap
        rounded-lg
        border
        border-white/10
        bg-black/90
        px-3
        py-2
        text-xs
        text-white
        opacity-0
        translate-x-2
        transition-all
        duration-300
        group-hover:translate-x-0
        group-hover:opacity-100
      "
          >
            Chat on WhatsApp
          </span>
        </a>

        {/* ================= CALL ================= */}

        <a
          href="tel:+8801765966912"
          aria-label="Call me"
          className="
      group
      relative
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-white
      text-black
      call-glow
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-[0_0_35px_rgba(255,255,255,0.7)]
    "
        >
          {/* Expanding Glow Ring */}
          <span
            className="
        contact-ring
        absolute
        inset-0
        rounded-full
        border
        border-white/60
      "
          />

          {/* Inner Glow */}
          <span
            className="
        absolute
        inset-1
        rounded-full
        bg-white/20
        blur-md
      "
          />

          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="
        relative
        z-10
        h-6
        w-6
        transition-transform
        duration-300
        group-hover:rotate-12
      "
          >
            <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.23.2 2.44.57 3.56a1 1 0 01-.25 1.03l-2.2 2.2z" />
          </svg>

          {/* Tooltip */}
          <span
            className="
        pointer-events-none
        absolute
        right-16
        whitespace-nowrap
        rounded-lg
        border
        border-white/10
        bg-black/90
        px-3
        py-2
        text-xs
        text-white
        opacity-0
        translate-x-2
        transition-all
        duration-300
        group-hover:translate-x-0
        group-hover:opacity-100
      "
          >
            Call Me
          </span>
        </a>
      </div>
    </div>
  );
}
export default App;
