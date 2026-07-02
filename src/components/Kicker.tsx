import { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-bold text-xs uppercase tracking-[0.2em] mb-2 text-primary">
      {children}
    </p>
  );
}
