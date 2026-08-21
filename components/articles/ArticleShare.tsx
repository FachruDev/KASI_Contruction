import { MaterialIcon } from "@/components/ui/MaterialIcon";

const shareActions = [
  { label: "Share on LinkedIn", icon: "share" },
  { label: "Copy Link", icon: "link" },
  { label: "Email Article", icon: "mail" },
] as const;

export function ArticleShare() {
  return (
    <div className="mx-auto mt-16 flex max-w-[70ch] items-center justify-between border-t border-outline-variant/30 pt-8">
      <span className="font-bold text-on-surface-variant">Share this article</span>
      <div className="flex gap-4">
        {shareActions.map((action) => (
          <button
            key={action.label}
            aria-label={action.label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary shadow-[0_4px_20px_rgba(46,50,48,0.06)] transition-colors hover:bg-primary hover:text-on-primary"
            type="button"
          >
            <MaterialIcon className="text-[20px]">{action.icon}</MaterialIcon>
          </button>
        ))}
      </div>
    </div>
  );
}
