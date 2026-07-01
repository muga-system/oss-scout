import type { ReactNode } from "react";

type WorkspaceSectionHeaderProps = {
  title: string;
  children?: ReactNode;
};

export default function WorkspaceSectionHeader({
  title,
  children,
}: WorkspaceSectionHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-[#02070d8d] px-6 backdrop-blur-xs">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
        {title}
      </p>

      {children}
    </header>
  );
}