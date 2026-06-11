export default function AnimatedBackground() {
  // indigo aurora background
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#fafaff] [contain:paint] dark:bg-[#08080f]">
      {/* base wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff,#f3f2ff_55%,#eef1ff)] dark:bg-[linear-gradient(180deg,#08080f,#0c0b1a_55%,#08080f)]" />

      {/* static aurora wash avoids continuous repaint work on low-end devices */}
      <div className="absolute -left-[10%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-brand/16 blur-[88px] dark:bg-brand/20" />
      <div className="absolute right-[-9%] top-[8%] h-[25rem] w-[25rem] rounded-full bg-violet/12 blur-[88px] dark:bg-violet/16" />
      <div className="absolute bottom-[-10%] left-[32%] h-[22rem] w-[22rem] rounded-full bg-sky/10 blur-[80px] dark:bg-sky/10" />

      {/* fine grid */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.18] bg-[linear-gradient(rgba(99,91,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(99,91,255,0.10)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
    </div>
  );
}
