import { ConditionalShell } from '@/features/shell/components';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConditionalShell>{children}</ConditionalShell>;
}
