export default function Loading() {
  return (
    <div className="animate-pulse">
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="h-10 w-3/4 bg-zinc-800/60 rounded mb-4 mx-auto" />
          <div className="h-6 w-1/2 bg-zinc-800/50 rounded mx-auto" />
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="h-8 w-2/3 bg-zinc-800/50 rounded" />
            <div className="h-24 w-full bg-zinc-800/30 rounded" />
            <div className="h-24 w-full bg-zinc-800/30 rounded" />
          </div>
          <div className="h-[320px] bg-zinc-800/30 rounded-2xl" />
        </div>
      </section>
    </div>
  );
}

