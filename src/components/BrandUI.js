import Link from "next/link";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Primary brand button (deep blue)
export function ButtonPrimary({ href, children, className = "", ...props }) {
    const base = `
      inline-flex items-center justify-center
      rounded-2xl px-5 py-3 text-sm font-semibold
      bg-primary text-primary-foreground
      transition hover:opacity-90
    `;
  
    if (href) {
      return (
        <Link href={href} className={cx(base, className)} {...props}>
          {children}
        </Link>
      );
    }
  
    return (
      <button className={cx(base, className)} {...props}>
        {children}
      </button>
    );
  }


// Gold-accent outline button
export function ButtonOutline({
  href,
  children,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold " +
    "border border-[oklch(var(--brand2))] bg-white text-zinc-900 hover:bg-zinc-50 transition";

  if (href) {
    return (
      <Link href={href} className={cx(base, className)} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cx(base, className)} {...props}>
      {children}
    </button>
  );
}

// Small badge/pill
export function Pill({ children, className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs text-zinc-900",
        "border-[oklch(var(--brand2))/0.35] bg-[oklch(var(--brand2))/0.12]",
        className
      )}
    >
      {children}
    </span>
  );
}
