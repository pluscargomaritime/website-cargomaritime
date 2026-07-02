import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "fill" | "outline" | "white";
};

export function PillBtn({ children, variant = "fill", className = "", ...rest }: Props) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all";

  const styles: Record<string, string> = {
    fill: "bg-primary text-white border-2 border-transparent hover:bg-primary-dark",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    white: "bg-white text-ink border-2 border-white hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
