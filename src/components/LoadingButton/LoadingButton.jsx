export default function LoadingButton() {
  return (
    <>
      <h1 className="animate-pulse text-lg italic text-xl mb-10 pt-40">
        ... Loading Contact{" "}
      </h1>
      <div class="border-2 border-pink-300 shadow rounded-md p-6 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="space-y-3">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
