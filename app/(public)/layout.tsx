import { ConditionalShell } from "@/components/layout/conditional-shell";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <ConditionalShell>
        {children}
    </ConditionalShell>
  </>;
}
