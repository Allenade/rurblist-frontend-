import { AuthProvider, Navbar } from '@/features/shell/components';
import { Footer } from '@/shared/layout';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <Footer />
    </AuthProvider>
  );
}
