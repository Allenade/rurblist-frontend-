import { ConditionalShell } from "@/components/layout/conditional-shell";
export default function ProtectedLayout({
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
