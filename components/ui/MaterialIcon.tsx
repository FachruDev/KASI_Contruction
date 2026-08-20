type MaterialIconProps = {
  children: string;
  className?: string;
  filled?: boolean;
};

export function MaterialIcon({ children, className = "", filled = false }: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined${filled ? " filled" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
}
