export default function AnimatedBackground() {
  // Navy-lavender aurora background
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#f4f4fb] [contain:paint] dark:bg-[#070F2B]">
      {/* base wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff,#f1f1fa_52%,#e7e8f4)] dark:bg-[linear-gradient(180deg,#070F2B,#1B1A55_56%,#070F2B)]" />

      {/* static aurora wash avoids continuous repaint work on low-end devices */}
      <div className="absolute -left-[10%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-[88px] dark:bg-brand/28" />
      <div className="absolute right-[-9%] top-[8%] h-[25rem] w-[25rem] rounded-full bg-violet/18 blur-[88px] dark:bg-violet/20" />
      <div className="absolute bottom-[-10%] left-[32%] h-[22rem] w-[22rem] rounded-full bg-brandDark/12 blur-[80px] dark:bg-brandLight/12" />

      {/* fine grid */}
      <div className="absolute inset-0 opacity-[0.38] dark:opacity-[0.2] bg-[linear-gradient(rgba(83,92,145,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(83,92,145,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />

      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent" />
    </div>
  );
}
