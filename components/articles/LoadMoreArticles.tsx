import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function LoadMoreArticles() {
  return (
    <div className="mt-16 text-center">
      <button
        className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container px-8 py-3 font-label font-bold text-primary shadow-[0_4px_20px_rgba(46,50,48,0.03)] transition-all duration-200 hover:border-primary/30 hover:bg-surface-container-low active:scale-95"
        type="button"
      >
        <MaterialIcon className="text-lg">sync</MaterialIcon>
        Load More Articles
      </button>
    </div>
  );
}
