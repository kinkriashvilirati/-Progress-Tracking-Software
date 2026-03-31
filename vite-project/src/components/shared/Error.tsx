export function FullPageError() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-bg px-4">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--ui-status-test)_0%,transparent_30%),radial-gradient(circle_at_bottom,var(--ui-primary)_0%,transparent_35%)] opacity-20" />

      <div className="relative flex flex-col items-center text-center">
        {/* icon */}
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-(--ui-status-test)/30 bg-(--ui-status-test)/10 shadow-[0_0_40px_rgba(255,0,110,0.22)]">
          <div className="absolute h-28 w-28 rounded-full border-2 border-(--ui-status-test)/20 animate-ping" />
          <span className="text-5xl font-black leading-none text-status-test">
            !
          </span>
        </div>
      </div>
    </div>
  );
}

export function ComponentError() {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-2xl border border-(--ui-status-test)/20 bg-(--ui-status-test)/10 px-4 py-3 shadow-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-status-test text-lg font-black text-white shadow-md">
          !
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-text-dark">
            Failed to load
          </span>
        </div>
      </div>
    </div>
  );
}

export function EmptyFilter() {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-3 rounded-2xl  bg-(--ui-primary)/10 px-4 py-3 shadow-sm">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-black text-white shadow-md">
          0
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-text-dark">
            No items found
          </span>
        </div>
      </div>
    </div>
  );
}
