type ProjectTagsProps = {
  categories: readonly string[];
  year?: string;
};

export function ProjectTags({ categories, year }: ProjectTagsProps) {
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <span
          key={category}
          className={
            index === 0
              ? "rounded bg-primary-container/30 px-2 py-1 text-xs font-bold text-primary"
              : "rounded bg-secondary-container/50 px-2 py-1 text-xs font-bold text-secondary"
          }
        >
          {category}
        </span>
      ))}
      {year ? (
        <span className="rounded bg-secondary-container/50 px-2 py-1 text-xs font-bold text-secondary">
          {year}
        </span>
      ) : null}
    </div>
  );
}
