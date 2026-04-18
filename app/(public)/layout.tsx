import Footer from '@/components/footer/footer';
import { AuthProvider } from '@/components/layout/auth-provider';
import Navbar from '@/components/pages/navbar';
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider shouldFetchUser={false}>
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}
