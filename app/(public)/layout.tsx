import Footer from '@/shared/layout/footer/footer';
import { AuthProvider } from '@/shared/layout/auth-provider';
import Navbar from '@/shared/layout/navbar';
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}
