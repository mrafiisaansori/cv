export default function AnimatedBackground() {
  // indigo aurora background
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#fafaff] dark:bg-[#08080f]">
      {/* base wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff,#f3f2ff_55%,#eef1ff)] dark:bg-[linear-gradient(180deg,#08080f,#0c0b1a_55%,#08080f)]" />

      {/* aurora blobs (GPU-friendly, subtle) */}
      <div className="absolute -left-[12%] top-[-8%] h-[36rem] w-[36rem] rounded-full bg-brand/20 blur-[120px] will-change-transform motion-safe:animate-aurora dark:bg-brand/25" />
      <div className="absolute right-[-10%] top-[6%] h-[30rem] w-[30rem] rounded-full bg-violet/15 blur-[120px] will-change-transform motion-safe:animate-aurora [animation-delay:-6s] dark:bg-violet/20" />
      <div className="absolute bottom-[-12%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-sky/12 blur-[120px] will-change-transform motion-safe:animate-aurora [animation-delay:-11s] dark:bg-sky/12" />

      {/* fine grid */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.18] bg-[linear-gradient(rgba(99,91,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(99,91,255,0.10)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
    </div>
  );
}
