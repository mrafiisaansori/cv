export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 bg-[#f4f4fb] dark:bg-[#070F2B]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
    </div>
  );
}
